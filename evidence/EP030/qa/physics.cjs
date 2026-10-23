// Independent semantic mechanism/continuity scan; no encoded visual/listening claim.
const fs=require('fs'),vm=require('vm'),crypto=require('crypto');
const dir=__dirname+'/..',src=fs.readFileSync(dir+'/episode.js','utf8'),sha=crypto.createHash('sha256').update(src).digest('hex');
const w=require('../render.cjs').w;
let violations=[],max={ropeError:0,handStep:0,footStep:0,boxStep:0,weightStep:0,bucketStep:0},prev;
const D=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y),pos=q=>({x:q.x,y:q.bottom}),add=(kind,t,data)=>violations.push({kind,t,...data});
for(let i=0;i<10500;i++){
let t=i/60,s=w.scene(t);max.ropeError=Math.max(max.ropeError,Math.abs(s.l+s.r-1260));if(s.l<379.99||s.l>880.01||s.r<379.99||s.r>880.01)add('travel-limit',t,{l:s.l,r:s.r});
if(Math.abs(s.p.s/s.m.s-.54)>1e-9)add('fixed-scale-ratio',t,{});
for(let who of['m','p']){let a=s[who];for(let f of a.feet)if(f.y+23*a.s>920.1)add('floor-penetration',t,{who,y:f.y+23*a.s});if(prev){for(let hand of['left','right'])max.handStep=Math.max(max.handStep,D(a[hand],prev[who][hand]));for(let k=0;k<2;k++)max.footStep=Math.max(max.footStep,D(a.feet[k],prev[who].feet[k]));}}
for(let key of['box','weight','bucket'])if(prev)max[key+'Step']=Math.max(max[key+'Step'],D(pos(s[key]),pos(prev[key])));
if(t>=139&&t<148&&prev&&(s.l>prev.l+1e-8||s.weight.bottom<prev.weight.bottom-1e-8))add('counterweight-energy-direction',t,{});
prev=s;}
let boundaries=[1,5,12,14,15.8,17.2,19,21,23,24,28,31,32,39.7,40,41,41.5,42,46,47,50,51,54,55,57,62,67,74,75,77,78,79,81.8,81.9,82,82.4,83,84,85,86,88,90,91,92,92.5,93,94,94.5,95,95.6,96,97,98,101,102,111,112,113,115,115.4,115.5,116,116.3,116.5,117.4,118,118.2,119,120,121,122,125,130,132,133,134,137,138,139,148,150,155,156,157,158,159,160,161,161.5,162,162.5,163,163.4,163.5,164,166.5,167,167.2,169,170,175];
let discontinuities=[];for(let t of boundaries){if(t>=175)continue;let a=w.scene(t-1e-7),b=w.scene(t);for(let who of['m','p']){for(let key of['left','right']){let d=D(a[who][key],b[who][key]);if(d>.1)discontinuities.push({t,who,key,d});}for(let k=0;k<2;k++){let d=D(a[who].feet[k],b[who].feet[k]);if(d>.1)discontinuities.push({t,who,key:'foot'+k,d});}let d=D(a[who],b[who]);if(d>.1)discontinuities.push({t,who,key:'body',d});}for(let key of['box','weight','bucket']){let d=D(pos(a[key]),pos(b[key]));if(d>.1)discontinuities.push({t,who:key,d});}}
let crossing=w.scene(116.5),out={sourceSHA256:sha,scope:'10500 story semantic states + epsilon boundaries; no encoded/pixel/occlusion or listening claim',max,violations,discontinuities,crossing:{left:crossing.l,right:crossing.r},pass:!violations.length&&!discontinuities.length&&max.ropeError<1e-9&&crossing.l===630&&crossing.r===630};fs.writeFileSync(__dirname+'/physics.json',JSON.stringify(out,null,2));console.log(JSON.stringify(out,null,2));
