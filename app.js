// ══════════════════════════════════════════════════════════
// EduMetrics — app.js
// ══════════════════════════════════════════════════════════

// ── DATA ─────────────────────────────────────────────────
const WEEKS = ['W1','W2','W3','W4','W5','W6','W7','W8','W9'];

const ALL_STUDENTS = [
  {id:"STU2024001",name:"Aryan Mehta",   roll:"CS2202",avatar:"AM",academicPerf:43,riskScore:78,effort:38,engagement:35,predMidterm:42,predEndterm:38,attendance:42,riskLevel:"high"},
  {id:"STU2024002",name:"Karan Joshi",   roll:"CS2204",avatar:"KJ",academicPerf:36,riskScore:85,effort:25,engagement:22,predMidterm:35,predEndterm:32,attendance:55,riskLevel:"high"},
  {id:"STU2024003",name:"Riya Kapoor",   roll:"CS2205",avatar:"RK",academicPerf:62,riskScore:42,effort:69,engagement:68,predMidterm:65,predEndterm:62,attendance:61,riskLevel:"med"},
  {id:"STU2024004",name:"Tanya Singh",   roll:"CS2207",avatar:"TS",academicPerf:56,riskScore:55,effort:55,engagement:52,predMidterm:58,predEndterm:55,attendance:68,riskLevel:"med"},
  {id:"STU2024005",name:"Rahul Gupta",   roll:"CS2208",avatar:"RG",academicPerf:28,riskScore:91,effort:22,engagement:18,predMidterm:28,predEndterm:25,attendance:32,riskLevel:"high"},
  {id:"STU2024006",name:"Divya Rao",     roll:"CS2210",avatar:"DR",academicPerf:60,riskScore:40,effort:63,engagement:65,predMidterm:63,predEndterm:60,attendance:70,riskLevel:"med"},
  {id:"STU2024007",name:"Priya Sharma",  roll:"CS2201",avatar:"PS",academicPerf:89,riskScore:8, effort:92,engagement:90,predMidterm:91,predEndterm:88,attendance:95,riskLevel:"safe"},
  {id:"STU2024008",name:"Sneha Iyer",    roll:"CS2203",avatar:"SI",academicPerf:83,riskScore:14,effort:84,engagement:82,predMidterm:85,predEndterm:82,attendance:88,riskLevel:"safe"},
  {id:"STU2024009",name:"Dev Malhotra",  roll:"CS2206",avatar:"DM",academicPerf:96,riskScore:4, effort:95,engagement:97,predMidterm:97,predEndterm:95,attendance:100,riskLevel:"safe"},
  {id:"STU2024010",name:"Neha Verma",    roll:"CS2209",avatar:"NV",academicPerf:75,riskScore:24,effort:74,engagement:72,predMidterm:76,predEndterm:74,attendance:78,riskLevel:"safe"},
  {id:"STU2024011",name:"Rohit Das",     roll:"CS2211",avatar:"RD",academicPerf:68,riskScore:32,effort:67,engagement:65,predMidterm:70,predEndterm:68,attendance:72,riskLevel:"safe"},
  {id:"STU2024012",name:"Anjali Nair",   roll:"CS2212",avatar:"AN",academicPerf:56,riskScore:46,effort:54,engagement:52,predMidterm:56,predEndterm:54,attendance:65,riskLevel:"med"},
];

const FLAGGED = [
  {id:"STU2024001",name:"Aryan Mehta",roll:"CS2202",avatar:"AM",risk:"high",
   reason:"Very low attendance. 5 assignments missed. Quiz participation dropped sharply.",
   academicPerf:45.20,effortScore:38.00,attendRecent:42.0,quizSubmit:45.0,quizAvg:42.10,assignAvg:60.30,
   riskFail:78.50,midterm:"Predicted: 62%",avgRisk:72.5,avgEt:55.0,avgAt:45.0,overallAttend:44,
   riskDetention:68,recovery:22,
   factors:[{label:"Low Attendance",pct:85,color:"#ef4444"},{label:"Sudden Drop in Engagement",pct:62,color:"#f59e0b"},{label:"Cramming Tendency Detected",pct:38,color:"#a78bfa"}],
   majorFactor:"Sudden drop in engagement",
   weekEt:[72,68,62,58,55,50,46,42,38],weekAt:[80,75,65,60,55,50,48,45,43],
   classAvgEt:65,classAvgPerf:70,studentAvgEt:55,studentAvgPerf:55,etThisWeek:38,perfThisWeek:43,
   flagHistory:[{date:"Week 5",diagnosis:"Low Attendance",intervened:true},{date:"Week 7",diagnosis:"Low Attendance + Missed Assignments",intervened:true},{date:"Week 9",diagnosis:"Low Attendance + Engagement Drop",intervened:false}]},
  {id:"STU2024002",name:"Karan Joshi",roll:"CS2204",avatar:"KJ",risk:"high",
   reason:"Failing 2 modules. Persistently disengaged. No quiz submissions last 2 weeks.",
   academicPerf:38.50,effortScore:30.00,attendRecent:55.0,quizSubmit:38.0,quizAvg:35.50,assignAvg:52.10,
   riskFail:85.20,midterm:"Predicted: 54%",avgRisk:82.0,avgEt:35.0,avgAt:50.0,overallAttend:52,
   riskDetention:55,recovery:12,
   factors:[{label:"Low Attendance",pct:55,color:"#ef4444"},{label:"Sudden Drop in Engagement",pct:90,color:"#f59e0b"},{label:"Cramming Tendency Detected",pct:20,color:"#a78bfa"}],
   majorFactor:"Sudden drop in engagement",
   weekEt:[60,55,48,40,36,32,30,28,25],weekAt:[60,55,50,45,42,40,39,38,36],
   classAvgEt:65,classAvgPerf:70,studentAvgEt:40,studentAvgPerf:45,etThisWeek:25,perfThisWeek:36,
   flagHistory:[{date:"Week 4",diagnosis:"Module Failure Risk",intervened:true},{date:"Week 6",diagnosis:"Persistent Disengagement",intervened:false},{date:"Week 9",diagnosis:"No Quiz Submissions",intervened:false}]},
  {id:"STU2024003",name:"Riya Kapoor",roll:"CS2205",avatar:"RK",risk:"med",
   reason:"Good scores but attendance irregular. Below 65% threshold 3 weeks running.",
   academicPerf:63.00,effortScore:60.00,attendRecent:61.0,quizSubmit:72.0,quizAvg:65.40,assignAvg:70.80,
   riskFail:42.30,midterm:"Predicted: 68%",avgRisk:40.0,avgEt:72.0,avgAt:65.0,overallAttend:61,
   riskDetention:38,recovery:58,
   factors:[{label:"Low Attendance",pct:65,color:"#ef4444"},{label:"Sudden Drop in Engagement",pct:25,color:"#f59e0b"},{label:"Cramming Tendency Detected",pct:20,color:"#a78bfa"}],
   majorFactor:"Low attendance pattern",
   weekEt:[70,72,68,72,70,68,70,70,69],weekAt:[68,70,72,68,65,64,63,63,62],
   classAvgEt:65,classAvgPerf:70,studentAvgEt:70,studentAvgPerf:66,etThisWeek:69,perfThisWeek:62,
   flagHistory:[{date:"Week 7",diagnosis:"Attendance Below Threshold",intervened:true},{date:"Week 9",diagnosis:"Attendance Irregular (3 weeks)",intervened:false}]},
  {id:"STU2024004",name:"Tanya Singh",roll:"CS2207",avatar:"TS",risk:"med",
   reason:"Steady decline in scores across 6 weeks. Possible burnout or personal issue.",
   academicPerf:58.00,effortScore:52.00,attendRecent:68.0,quizSubmit:60.0,quizAvg:58.20,assignAvg:65.00,
   riskFail:55.00,midterm:"Predicted: 64%",avgRisk:52.0,avgEt:65.0,avgAt:68.0,overallAttend:68,
   riskDetention:45,recovery:40,
   factors:[{label:"Low Attendance",pct:40,color:"#ef4444"},{label:"Sudden Drop in Engagement",pct:70,color:"#f59e0b"},{label:"Cramming Tendency Detected",pct:55,color:"#a78bfa"}],
   majorFactor:"Sudden drop in engagement",
   weekEt:[82,80,76,72,68,64,60,58,55],weekAt:[82,80,76,72,68,64,60,58,56],
   classAvgEt:65,classAvgPerf:70,studentAvgEt:68,studentAvgPerf:68,etThisWeek:55,perfThisWeek:56,
   flagHistory:[{date:"Week 6",diagnosis:"Score Decline Pattern",intervened:true},{date:"Week 9",diagnosis:"Burnout / Steady Decline",intervened:false}]},
  {id:"STU2024005",name:"Rahul Gupta",roll:"CS2208",avatar:"RG",risk:"high",
   reason:"No activity logged in last 10 days. Emails unanswered. Needs urgent escalation.",
   academicPerf:30.00,effortScore:22.00,attendRecent:32.0,quizSubmit:20.0,quizAvg:18.50,assignAvg:35.00,
   riskFail:91.00,midterm:"Predicted: 40%",avgRisk:88.0,avgEt:28.0,avgAt:38.0,overallAttend:32,
   riskDetention:82,recovery:8,
   factors:[{label:"Low Attendance",pct:95,color:"#ef4444"},{label:"Sudden Drop in Engagement",pct:80,color:"#f59e0b"},{label:"Cramming Tendency Detected",pct:15,color:"#a78bfa"}],
   majorFactor:"Low attendance — critical",
   weekEt:[55,50,45,40,38,35,32,28,22],weekAt:[55,50,45,40,38,35,32,30,28],
   classAvgEt:65,classAvgPerf:70,studentAvgEt:38,studentAvgPerf:39,etThisWeek:22,perfThisWeek:28,
   flagHistory:[{date:"Week 3",diagnosis:"Low Attendance",intervened:true},{date:"Week 6",diagnosis:"Disengagement",intervened:true},{date:"Week 8",diagnosis:"Critical Disengagement",intervened:true},{date:"Week 9",diagnosis:"No Activity – Unresponsive",intervened:false}]},
  {id:"STU2024006",name:"Divya Rao",roll:"CS2210",avatar:"DR",risk:"med",
   reason:"Midterm score 16 pts below weekly average. Possible exam anxiety or knowledge gap.",
   academicPerf:60.00,effortScore:65.00,attendRecent:70.0,quizSubmit:75.0,quizAvg:68.00,assignAvg:72.00,
   riskFail:40.00,midterm:"Actual: 52%",avgRisk:40.0,avgEt:65.0,avgAt:62.0,overallAttend:70,
   riskDetention:35,recovery:62,
   factors:[{label:"Low Attendance",pct:30,color:"#ef4444"},{label:"Sudden Drop in Engagement",pct:45,color:"#f59e0b"},{label:"Cramming Tendency Detected",pct:72,color:"#a78bfa"}],
   majorFactor:"Cramming tendency detected",
   weekEt:[62,60,65,63,61,58,59,60,63],weekAt:[62,60,65,63,61,58,59,60,60],
   classAvgEt:65,classAvgPerf:70,studentAvgEt:62,studentAvgPerf:61,etThisWeek:63,perfThisWeek:60,
   flagHistory:[{date:"Week 9",diagnosis:"Exam Underperformance + Cramming",intervened:false}]},
];

