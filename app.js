const vehicles = [
  ["TVS","Jupiter 125",10.0,"Scooter","Regular (91)","E10 (91–93 RON)",2021,"BS-VI",48.5],
  ["Yamaha","Ray ZR 125",10.2,"Scooter","Regular (91)","E10 (91–93 RON)",2020,"BS-VI",46.56],
  ["Yamaha","Fascino 125",10.2,"Scooter","Regular (91)","E10 (91–93 RON)",2020,"BS-VI",47.53],
  ["Hero","Pleasure+ 110",9.9,"Scooter","Regular (91)","E10 (91–93 RON)",2019,"BS-VI ready",53.35],
  ["Hero","Destini 125",9.9,"Scooter","Regular (91)","E10 (91–93 RON)",2018,"BS-IV",48.5],
  ["Yamaha","R15 V3",11.6,"Mid-range","Premium (95, tuned 91)","E10, Premium (95 RON)",2017,"BS-IV",38.8],
  ["TVS","Apache RTR 200 4V",11.0,"Mid-range","Premium (95, tuned 91)","E10, Premium (95 RON)",2016,"BS-IV",38.8],
  ["Hero","Maestro Edge 110",9.9,"Scooter","Regular (91)","E5 → E10 (91 RON)",2015,"BS-IV","E5:49.25 | E10:48.5"],
  ["Honda","Unicorn 160",10.0,"Mid-range","Regular (91)","E5 → E10 (91 RON)",2014,"BS-IV","E5:59.1 | E10:58.2"],
  ["Honda","Activa 125",10.0,"Scooter","Regular (91)","E5 → E10 (91 RON)",2014,"BS-IV","E5:47.28"],
  ["TVS","Scooty Zest 110",9.5,"Scooter","Regular (91)","E5 → E10 (91 RON)",2014,"BS-IV",49.25],
  ["KTM","RC 390",12.6,"Premium","Premium (95)","E10, Premium (95 RON)",2014,"BS-IV",27.16],
  ["TVS","Jupiter 110",9.6,"Scooter","Regular (91)","E5 (91 RON)",2013,"BS-IV",51.71],
  ["KTM","Duke 200",11.3,"Mid-range","Premium (95)","E5 (91 RON)",2012,"BS-III",34.48],
  ["Royal Enfield","Classic 350 (Old Gen)",8.5,"Premium","Regular (91)","E5 (91 RON)",2009,"BS-III",40.39],
  ["Yamaha","FZ-S FI",9.6,"Mid-range","Regular (91)","E5 (91 RON)",2008,"BS-III",46.3],
  ["Bajaj","Pulsar 220F",9.5,"Mid-range","Regular (91)","E5 (91 RON)",2007,"BS-II",37.43],
  ["Honda","Shine 125",10.0,"Commuter","Regular (91)","E5 (91 RON)",2006,"BS-II",64.03],
  ["Hero","HF Deluxe",9.9,"Commuter","Regular (91)","E5 (91 RON)",2005,"BS-II",64.03],
  ["TVS","Apache RTR 160",10.0,"Mid-range","Regular (91)","E5 (91 RON)",2005,"BS-II",45.31],
  ["Bajaj","CT 100",9.5,"Commuter","Regular (91)","E5 (91 RON)",2004,"BS-II",73.88],
  ["TVS","Scooty Pep+",9.2,"Scooter","Regular (91)","E5 (91 RON)",2003,"BS-II",64.03],
  ["Honda","Dio",9.5,"Scooter","Regular (91)","E5 (91 RON)",2002,"BS-II",47.28],
  ["Bajaj","Pulsar 150",9.5,"Mid-range","Regular (91)","E5 (91 RON)",2001,"BS-II",46.3],
  ["Honda","Activa 6G (110)",10.0,"Scooter","Regular (91)","E5 (91 RON)",2001,"BS-II",49.25],
  ["Hero","Splendor Plus",9.9,"Commuter","Regular (91)","E0 → E10 (87–91 RON)",1994,"BS-I","E0:70 | E5:68.95"],
  ["Royal Enfield","Bullet 500 (Old Gen)",8.5,"Premium","Regular (91)","E0 → E5 (87–91 RON)",1990,"No BS","E0:30 | E5:29.55"],
  ["TVS","XL100 (Moped)",9.2,"Moped","Regular (91)","E0 → E5 (87–91 RON)",1980,"No BS","E0:67 | E5:66.0"],
  ["Bajaj","Chetak (Petrol)",7.4,"Scooter","Regular (91)","E0 (87–91 RON)",1972,"No BS",40]
];


