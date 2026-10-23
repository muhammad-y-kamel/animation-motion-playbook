// Independent semantic geometry and continuity checks. Does not certify unmeasured pixel occlusion.
const fs=require('fs'),crypto=require('crypto'),{w,canvas}=require('../render.cjs');
const hash=crypto.createHash('sha256').update(fs.readFileSync(__dirname+'/../episode.js')).digest('hex');
const D=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y),proj=p=>({x:540+(p.x-540)*1.08,y:1150+(p.y-1400)*1.08});
let violations=[],stats={states:4560,storyStates:4200,contactSamples:0,maxContactError:0,maxHandStep:0,maxWoolStep:0,minProjectedX:Infinity,maxProjectedX:-Infinity,minProjectedY:Infinity,maxProjectedY:-Infinity},last=null;
function v(kind,t,detail){violations.push({kind,t,...detail})}
for(let i=0;i<4560;i++){
 let t=i/60,s=w.scene(t);if(t>=70)continue;
 for(let c of s.contacts){let d=D(c.hand,c.point);stats.contactSamples++;stats.maxContactError=Math.max(stats.maxContactError,d);if(d>.2)v('declared-contact-gap',t,{d,label:c.label});}
 for(let who of ['m','p']){
  let r=s[who];for(let foot of r.feet){let bottom=foot.y+23*r.s;if(bottom>1522.01)v('sole-floor-penetration',t,{who,bottom});}
  // Conservative bounds include body silhouette, limb endpoint hulls, hands and feet.
  let pts=[w.local(r,-155,-380),w.local(r,155,15),...r.feet.flatMap(f=>[{x:f.x-47*r.s,y:f.y-23*r.s},{x:f.x+47*r.s,y:f.y+23*r.s}]),...['left','right'].flatMap(k=>[{x:r[k].x-37*r.s,y:r[k].y-34*r.s},{x:r[k].x+37*r.s,y:r[k].y+34*r.s}])];
  for(let p of pts){let q=proj(p);stats.minProjectedX=Math.min(stats.minProjectedX,q.x);stats.maxProjectedX=Math.max(stats.maxProjectedX,q.x);stats.minProjectedY=Math.min(stats.minProjectedY,q.y);stats.maxProjectedY=Math.max(stats.maxProjectedY,q.y);if(q.x<0||q.x>1080||q.y<300||q.y>1920)v('projected-safe-bounds',t,{who,q});}
  if(last)for(let k of['left','right']){let d=D(last[who][k],r[k]);stats.maxHandStep=Math.max(stats.maxHandStep,d);if(d>25)v('hand-step-over-25px',t,{who,hand:k,d});}
 }
 if(s.wool&&s.wool.r>.1){let q=s.wool,a=q.spin||0,ry=Math.sqrt((q.r*Math.sin(a))**2+(q.r*.64*Math.cos(a))**2);if(q.y+ry+2>1522.5)v('wool-floor-penetration',t,{bottom:q.y+ry+2});if(last?.wool){let d=D(last.wool,q);stats.maxWoolStep=Math.max(stats.maxWoolStep,d);if(d>12)v('wool-step-over-12px',t,{d});}}
 if(t>=43&&t<55&&s.wool&&s.wool.r>.5){let bottom=s.wool.y+s.wool.r*.64+2;let gap=1522-bottom;if(Math.abs(gap)>.2)v('ground-wool-support-gap',t,{gap,bottom});}
 if(s.fabric&&s.fabric.alpha>.01&&s.fabric.len>.1&&s.fabric.y+s.fabric.len+2>1522.5)v('fabric-floor-penetration',t,{bottom:s.fabric.y+s.fabric.len+2});
 last=s;
}
let boundary=[];for(let t of[14,28,43,55,56.5,57,60,70]){if(t===70)continue;let a=w.scene(t-1e-7),b=w.scene(t);boundary.push({t,left:D(a.p.left,b.p.left),right:D(a.p.right,b.p.right),wool:a.wool&&b.wool?D(a.wool,b.wool):null});}
// Random-order pixel determinism, including CTA and phase boundaries.
let times=[0,.5,14,19.5,23,28,30,40,41.5,43,45,50,55,56.5,64.5,66,69.99,70,75.99],pixels={};
function pix(t){w.seek(t);return crypto.createHash('sha256').update(canvas.data()).digest('hex')}
for(let t of times)pixels[t]=pix(t);let deterministic=times.slice().reverse().every(t=>pixels[t]===pix(t));
for(let b of boundary){if(b.left>.2||b.right>.2||(b.wool??0)>.2)v('epsilon-boundary-discontinuity',b.t,b);}
let counts={};for(let x of violations)counts[x.kind]=(counts[x.kind]||0)+1;
let out={sourceSHA256:hash,scope:'4560 semantic timeline states (4200 story geometry; CTA verified by random-order rendered pixel samples). Conservative character endpoint/body bounds; numerical contacts are declared anchors, not independent occlusion proof. No audio, encoding or real-time playback claim.',stats,counts,violations:violations.slice(0,150),boundary,pixelDeterminism:{sampleTimes:times,passed:deterministic,hashes:pixels},pass:!violations.length&&deterministic};fs.writeFileSync(__dirname+'/geometry.json',JSON.stringify(out,null,2));console.log(JSON.stringify({sourceSHA256:hash,stats,counts,boundary,deterministic,pass:out.pass},null,2));