const LAST_WEEK = [
  {id:"STU2024001",name:"Aryan Mehta",roll:"CS2202",avatar:"AM",risk:"high",
   avgRisk:72.5,avgEt:55.0,avgAt:48.0,overallAttend:44,riskDetention:68,riskFailing:78.5,
   midterm:"Predicted: 58%",
   factors:[{label:"Low Attendance",pct:85,color:"#ef4444"},{label:"Drop in Engagement",pct:62,color:"#f59e0b"},{label:"Cramming",pct:38,color:"#a78bfa"}],
   etCurr:55,etPrev:62,atCurr:48,atPrev:58,riskCurr:72,riskPrev:58,recovery:22,
   status:"intervene",intervention:"1:1 advisor meeting + parent email sent on Mon."},
  {id:"STU2024005",name:"Rahul Gupta",roll:"CS2208",avatar:"RG",risk:"high",
   avgRisk:88.0,avgEt:28.0,avgAt:35.0,overallAttend:32,riskDetention:82,riskFailing:91.0,
   midterm:"Predicted: 40%",
   factors:[{label:"Low Attendance",pct:95,color:"#ef4444"},{label:"Drop in Engagement",pct:80,color:"#f59e0b"},{label:"Cramming",pct:15,color:"#a78bfa"}],
   etCurr:28,etPrev:40,atCurr:35,atPrev:50,riskCurr:88,riskPrev:74,recovery:8,
   status:"intervene",intervention:"HOD escalation + parent call. Student unreachable."},
  {id:"STU2024004",name:"Tanya Singh",roll:"CS2207",avatar:"TS",risk:"med",
   avgRisk:52.0,avgEt:65.0,avgAt:70.0,overallAttend:68,riskDetention:45,riskFailing:55.0,
   midterm:"Predicted: 64%",
   factors:[{label:"Low Attendance",pct:40,color:"#ef4444"},{label:"Drop in Engagement",pct:70,color:"#f59e0b"},{label:"Cramming",pct:55,color:"#a78bfa"}],
   etCurr:65,etPrev:72,atCurr:70,atPrev:75,riskCurr:52,riskPrev:44,recovery:40,
   status:"monitor",intervention:"Counsellor check-in scheduled for Thursday."},
  {id:"STU2024003",name:"Riya Kapoor",roll:"CS2205",avatar:"RK",risk:"med",
   avgRisk:40.0,avgEt:72.0,avgAt:63.0,overallAttend:61,riskDetention:38,riskFailing:42.3,
   midterm:"Predicted: 68%",
   factors:[{label:"Low Attendance",pct:65,color:"#ef4444"},{label:"Drop in Engagement",pct:25,color:"#f59e0b"},{label:"Cramming",pct:20,color:"#a78bfa"}],
   etCurr:72,etPrev:70,atCurr:63,atPrev:60,riskCurr:40,riskPrev:38,recovery:58,
   status:"monitor",intervention:"Attendance warning email auto-sent."},
];

// ── HELPERS ───────────────────────────────────────────────
function rc(r){
  if(r==='high') return{bg:'var(--red-bg)',txt:'var(--red)',border:'rgba(239,68,68,.22)',label:'High Risk',cls:'risk-high'};
  if(r==='med')  return{bg:'var(--amber-bg)',txt:'var(--amber)',border:'rgba(245,158,11,.22)',label:'At Risk',cls:'risk-med'};
  return{bg:'var(--green-bg)',txt:'var(--green)',border:'rgba(16,185,129,.22)',label:'On Track',cls:'risk-low'};
}
function statusCfg(s){
  if(s==='intervene') return{label:'Intervene',bg:'var(--red-bg)',txt:'var(--red)',border:'var(--red-border)'};
  if(s==='monitor')   return{label:'Monitor',bg:'var(--amber-bg)',txt:'var(--amber)',border:'var(--amber-border)'};
  return{label:'Safe',bg:'var(--green-bg)',txt:'var(--green)',border:'var(--green-border)'};
}
function isDark(){return document.documentElement.getAttribute('data-theme')==='dark'}
function pctColor(key,val){
  if(key==='riskScore') return val>=70?'var(--red)':val>=45?'var(--amber)':'var(--green)';
  if(key==='attendance') return val<65?'var(--red)':val<75?'var(--amber)':'var(--green)';
  if(key==='predMidterm'||key==='predEndterm') return val<50?'var(--red)':val<70?'var(--amber)':'var(--green)';
  return val<40?'var(--red)':val<65?'var(--amber)':'var(--green)';
}

