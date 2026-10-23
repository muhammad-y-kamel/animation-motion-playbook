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
const shotList=[{start:0,end:11,name:'A shield becomes a sail'},{start:11,end:24,name:'Fly, flip, float'},{start:24,end:38,name:'Captain Peb'},{start:38,end:45,name:'Four flying apples'},{start:45,end:52,name:'The perfect fruit bowl'},{start:52,end:58,name:'End card'}];
const CUTS=[11,24,38,45,52];
function keys(t,ks){if(t<=ks[0][0])return ks[0][1];for(let i=1;i<ks.length;i++)if(t<=ks[i][0])return mix(ks[i-1][1],ks[i][1],ease(t,ks[i-1][0],ks[i][0]));return ks.at(-1)[1]}
function actor(who,x,floor=FLOOR,opts={}){let r=who==='m'?rig(x,floor-85*MS,{s:MS,...opts}):little(x,floor-85*PS,{s:PS,...opts});r.feet=[P(x-55*r.s,floor-23*r.s),P(x+55*r.s,floor-23*r.s)];r.left=local(r,-145,-85);r.right=local(r,145,-85);return r;}
function resetHands(r){r.left=local(r,-145,-85);r.right=local(r,145,-85);}
function shift(r,dx,dy){r.x+=dx;r.y+=dy;r.feet.forEach(q=>{q.x+=dx;q.y+=dy});resetHands(r);return r;}
function boatX(t){return keys(t,[[25,490],[30.5,490],[32,750],[34,330],[36,745],[37.5,490],[39,370],[40.3,700],[41.6,390],[43,650],[44,540]]);}
const appleTimes=[39,40.3,41.6,43];
function rawScene(t){let m=actor('m',580),p=actor('p',825),u={x:640,y:1200,r:275,curve:-140,angle:0,handle:P(640,1480)},s={t,m,p,u,wind:t<44?1:0,contacts:[],apples:[],boat:false};
 if(t<11){let drag=ease(t,1,5.5),lower=ease(t,5.8,7),step=ease(t,7.3,8.6);m.x=mix(580,320,drag);m.y=FLOOR-85*MS; m.feet=[P(m.x-55*MS,FLOOR-23*MS),P(m.x+55*MS,FLOOR-23*MS)];m.rot=-.1*ease(t,.6,1.1)*(1-lower);resetHands(m);u.x=mix(640,380,drag);u.y=mix(1200,1470,lower);u.curve=t<.6?-140:mix(-140,130,spring(t-.6,27,.63));u.handle=mp(P(u.x,u.y+280),P(u.x+20,u.y-170),lower);m.x=mix(m.x,280,step);m.y-=130*step;m.feet=m.feet.map((q,i)=>P(mix(q.x,280+(i?48:-48),step),mix(q.y,1470+22*(1-Math.pow((280+(i?48:-48)-380)/275,2))-23*MS,step)));resetHands(m);m.right=u.handle;m.gripRight=true;m.expr=t<.6?'determined':t<5.8?'worried':'determined';m.gaze=t<.4?P(850,1300):P(u.x,u.y);m.left=local(m,-135,-110);p.expr=t<1?'wonder':'worried';p.gaze=m.right;p.rot=-.09*ease(t,0,.4);p.right=local(p,90,-250);if(t>=9){let rise=ease(t,9,11)*65;shift(m,-rise*.3,-rise);u.x-=rise*.3;u.y-=rise;u.handle.x-=rise*.3;u.handle.y-=rise;m.right=u.handle;p.gaze=P(u.x,u.y);}
 }else if(t<24){let ascent=ease(t,13,17),descent=ease(t,18,23.8),fy=t<13?keys(t,[[11,1325.1],[13,1300]]):mix(1300,820,ascent);if(t>=18)fy=mix(820,FLOOR-85*MS,descent);let xx=keys(t,[[11,260.5],[13,430],[17,540],[18,540],[23.8,465]]);m= s.m=actor('m',xx);shift(m,0,fy-m.y);let hoist=ease(t,11,12);u.x=mix(360.5,xx+65,hoist);u.y=mix(1405,fy-280,hoist);u.curve=t<17.5?130:mix(130,-140,spring(t-17.5,27,.63));u.handle=mp(P(380.5,1235),P(u.x,u.y+280),hoist);m.right=u.handle;m.gripRight=true;m.left=local(m,-110,-135);let tug=ease(t,17.3,17.5)*(1-ease(t,18.2,18.4));s.ring=P(u.x,u.y+160+40*tug);let ringGrip=ease(t,17.1,17.3)*(1-ease(t,17.8,18.2));m.left=mp(m.left,s.ring,ringGrip);if(t>=17.3&&t<17.8)s.contacts.push({kind:'ring-tug',point:s.ring,hand:m.left});m.expr=t<17.5?'worried':'smile';m.gaze=t<17.5?P(u.x,u.y):P(690,1600);let attach=ease(t,11,12),detach=ease(t,22.2,23.8);p=s.p=actor('p',mix(750,xx+42,attach));let py=mix(FLOOR-85*PS,fy+180,attach);p.y=Math.min(FLOOR-85*PS,mix(py,FLOOR-85*PS,detach));p.x=mix(p.x,685,detach);p.feet=[P(p.x-35,p.y+62*PS),P(p.x+35,p.y+62*PS)];resetHands(p);let hold=local(m,65,-30);let catchHand=ease(t,11.65,12)*(1-detach);p.left=mp(p.left,hold,catchHand);p.right=mp(p.right,local(m,105,-5),catchHand);p.gaze=t<17.5?P(u.x,u.y):local(m,0,-215);p.expr=t<17.5?'worried':'smile';if(t>=12&&t<22.2)s.contacts.push({kind:'peb-waist',point:hold,hand:p.left});s.contacts.push({kind:'umbrella-handle',point:u.handle,hand:m.right});
 }else{let settle=ease(t,24,25);u.x=mix(530,490,settle);u.y=mix(1240,1470,settle);u.curve=t<24.5?-140:mix(-140,130,spring(t-24.5,27,.63));u.handle=mp(P(530,1520),P(490,1300),settle);m=s.m=actor('m',mix(465,185,settle));p=s.p=actor('p',mix(685,850,settle));m.expr=p.expr='wonder';m.gaze=p.gaze=P(u.x,u.y);let hopP=ease(t,26.1,27),hopM=ease(t,28.4,29.5);let bx=boatX(t);if(t>=25)u.x=bx;u.handle=mp(P(530,1520),P(u.x+40,1360),settle);s.boat=t>=25;
 let px=mix(mix(685,850,settle),bx+110,hopP),py=mix(FLOOR-85*PS,1498,hopP)-190*Math.sin(PI*hopP);shift(p,px-p.x,py-p.y);
 let mx=mix(mix(465,185,settle),bx-95,hopM),my=mix(FLOOR-85*MS,1498,hopM)-180*Math.sin(PI*hopM);shift(m,mx-m.x,my-m.y);
 if(t>=27){p.left={...u.handle};p.right=local(p,105,-100);p.gripRight=true;p.expr='mischief';p.gaze=t<38?P(t%4<2?900:180,1350):P(900,1000);s.contacts.push({kind:'captain-handle',point:u.handle,hand:p.left});}
 if(t>=29.5){let row=Math.sin(t*TAU*1.4),a=t<46.5?1:1-ease(t,46.5,47);m.left=local(m,-145-28*row*a,-120+65*row*a);m.right=local(m,95+20*row*a,-85-45*row*a);m.expr='determined';m.gaze=P(120,1350);}
 if(t>=44){p.expr='curious';p.gaze=local(m,0,-215);}
 if(t>=46.1&&t<47.2){let tap=ease(t,46.1,46.5)*(1-ease(t,46.8,47.2));p.left=mp(p.left,local(m,110,-175),tap);p.gaze=local(m,0,-215);}
 if(t>=47){let rise=ease(t,47,47.5)*(1-ease(t,48,48.6));m.y-=65*rise;resetHands(m);m.expr=t<48?'curious':'smile';m.gaze=t<48?P(u.x,u.y):P(u.x+20,1472);if(t>=47.7&&t<48.7){p.left=local(m,115,-95);p.gaze=P(u.x+20,1472);}}
 for(let i=0;i<4;i++){let at=appleTimes[i],target=P(boatX(at)+[-180,-35,50,180][i],1472);if(t>=at-1.1&&t<at){let f=U(t,at-1.1,at);s.apples.push({i,x:mix(1120,target.x,f),y:mix(890,target.y,f)-100*Math.sin(PI*f),rot:f*TAU});}else if(t>=at){let q=P(bx+[-180,-35,50,180][i],1472);if(t>=49&&(i===0||i===3)){let r=i===0?m:p,hand=i===0?'left':'right';let grasp=ease(t,49,49.5),eat=ease(t,49.5,50);let h=local(r,i===0?-65:65,-135);q=mp(q,h,grasp);r[hand]=mp(r[hand],q,grasp);r.gaze=q;r.expr='smile';s.apples.push({i,...q,rot:0,bite:t>=(i===0?50:50.4)});}else s.apples.push({i,...q,rot:0});}}
 if(t>=49){m.expr=p.expr='smile';p.left=local(p,-105,-100);m.right=local(m,105,-100);}
 }
 for(let r of[s.m,s.p]){r.blink=1;for(let at of[r.type==='big'?2.2:3.1,8.2,15.3,20.8,31.1,36.4,44.5,48.8,51.2])if(Math.abs(t-at)<.067)r.blink=.12;}
 return s;}

