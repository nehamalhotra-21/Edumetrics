// EduMetrics — js/charts.js
// All Chart.js chart builders

function isDark(){return document.documentElement.getAttribute('data-theme')!=='light'}

function chartDefaults(){
  const d=isDark();
  return{
    tc:d?'#484f58':'#94a3b8',
    gc:d?'rgba(255,255,255,0.05)':'rgba(0,0,0,0.05)',
    tip:{backgroundColor:d?'#1c2128':'#fff',borderColor:d?'rgba(99,167,250,0.20)':'rgba(0,0,0,.08)',borderWidth:1,
         titleColor:d?'#e6edf3':'#0f172a',bodyColor:d?'#8b949e':'#475569',padding:11,cornerRadius:8}
  };
}

// ── RISK SCATTER CHART (Dashboard) ──
let riskChartInst=null;
function buildRiskChart(){
  if(riskChartInst){riskChartInst.destroy();riskChartInst=null}
  const d=isDark();
  const {tc,gc,tip}=chartDefaults();
  const colorMap={high:'rgba(248,81,73,0.85)',med:'rgba(210,153,34,0.85)',safe:'rgba(63,185,80,0.85)'};
  const riskData=ALL_STUDENTS.map(s=>({name:s.name,attend:s.attendance,riskScore:s.riskScore,r:s.riskLevel}));
  riskChartInst=new Chart(document.getElementById('riskChart'),{
    type:'scatter',
    data:{datasets:[{
      label:'Students',data:riskData.map(s=>({x:s.attend,y:s.riskScore,name:s.name,r:s.r})),
      backgroundColor:riskData.map(s=>colorMap[s.r]||colorMap.safe),
      borderColor:riskData.map(s=>(colorMap[s.r]||colorMap.safe).replace('0.85','1')),
      borderWidth:1.5,pointRadius:9,pointHoverRadius:13,
    },{
      label:'75% Threshold',data:[{x:75,y:0},{x:75,y:100}],
      type:'line',borderColor:'rgba(210,153,34,0.7)',borderWidth:2,borderDash:[6,4],pointRadius:0,fill:false,
    }]},
    options:{responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false},tooltip:{
        ...tip,filter:item=>item.datasetIndex===0,
        callbacks:{title:ctx=>`${ctx[0].raw.name}`,label:ctx=>`Attendance: ${ctx.raw.x}% · Risk: ${ctx.raw.y}%`}
      }},
      scales:{
        x:{grid:{color:gc},ticks:{color:tc,font:{size:11,family:'DM Sans'}},min:20,max:105,title:{display:true,text:'Attendance (%)',color:tc,font:{size:11}}},
        y:{grid:{color:gc},ticks:{color:tc,font:{size:11}},min:0,max:100,title:{display:true,text:'Risk Score (%)',color:tc,font:{size:11}}}
      }
    }
  });
}

// ── STUDENT LINE CHART (Detail Modal) ──
let dmLineChartInst=null;
function buildDmLineChart(s){
  if(dmLineChartInst){dmLineChartInst.destroy();dmLineChartInst=null}
  const {tc,gc,tip}=chartDefaults();
  dmLineChartInst=new Chart(document.getElementById('dmLineChart'),{
    type:'line',
    data:{labels:WEEKS,datasets:[
      {label:'Effort',data:s.weekEt,borderColor:'#58a6ff',backgroundColor:'rgba(88,166,255,0.08)',borderWidth:2.5,tension:0.38,fill:true,pointBackgroundColor:'#58a6ff',pointRadius:4,pointHoverRadius:7},
      {label:'Academic Performance',data:s.weekAt,borderColor:'#d29922',backgroundColor:'rgba(210,153,34,0.06)',borderWidth:2.5,tension:0.38,fill:true,pointBackgroundColor:'#d29922',pointRadius:4,pointHoverRadius:7}
    ]},
    options:{responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false},tooltip:tip},
      scales:{x:{grid:{color:gc},ticks:{color:tc,font:{size:10,family:'DM Sans'}}},y:{grid:{color:gc},ticks:{color:tc,font:{size:10}},min:0,max:100}}
    }
  });
}