// GitHub-style color: green = safe, red/dark = at risk
// We invert: low academic score → warm red, high → bright green
function hmColor(score){
  // score 0-100, higher = better = greener
  if(score>=85) return '#26a641';
  if(score>=70) return '#2ea043';
  if(score>=55) return '#39d353';
  if(score>=40) return '#f59e0b';
  if(score>=25) return '#ef4444';
  return '#b91c1c';
}
function hmColorLight(score){
  if(score>=85) return '#16a34a';
  if(score>=70) return '#22c55e';
  if(score>=55) return '#86efac';
  if(score>=40) return '#fbbf24';
  if(score>=25) return '#f87171';
  return '#dc2626';
}

// ── PAGE NAVIGATION ───────────────────────────────────────
const pageInited = {};
function showPage(name){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  document.getElementById('page-'+name).classList.add('active');
  document.getElementById('nav-'+name).classList.add('active');
  if(!pageInited[name]){
    pageInited[name]=true;
    if(name==='students') initStudentsPage();
    if(name==='calendar') initCalendar();
    if(name==='analytics') initAnalyticsCharts();
  }
}

// ── THEME / SIDEBAR ───────────────────────────────────────
function setTheme(t){
  document.documentElement.setAttribute('data-theme',t);
  document.getElementById('darkBtn').classList.toggle('active',t==='dark');
  document.getElementById('lightBtn').classList.toggle('active',t==='light');
  buildHeatmap();
  buildRiskChart();
}
function toggleSidebar(){document.getElementById('sidebar').classList.toggle('collapsed')}

// ── ① FLAGGED CARDS (this week) ───────────────────────────
function buildFlaggedCards(){
  const fg = document.getElementById('flaggedGrid');
  fg.innerHTML='';
  FLAGGED.forEach((s,i)=>{
    const r = rc(s.risk);
    const div = document.createElement('div');
    div.className = `flag-card ${r.cls}`;
    div.style.animationDelay = `${.05+i*.06}s`;
    div.innerHTML=`
      <div class="flag-top-row">
        <div class="flag-identity">
          <div class="flag-av" style="background:${r.bg};color:${r.txt}">${s.avatar}</div>
          <div>
            <div class="flag-name">${s.name}</div>
            <div class="flag-id">${s.id}</div>
          </div>
        </div>
        <span class="risk-pill" style="background:${r.bg};color:${r.txt};border:1px solid ${r.border}">
          <span class="rpd" style="background:${r.txt}"></span>${r.label}
        </span>
      </div>
      <div class="flag-btn-row">
        <button class="view-btn" style="background:${r.bg};color:${r.txt};border:1px solid ${r.border}" onclick="openDetail(${i})">View Details →</button>
      </div>`;
    fg.appendChild(div);
  });
}
buildFlaggedCards();

// ── ② GITHUB-STYLE HEATMAP ────────────────────────────────
// Each STUDENT = one coloured square, colour based on their
// LATEST WEEK academic score. Hover shows name + risk score.
function buildHeatmap(){
  const dark = isDark();
  const wrap = document.getElementById('heatmapWrap');

  // Use ALL_STUDENTS data; latest week performance is from STUDENTS_WEEK array
  const STUDENTS_WEEK_DATA = [
    {name:"Aryan Mehta",   roll:"CS2202",avatar:"AM", weekScore:43, riskScore:78},
    {name:"Karan Joshi",   roll:"CS2204",avatar:"KJ", weekScore:36, riskScore:85},
    {name:"Riya Kapoor",   roll:"CS2205",avatar:"RK", weekScore:62, riskScore:42},
    {name:"Tanya Singh",   roll:"CS2207",avatar:"TS", weekScore:56, riskScore:55},
    {name:"Rahul Gupta",   roll:"CS2208",avatar:"RG", weekScore:28, riskScore:91},
    {name:"Divya Rao",     roll:"CS2210",avatar:"DR", weekScore:60, riskScore:40},
    {name:"Priya Sharma",  roll:"CS2201",avatar:"PS", weekScore:89, riskScore:8 },
    {name:"Sneha Iyer",    roll:"CS2203",avatar:"SI", weekScore:83, riskScore:14},
    {name:"Dev Malhotra",  roll:"CS2206",avatar:"DM", weekScore:96, riskScore:4 },
    {name:"Neha Verma",    roll:"CS2209",avatar:"NV", weekScore:75, riskScore:24},
    {name:"Rohit Das",     roll:"CS2211",avatar:"RD", weekScore:68, riskScore:32},
    {name:"Anjali Nair",   roll:"CS2212",avatar:"AN", weekScore:56, riskScore:46},
    // Padding students to fill grid nicely (using typical values)
    {name:"Vikram Patil",  roll:"CS2213",avatar:"VP", weekScore:72, riskScore:28},
    {name:"Meera Jain",    roll:"CS2214",avatar:"MJ", weekScore:45, riskScore:68},
    {name:"Siddharth Rao", roll:"CS2215",avatar:"SR", weekScore:80, riskScore:18},
    {name:"Pooja Reddy",   roll:"CS2216",avatar:"PR", weekScore:64, riskScore:38},
    {name:"Aditya Kumar",  roll:"CS2217",avatar:"AK", weekScore:32, riskScore:82},
    {name:"Ishaan Verma",  roll:"CS2218",avatar:"IV", weekScore:88, riskScore:10},
    {name:"Kavya Pillai",  roll:"CS2219",avatar:"KP", weekScore:50, riskScore:58},
    {name:"Rohan Shah",    roll:"CS2220",avatar:"RS", weekScore:76, riskScore:22},
    {name:"Nisha Bose",    roll:"CS2221",avatar:"NB", weekScore:69, riskScore:35},
    {name:"Tarun Singh",   roll:"CS2222",avatar:"TS", weekScore:41, riskScore:72},
    {name:"Shruti Mishra", roll:"CS2223",avatar:"SM", weekScore:85, riskScore:12},
    {name:"Kunal Das",     roll:"CS2224",avatar:"KD", weekScore:53, riskScore:52},
    {name:"Ananya Roy",    roll:"CS2225",avatar:"AR", weekScore:78, riskScore:20},
    {name:"Vivek Nair",    roll:"CS2226",avatar:"VN", weekScore:66, riskScore:36},
    {name:"Shreyash Garg", roll:"CS2227",avatar:"SG", weekScore:38, riskScore:76},
    {name:"Deepika Mehta", roll:"CS2228",avatar:"DM", weekScore:92, riskScore:6 },
    {name:"Nikhil Joshi",  roll:"CS2229",avatar:"NJ", weekScore:48, riskScore:62},
    {name:"Preethi Kumar", roll:"CS2230",avatar:"PK", weekScore:82, riskScore:16},
    {name:"Samarth Gupta", roll:"CS2231",avatar:"SG", weekScore:35, riskScore:80},
    {name:"Pallavi Iyer",  roll:"CS2232",avatar:"PI", weekScore:71, riskScore:30},
    {name:"Dhruv Malhotra",roll:"CS2233",avatar:"DM", weekScore:59, riskScore:44},
    {name:"Bhavna Verma",  roll:"CS2234",avatar:"BV", weekScore:94, riskScore:5 },
    {name:"Omkar Rao",     roll:"CS2235",avatar:"OR", weekScore:44, riskScore:70},
    {name:"Simran Kaur",   roll:"CS2236",avatar:"SK", weekScore:77, riskScore:24},
    {name:"Abhishek Das",  roll:"CS2237",avatar:"AD", weekScore:55, riskScore:50},
    {name:"Tanushree Roy", roll:"CS2238",avatar:"TR", weekScore:87, riskScore:11},
    {name:"Mihir Shah",    roll:"CS2239",avatar:"MS", weekScore:61, riskScore:42},
    {name:"Shreya Nair",   roll:"CS2240",avatar:"SN", weekScore:30, riskScore:88},
  ];

  let html = `<div class="heatmap-container">`;
  STUDENTS_WEEK_DATA.forEach(st=>{
    const col = dark ? hmColor(st.weekScore) : hmColorLight(st.weekScore);
    const riskLabel = st.riskScore>=70?'High Risk':st.riskScore>=45?'Moderate':st.riskScore>=25?'Low Risk':'Safe';
    const tip = `${st.name} · Academic: ${st.weekScore}% · Risk: ${st.riskScore}% (${riskLabel})`;
    html += `<div class="hm-student-box" style="background:${col}" data-tip="${tip}">
      <span class="hm-student-initials">${st.avatar}</span>
    </div>`;
  });
  html += `</div>`;
  wrap.innerHTML = html;

  // Legend
  const leg = document.getElementById('hmLegend');
  const swatches = [
    {score:88,label:'Safe'},
    {score:68,label:'Good'},
    {score:50,label:'Watch'},
    {score:35,label:'At Risk'},
    {score:20,label:'Critical'},
  ];
  leg.innerHTML = `<div class="hm-legend-swatch">` +
    swatches.map(s=>{
      const c = dark?hmColor(s.score):hmColorLight(s.score);
      return `<div class="hm-legend-dot" style="background:${c}" title="${s.label}"></div>`;
    }).join('') +
    `</div>`;
}
buildHeatmap();

