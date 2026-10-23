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
