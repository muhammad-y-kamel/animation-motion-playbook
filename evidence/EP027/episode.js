/* MOKI & PEB — PAINTED FOOTPRINTS. Original geometry and deterministic animation.
   One world, fixed rig proportions. No clock or frame state. */
(() => {
'use strict';
const W=1080,H=1920, canvas=document.getElementById('film');
canvas.width=W;canvas.height=H;
const ctx=canvas.getContext('2d',{alpha:false});
const PI=Math.PI, TAU=PI*2;
const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v));
const mix=(a,b,p)=>a+(b-a)*p;
const U=(t,a,b)=>clamp((t-a)/(b-a));
const smooth=u=>{u=clamp(u);return u*u*(3-2*u)};
const expoOut=u=>u<=0?0:u>=1?1:1-Math.pow(2,-10*u);
const expoIn=u=>u<=0?0:u>=1?1:Math.pow(2,10*u-10);
const expoInOut=u=>u<=0?0:u>=1?1:u<.5?Math.pow(2,20*u-10)/2:(2-Math.pow(2,-20*u+10))/2;
// Analytic damped spring step response: never integrated from a prior frame.
const spring=(seconds,omega=19,zeta=.64)=>{
 if(seconds<=0)return 0;
 const wd=omega*Math.sqrt(1-zeta*zeta);
 return 1-Math.exp(-zeta*omega*seconds)*(Math.cos(wd*seconds)+zeta/Math.sqrt(1-zeta*zeta)*Math.sin(wd*seconds));
};
const P=(x,y)=>({x,y});
const mp=(a,b,p)=>P(mix(a.x,b.x,p),mix(a.y,b.y,p));
const ease=(t,a,b)=>smooth(U(t,a,b));
const E=(t,a,b)=>expoInOut(U(t,a,b));
const OUT='#282B33';
const PALETTES={
 warm:{wall:'#F4E7D3',arch:'#EFDFC7',edge:'#DDC5AA',floor:'#DFC0A0',ink:'#9C7E66'},
 tower:{wall:'#EFDFC5',arch:'#E7D1B3',edge:'#D5B792',floor:'#D6B18D',ink:'#987654'},
 launch:{wall:'#EBCDC0',arch:'#E3BFAF',edge:'#CE9F8E',floor:'#CFA28C',ink:'#986C60'},
 quiet:{wall:'#DBDFD5',arch:'#CDD5CB',edge:'#B5C4B9',floor:'#B2BFAE',ink:'#768C81'},
 night:{wall:'#17263F',arch:'#1D3150',edge:'#2D4564',floor:'#101D31',ink:'#546881'}
};
function local(p,x,y){
 const a=p.rot||0,s=p.s||1,xx=x*s*p.sx,yy=y*s*p.sy;
 return P(p.x+xx*Math.cos(a)-yy*Math.sin(a),p.y+xx*Math.sin(a)+yy*Math.cos(a));
}
function rig(x,y,opts={}){
 const p={x,y,s:1,sx:1,sy:1,rot:0,type:'big',expr:'hope',gaze:P(650,740),blink:1,handOpen:false,...opts};
 p.feet=opts.feet||[local(p,-65,30),local(p,65,30)];
 p.left=opts.left||local(p,-155,-85);
 p.right=opts.right||local(p,155,-85);
 p.elbowL=opts.elbowL??-34;
 p.elbowR=opts.elbowR??34;
 return p;
}
function little(x,y,opts={}){return rig(x,y,{s:.54,type:'small',expr:'curious',...opts})}
function grounded(x,y,opts={}){return rig(x,y,{feet:[P(x-65,1580),P(x+65,1580)],...opts})}
function path(points,close=true){ctx.beginPath();ctx.moveTo(points[0].x,points[0].y);for(let i=1;i<points.length;i++)ctx.lineTo(points[i].x,points[i].y);if(close)ctx.closePath()}
function ellipse(x,y,rx,ry,fill,stroke=null,width=6,rot=0){ctx.beginPath();ctx.ellipse(x,y,Math.max(.1,rx),Math.max(.1,ry),rot,0,TAU);if(fill){ctx.fillStyle=fill;ctx.fill()}if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=width;ctx.stroke()}}
function line(a,b,color=OUT,width=6){ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.strokeStyle=color;ctx.lineWidth=width;ctx.lineCap='round';ctx.stroke()}
function roundRect(x,y,w,h,r,fill,stroke=null,lw=6){ctx.beginPath();ctx.roundRect(x,y,w,h,r);ctx.fillStyle=fill;ctx.fill();if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=lw;ctx.stroke()}}
function starPath(x,y,r,inner=.47,rotation=0,points=5){const ps=[];for(let i=0;i<points*2;i++){const a=-PI/2+rotation+i*PI/points,rr=i%2?r*inner:r;ps.push(P(x+Math.cos(a)*rr,y+Math.sin(a)*rr))}path(ps)}
function diamond(x,y,r,color){path([P(x,y-r),P(x+r*.32,y-r*.25),P(x+r,y),P(x+r*.32,y+r*.25),P(x,y+r),P(x-r*.32,y+r*.25),P(x-r,y),P(x-r*.32,y-r*.25)]);ctx.fillStyle=color;ctx.fill()}
function limb(a,b,bend,color,size){
 const dx=b.x-a.x,dy=b.y-a.y,len=Math.hypot(dx,dy)||1;
 const c=P((a.x+b.x)*.5-dy/len*bend*size,(a.y+b.y)*.5+dx/len*bend*size);
 ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.quadraticCurveTo(c.x,c.y,b.x,b.y);
 ctx.lineCap='round';ctx.lineJoin='round';ctx.lineWidth=40*size;ctx.strokeStyle=OUT;ctx.stroke();
 ctx.lineWidth=28*size;ctx.strokeStyle=color;ctx.stroke();
}
function bodyPath(type){
 ctx.beginPath();ctx.moveTo(-111,-26);
 ctx.bezierCurveTo(-152,-55,-144,-132,-121,-222);
 ctx.bezierCurveTo(-110,-267,-93,-300,-65,-315);
 if(type==='big'){
  ctx.bezierCurveTo(-79,-346,-58,-363,-39,-335);
  ctx.bezierCurveTo(-17,-352,-1,-343,2,-328);
 }else{
  ctx.bezierCurveTo(-69,-366,-34,-378,-13,-350);
  ctx.bezierCurveTo(10,-332,11,-323,20,-323);
 }
 ctx.bezierCurveTo(57,-335,85,-307,104,-266);
 ctx.bezierCurveTo(123,-222,143,-143,132,-84);
 ctx.bezierCurveTo(132,-43,113,-15,78,-7);
 ctx.bezierCurveTo(24,12,-69,14,-111,-26);ctx.closePath();
}
function colors(p,night){return p.type==='big'?{body:night?'#F7945F':'#EF8050',shade:'#CF5D3D',light:'#FFAF71',cheek:'#DD664B'}:{body:night?'#A7DAC3':'#72B5A5',shade:'#498C82',light:'#B0D8BA',cheek:'#559F91'}}
function drawHand(p,side,s){
 const hand=side==='left'?p.left:p.right,c=colors(p,s.night),sz=p.s;
 const open=side==='right'&&p.handOpen;
 const reaching=side==='right'&&!p.gripRight&&!open&&p.type==='big'&&p.right.y<p.y-250&&!(s.props?.kind==='seesaw'&&s.t<7.25);
 ctx.save();ctx.translate(hand.x,hand.y);
 if(p.pointTarget&&side===(p.pointHand||'left')){
  const angle=Math.atan2(p.pointTarget.y-hand.y,p.pointTarget.x-hand.x);ctx.rotate(angle);
  ellipse(0,0,25*sz,22*sz,c.body,OUT,5*sz);
  line(P(8*sz,0),P(47*sz,0),OUT,15*sz);line(P(8*sz,0),P(47*sz,0),c.body,9*sz);
 }else if(p.twoFinger&&side==='right'){ellipse(0,4*sz,24*sz,20*sz,c.body,OUT,5*sz);for(let dx of[-9,9]){line(P(dx*sz,2*sz),P(dx*sz,-27*sz),OUT,14*sz);line(P(dx*sz,2*sz),P(dx*sz,-27*sz),c.body,8*sz);}}else if(open){
  ctx.beginPath();ctx.moveTo(-62*sz,-5*sz);ctx.bezierCurveTo(-67*sz,-32*sz,-44*sz,-37*sz,-33*sz,-18*sz);
  ctx.bezierCurveTo(-17*sz,-32*sz,5*sz,-27*sz,11*sz,-17*sz);ctx.bezierCurveTo(40*sz,-32*sz,74*sz,-17*sz,64*sz,9*sz);
  ctx.bezierCurveTo(40*sz,35*sz,-43*sz,31*sz,-62*sz,-5*sz);ctx.closePath();
  ctx.fillStyle=c.body;ctx.fill();ctx.lineWidth=6*sz;ctx.strokeStyle=OUT;ctx.stroke();
  line(P(-33*sz,4*sz),P(36*sz,4*sz),c.shade,4*sz);
 }else if(reaching){
  ctx.scale(sz,sz);
  ctx.beginPath();ctx.moveTo(-25,20);ctx.bezierCurveTo(-43,4,-37,-16,-26,-11);ctx.lineTo(-18,0);ctx.lineTo(-18,-29);
  ctx.quadraticCurveTo(-18,-41,-7,-37);ctx.lineTo(-2,-14);ctx.lineTo(5,-32);ctx.quadraticCurveTo(8,-43,18,-37);
  ctx.lineTo(21,-13);ctx.lineTo(30,-26);ctx.quadraticCurveTo(43,-29,39,-15);ctx.lineTo(34,17);
  ctx.bezierCurveTo(25,42,-16,44,-25,20);ctx.closePath();ctx.fillStyle=c.body;ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.stroke();
  ctx.beginPath();ctx.moveTo(-14,9);ctx.quadraticCurveTo(0,-1,14,9);ctx.strokeStyle=c.shade;ctx.lineWidth=4;ctx.stroke();
 }else{
  ellipse(0,0,31*sz,30*sz,c.body,OUT,6*sz,-.15);
  ellipse(-22*sz,1*sz,13*sz,15*sz,c.body,null,0,-.4);
  ctx.beginPath();ctx.moveTo(6*sz,-16*sz);ctx.quadraticCurveTo(17*sz,-9*sz,16*sz,2*sz);ctx.strokeStyle=c.shade;ctx.lineWidth=4*sz;ctx.lineCap='round';ctx.stroke();
 }
 ctx.restore();
}
function eyeShapes(p,black=false){
 const gaze=p.gaze||P(650,740),face=local(p,0,-215);
 const dx=gaze.x-face.x,dy=gaze.y-face.y,l=Math.hypot(dx,dy)||1;
 const gx=dx/l*12,gy=dy/l*15;
 const exp=p.expr,b=p.blink??1;
 for(const x of [-43,43]){
  const wide=exp==='wonder'||exp==='worried'?1.08:1;
  const squint=(exp==='flat'||exp==='sad')?.67:exp==='determined'?.82:1;
  ellipse(x,-216,35*wide,45*b*squint,black?'#F0E9CF':'#FFF4DF',black?null:OUT,5);
  if(b>.2){
   ellipse(x+gx,-214+gy,12.5,18*b*squint,OUT);
   if(!black)ellipse(x+gx-3,-220+gy,3.3,4.3,'#FFF4DF');
  }
 }
 if(black)return;
 ctx.strokeStyle=OUT;ctx.lineWidth=6;ctx.lineCap='round';
 if(exp==='determined'){
  line(P(-76,-269),P(-20,-254),OUT,7);line(P(20,-254),P(76,-269),OUT,7);
 }else if(exp==='sad'||exp==='flat'){
  line(P(-71,-263),P(-20,-280),OUT,6);line(P(20,-280),P(71,-263),OUT,6);
 }else if(exp==='worried'||exp==='wonder'){
  ctx.beginPath();ctx.moveTo(-70,-280);ctx.quadraticCurveTo(-45,-294,-20,-280);ctx.moveTo(20,-280);ctx.quadraticCurveTo(45,-294,70,-280);ctx.stroke();
 }else if(exp==='mischief'){
  line(P(-71,-265),P(-21,-279),OUT,6);line(P(22,-268),P(71,-259),OUT,6);
 }
 ctx.beginPath();
 if(exp==='wonder'||exp==='worried')ellipse(0,-136,15,21,OUT);
 else if(exp==='smile'||exp==='mischief'||exp==='curious'){
  ctx.moveTo(-23,-146);ctx.quadraticCurveTo(0,-116,26,-146);ctx.stroke();
 }else if(exp==='flat'||exp==='squished'){
  ctx.moveTo(-26,-142);ctx.lineTo(26,-142);ctx.stroke();
 }else if(exp==='sad'){
  ctx.moveTo(-22,-131);ctx.quadraticCurveTo(0,-155,23,-131);ctx.stroke();
 }else if(exp==='determined'){
  ctx.moveTo(-21,-136);ctx.quadraticCurveTo(0,-147,22,-136);ctx.stroke();
 }else{
  ctx.moveTo(-13,-144);ctx.quadraticCurveTo(2,-131,18,-144);ctx.stroke();
 }
}
function drawEyesOnly(p){ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.rot);ctx.scale(p.s*p.sx,p.s*p.sy);eyeShapes(p,true);ctx.restore()}
function drawCharacter(p,s,frontHands=true){
 const col=colors(p,s.night),size=p.s;
 const shoulderL=local(p,-104,-188),shoulderR=local(p,104,-188);
 // Floor and support contacts have explicit world-space anchors.
 for(let i=0;i<2;i++){
  const painted=p.footPaints?p.footPaints[i]:p.footPaint;
  const hip=local(p,i?65:-65,-20),foot=p.feet[i];
  limb(hip,P(foot.x,foot.y-3),i?16:-16,col.shade,size);
  if(!p.soleShow){
  ellipse(foot.x,foot.y,44*size,20*size,painted||col.shade,OUT,6*size,p.footAngles?.[i]??p.footAngle??0);
  if(painted){ctx.save();ctx.translate(foot.x,foot.y);ctx.rotate(p.footAngles?.[i]??p.footAngle??0);ctx.beginPath();ctx.ellipse(0,0,44*size,20*size,0,0,TAU);ctx.clip();ctx.fillStyle=col.shade;ctx.fillRect(-46*size,-23*size,25*size,46*size);ctx.restore();ctx.beginPath();ctx.ellipse(foot.x,foot.y,44*size,20*size,p.footAngles?.[i]??p.footAngle??0,0,TAU);ctx.strokeStyle=OUT;ctx.lineWidth=6*size;ctx.stroke();}
  if(p.soleShow){ellipse(foot.x,foot.y,34*size,14*size,painted||col.shade,OUT,3*size);for(let j=-1;j<=1;j++)ellipse(foot.x+j*17*size,foot.y-6*size,5*size,4*size,col.light);}
  line(P(foot.x-18*size,foot.y-3*size),P(foot.x+19*size,foot.y-3*size),col.body,5*size);
  }
 }
 limb(shoulderL,p.left,p.elbowL,col.body,size);
 limb(shoulderR,p.right,p.elbowR,col.body,size);
 ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.rot);ctx.scale(size*p.sx,size*p.sy);
 bodyPath(p.type);ctx.fillStyle=col.body;ctx.fill();
 ctx.save();bodyPath(p.type);ctx.clip();
 ctx.beginPath();ctx.moveTo(90,-324);ctx.bezierCurveTo(81,-240,127,-113,76,-65);ctx.bezierCurveTo(31,-23,-75,-20,-143,-53);ctx.lineTo(-160,40);ctx.lineTo(160,40);ctx.lineTo(170,-350);ctx.closePath();ctx.fillStyle=col.shade;ctx.fill();
 ctx.beginPath();ctx.moveTo(-107,-177);ctx.bezierCurveTo(-103,-234,-81,-285,-52,-295);ctx.strokeStyle=col.light;ctx.lineWidth=12;ctx.lineCap='round';ctx.stroke();
 ellipse(-85,-158,17,8,col.cheek);ellipse(86,-158,17,8,col.cheek);
 ctx.restore();bodyPath(p.type);ctx.lineWidth=7;ctx.strokeStyle=OUT;ctx.lineJoin='round';ctx.stroke();
 if(!p.back){ctx.save();if(p.faceSide){ctx.translate(55*p.faceSide,0);ctx.scale(1-.45*Math.abs(p.faceSide),1);}eyeShapes(p);ctx.restore();}ctx.restore();
 if(p.soleShow){for(let foot of p.feet){ellipse(foot.x,foot.y,44*size,25*size,col.shade,OUT,6*size);ellipse(foot.x,foot.y,34*size,18*size,p.footPaint||col.shade,OUT,3*size);for(let j=-1;j<=1;j++)ellipse(foot.x+j*17*size,foot.y-7*size,5*size,4*size,col.light);}}
 if(frontHands){drawHand(p,'left',s);drawHand(p,'right',s);}
}