// ── ③ DETAINMENT RISK SCATTER ─────────────────────────────
let riskChartInst = null;
function buildRiskChart(){
  if(riskChartInst){riskChartInst.destroy();riskChartInst=null}
  const d=isDark();
  const grid=d?'rgba(255,255,255,0.05)':'rgba(0,0,0,0.05)';
  const tick =d?'#3d5878':'#94a3b8';
  const riskData=[
    {name:"Aryan Mehta",attend:42,riskScore:78,r:"high"},{name:"Karan Joshi",attend:55,riskScore:85,r:"high"},
    {name:"Rahul Gupta",attend:32,riskScore:91,r:"high"},{name:"Riya Kapoor",attend:61,riskScore:42,r:"med"},
    {name:"Tanya Singh",attend:68,riskScore:55,r:"med"},{name:"Divya Rao",attend:70,riskScore:40,r:"med"},
    {name:"Anjali Nair",attend:65,riskScore:46,r:"med"},{name:"Rohit Das",attend:72,riskScore:32,r:"safe"},
    {name:"Neha Verma",attend:78,riskScore:24,r:"safe"},{name:"Sneha Iyer",attend:90,riskScore:14,r:"safe"},
    {name:"Priya Sharma",attend:95,riskScore:8,r:"safe"},{name:"Dev Malhotra",attend:100,riskScore:4,r:"safe"},
  ];
  const colorMap={high:'rgba(239,68,68,0.85)',med:'rgba(245,158,11,0.85)',safe:'rgba(16,185,129,0.85)'};
  riskChartInst=new Chart(document.getElementById('riskChart'),{
    type:'scatter',
    data:{datasets:[{
      label:'Students',
      data:riskData.map(s=>({x:s.attend,y:s.riskScore,name:s.name,r:s.r})),
      backgroundColor:riskData.map(s=>colorMap[s.r]),
      borderColor:riskData.map(s=>colorMap[s.r].replace('0.85','1')),
      borderWidth:1.5,pointRadius:9,pointHoverRadius:13,
    },{
      label:'75% Threshold',data:[{x:75,y:0},{x:75,y:100}],
      type:'line',borderColor:'rgba(245,158,11,0.7)',borderWidth:2,borderDash:[6,4],pointRadius:0,fill:false,
    }]},
    options:{responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false},
        tooltip:{
          backgroundColor:d?'#0f1d2e':'#fff',
          borderColor:d?'rgba(96,165,250,0.2)':'rgba(0,0,0,.08)',
          borderWidth:1,
          titleColor:d?'#e2eaf8':'#0f172a',
          bodyColor:d?'#7a94b8':'#475569',
          padding:12,cornerRadius:10,
          filter:item=>item.datasetIndex===0,
          callbacks:{title:ctx=>`${ctx[0].raw.name}`,label:ctx=>`Attendance: ${ctx.raw.x}% · Risk Score: ${ctx.raw.y}%`}
        }
      },
      scales:{
        x:{grid:{color:grid},ticks:{color:tick,font:{size:11,family:'DM Sans'}},min:20,max:105,title:{display:true,text:'Attendance (%)',color:tick,font:{size:11}}},
        y:{grid:{color:grid},ticks:{color:tick,font:{size:11}},min:0,max:100,title:{display:true,text:'Risk Score (%)',color:tick,font:{size:11}}}
      }
    }
  });
}
buildRiskChart();

// ── ④ LAST WEEK FLAGGED CARDS ─────────────────────────────
function buildLastWeekCards(){
  const lwg = document.getElementById('lastWeekGrid');
  lwg.innerHTML='';
  LAST_WEEK.forEach((s,i)=>{
    const r=rc(s.risk);
    const card=document.createElement('div');
    card.className=`lw-flag-card ${r.cls}`;
    card.style.animationDelay=`${.08+i*.07}s`;
    card.innerHTML=`
      <div class="flag-top-row">
        <div class="flag-identity">
          <div class="flag-av" style="background:${r.bg};color:${r.txt}">${s.avatar}</div>
          <div>
            <div class="flag-name">${s.name}</div>
            <div class="flag-id">${s.id}</div>
          </div>
        </div>
        <span class="risk-pill" style="background:${r.bg};color:${r.txt};border:1px solid ${r.border}">
          <span class="rpd" style="background:${r.txt}"></span>${r.label}
        </span>
      </div>
      <div class="flag-btn-row">
        <button class="view-btn" style="background:${r.bg};color:${r.txt};border:1px solid ${r.border}" onclick="openLwDetail(${i})">View Details →</button>
      </div>`;
    lwg.appendChild(card);
  });
}
buildLastWeekCards();