function scene(t){let s=rawScene(t);let windows=[['m','left',8.85,9.15],['p','left',26.8,27.2],['m','left',29.3,29.7],['m','right',29.3,29.7],['m','left',46.8,47.2],['m','right',46.8,47.2],['p','left',47.5,47.9],['p','left',48.5,48.9],['m','right',48.9,49.2],['p','left',48.9,49.2]];for(let[who,part,a,b]of windows)if(t>a&&t<b)s[who][part]=mp(rawScene(a)[who][part],rawScene(b)[who][part],ease(t,a,b));s.contacts=s.contacts.filter(q=>q.kind!=='captain-handle'||(t>=27.2&&t<46.1));return s;}

function text(str,x,y,size=32,color=OUT){ctx.font=`bold ${size}px "Moki Sans",sans-serif`;ctx.fillStyle=color;ctx.textAlign='center';ctx.fillText(str,x,y)}
function room(s){ctx.fillStyle='#EBCDC0';ctx.fillRect(0,0,W,H);roundRect(55,400,970,1150,350,'#E3BFAF');roundRect(85,430,910,1080,320,'#F0DAC8');for(let x=80;x<1080;x+=140){line(P(x,1180),P(x,1545),'#B78675',14);}line(P(0,1190),P(1080,1190),'#C0937F',24);ctx.fillStyle='#CFA28C';ctx.fillRect(0,1600,W,320);line(P(0,1600),P(1080,1600),'#986C60',6);for(let y of[1705,1830])line(P(0,y),P(1080,y),'#BE8E78',3);for(let x=-100;x<1200;x+=220)line(P(x,1600),P(x-70,1920),'#BE8E78',3);text('MOKI & PEB',540,180,56,'#75564C');text('INSIDE-OUT UMBRELLA',540,246,34,'#986C60');}
function leaf(x,y,a,col){ctx.save();ctx.translate(x,y);ctx.rotate(a);ctx.beginPath();ctx.moveTo(-22,0);ctx.quadraticCurveTo(-3,-25,25,0);ctx.quadraticCurveTo(2,23,-22,0);ctx.fillStyle=col;ctx.fill();line(P(-22,0),P(29,0),'#906B4D',2);ctx.restore();}
function wind(s){if(!s.wind)return;for(let i=0;i<13;i++){let x=((1100-s.t*(270+i%3*80)+i*173)%1320+1320)%1320-120,y=640+(i*83)%910+30*Math.sin(s.t*3+i);leaf(x,y,s.t*3+i,['#C07B48','#AF9654','#D09850'][i%3]);}for(let i=0;i<5;i++){let x=((1200-s.t*600+i*260)%1400+1400)%1400-150,y=760+i*170;line(P(x,y),P(x+95,y-8),'#EBDCC7',4);}}
function umbrella(s,front=false){let u=s.u;ctx.save();ctx.translate(u.x,u.y);let c=u.curve,r=u.r;if(!front){ctx.beginPath();ctx.moveTo(-r,0);ctx.bezierCurveTo(-r*.72,c*1.34,r*.72,c*1.34,r,0);ctx.quadraticCurveTo(0,c>0?-34:26,-r,0);ctx.closePath();ctx.fillStyle='#F4C955';ctx.fill();ctx.lineWidth=7;ctx.strokeStyle=OUT;ctx.stroke();for(let q of[-.66,-.33,0,.33,.66]){ctx.beginPath();ctx.moveTo(r*q,0);ctx.quadraticCurveTo(r*q*.5,c*.75,0,c);ctx.strokeStyle='#BB903D';ctx.lineWidth=3;ctx.stroke();}ctx.restore();line(P(u.x,u.y+(c>0?110:-130)),u.handle,'#534D48',11);line(P(u.x,u.y+(c>0?110:-130)),u.handle,'#9D9684',5);ctx.beginPath();ctx.moveTo(u.handle.x,u.handle.y);ctx.quadraticCurveTo(u.handle.x+2,u.handle.y+35,u.handle.x+27,u.handle.y+28);ctx.quadraticCurveTo(u.handle.x+40,u.handle.y+20,u.handle.x+34,u.handle.y+9);ctx.strokeStyle=OUT;ctx.lineWidth=11;ctx.stroke();return;}
 if(c>0){ctx.beginPath();ctx.moveTo(-r,0);ctx.bezierCurveTo(-r*.72,c*1.34,r*.72,c*1.34,r,0);ctx.quadraticCurveTo(0,44,-r,0);ctx.closePath();ctx.fillStyle='#E9B849';ctx.fill();ctx.strokeStyle=OUT;ctx.lineWidth=7;ctx.stroke();line(P(-r,0),P(-r+18,4),'#FFE493',5);ctx.beginPath();ctx.moveTo(-r+18,7);ctx.quadraticCurveTo(0,47,r-18,7);ctx.strokeStyle='#FFE493';ctx.lineWidth=5;ctx.stroke();}ctx.restore();}