const operatingDefaults = {
  "TVS|Jupiter 125": {torque: 6.2, rpm: 3500, era: "post"},
  "Yamaha|Ray ZR 125": {torque: 6.2, rpm: 3500, era: "post"},
  "Yamaha|Fascino 125": {torque: 6.2, rpm: 3500, era: "post"},
  "Hero|Pleasure+ 110": {torque: 6.2, rpm: 3500, era: "post"},
  "Hero|Destini 125": {torque: 6.2, rpm: 3500, era: "pre"},
  "Yamaha|R15 V3": {torque: 6.2, rpm: 3500, era: "pre"},
  "TVS|Apache RTR 200 4V": {torque: 6.2, rpm: 3500, era: "pre"},
  "Hero|Maestro Edge 110": {torque: 6.2, rpm: 3500, era: "pre"},
  "Honda|Unicorn 160": {torque: 6.2, rpm: 3500, era: "pre"},
  "Honda|Activa 125": {torque: 6.2, rpm: 3500, era: "pre"},
  "TVS|Scooty Zest 110": {torque: 6.2, rpm: 3500, era: "pre"},
  "KTM|RC 390": {torque: 6.2, rpm: 3500, era: "pre"},
  "TVS|Jupiter 110": {torque: 6.2, rpm: 3500, era: "pre"},
  "KTM|Duke 200": {torque: 6.2, rpm: 3500, era: "pre"},
  "Royal Enfield|Classic 350 (Old Gen)": {torque: 6.2, rpm: 3500, era: "pre"},
  "Yamaha|FZ-S FI": {torque: 6.2, rpm: 3500, era: "pre"},
  "Bajaj|Pulsar 220F": {torque: 6.2, rpm: 3500, era: "pre"},
  "Honda|Shine 125": {torque: 6.2, rpm: 3500, era: "pre"},
  "Hero|HF Deluxe": {torque: 6.2, rpm: 3500, era: "pre"},
  "TVS|Apache RTR 160": {torque: 6.2, rpm: 3500, era: "pre"},
  "Bajaj|CT 100": {torque: 6.2, rpm: 3500, era: "pre"},
  "TVS|Scooty Pep+": {torque: 6.2, rpm: 3500, era: "pre"},
  "Honda|Dio": {torque: 6.2, rpm: 3500, era: "pre"},
  "Bajaj|Pulsar 150": {torque: 6.2, rpm: 3500, era: "pre"},
  "Honda|Activa 6G (110)": {torque: 6.2, rpm: 3500, era: "pre"},
  "Hero|Splendor Plus": {torque: 6.2, rpm: 3500, era: "pre"},
  "Royal Enfield|Bullet 500 (Old Gen)": {torque: 6.2, rpm: 3500, era: "pre"},
  "TVS|XL100 (Moped)": {torque: 6.2, rpm: 3500, era: "pre"},
  "Bajaj|Chetak (Petrol)": {torque: 6.2, rpm: 3500, era: "pre"}
};

const demoExperimental = [
  // The only numeric GEB result explicitly visible in the supplied screenshots.
  {cr:7.5, torque:5.0, rpm:1900, g:70, e:10, b:20, bte:20.52, bsfc:505.79, co:2.674, hc:273.7, ron:98.42},
  // Vehicle-explorer examples visible in screenshot (not GEB training rows):
  {cr:9.7, rpm:2900, bte:31.10, bsfc:187.5, co:3.754, hc:403, ron:96.8},
  {cr:9.7, rpm:2900, bte:35.91, bsfc:231.1, co:1.512, hc:120, ron:96.0},
  {cr:9.7, rpm:2900, bte:37.18, bsfc:223.6, co:1.446, hc:113, ron:98.0},
  {cr:9.7, rpm:2900, bte:36.28, bsfc:233.4, co:1.539, hc:123, ron:97.0},
  {cr:9.7, rpm:3300, bte:33.80, bsfc:442.8, co:3.668, hc:392, ron:98.0},
  {cr:9.7, rpm:3300, bte:34.49, bsfc:247.6, co:1.203, hc:75, ron:96.0}
];

const $ = id => document.getElementById(id);
const companies = [...new Set(vehicles.map(v=>v[0]))].sort();