const FLOOR=1600,MS=.94,PS=.5076;
const shotList=[{start:0,end:14,name:'The secret extension'},{start:14,end:28,name:'Peb shortens the clock'},{start:28,end:43,name:'Flip duel and frozen time'},{start:43,end:54,name:'A graceful tie, almost'},{start:54,end:64,name:'The smallest tap'},{start:64,end:70,name:'End card'}];
const CUTS=[14,28,43,54,64];
function keys(t,ks){if(t<=ks[0][0])return ks[0][1];for(let i=1;i<ks.length;i++)if(t<=ks[i][0])return mix(ks[i-1][1],ks[i][1],ease(t,ks[i-1][0],ks[i][0]));return ks.at(-1)[1]}
function actor(who,x,floor=FLOOR,opts={}){let r=who==='m'?rig(x,floor-85*MS,{s:MS,...opts}):little(x,floor-85*PS,{s:PS,...opts});r.feet=[P(x-55*r.s,floor-23*r.s),P(x+55*r.s,floor-23*r.s)];r.left=local(r,-110,-85);r.right=local(r,145,-85);return r;}
const placementsM=[4.2,8,15.8,18.5,46.8,51.9],placementsP=[1.5,3.4,5.6,7.8,45.2,51.9];
const flips=[{t:.2,who:'p'},{t:10.5,who:'m'},{t:20.5,who:'p'},{t:29.5,who:'m'},{t:31,who:'p'},{t:32.2,who:'m'},{t:33.3,who:'p'},{t:34.1,who:'m'},{t:34.9,who:'p'},{t:35.7,who:'m'}];
function scene(t){
 let m=actor('m',240),p=actor('p',850,1450),s={t,m,p,blocks:[],contacts:[],glass:{x:540,y:1338,a:0,top:1,flow:true},shake:0};let g=s.glass;
 // Rotation cumulative and deterministic. Physical grains swap bulbs at half turn.
 for(let f of flips)g.a+=PI*ease(t,f.t-.16,f.t+.24);
 let lay=ease(t,37.1,37.7),stand=ease(t,51.3,52.1);g.a=mix(g.a,PI*10+PI/2,lay);g.a=mix(g.a,PI*10,stand);g.y=mix(1338,1393,lay*(1-stand));
 g.y=Math.min(g.y,1448-Math.abs(Math.cos(g.a))*110-Math.abs(Math.sin(g.a))*65);
 if(t<10.5)g.top=mix(1,.15,U(t,.45,9.5));else if(t<20.5)g.top=mix(.85,.8,U(t,10.5,20.5));else if(t<28)g.top=mix(.2,0,U(t,20.5,22.5));else if(t<37.5)g.top=.18+.09*Math.sin(t*2);else if(t<61.5)g.top=.07;else g.top=mix(.07,0,U(t,61.5,61.95));g.flow=(t<22.5||t>=28&&t<37.5||t>=61.5&&t<61.95);
 m.gaze=p.gaze=P(g.x,g.y);m.expr=p.expr='determined';
 if(t>=10.8&&t<14){m.expr='smile';p.expr='curious';p.gaze=P(g.x,g.y-45);}if(t>=22.5&&t<28){m.expr='flat';p.expr='mischief';}
 if(t>=38&&t<43)m.expr=p.expr='wonder';if(t>=43&&t<52)m.expr=p.expr='smile';if(t>=52.3&&t<58)m.expr=p.expr='curious';if(t>=58)m.expr=p.expr=t<61.5?'wonder':'flat';
 // Build each visible cube along a hand-carried arc. Persistent stacks never reset.
 for(let side of ['m','p']){let r=side==='m'?m:p,times=side==='m'?placementsM:placementsP,x=side==='m'?380:700,hand=side==='m'?'right':'left';
 for(let i=0;i<6;i++){let at=times[i],u=U(t,at-1.1,at),held=t>=at-1.1&&t<at,b={side,i,x,y:1425-i*50,a:0,visible:t>=at-1.1,held};
 if(held){let start=P(side==='m'?300:790,1430),end=P(x,1425-i*50);b.x=mix(start.x,end.x,smooth(u));b.y=mix(start.y,end.y,smooth(u))-85*Math.sin(PI*u);r[hand]=P(b.x,b.y);if(side==='m')r.gripRight=true;r.gaze=P(b.x,b.y);s.contacts.push({kind:'carried-cube',hand:r[hand],point:P(b.x,b.y)});}
 if(t>=58){let d=Math.max(0,t-58-i*.035),sg=side==='m'?-1:1;let k=U(d,0,.95);b.x=x+sg*(25+i*17)*smooth(k);b.y=mix(1425-i*50,1425-(i%2)*7,smooth(k))-45*Math.sin(PI*k);b.a=sg*(i%2?-.35:.4)*smooth(k);}
 s.blocks.push(b);}
 }
 // Initial challenge and alternating grips. Hands contact opposite wooden caps.
 for(let f of flips){let w=ease(t,f.t-.4,f.t-.16)*(1-ease(t,f.t+.24,f.t+.55));if(w){let r=f.who==='m'?m:p,hand=f.who==='m'?'right':'left',sign=f.who==='m'?1:-1;let a=g.a,pt=P(g.x-sign*102*Math.sin(a),g.y+sign*102*Math.cos(a));r[hand]=mp(r[hand],pt,w);r.gaze=P(g.x,g.y);r.expr='mischief';if(w===1)s.contacts.push({kind:'glass-cap',hand:r[hand],point:pt});}}
 for(let [a,b,who] of [[36.8,38.1,'m'],[51.1,52.35,'p']]){let w=ease(t,a,a+.25)*(1-ease(t,b-.25,b)),r=who==='m'?m:p,hand='right',pt=P(g.x-102*Math.sin(g.a),g.y+102*Math.cos(g.a));r[hand]=mp(r[hand],pt,w);if(w===1)s.contacts.push({kind:'glass-orientation',hand:r[hand],point:pt});}
 if(t>=23&&t<26){let w=ease(t,23,23.3)*(1-ease(t,25.5,26));p.left=mp(p.left,P(600,1320),w);}
 if(t>=55.5&&t<57.4){let approach=ease(t,55.5,56.2),tap=ease(t,56.3,56.5)*(1-ease(t,56.5,56.7)),release=1-ease(t,56.9,57.4);p.left=mp(p.left,P(590-28*tap,1338),approach*release);p.expr='determined';if(Math.abs(t-56.5)<1e-6)s.contacts.push({kind:'tap-glass',hand:p.left,point:P(562,1338)});}
 if(t>=56.5&&t<58)s.shake=Math.sin((t-56.5)*30)*3*Math.exp(-(t-56.5)*1.7);
 // Breathing/anticipation affect torso only; anchored soles stay planted.
 for(let r of[m,p]){r.y+=2*Math.sin(t*2.3);if(t>=57.7&&t<59)r.y+=8*Math.sin(PI*U(t,57.7,59));}
 // Blinks are sparse, absolute-time, and never hide an impact pose.
 for(let r of[m,p]){let b=(t+(r===p?1.7:0))%5.7;r.blink=b>.06&&b<.2?.15:1;}
 return s;
}