// ── LAST WEEK DETAIL POPUP ────────────────────────────────
function openLwDetail(idx){
  const s=LAST_WEEK[idx];
  const r=rc(s.risk);
  const sc=statusCfg(s.status);
  document.getElementById('lwDmAv').textContent=s.avatar;
  document.getElementById('lwDmAv').style.cssText=`background:${r.bg};color:${r.txt};width:46px;height:46px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:15px;flex-shrink:0`;
  document.getElementById('lwDmTitle').textContent=s.name;
  document.getElementById('lwDmSub').textContent=`${s.id} · ${s.roll}`;
  document.getElementById('lwDmRisk').innerHTML=`<span class="rpd" style="background:${r.txt}"></span>${r.label}`;
  document.getElementById('lwDmRisk').style.cssText=`background:${r.bg};color:${r.txt};border:1px solid ${r.border};display:inline-flex;align-items:center;gap:5px;font-size:10.5px;font-weight:700;padding:4px 10px;border-radius:20px`;
  const etDir=s.etCurr>=s.etPrev,atDir=s.atCurr>=s.atPrev,rkDir=s.riskCurr>=s.riskPrev;
  document.getElementById('lwDmBody').innerHTML=`
    <div class="lw-two-col">
      <div class="dm-panel">
        <div class="lw-section-label">About the Student</div>
        <div class="lw-stat-row"><span class="lw-stat-label">Avg Risk Score</span><span class="lw-stat-val">${s.avgRisk.toFixed(1)}%</span></div>
        <div class="lw-stat-row"><span class="lw-stat-label">Avg Effort</span><span class="lw-stat-val">${s.avgEt.toFixed(1)}%</span></div>
        <div class="lw-stat-row"><span class="lw-stat-label">Avg Academic Performance</span><span class="lw-stat-val">${s.avgAt.toFixed(1)}%</span></div>
        <div class="lw-stat-row"><span class="lw-stat-label">Overall Attendance</span><span class="lw-stat-val">${s.overallAttend}%</span></div>
        <div class="lw-stat-row"><span class="lw-stat-label">Risk of Detention</span><span class="lw-stat-val" style="color:${s.riskDetention>60?'var(--red)':s.riskDetention>40?'var(--amber)':'var(--green)'}">${s.riskDetention}%</span></div>
        <div class="lw-stat-row"><span class="lw-stat-label">Risk of Failing</span><span class="lw-stat-val" style="color:${s.riskFailing>60?'var(--red)':s.riskFailing>40?'var(--amber)':'var(--green)'}">${s.riskFailing}%</span></div>
        <div class="lw-stat-row"><span class="lw-stat-label">Midterm Score</span><span class="lw-stat-val">${s.midterm}</span></div>
      </div>
      <div class="dm-panel">
        <div class="lw-section-label">Reason for Flagging</div>
        <div style="font-size:11px;color:var(--txt3);margin-bottom:10px">Factor contribution to risk score</div>
        ${s.factors.map(f=>`<div class="factor-bar-row"><div class="factor-bar-top"><span class="factor-bar-label">${f.label}</span><span class="factor-bar-pct" style="color:${f.color}">${f.pct}%</span></div><div class="factor-bar-track"><div class="factor-bar-fill" style="width:${f.pct}%;background:${f.color}"></div></div></div>`).join('')}
      </div>
    </div>
    <div class="dm-panel">
      <div class="lw-section-label">Situation This Week vs Last Week</div>
      <div class="situation-grid">
        <div class="sit-item"><div class="sit-label">Effort</div><div class="sit-vals"><span class="sit-val">${s.etCurr}%</span><span class="sit-arrow" style="color:${etDir?'var(--green)':'var(--red)'}">${etDir?'▲':'▼'}</span><span class="sit-change" style="color:${etDir?'var(--green)':'var(--red)'}">${Math.abs(s.etCurr-s.etPrev)}</span></div><div style="font-size:10px;color:var(--txt3);margin-top:3px">prev: ${s.etPrev}%</div></div>
        <div class="sit-item"><div class="sit-label">Acad. Performance</div><div class="sit-vals"><span class="sit-val">${s.atCurr}%</span><span class="sit-arrow" style="color:${atDir?'var(--green)':'var(--red)'}">${atDir?'▲':'▼'}</span><span class="sit-change" style="color:${atDir?'var(--green)':'var(--red)'}">${Math.abs(s.atCurr-s.atPrev)}</span></div><div style="font-size:10px;color:var(--txt3);margin-top:3px">prev: ${s.atPrev}%</div></div>
        <div class="sit-item"><div class="sit-label">Risk Score</div><div class="sit-vals"><span class="sit-val" style="color:${rkDir?'var(--red)':'var(--green)'}">${s.riskCurr}%</span><span class="sit-arrow" style="color:${rkDir?'var(--red)':'var(--green)'}">${rkDir?'▲':'▼'}</span><span class="sit-change" style="color:${rkDir?'var(--red)':'var(--green)'}">${Math.abs(s.riskCurr-s.riskPrev)}</span></div><div style="font-size:10px;color:var(--txt3);margin-top:3px">prev: ${s.riskPrev}%</div></div>
      </div>
    </div>
    <div class="lw-bottom">
      <div class="lw-bottom-item"><div class="lw-bottom-label">Recovery %</div><div class="lw-bottom-val" style="color:${s.recovery<30?'var(--red)':s.recovery<55?'var(--amber)':'var(--green)'}">${s.recovery}%</div><div style="height:4px;background:var(--bg3);border-radius:10px;margin-top:8px;overflow:hidden"><div style="height:100%;width:${s.recovery}%;background:${s.recovery<30?'var(--red)':s.recovery<55?'var(--amber)':'var(--green)'};border-radius:10px"></div></div></div>
      <div class="lw-bottom-item"><div class="lw-bottom-label">Status</div><span class="status-pill" style="background:${sc.bg};color:${sc.txt};border:1px solid ${sc.border}">${sc.label}</span></div>
      <div class="lw-bottom-item"><div class="lw-bottom-label">Intervention</div><div style="font-size:11.5px;color:var(--txt2);line-height:1.55;margin-top:4px">${s.intervention}</div></div>
    </div>`;
  document.getElementById('lwOverlay').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeLwOverlay(){document.getElementById('lwOverlay').classList.remove('open');document.body.style.overflow='';}
function handleLwOvClick(e){if(e.target===document.getElementById('lwOverlay'))closeLwOverlay();}

// ── STUDENTS PAGE ─────────────────────────────────────────
let currentStuView='academicPerf';
const STU_TOGGLE_KEYS=['academicPerf','riskScore','effort','engagement','predMidterm','predEndterm','attendance'];
const STU_META={
  academicPerf:{label:'Academic Performance',colHeader:'Acad. Perf',barColor:'var(--accent2)'},
  riskScore:   {label:'Risk Score',          colHeader:'Risk Score', barColor:'var(--red)'},
  effort:      {label:'Effort',              colHeader:'Effort',     barColor:'var(--purple)'},
  engagement:  {label:'Engagement',          colHeader:'Engagement', barColor:'#06b6d4'},
  predMidterm: {label:'Pred. Mid Term',      colHeader:'Mid Term',   barColor:'var(--purple)'},
  predEndterm: {label:'Pred. End Term',      colHeader:'End Term',   barColor:'var(--amber)'},
  attendance:  {label:'Attendance',          colHeader:'Attendance', barColor:'var(--green)'},
};

function setStuView(view){
  currentStuView=view;
  document.querySelectorAll('#stuToggleGroup .tgl-btn').forEach((b,i)=>{
    b.classList.toggle('active',STU_TOGGLE_KEYS[i]===view);
  });
  renderStudentsView();
}
function initStudentsPage(){renderStudentsView();}

function renderStudentsView(){
  const view=currentStuView;
  const meta=STU_META[view];
  const container=document.getElementById('stuViewContainer');

  let sorted=[...ALL_STUDENTS];
  if(view==='riskScore')    sorted.sort((a,b)=>b.riskScore-a.riskScore);
  else if(view==='attendance') sorted.sort((a,b)=>a.attendance-b.attendance);
  else if(view==='predMidterm') sorted.sort((a,b)=>b.predMidterm-a.predMidterm);
  else if(view==='predEndterm') sorted.sort((a,b)=>b.predEndterm-a.predEndterm);
  else if(view==='effort')  sorted.sort((a,b)=>b.effort-a.effort);
  else if(view==='engagement') sorted.sort((a,b)=>b.engagement-a.engagement);
  else sorted.sort((a,b)=>b.academicPerf-a.academicPerf);

  // Three-column grid layout: rank | student info | value+bar
  const cols='60px 1fr 200px 120px';
  container.innerHTML=`
    <div class="stu-list-wrap">
      <div class="stu-list-header" style="grid-template-columns:${cols}">
        <span>#</span>
        <span>Student</span>
        <span>${meta.colHeader}</span>
        <span>Status</span>
      </div>
      ${sorted.map((s,i)=>{
        const r=rc(s.riskLevel);
        const val=s[view];
        const col=pctColor(view,val);
        const barCol=view==='riskScore'?col:meta.barColor;
        return `<div class="stu-list-row" style="grid-template-columns:${cols};animation-delay:${i*.03}s">
          <span class="stu-rank">${i+1}</span>
          <div class="stu-name-cell">
            <div class="stu-av" style="background:${r.bg};color:${r.txt}">${s.avatar}</div>
            <div>
              <div class="stu-name-txt">${s.name}</div>
              <div class="stu-roll-txt">${s.id} · ${s.roll}</div>
            </div>
          </div>
          <div class="stu-val-cell">
            <div class="stu-bar-wrap"><div class="stu-bar-fill" style="width:${val}%;background:${barCol}"></div></div>
            <span class="stu-val-num" style="color:${col}">${val}%</span>
          </div>
          <span class="stu-risk-pill" style="background:${r.bg};color:${r.txt}">${r.label}</span>
        </div>`;
      }).join('')}
    </div>`;
}

// ── CALENDAR PAGE ─────────────────────────────────────────
let TODOS=[
  {id:1,text:"Review Week 9 attendance report",done:false,tag:"Academic",tagColor:"var(--accent)",date:"Today"},
  {id:2,text:"Follow up with Rahul Gupta's parents",done:false,tag:"Intervention",tagColor:"var(--red)",date:"Today"},
  {id:3,text:"Submit midterm marks to HOD",done:false,tag:"Admin",tagColor:"var(--purple)",date:"Today"},
  {id:4,text:"Prepare post-midterm analysis slides",done:true,tag:"Analytics",tagColor:"var(--amber)",date:"Today"},
  {id:5,text:"Grade Assignment 5 submissions",done:false,tag:"Academic",tagColor:"var(--accent)",date:"Tomorrow"},
  {id:6,text:"Schedule counsellor meeting for Tanya Singh",done:false,tag:"Intervention",tagColor:"var(--red)",date:"Tomorrow"},
  {id:7,text:"Prepare Week 10 quiz questions",done:false,tag:"Academic",tagColor:"var(--accent)",date:"Thu Apr 10"},
  {id:8,text:"Department meeting – attendance policy",done:false,tag:"Admin",tagColor:"var(--purple)",date:"Fri Apr 11"},
  {id:9,text:"Send weekly risk report to admin",done:true,tag:"Admin",tagColor:"var(--purple)",date:"Sat Apr 12"},
];
let nextTodoId=10;
const CAL_EVENTS=[
  {day:0,start:9,end:10.5,title:"Data Structures Lecture",color:"rgba(59,130,246,0.85)",textColor:"#fff"},
  {day:0,start:14,end:15,title:"Office Hours",color:"rgba(16,185,129,0.75)",textColor:"#fff"},
  {day:1,start:11,end:12,title:"Algorithm Lab",color:"rgba(139,92,246,0.85)",textColor:"#fff"},
  {day:1,start:15,end:16,title:"Student Consultation",color:"rgba(16,185,129,0.75)",textColor:"#fff"},
  {day:2,start:9,end:10.5,title:"Data Structures Lecture",color:"rgba(59,130,246,0.85)",textColor:"#fff"},
  {day:2,start:13,end:14,title:"Lunch + Review",color:"rgba(100,116,139,0.6)",textColor:"#fff"},
  {day:2,start:16,end:17,title:"Risk Review Meeting",color:"rgba(239,68,68,0.85)",textColor:"#fff"},
  {day:3,start:10,end:11.5,title:"Algorithm Lab",color:"rgba(139,92,246,0.85)",textColor:"#fff"},
  {day:3,start:14,end:15.5,title:"HOD Check-in",color:"rgba(245,158,11,0.85)",textColor:"#fff"},
  {day:4,start:9,end:10,title:"Faculty Meeting",color:"rgba(245,158,11,0.85)",textColor:"#fff"},
  {day:4,start:11,end:12,title:"Data Structures Lecture",color:"rgba(59,130,246,0.85)",textColor:"#fff"},
  {day:4,start:14,end:15,title:"Office Hours",color:"rgba(16,185,129,0.75)",textColor:"#fff"},
  {day:5,start:10,end:11,title:"Extra Class",color:"rgba(59,130,246,0.6)",textColor:"#fff"},
];
function initCalendar(){renderTodos();buildCalGrid();}
function renderTodos(){
  const list=document.getElementById('todoList');
  const groups={};
  TODOS.forEach(t=>{if(!groups[t.date])groups[t.date]=[];groups[t.date].push(t);});
  list.innerHTML=Object.entries(groups).map(([date,tasks])=>`
    <div class="todo-group-label">${date}</div>
    ${tasks.map(t=>`
      <div class="todo-item ${t.done?'done':''}" onclick="toggleTodo(${t.id})">
        <div class="todo-check">${t.done?`<svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#fff" stroke-width="2.5"><polyline points="2,6 5,9 10,3"/></svg>`:''}</div>
        <div class="todo-text">${t.text}</div>
        <span class="todo-tag" style="background:${t.tagColor}22;color:${t.tagColor}">${t.tag}</span>
      </div>`).join('')}
  `).join('');
}
function toggleTodo(id){const t=TODOS.find(t=>t.id===id);if(t)t.done=!t.done;renderTodos();}
function addTodo(){
  const inp=document.getElementById('todoInput');
  const txt=inp.value.trim();if(!txt)return;
  TODOS.push({id:nextTodoId++,text:txt,done:false,tag:"Custom",tagColor:"var(--accent2)",date:"Today"});
  inp.value='';renderTodos();
}
function calToday(){}
function buildCalGrid(){
  const grid=document.getElementById('calGrid');
  const days=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  const dates=[7,8,9,10,11,12,13];
  const todayIdx=1;
  const times=[];for(let h=8;h<=20;h++)times.push(h);
  let html='';
  html+='<div class="cal-time-col"></div>';
  days.forEach((d,i)=>{html+=`<div class="cal-day-head ${i===todayIdx?'today-col':''}"><div class="cal-day-name">${d}</div><div class="cal-day-num ${i===todayIdx?'today':''}">${dates[i]}</div></div>`;});
  times.forEach(h=>{
    html+=`<div class="cal-time-col"><div class="cal-time-slot">${h}:00</div></div>`;
    days.forEach((_,di)=>{
      html+=`<div class="cal-day-col ${di===todayIdx?'today-col':''}"><div class="cal-slot"></div>`;
      CAL_EVENTS.filter(ev=>ev.day===di&&Math.floor(ev.start)===h).forEach(ev=>{
        const top=(ev.start-h)*56;const height=(ev.end-ev.start)*56-4;
        html+=`<div class="cal-event" style="top:${top}px;height:${height}px;background:${ev.color};color:${ev.textColor}">${ev.title}<div class="ev-time">${ev.start}:00–${ev.end}:00</div></div>`;
      });
      html+='</div>';
    });
  });
  grid.innerHTML=html;
}

// ── ANALYTICS ────────────────────────────────────────────
let preChartInst=null,postChartInst=null,preEndChartInst=null,postEndChartInst=null;

function setAnalyticsMain(section){
  document.querySelectorAll('.analytics-main-section').forEach(s=>s.classList.remove('active'));
  document.getElementById('anl-main-'+section).classList.add('active');
  document.querySelectorAll('.atop-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('atop-'+section).classList.add('active');
  if(section==='midterm')buildMidtermCharts();
  if(section==='endterm')buildEndtermCharts();
}
function setMidtermView(v){
  ['pre','post'].forEach(x=>{
    document.getElementById('anl-'+x).classList.toggle('active',x===v);
    document.getElementById('atgl-'+x).classList.toggle('active',x===v);
  });
  if(v==='pre'&&!preChartInst)buildPreChart();
  if(v==='post'&&!postChartInst)buildPostChart();
}
function setEndtermView(v){
  ['pre','post'].forEach(x=>{
    document.getElementById('anl-'+x+'-end').classList.toggle('active',x===v);
    document.getElementById('atgl-'+x+'-end').classList.toggle('active',x===v);
  });
  if(v==='pre'&&!preEndChartInst)buildPreEndChart();
  if(v==='post'&&!postEndChartInst)buildPostEndChart();
}
function initAnalyticsCharts(){buildPreChart();}
function buildMidtermCharts(){if(!preChartInst)buildPreChart();}
function buildEndtermCharts(){if(!preEndChartInst)buildPreEndChart();}

function chartDefaults(){
  const d=isDark();
  return{
    tc:d?'#3d5878':'#94a3b8',
    gc:d?'rgba(255,255,255,0.04)':'rgba(0,0,0,0.05)',
    tip:{backgroundColor:d?'#0f1d2e':'#fff',borderColor:d?'rgba(96,165,250,0.2)':'rgba(0,0,0,.08)',borderWidth:1,titleColor:d?'#e2eaf8':'#0f172a',bodyColor:d?'#7a94b8':'#475569',padding:10,cornerRadius:8}
  };
}
function buildPreChart(){
  if(preChartInst){preChartInst.destroy();preChartInst=null}
  const {tc,gc,tip}=chartDefaults();
  const canvas=document.getElementById('preDistChart');if(!canvas)return;
  preChartInst=new Chart(canvas,{type:'bar',
    data:{labels:['<40%','41–50%','51–60%','61–70%','71–80%','81–90%','91–100%'],
      datasets:[{label:'Students',data:[3,5,6,8,12,4,2],
        backgroundColor:['rgba(239,68,68,0.75)','rgba(239,68,68,0.6)','rgba(245,158,11,0.65)','rgba(245,158,11,0.5)','rgba(16,185,129,0.65)','rgba(16,185,129,0.8)','rgba(59,130,246,0.8)'],
        borderRadius:6,borderSkipped:false}]},
    options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:{...tip,callbacks:{label:ctx=>`${ctx.raw} students`}}},
      scales:{x:{grid:{color:gc},ticks:{color:tc,font:{size:10,family:'DM Sans'}},title:{display:true,text:'Predicted Score Range',color:tc,font:{size:10}}},y:{grid:{color:gc},ticks:{color:tc,font:{size:10}},title:{display:true,text:'No. of Students',color:tc,font:{size:10}},min:0,max:16}}}});
}
function buildPostChart(){
  if(postChartInst){postChartInst.destroy();postChartInst=null}
  const {tc,gc,tip}=chartDefaults();
  const canvas=document.getElementById('postDistChart');if(!canvas)return;
  postChartInst=new Chart(canvas,{type:'bar',
    data:{labels:['<40%','41–50%','51–60%','61–70%','71–80%','81–90%','91–100%'],
      datasets:[{label:'Actual',data:[3,4,6,10,10,5,2],backgroundColor:'rgba(59,130,246,0.75)',borderRadius:4,borderSkipped:false},{label:'Predicted',data:[2,3,5,8,12,7,3],backgroundColor:'rgba(167,139,250,0.4)',borderRadius:4,borderSkipped:false}]},
    options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:true,labels:{color:tc,font:{size:10,family:'DM Sans'},boxWidth:10}},tooltip:tip},
      scales:{x:{grid:{color:gc},ticks:{color:tc,font:{size:10,family:'DM Sans'}},title:{display:true,text:'Score Range',color:tc,font:{size:10}}},y:{grid:{color:gc},ticks:{color:tc,font:{size:10}},title:{display:true,text:'No. of Students',color:tc,font:{size:10}},min:0,max:16}}}});
}
function buildPreEndChart(){
  if(preEndChartInst){preEndChartInst.destroy();preEndChartInst=null}
  const {tc,gc,tip}=chartDefaults();
  const canvas=document.getElementById('preEndChart');if(!canvas)return;
  preEndChartInst=new Chart(canvas,{type:'bar',
    data:{labels:['<40%','41–50%','51–60%','61–70%','71–80%','81–90%','91–100%'],
      datasets:[{label:'Students',data:[5,6,8,9,8,3,1],
        backgroundColor:['rgba(239,68,68,0.75)','rgba(239,68,68,0.6)','rgba(245,158,11,0.65)','rgba(245,158,11,0.5)','rgba(16,185,129,0.65)','rgba(16,185,129,0.8)','rgba(59,130,246,0.8)'],
        borderRadius:6,borderSkipped:false}]},
    options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:{...tip,callbacks:{label:ctx=>`${ctx.raw} students`}}},
      scales:{x:{grid:{color:gc},ticks:{color:tc,font:{size:10,family:'DM Sans'}},title:{display:true,text:'Predicted End Term Score',color:tc,font:{size:10}}},y:{grid:{color:gc},ticks:{color:tc,font:{size:10}},title:{display:true,text:'No. of Students',color:tc,font:{size:10}},min:0,max:16}}}});
}
function buildPostEndChart(){
  if(postEndChartInst){postEndChartInst.destroy();postEndChartInst=null}
  const {tc,gc,tip}=chartDefaults();
  const canvas=document.getElementById('postEndChart');if(!canvas)return;
  postEndChartInst=new Chart(canvas,{type:'bar',
    data:{labels:['<40%','41–50%','51–60%','61–70%','71–80%','81–90%','91–100%'],
      datasets:[{label:'Actual',data:[4,5,9,9,7,4,2],backgroundColor:'rgba(59,130,246,0.75)',borderRadius:4,borderSkipped:false},{label:'Predicted',data:[5,6,8,9,8,3,1],backgroundColor:'rgba(167,139,250,0.4)',borderRadius:4,borderSkipped:false}]},
    options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:true,labels:{color:tc,font:{size:10,family:'DM Sans'},boxWidth:10}},tooltip:tip},
      scales:{x:{grid:{color:gc},ticks:{color:tc,font:{size:10,family:'DM Sans'}},title:{display:true,text:'End Term Score Range',color:tc,font:{size:10}}},y:{grid:{color:gc},ticks:{color:tc,font:{size:10}},title:{display:true,text:'No. of Students',color:tc,font:{size:10}},min:0,max:16}}}});
}