function populateCompanies(){
  $("company").innerHTML = companies.map(c=>`<option>${c}</option>`).join("");
  updateModels();
}
function updateModels(){
  const c = $("company").value;
  const rows = vehicles.filter(v=>v[0]===c);
  $("model").innerHTML = rows.map(v=>`<option>${v[1]}</option>`).join("");
  updateVehicle();
}
function updateVehicle(){
  const row = vehicles.find(v=>v[0]===$("company").value && v[1]===$("model").value);
  if(!row) return;

  const key = `${row[0]}|${row[1]}`;
  const defaults = operatingDefaults[key] || {torque: 6.2, rpm: 3500, era: row[7].toUpperCase().includes("VI") ? "post" : "pre"};

  // Vehicle identity
  $("year").value = row[6];
  $("category").value = row[3];

  // Automatically load vehicle operating defaults.
  $("cr").value = row[2];
  $("torque").value = defaults.torque;
  $("rpm").value = defaults.rpm;
  $("era").value = defaults.era;

  $("vehicleHint").textContent =
    `${row[0]} ${row[1]} • ${row[3]} • ${row[7]} • default operating point: CR ${row[2]}, ${defaults.torque.toFixed(1)} Nm, ${defaults.rpm} RPM`;

  checkDomain();
}

function markManualChange(){
  const row = vehicles.find(v=>v[0]===$("company").value && v[1]===$("model").value);
  if(row) $("vehicleHint").textContent =
    `${row[0]} ${row[1]} • Manual operating point • CR ${$("cr").value}, ${$("torque").value} Nm, ${$("rpm").value} RPM`;
}