function supplyBins(front=false){for(let x of[300,790]){if(!front){ellipse(x,1390,34,10,'#694D37',OUT,3);}else{roundRect(x-34,1394,68,56,7,'#B88B60',OUT,4);line(P(x-24,1403),P(x+24,1403),'#D6AF80',3);roundRect(x-9,1413,18,18,3,'#E4C58F',OUT,2);}}}
function text(str,x,y,size=32,color=OUT){ctx.font=`bold ${size}px "Moki Sans",sans-serif`;ctx.fillStyle=color;ctx.textAlign="center";ctx.fillText(str,x,y)}
function room(s){ctx.fillStyle='#EFDFC5';ctx.fillRect(0,0,W,H);roundRect(70,360,940,1260,300,'#E7D1B3');roundRect(100,390,880,1180,270,'#F5E8D0');ctx.fillStyle='#D6B18D';ctx.fillRect(0,1600,1080,320);line(P(0,1600),P(1080,1600),'#987654',6);for(let y of[1720,1850])line(P(0,y),P(1080,y),'#C19B79',3);
 // Peb's visibly supported stool preserves the canonical relative body sizes.
 roundRect(790,1450,120,22,8,'#A8744F',OUT,5);for(let x of[803,881])roundRect(x,1472,16,128,4,'#A8744F',OUT,4);
 for(let r of[s.m,s.p])ellipse(r.x,r===s.p?1463:1608,75*r.s,10*r.s,'#B79270');}