// ── STUDENT QUAD CHART (Detail Modal) ──
let dmQuadChartInst=null;
function buildDmQuadChart(s){
  if(dmQuadChartInst){dmQuadChartInst.destroy();dmQuadChartInst=null}
  const {tc,gc,tip}=chartDefaults();
  dmQuadChartInst=new Chart(document.getElementById('dmQuadChart'),{
    type:'scatter',
    data:{datasets:[
      {data:[{x:s.classAvgEt,y:0},{x:s.classAvgEt,y:100}],type:'line',borderColor:'rgba(100,116,139,0.5)',borderWidth:1.5,borderDash:[4,3],pointRadius:0,fill:false},
      {data:[{x:0,y:s.classAvgPerf},{x:100,y:s.classAvgPerf}],type:'line',borderColor:'rgba(100,116,139,0.5)',borderWidth:1.5,borderDash:[4,3],pointRadius:0,fill:false},
      {label:'This Week',data:[{x:s.etThisWeek,y:s.perfThisWeek,label:'This Week'}],backgroundColor:'rgba(210,153,34,0.9)',borderColor:'#d29922',borderWidth:2,pointRadius:11,pointHoverRadius:15},
      {label:'Avg',data:[{x:s.studentAvgEt,y:s.studentAvgPerf,label:'Avg'}],backgroundColor:'rgba(88,166,255,0.9)',borderColor:'#58a6ff',borderWidth:2,pointRadius:11,pointHoverRadius:15}
    ]},
    options:{responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false},tooltip:{...tip,filter:item=>item.datasetIndex>=2,callbacks:{title:ctx=>`${ctx[0].raw.label||''}`,label:ctx=>`Effort: ${ctx.raw.x}% · Acad: ${ctx.raw.y}%`}}},
      scales:{x:{grid:{color:gc},ticks:{color:tc,font:{size:10}},min:0,max:100,title:{display:true,text:'Effort (%)',color:tc,font:{size:10}}},y:{grid:{color:gc},ticks:{color:tc,font:{size:10}},min:0,max:100,title:{display:true,text:'Academic Performance (%)',color:tc,font:{size:10}}}}
    }
  });
}

// ── STUDENT DETAIL LINE & QUAD (Students Page Modal) ──
let stuDetLineInst=null,stuDetQuadInst=null;
function buildStuDetLineChart(s){
  if(stuDetLineInst){stuDetLineInst.destroy();stuDetLineInst=null}
  const {tc,gc,tip}=chartDefaults();
  stuDetLineInst=new Chart(document.getElementById('stuDetLineChart'),{
    type:'line',
    data:{labels:WEEKS,datasets:[
      {label:'Effort',data:s.weekEt,borderColor:'#58a6ff',backgroundColor:'rgba(88,166,255,0.08)',borderWidth:2.5,tension:0.38,fill:true,pointBackgroundColor:'#58a6ff',pointRadius:4,pointHoverRadius:7},
      {label:'Academic Performance',data:s.weekAt,borderColor:'#d29922',backgroundColor:'rgba(210,153,34,0.06)',borderWidth:2.5,tension:0.38,fill:true,pointBackgroundColor:'#d29922',pointRadius:4,pointHoverRadius:7}
    ]},
    options:{responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false},tooltip:tip},
      scales:{x:{grid:{color:gc},ticks:{color:tc,font:{size:10,family:'DM Sans'}}},y:{grid:{color:gc},ticks:{color:tc,font:{size:10}},min:0,max:100}}
    }
  });
}
function buildStuDetQuadChart(s){
  if(stuDetQuadInst){stuDetQuadInst.destroy();stuDetQuadInst=null}
  const {tc,gc,tip}=chartDefaults();
  stuDetQuadInst=new Chart(document.getElementById('stuDetQuadChart'),{
    type:'scatter',
    data:{datasets:[
      {data:[{x:s.classAvgEt,y:0},{x:s.classAvgEt,y:100}],type:'line',borderColor:'rgba(100,116,139,0.5)',borderWidth:1.5,borderDash:[4,3],pointRadius:0,fill:false},
      {data:[{x:0,y:s.classAvgPerf},{x:100,y:s.classAvgPerf}],type:'line',borderColor:'rgba(100,116,139,0.5)',borderWidth:1.5,borderDash:[4,3],pointRadius:0,fill:false},
      {label:'This Week',data:[{x:s.etThisWeek,y:s.perfThisWeek,label:'This Week'}],backgroundColor:'rgba(210,153,34,0.9)',borderColor:'#d29922',borderWidth:2,pointRadius:11,pointHoverRadius:15},
      {label:'Avg',data:[{x:s.studentAvgEt,y:s.studentAvgPerf,label:'Avg'}],backgroundColor:'rgba(88,166,255,0.9)',borderColor:'#58a6ff',borderWidth:2,pointRadius:11,pointHoverRadius:15}
    ]},
    options:{responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false},tooltip:{...tip,filter:item=>item.datasetIndex>=2,callbacks:{title:ctx=>`${ctx[0].raw.label||''}`,label:ctx=>`Effort: ${ctx.raw.x}% · Acad: ${ctx.raw.y}%`}}},
      scales:{x:{grid:{color:gc},ticks:{color:tc,font:{size:10}},min:0,max:100,title:{display:true,text:'Effort (%)',color:tc,font:{size:10}}},y:{grid:{color:gc},ticks:{color:tc,font:{size:10}},min:0,max:100,title:{display:true,text:'Academic Performance (%)',color:tc,font:{size:10}}}}
    }
  });
}