function checkDomain(){
  const cr=+$("cr").value, torque=+$("torque").value, rpm=+$("rpm").value;
  $("domainText").textContent=(torque>=1.94&&torque<=8.09&&rpm>=1700&&rpm<=3300&&cr>=7.4&&cr<=12.6)
    ? "Within supplied experimental operating envelope" : "Outside/near supplied experimental envelope";
  $("fuelText").textContent=$("era").value==="post" ? "Post-BS6: E10-compatible baseline" : "Pre-BS6: E5-compatible baseline";
  $("vehicleText").textContent="Two-wheeler master-table match";
}
function nearestDemo(cr, torque, rpm){
  const candidates=demoExperimental.filter(x=>x.g!==undefined);
  return candidates.reduce((a,b)=>{
    const da=Math.abs(a.cr-cr)*2 + Math.abs(a.rpm-rpm)/200 + Math.abs((a.torque||5)-torque);
    const db=Math.abs(b.cr-cr)*2 + Math.abs(b.rpm-rpm)/200 + Math.abs((b.torque||5)-torque);
    return db<da?b:a;
  });
}
function recommend(){
  const cr=+$("cr").value, torque=+$("torque").value, rpm=+$("rpm").value;
  const row=vehicles.find(v=>v[0]===$("company").value && v[1]===$("model").value);
  const era=$("era").value;
  // Prototype recommendation logic. Replace this function with the trained optimizer API.
  let g=70,e=10,b=20;
  if(era==="pre"){ g=80; e=5; b=15; }
  if(cr>=11.5){ g=75; e=10; b=15; }
  if(cr<8.5){ g=80; e=10; b=10; }
  if(row && row[3]==="Commuter"){ b=Math.min(b,15); }
  if(row && row[3]==="Premium"){ b=Math.max(b,15); }
  const base=nearestDemo(cr,5,rpm);
  const factor=Math.max(.75,Math.min(1.18, 1 + (cr-9.5)*.045 + (rpm-2500)/40000 + (torque-5)*.015));
  const bte=Math.max(15, base.bte*factor);
  const bsfc=Math.max(140, base.bsfc/factor);
  const co=Math.max(.4, base.co*(1-(e+b)*.008));
  const hc=Math.max(30, base.hc*(1-(e+b)*.004));
  const ron=base.ron + e*.03+b*.04;
  return {g,e,b,bte,bsfc,co,hc,ron,row};
}
function renderRecommendation(){
  const r=recommend();
  $("optimizerResult").innerHTML=`
    <div class="recommendation">
      <div class="kicker">RECOMMENDED CANDIDATE BLEND</div>
      <div class="blend-name">G${r.g} / E${r.e} / B${r.b}</div>
      <div class="blend-sub">${r.row[0]} ${r.row[1]} • ${r.row[7]} • prototype multi-objective result</div>
      <div class="blend-parts">
        <div><b>${r.g}%</b><span>Gasoline</span></div>
        <div><b>${r.e}%</b><span>Ethanol</span></div>
        <div><b>${r.b}%</b><span>Butanol</span></div>
      </div>
    </div>
    <div class="metrics">
      <div class="metric"><label>Predicted BTE</label><strong>${r.bte.toFixed(2)}%</strong><small>higher is better</small></div>
      <div class="metric"><label>Predicted BSFC</label><strong>${r.bsfc.toFixed(1)}</strong><small>g/kWh • lower is better</small></div>
      <div class="metric"><label>Predicted CO</label><strong>${r.co.toFixed(3)}%</strong><small>vol.% • lower is better</small></div>
      <div class="metric"><label>Predicted HC</label><strong>${r.hc.toFixed(1)} ppm</strong><small>lower is better</small></div>
      <div class="metric"><label>Blend RON</label><strong>${r.ron.toFixed(2)}</strong><small>candidate blend estimate</small></div>
      <div class="metric"><label>Vehicle mileage</label><strong>${r.row[8]}</strong><small>kmpl from master table</small></div>
    </div>`;
}
function renderTable(){
  const q=$("vehicleSearch").value.toLowerCase();
  $("vehicleTable").innerHTML=vehicles.filter(v=>v.join(" ").toLowerCase().includes(q)).map(v=>`
    <tr>${v.map(x=>`<td>${x}</td>`).join("")}</tr>`).join("");
}
function simulate(){
  const cr=+$("simCr").value, torque=+$("simTorque").value, rpm=+$("simRpm").value;
  const g=+$("g").value,e=+$("e").value,b=+$("b").value,total=g+e+b;
  $("blendTotal").textContent=`Total: ${total}%`;
  $("blendTotal").classList.toggle("bad",total!==100);
  if(total!==100){$("simResult").innerHTML='<div class="metric"><label>Blend error</label><strong>100% required</strong><small>Adjust gasoline, ethanol and butanol.</small></div>';return;}
  const ref=nearestDemo(cr,torque,rpm);
  const blendPenalty=Math.abs(b-20)*.04 + Math.abs(e-10)*.02;
  const factor=Math.max(.65,Math.min(1.25,1+(cr-9.5)*.05+(rpm-2500)/50000+(torque-5)*.02-blendPenalty));
  const bte=Math.max(10,ref.bte*factor);
  const bsfc=Math.max(100,ref.bsfc/factor*(1+b*.001));
  const co=Math.max(.1,ref.co*(1-(e+b)*.007));
  const hc=Math.max(10,ref.hc*(1-(e+b)*.003));
  $("simResult").innerHTML=[
    ["BTE",bte.toFixed(2)+"%","higher is better"],
    ["BSFC",bsfc.toFixed(1)+" g/kWh","lower is better"],
    ["CO",co.toFixed(3)+" vol.%","lower is better"],
    ["HC",hc.toFixed(1)+" ppm","lower is better"]
  ].map(x=>`<div class="metric"><label>${x[0]}</label><strong>${x[1]}</strong><small>${x[2]}</small></div>`).join("");
  $("barBte").style.width=Math.min(100,bte*2.2)+"%";
  $("barBsfc").style.width=Math.min(100,10000/Math.max(bsfc,1))+"%";
  $("barCo").style.width=Math.min(100,100/(co+1))+"%";
  $("barHc").style.width=Math.min(100,200/(hc+1))+"%";
}
document.querySelectorAll(".nav-btn").forEach(btn=>btn.addEventListener("click",()=>{
  document.querySelectorAll(".nav-btn").forEach(x=>x.classList.remove("active"));
  document.querySelectorAll(".view").forEach(x=>x.classList.remove("active"));
  btn.classList.add("active"); $(btn.dataset.view).classList.add("active");
}));
$("company").addEventListener("change",updateModels);
$("model").addEventListener("change",updateVehicle);
["cr","torque","rpm","era"].forEach(id=>$(id).addEventListener("input",()=>{checkDomain();markManualChange();}));
$("optimizeBtn").addEventListener("click",renderRecommendation);
$("vehicleSearch").addEventListener("input",renderTable);
[["simCr","simCrOut"],["simTorque","simTorqueOut"],["simRpm","simRpmOut"]].forEach(([a,b])=>$(a).addEventListener("input",()=>$(b).value=$(a).value));
["g","e","b"].forEach(id=>$(id).addEventListener("input",()=>{const t=+$("g").value+ +$("e").value+ +$("b").value;$("blendTotal").textContent=`Total: ${t}%`;$("blendTotal").classList.toggle("bad",t!==100)}));
$("simulateBtn").addEventListener("click",simulate);
populateCompanies(); renderTable(); checkDomain(); renderRecommendation(); simulate();