function table(s){let dx=s.shake;for(let x of[206,862])roundRect(x+dx,1480,24,122,5,'#976C4C',OUT,5);roundRect(170+dx,1460,740,32,10,'#AC7F55',OUT,6);roundRect(164+dx,1450,752,22,9,'#D6A671',OUT,5);line(P(192+dx,1457),P(886+dx,1457),'#EDD0A0',3);}
function cube(b){if(!b.visible)return;ctx.save();ctx.translate(b.x,b.y);ctx.rotate(b.a);let col=b.side==='m'?['#E99059','#F2BA64','#D9754B'][b.i%3]:['#78BAAA','#A4CFB7','#63A79E'][b.i%3];roundRect(-25,-25,50,50,6,col,OUT,4);line(P(-17,-16),P(12,-16),'#FCE9C8',3);line(P(18,-12),P(18,18),'#926D55',2);ctx.restore();}
function glass(s){let g=s.glass;ctx.save();ctx.translate(g.x,g.y);ctx.rotate(g.a);ctx.beginPath();ctx.moveTo(-44,-91);ctx.bezierCurveTo(-49,-48,-13,-20,-8,0);ctx.bezierCurveTo(-13,20,-49,48,-44,91);ctx.lineTo(44,91);ctx.bezierCurveTo(49,48,13,20,8,0);ctx.bezierCurveTo(13,-20,49,-48,44,-91);ctx.closePath();ctx.fillStyle='#E3EBDA';ctx.fill();ctx.save();ctx.clip();ctx.rotate(-g.a);ctx.fillStyle='#DCA949';if(s.t>=37.5&&s.t<52.1){ctx.fillRect(-110,8,220,70);}else{ctx.fillRect(-140,-91*g.top,280,91*g.top);ctx.fillRect(-140,91*g.top,280,91*(1-g.top));}if(g.flow){ctx.fillRect(-2,-16,4,107);for(let k=0;k<6;k++)ellipse(Math.sin(k*7)*3,((s.t*120+k*21)%90),2,2,'#F1C968');}ctx.restore();if(s.t>=52.1&&s.t<61.5){for(let k=0;k<5;k++)ellipse((k%3-1)*5,-11-Math.floor(k/3)*7,5,5,'#DCA949','#A4772E',1);}
 ctx.beginPath();ctx.moveTo(-44,-91);ctx.bezierCurveTo(-49,-48,-13,-20,-8,0);ctx.bezierCurveTo(-13,20,-49,48,-44,91);ctx.lineTo(44,91);ctx.bezierCurveTo(49,48,13,20,8,0);ctx.bezierCurveTo(13,-20,49,-48,44,-91);ctx.closePath();ctx.strokeStyle='#577F81';ctx.lineWidth=4;ctx.stroke();line(P(-31,-76),P(-32,-54),'#FFF6E1',5);line(P(31,57),P(29,76),'#FFF6E1',4);for(let y of[-102,102])roundRect(-65,y-8,130,16,6,'#9D6D4B',OUT,4);for(let x of[-58,58])line(P(x,-94),P(x,94),'#A47B50',8);ctx.restore();}