// ── ANALYTICS CHARTS ──

// Pre-Midterm: Score Distribution + Attendance Trend
let preDistChartInst=null,preAttChartInst=null;
function buildPreMidtermCharts(){
  const {tc,gc,tip}=chartDefaults();

  if(preDistChartInst){preDistChartInst.destroy();preDistChartInst=null}
  const c1=document.getElementById('preDistChart');if(c1){
    preDistChartInst=new Chart(c1,{type:'bar',data:{
      labels:['<40%','41–50%','51–60%','61–70%','71–80%','81–90%','91–100%'],
      datasets:[{label:'Students',data:[3,5,6,8,12,4,2],
        backgroundColor:['rgba(248,81,73,0.75)','rgba(248,81,73,0.60)','rgba(210,153,34,0.65)','rgba(210,153,34,0.50)','rgba(63,185,80,0.65)','rgba(63,185,80,0.80)','rgba(88,166,255,0.80)'],
        borderRadius:6,borderSkipped:false}]},
      options:{responsive:true,maintainAspectRatio:false,
        plugins:{legend:{display:false},tooltip:{...tip,callbacks:{label:ctx=>`${ctx.raw} students`}}},
        scales:{x:{grid:{color:gc},ticks:{color:tc,font:{size:10,family:'DM Sans'}}},y:{grid:{color:gc},ticks:{color:tc,font:{size:10}},min:0,max:16}}
      }
    });
  }

  if(preAttChartInst){preAttChartInst.destroy();preAttChartInst=null}
  const c2=document.getElementById('preAttChart');if(c2){
    preAttChartInst=new Chart(c2,{type:'line',data:{
      labels:['W1','W2','W3','W4','W5','W6','W7'],
      datasets:[
        {label:'Class Avg Attendance',data:[88,85,82,78,75,72,70],borderColor:'#58a6ff',backgroundColor:'rgba(88,166,255,0.08)',borderWidth:2.5,tension:0.35,fill:true,pointRadius:4,pointHoverRadius:7},
        {label:'Class Avg Effort',data:[80,78,75,72,70,68,65],borderColor:'#bc8cff',backgroundColor:'rgba(188,140,255,0.06)',borderWidth:2.5,tension:0.35,fill:true,pointRadius:4,pointHoverRadius:7}
      ]},
      options:{responsive:true,maintainAspectRatio:false,
        plugins:{legend:{display:true,labels:{color:tc,font:{size:10,family:'DM Sans'},boxWidth:10,usePointStyle:true}},tooltip:tip},
        scales:{x:{grid:{color:gc},ticks:{color:tc,font:{size:10}}},y:{grid:{color:gc},ticks:{color:tc,font:{size:10}},min:40,max:100,title:{display:true,text:'Percentage (%)',color:tc,font:{size:10}}}}
      }
    });
  }
}

