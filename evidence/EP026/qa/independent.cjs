const fs=require('fs'),crypto=require('crypto'),{w}=require('../render.cjs');
const failures=[],max={armNormalized:0,footFloorPenetration:0,contactError:0,handFrameDelta:0};let previous;
const cuts=new Set([660,1440,2280,2700]);
for(let i=0;i<3120;i++){
 let t=i/60,s=w.scene(t);
 for(let who of['m','p']){let r=s[who];
  for(let q of[r.left,r.right,...r.feet])if(!Number.isFinite(q.x)||!Number.isFinite(q.y))failures.push({t,check:'finite',who});
  for(let side of['left','right']){let sh=w.local(r,side==='left'?-104:104,-188),d=Math.hypot(sh.x-r[side].x,sh.y-r[side].y)/r.s;max.armNormalized=Math.max(max.armNormalized,d);if(d>300)failures.push({t,check:'arm',who,side,d});
   if(previous&&!cuts.has(i)){let d2=Math.hypot(r[side].x-previous[who][side].x,r[side].y-previous[who][side].y);max.handFrameDelta=Math.max(max.handFrameDelta,d2);if(d2>30)failures.push({t,check:'handjump',who,side,d:d2});}}
  for(let q of r.feet){let pen=q.y+23*r.s-1600;max.footFloorPenetration=Math.max(max.footFloorPenetration,pen);if(pen>1)failures.push({t,check:'floor',who,pen});}
  let z=t>=11&&t<24?.96:t>=38&&t<45?1.04:t>=45?1.06:1;
  for(let q of[r.left,r.right,...r.feet,w.local(r,0,-375),w.local(r,-150,-150),w.local(r,150,-150)]){let x=540+(q.x-540)*z,y=1280+(q.y-1280)*z;if(x<10||x>1070||y<340||y>1880)failures.push({t,check:'bounds',who,x,y});}
 }
 for(let c of s.contacts){let actual=c.kind==='umbrella-handle'?s.m.right:c.kind==='ring-tug'?s.m.left:s.p.left;let d=Math.hypot(actual.x-c.point.x,actual.y-c.point.y);max.contactError=Math.max(max.contactError,d);if(d>.01)failures.push({t,check:'contact',kind:c.kind,d});}
 if(t>=8.6&&t<11){for(let f of s.m.feet){let lip=s.u.y+22*(1-Math.pow((f.x-s.u.x)/275,2)),d=Math.abs(f.y+23*s.m.s-lip);if(d>.01)failures.push({t,check:'frontlip sole support',d});}}
 if(t>=50&&t<50.4&&s.apples.find(a=>a.i===3)?.bite)failures.push({t,check:'Peb bite early'});
 if(t>=50.4&&!s.apples.find(a=>a.i===3)?.bite)failures.push({t,check:'Peb bite missing'});
 if(t>=43&&s.apples.length!==4)failures.push({t,check:'four apples',count:s.apples.length});
 if((t<44)!==!!s.wind)failures.push({t,check:'wind timing'});
 previous=s;
}
const source=fs.readFileSync(__dirname+'/../episode.js');const report={sourceSha256:crypto.createHash('sha256').update(source).digest('hex'),framesChecked:3120,storySeconds:52,filmSeconds:w.FILM.duration,max,failures,pass:!failures.length,limitations:['Source-state numerical tests, not encoded-frame or AV review.','Foot-to-bowl surface support is a separate visual/manual geometric issue.']};fs.writeFileSync(__dirname+'/independent.json',JSON.stringify(report,null,2));console.log(JSON.stringify({...report,failures:failures.slice(0,20)},null,2));process.exitCode=failures.length?1:0;