function apple(a){ctx.save();ctx.translate(a.x,a.y);ctx.rotate(a.rot||0);ctx.beginPath();ctx.moveTo(0,-18);ctx.bezierCurveTo(-30,-40,-47,-4,-25,22);ctx.bezierCurveTo(-12,40,-5,24,0,27);ctx.bezierCurveTo(8,28,15,37,29,18);ctx.bezierCurveTo(49,-12,26,-39,0,-18);ctx.fillStyle='#CA5747';ctx.fill();ctx.lineWidth=4;ctx.strokeStyle='#6C4337';ctx.stroke();line(P(0,-19),P(4,-34),'#6C4337',5);leaf(15,-31,-.2,'#6D9F6C');ellipse(-17,-12,6,9,'#EF8C72');if(a.bite){ellipse(28,-8,10,10,'#F6E7C4');ellipse(29,6,10,10,'#F6E7C4');}ctx.restore();}
function endcard(t){ctx.fillStyle='#F0DAC8';ctx.fillRect(0,0,W,H);ellipse(540,950,450,350,'#E7C5AD');text('MOKI & PEB',540,430,62,'#75564C');text('INSIDE-OUT UMBRELLA',540,510,34,'#986C60');let m=actor('m',365,1170,{expr:'smile'}),p=actor('p',735,1170,{expr:'smile'});m.right=P(530,960+12*Math.sin(t*5));p.right=P(845,1030+10*Math.sin(t*5));let s={t,m,p};drawCharacter(m,s);drawCharacter(p,s);text('Like & Subscribe please',540,1320,47);text('Leave the next challenge in the',540,1425,33,'#80644B');text('comments for Moki and Peb',540,1473,33,'#80644B');}
function draw(t){ctx.reset();if(t>=52){endcard(t);return;}let s=scene(t);room(s);wind(s);ctx.save();let z=t>=11&&t<24?.96:t>=38&&t<45?1.04:t>=45?1.06:1;ctx.translate(540,1280);ctx.scale(z,z);ctx.translate(-540,-1280);if(s.boat)ellipse(s.u.x,1610,265,18,'#AE7D68');else for(let r of[s.m,s.p])ellipse(r.x,1607,80*r.s,10*r.s,'#AE7D68');umbrella(s);if(s.ring){ellipse(s.ring.x,s.ring.y,16,10,"#B9B39A",OUT,4);}for(let r of[s.m,s.p])drawCharacter(r,s,false);if(s.ring&&t>=17.1&&t<18.2){line(P(s.ring.x,s.ring.y-40),s.u.handle,'#534D48',11);line(P(s.ring.x,s.ring.y-40),s.u.handle,'#9D9684',5);ellipse(s.ring.x,s.ring.y,16,10,'#B9B39A',OUT,4);}if(s.boat){line(P(s.u.x,s.u.y+110),s.u.handle,'#534D48',11);line(P(s.u.x,s.u.y+110),s.u.handle,'#9D9684',5);ctx.beginPath();ctx.moveTo(s.u.handle.x,s.u.handle.y);ctx.quadraticCurveTo(s.u.handle.x+2,s.u.handle.y+35,s.u.handle.x+27,s.u.handle.y+28);ctx.quadraticCurveTo(s.u.handle.x+40,s.u.handle.y+20,s.u.handle.x+34,s.u.handle.y+9);ctx.strokeStyle=OUT;ctx.lineWidth=11;ctx.stroke();}for(let a of s.apples)if(!(t>=49.5&&(a.i===0||a.i===3)))apple(a);if(s.boat||(t>=7&&t<11))umbrella(s,true);for(let a of s.apples)if(t>=49.5&&(a.i===0||a.i===3))apple(a);for(let r of[s.m,s.p]){drawHand(r,'left',s);drawHand(r,'right',s);}ctx.restore();}
window.seek=draw;window.scene=scene;window.local=local;window.drawCharacter=drawCharacter;window.drawHand=drawHand;window.CUTS=CUTS;window.FILM={duration:58,storyDuration:52,fps:60,width:W,height:H,shots:shotList};draw(0);
})();