// Post-Midterm: Actual vs Predicted + Risk Delta
let postDistChartInst=null,postRiskChartInst=null;
function buildPostMidtermCharts(){
  const {tc,gc,tip}=chartDefaults();

  if(postDistChartInst){postDistChartInst.destroy();postDistChartInst=null}
  const c1=document.getElementById('postDistChart');if(c1){
    postDistChartInst=new Chart(c1,{type:'bar',data:{
      labels:['<40%','41–50%','51–60%','61–70%','71–80%','81–90%','91–100%'],
      datasets:[
        {label:'Actual',data:[3,4,6,10,10,5,2],backgroundColor:'rgba(88,166,255,0.75)',borderRadius:4,borderSkipped:false},
        {label:'Predicted',data:[2,3,5,8,12,7,3],backgroundColor:'rgba(188,140,255,0.40)',borderRadius:4,borderSkipped:false}
      ]},
      options:{responsive:true,maintainAspectRatio:false,
        plugins:{legend:{display:true,labels:{color:tc,font:{size:10,family:'DM Sans'},boxWidth:10}},tooltip:tip},
        scales:{x:{grid:{color:gc},ticks:{color:tc,font:{size:10,family:'DM Sans'}}},y:{grid:{color:gc},ticks:{color:tc,font:{size:10}},min:0,max:16}}
      }
    });
  }

  if(postRiskChartInst){postRiskChartInst.destroy();postRiskChartInst=null}
  const c2=document.getElementById('postRiskDeltaChart');if(c2){
    postRiskChartInst=new Chart(c2,{type:'bar',data:{
      labels:['Aryan M.','Karan J.','Riya K.','Tanya S.','Rahul G.','Divya R.','Anjali N.'],
      datasets:[{label:'Risk Change after Midterm',
        data:[8,12,-5,4,15,-8,2],
        backgroundColor:[8,12,-5,4,15,-8,2].map(v=>v>0?'rgba(248,81,73,0.70)':'rgba(63,185,80,0.70)'),
        borderRadius:4,borderSkipped:false}]},
      options:{responsive:true,maintainAspectRatio:false,
        plugins:{legend:{display:false},tooltip:{...tip,callbacks:{label:ctx=>`Risk Δ: ${ctx.raw>0?'+':''}${ctx.raw}%`}}},
        scales:{
          x:{grid:{color:gc},ticks:{color:tc,font:{size:10,family:'DM Sans'}}},
          y:{grid:{color:gc},ticks:{color:tc,font:{size:10}},title:{display:true,text:'Risk Score Change (%)',color:tc,font:{size:10}}}
        }
      }
    });
  }
}

// Pre-End Term: Predicted + Weekly Trend
let preEndDistChartInst=null,preEndTrendChartInst=null;
function buildPreEndtermCharts(){
  const {tc,gc,tip}=chartDefaults();

  if(preEndDistChartInst){preEndDistChartInst.destroy();preEndDistChartInst=null}
  const c1=document.getElementById('preEndChart');if(c1){
    preEndDistChartInst=new Chart(c1,{type:'bar',data:{
      labels:['<40%','41–50%','51–60%','61–70%','71–80%','81–90%','91–100%'],
      datasets:[{label:'Students',data:[5,6,8,9,8,3,1],
        backgroundColor:['rgba(248,81,73,0.75)','rgba(248,81,73,0.60)','rgba(210,153,34,0.65)','rgba(210,153,34,0.50)','rgba(63,185,80,0.65)','rgba(63,185,80,0.80)','rgba(88,166,255,0.80)'],
        borderRadius:6,borderSkipped:false}]},
      options:{responsive:true,maintainAspectRatio:false,
        plugins:{legend:{display:false},tooltip:{...tip,callbacks:{label:ctx=>`${ctx.raw} students`}}},
        scales:{x:{grid:{color:gc},ticks:{color:tc,font:{size:10,family:'DM Sans'}}},y:{grid:{color:gc},ticks:{color:tc,font:{size:10}},min:0,max:14}}
      }
    });
  }

  if(preEndTrendChartInst){preEndTrendChartInst.destroy();preEndTrendChartInst=null}
  const c2=document.getElementById('preEndTrendChart');if(c2){
    preEndTrendChartInst=new Chart(c2,{type:'line',data:{
      labels:['W1','W2','W3','W4','W5','W6','W7','W8','W9','W10','W11','W12'],
      datasets:[
        {label:'Avg Academic Performance',data:[72,70,68,65,62,60,58,57,56,54,53,52],borderColor:'#d29922',backgroundColor:'rgba(210,153,34,0.08)',borderWidth:2.5,tension:0.35,fill:true,pointRadius:3,pointHoverRadius:6},
        {label:'Class Target',data:[65,65,65,65,65,65,65,65,65,65,65,65],borderColor:'rgba(63,185,80,0.6)',borderWidth:1.5,borderDash:[5,4],pointRadius:0,fill:false}
      ]},
      options:{responsive:true,maintainAspectRatio:false,
        plugins:{legend:{display:true,labels:{color:tc,font:{size:10,family:'DM Sans'},boxWidth:10,usePointStyle:true}},tooltip:tip},
        scales:{x:{grid:{color:gc},ticks:{color:tc,font:{size:10}}},y:{grid:{color:gc},ticks:{color:tc,font:{size:10}},min:30,max:100,title:{display:true,text:'Performance (%)',color:tc,font:{size:10}}}}
      }
    });
  }
}