// ── FLAGGED DETAIL MODAL ──────────────────────────────────
let dmLineChartInst=null,dmQuadChartInst=null,currentStudent=null;

function openDetail(idx){
  const s=FLAGGED[idx];currentStudent=s;
  const r=rc(s.risk);const d=isDark();
  document.getElementById('dmAv').textContent=s.avatar;
  document.getElementById('dmAv').style.cssText=`background:${r.bg};color:${r.txt};width:46px;height:46px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:15px;flex-shrink:0`;
  document.getElementById('dmTitle').textContent=s.name;
  document.getElementById('dmSub').textContent=`${s.id} · ${s.roll}`;
  document.getElementById('dmRiskPill').innerHTML=`<span class="rpd" style="background:${r.txt}"></span>${r.label}`;
  document.getElementById('dmRiskPill').style.cssText=`background:${r.bg};color:${r.txt};border:1px solid ${r.border};display:inline-flex;align-items:center;gap:5px;font-size:10.5px;font-weight:700;padding:4px 10px;border-radius:20px`;
  const stats=[
    ['Avg Risk Score',`${s.avgRisk.toFixed(1)}%`,s.avgRisk>60?'var(--red)':s.avgRisk>40?'var(--amber)':'var(--green)'],
    ['Avg Effort',`${s.avgEt.toFixed(1)}%`,null],
    ['Avg Academic Performance',`${s.avgAt.toFixed(1)}%`,s.avgAt<50?'var(--red)':null],
    ['Overall Attendance',`${s.overallAttend}%`,s.overallAttend<75?'var(--red)':null],
    ['Risk of Detention',`${s.riskDetention}%`,s.riskDetention>60?'var(--red)':s.riskDetention>40?'var(--amber)':'var(--green)'],
    ['Risk of Failing',`${s.riskFail.toFixed(1)}%`,s.riskFail>60?'var(--red)':s.riskFail>40?'var(--amber)':'var(--green)'],
    ['Midterm Score',s.midterm,null]
  ];
  document.getElementById('dmStats').innerHTML=stats.map(([l,v,c])=>`<div class="dm-stat-row"><span class="dm-stat-label">${l}</span><span class="dm-stat-val" style="${c?`color:${c}`:''}">${v}</span></div>`).join('');
  const tf=s.flagHistory.length,ti=s.flagHistory.filter(f=>f.intervened).length;
  document.getElementById('dmFhSummary').innerHTML=`<div class="fh-sum-box"><div class="fh-sum-val" style="color:var(--red)">${tf}</div><div class="fh-sum-label">Total Flags</div></div><div class="fh-sum-box"><div class="fh-sum-val" style="color:var(--green)">${ti}</div><div class="fh-sum-label">Interventions</div></div>`;
  document.getElementById('dmFhBody').innerHTML=s.flagHistory.map(f=>`<tr><td>${f.date}</td><td>${f.diagnosis}</td><td><span class="fh-intervened" style="background:${f.intervened?'var(--green-bg)':'var(--red-bg)'};color:${f.intervened?'var(--green)':'var(--red)'}">${f.intervened?'✓ Yes':'✗ No'}</span></td></tr>`).join('');
  if(dmLineChartInst){dmLineChartInst.destroy();dmLineChartInst=null}
  const {tc,gc,tip}=chartDefaults();
  dmLineChartInst=new Chart(document.getElementById('dmLineChart'),{type:'line',data:{labels:WEEKS,datasets:[
    {label:'Effort',data:s.weekEt,borderColor:'#60a5fa',backgroundColor:'rgba(96,165,250,0.08)',borderWidth:2.5,tension:0.38,fill:true,pointBackgroundColor:'#60a5fa',pointRadius:4,pointHoverRadius:7},
    {label:'Academic Performance',data:s.weekAt,borderColor:'#f59e0b',backgroundColor:'rgba(245,158,11,0.06)',borderWidth:2.5,tension:0.38,fill:true,pointBackgroundColor:'#f59e0b',pointRadius:4,pointHoverRadius:7}
  ]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:tip},scales:{x:{grid:{color:gc},ticks:{color:tc,font:{size:10,family:'DM Sans'}}},y:{grid:{color:gc},ticks:{color:tc,font:{size:10}},min:0,max:100}}}});
  if(dmQuadChartInst){dmQuadChartInst.destroy();dmQuadChartInst=null}
  dmQuadChartInst=new Chart(document.getElementById('dmQuadChart'),{type:'scatter',data:{datasets:[
    {data:[{x:s.classAvgEt,y:0},{x:s.classAvgEt,y:100}],type:'line',borderColor:'rgba(100,116,139,0.5)',borderWidth:1.5,borderDash:[4,3],pointRadius:0,fill:false},
    {data:[{x:0,y:s.classAvgPerf},{x:100,y:s.classAvgPerf}],type:'line',borderColor:'rgba(100,116,139,0.5)',borderWidth:1.5,borderDash:[4,3],pointRadius:0,fill:false},
    {label:'This Week',data:[{x:s.etThisWeek,y:s.perfThisWeek,label:'This Week'}],backgroundColor:'rgba(245,158,11,0.9)',borderColor:'#f59e0b',borderWidth:2,pointRadius:11,pointHoverRadius:15},
    {label:'Avg',data:[{x:s.studentAvgEt,y:s.studentAvgPerf,label:'Avg'}],backgroundColor:'rgba(96,165,250,0.9)',borderColor:'#60a5fa',borderWidth:2,pointRadius:11,pointHoverRadius:15}
  ]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:{...tip,filter:item=>item.datasetIndex>=2,callbacks:{title:ctx=>`${ctx[0].raw.label||''}`,label:ctx=>`Effort: ${ctx.raw.x}% · Acad: ${ctx.raw.y}%`}}},scales:{x:{grid:{color:gc},ticks:{color:tc,font:{size:10}},min:0,max:100,title:{display:true,text:'Effort (%)',color:tc,font:{size:10}}},y:{grid:{color:gc},ticks:{color:tc,font:{size:10}},min:0,max:100,title:{display:true,text:'Academic Performance (%)',color:tc,font:{size:10}}}}}});
  document.getElementById('dmFactors').innerHTML=s.factors.map(f=>`<div class="dm-factor-bar-row"><div class="dm-factor-bar-top"><span class="dm-factor-bar-label">${f.label}</span><span class="dm-factor-bar-pct">${f.pct}%</span></div><div class="dm-factor-bar-track"><div class="dm-factor-bar-fill" style="width:0%;background:${f.color}" data-target="${f.pct}"></div></div></div>`).join('');
  document.getElementById('dmMajorNote').innerHTML=`⚡ Major contributor: <strong style="color:var(--amber)">${s.majorFactor}</strong>`;
  const rp=s.riskFail;const rc2=rp>70?'var(--red)':rp>45?'var(--amber)':'var(--green)';
  document.getElementById('dmRiskBar').style.cssText=`width:0%;background:${rc2};height:100%;border-radius:10px;transition:width 1.2s ease .4s`;
  document.getElementById('dmRiskVal').style.color=rc2;document.getElementById('dmRiskVal').textContent=rp.toFixed(1)+'%';
  document.getElementById('dmRiskLbl').textContent=rp>70?'Critical – immediate intervention needed':rp>45?'Elevated – monitor closely':'Moderate – schedule check-in';
  const recColor=s.recovery<30?'var(--red)':s.recovery<55?'var(--amber)':'var(--green)';
  document.getElementById('dmRecBar').style.cssText=`width:0%;background:${recColor};height:100%;border-radius:10px;transition:width 1.2s ease .6s`;
  document.getElementById('dmRecVal').style.color=recColor;document.getElementById('dmRecVal').textContent=s.recovery+'%';
  document.getElementById('overlay').classList.add('open');document.body.style.overflow='hidden';
  setTimeout(()=>{
    document.querySelectorAll('.dm-factor-bar-fill[data-target]').forEach(el=>{el.style.width=el.dataset.target+'%'});
    document.getElementById('dmRiskBar').style.width=rp+'%';
    document.getElementById('dmRecBar').style.width=s.recovery+'%';
  },80);
}
function closeOverlay(){document.getElementById('overlay').classList.remove('open');document.body.style.overflow='';}
function handleOvClick(e){if(e.target===document.getElementById('overlay'))closeOverlay();}
function logIntervention(){if(!currentStudent)return;alert(`✓ Intervention logged for ${currentStudent.name} (${currentStudent.id})\nTimestamp: ${new Date().toLocaleString()}`);}
function mailStudent(){if(!currentStudent)return;alert(`📧 Email sent to ${currentStudent.name} (${currentStudent.id})`);}
function mailParents(){if(!currentStudent)return;alert(`📧 Email sent to parents of ${currentStudent.name} (${currentStudent.id})`);}
