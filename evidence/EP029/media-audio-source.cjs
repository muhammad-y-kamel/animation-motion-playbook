const fs=require('fs'),crypto=require('crypto'),{w}=require('../render.cjs');
const hash=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');let cues=JSON.parse(fs.readFileSync(__dirname+'/../audio/cue-sheet.json')).cues;let out={source_sha256:hash(__dirname+'/../episode.js'),scope:'Actual semantic source-state and needle geometry. Does not certify encoded visibility or listening.',checks:[],knit:[]};
function add(name,pass,evidence){out.checks.push({name,pass,evidence});}
let s=w.scene(.5),before=w.scene(.49),after=w.scene(.8);add('hook pull causes tail shortening',after.tail<s.tail&&s.tail===before.tail,{atPoint5:s.tail,afterPoint8:after.tail});
let ballCue=cues.find(c=>c.label==='ball thread catches chair nail');add('chair sound time24.4',ballCue.time===24.4,ballCue);let placeCue=cues.find(c=>c.label==='ball placed below chin');add('placement rustle time19.5',placeCue.time===19.5,placeCue);let ball=w.scene(24.4);add('chair catch endpoint at 24.4',Math.hypot(ball.wool.x-221,ball.wool.y-1450)<1e-6,ball.wool);
add('ring release starts at40',w.scene(40).rings>0&&w.scene(40.35).rings===0,{before:w.scene(40).rings,after:w.scene(40.35).rings});
let fall=w.scene(41.5);add('wool reaches floor at41.5',Math.abs(fall.wool.y-1459.84)<1e-6,fall.wool);
// The two needles cross when hand wave returns to center every .1sec.
function cross(a,b){return a.x*b.y-a.y*b.x}function sub(a,b){return{x:a.x-b.x,y:a.y-b.y}};
let knitCues=cues.filter(c=>c.label==='knitting needle contact');add('83 audible knitting hits',knitCues.length===83,{count:knitCues.length});for(let cue of knitCues){let t=cue.time,s=w.scene(t),[n,m]=s.needles,a=sub(n.b,n.a),b=sub(m.b,m.a),c=sub(m.a,n.a),den=cross(a,b),u=cross(c,b)/den,v=cross(c,a)/den;out.knit.push({time:t,needleAlpha:s.needleAlpha,segmentsIntersect:u>=0&&u<=1&&v>=0&&v<=1,handHeightDelta:s.p.left.y-s.p.right.y});}
add('all83knit_ticks_have_crossed_needles',out.knit.every(x=>x.segmentsIntersect),{count:out.knit.length});add('all83knit_ticks_have_visible_needles',out.knit.every(x=>x.needleAlpha>.99),{minimumAlpha:Math.min(...out.knit.map(x=>x.needleAlpha))});
let stop=w.scene(64.5);add('64.5 stop hand grip',stop.contacts.some(c=>c.label==='stop-hand-left')&&stop.contacts.some(c=>c.label==='stop-hand-right'),stop.contacts);
out.passed=out.checks.every(x=>x.pass);fs.writeFileSync(__dirname+'/media-audio-source-QA.json',JSON.stringify(out,null,2));console.log(JSON.stringify({passed:out.passed,checks:out.checks},null,2));if(!out.passed)process.exitCode=1;