// Post-End Term: Actual vs Predicted + Subject-wise
let postEndDistChartInst=null,postEndSubjectChartInst=null;
function buildPostEndtermCharts(){
  const {tc,gc,tip}=chartDefaults();

  if(postEndDistChartInst){postEndDistChartInst.destroy();postEndDistChartInst=null}
  const c1=document.getElementById('postEndChart');if(c1){
    postEndDistChartInst=new Chart(c1,{type:'bar',data:{
      labels:['<40%','41–50%','51–60%','61–70%','71–80%','81–90%','91–100%'],
      datasets:[
        {label:'Actual',data:[4,5,9,9,7,4,2],backgroundColor:'rgba(88,166,255,0.75)',borderRadius:4,borderSkipped:false},
        {label:'Predicted',data:[5,6,8,9,8,3,1],backgroundColor:'rgba(188,140,255,0.40)',borderRadius:4,borderSkipped:false}
      ]},
      options:{responsive:true,maintainAspectRatio:false,
        plugins:{legend:{display:true,labels:{color:tc,font:{size:10,family:'DM Sans'},boxWidth:10}},tooltip:tip},
        scales:{x:{grid:{color:gc},ticks:{color:tc,font:{size:10,family:'DM Sans'}}},y:{grid:{color:gc},ticks:{color:tc,font:{size:10}},min:0,max:14}}
      }
    });
  }

  if(postEndSubjectChartInst){postEndSubjectChartInst.destroy();postEndSubjectChartInst=null}
  const c2=document.getElementById('postEndSubjectChart');if(c2){
    postEndSubjectChartInst=new Chart(c2,{type:'radar',data:{
      labels:['Data Structures','Algorithms','OS','DBMS','Computer Networks'],
      datasets:[
        {label:'Class Average',data:[68,62,55,70,58],borderColor:'#58a6ff',backgroundColor:'rgba(88,166,255,0.12)',borderWidth:2,pointBackgroundColor:'#58a6ff',pointRadius:4},
        {label:'Top Performers',data:[88,85,80,90,82],borderColor:'#3fb950',backgroundColor:'rgba(63,185,80,0.08)',borderWidth:2,pointBackgroundColor:'#3fb950',pointRadius:4}
      ]},
      options:{responsive:true,maintainAspectRatio:false,
        plugins:{legend:{display:true,labels:{color:tc,font:{size:10,family:'DM Sans'},boxWidth:10,usePointStyle:true}},tooltip:tip},
        scales:{r:{grid:{color:gc},ticks:{color:tc,font:{size:9},backdropColor:'transparent'},pointLabels:{color:tc,font:{size:10}},min:0,max:100}}
      }
    });
  }
}

// Master init: rebuild all analytics charts for current visible section
function initAnalyticsCharts(){
  buildPreMidtermCharts();
}
function buildMidtermCharts(){
  const preSec=document.getElementById('anl-pre');
  if(preSec&&preSec.classList.contains('active'))buildPreMidtermCharts();
  else buildPostMidtermCharts();
}
function buildEndtermCharts(){
  const preSec=document.getElementById('anl-pre-end');
  if(preSec&&preSec.classList.contains('active'))buildPreEndtermCharts();
  else buildPostEndtermCharts();
}