function endcard(t){ctx.fillStyle='#F5E8D0';ctx.fillRect(0,0,W,H);ellipse(540,950,450,350,'#E7D1B3');text('MOKI & PEB',540,430,62,'#755B40');text('THE HOURGLASS RACE',540,510,34,'#987654');let m=actor('m',365,1170,{expr:'smile'}),p=actor('p',735,1170,{expr:'smile'});m.right=P(530,960+12*Math.sin(t*5));p.right=P(845,1030+10*Math.sin(t*5));let s={t,m,p};drawCharacter(m,s);drawCharacter(p,s);text('Like & Subscribe please',540,1320,47);text('Leave the next challenge in the',540,1425,33,'#80644B');text('comments for Moki and Peb.',540,1473,33,'#80644B');}
function draw(t){ctx.reset();ctx.fillStyle="#D6B18D";ctx.fillRect(0,0,W,H);if(t>=64){endcard(t);return;}let s=scene(t);ctx.save();ctx.translate(540,1150);ctx.scale(1.17,1.17);ctx.translate(-540,-1400);room(s);drawCharacter(s.m,s,false);drawCharacter(s.p,s,false);table(s);supplyBins();for(let b of s.blocks)cube(b);supplyBins(true);glass(s);for(let r of[s.m,s.p]){drawHand(r,'left',s);drawHand(r,'right',s);}if(t>=38.5&&t<42){text('...',540,1110,48,'#987654');}if(t>=59&&t<61.5){text('...',540,1120,48,'#987654');}ctx.restore();text('MOKI & PEB',540,185,56,'#755B40');text('THE HOURGLASS RACE',540,255,34,'#987654');}
window.seek=draw;window.scene=scene;window.local=local;window.drawCharacter=drawCharacter;window.drawHand=drawHand;window.CUTS=CUTS;window.FILM={duration:70,storyDuration:64,fps:60,width:W,height:H,shots:shotList};draw(0);
})();
