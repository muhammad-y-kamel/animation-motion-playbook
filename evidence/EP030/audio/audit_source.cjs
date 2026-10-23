const fs=require('fs'),crypto=require('crypto'),{w}=require('../render.cjs');
const S=t=>w.scene(t),checks=[];
function test(name,ok,data){checks.push({name,pass:!!ok,data});}
for(let t of[1,17.2,46,62,125,148]){let a=S(t-1/60),b=S(t),c=S(t+1/60);test('platform stop '+t,Math.abs(b.l-c.l)<.01&&Math.abs(a.l-b.l)>.0001,{before:a.l,at:b.l,after:c.l});}
for(let t of[5.65,7.05,8.45,9.85,11.25]){let a=S(t-1/60),b=S(t);let da=b.p.feet[0].y-a.p.feet[0].y;test('Peb hop landing '+t,da>1&&Math.abs(b.p.feet[0].y-(b.r-23*b.p.s))<.01,{foot:b.p.feet[0],deck:b.r,descent:da});}
for(let t of[31,130]){let a=S(t-1/60),b=S(t),c=S(t+1/60);test('box arrival '+t,Math.abs(b.box.x-c.box.x)<.01&&Math.abs(a.box.x-b.box.x)>.0001,{before:a.box,at:b.box,after:c.box});}
for(let [t,label] of[[75,'peg'],[82.4,'caught rope'],[116.5,'Peb hand'],[157.5,'left latch'],[160,'right latch']]){let b=S(t),contact=b.contacts.filter(q=>q.label===label);test('hand contact '+label,contact.length>0,{time:t,contact});}
for(let [t,deck] of[[57,920],[92,880]]){let a=S(t-1/60),b=S(t);test('box clearing jump lands '+t,a.p.feet[0].y<b.p.feet[0].y&&Math.abs(b.p.feet[0].y-(deck-23*b.p.s))<.01,{before:a.p.feet[0],at:b.p.feet[0],deck});}
for(let t of[24,25,28,30]){let b=S(t);test('box owned while carried '+t,b.contacts.some(x=>x.label==='box handle'),{time:t,box:b.box});}
test('water interval102..112',S(102).water===1&&S(112).water===0,{start:S(102).water,end:S(112).water});
test('transfer deck coincidence116.5',S(116.5).l===630&&S(116.5).r===630,{left:S(116.5).l,right:S(116.5).r});
test('ladder completed166.5',S(166.5).ladder===1,{u:S(166.5).ladder});
let q={source_sha256:crypto.createHash('sha256').update(fs.readFileSync(__dirname+'/../episode.js')).digest('hex'),scope:'Numerical cue/source alignment, not visual inspection or listening. Fold mechanics pending visual audit.',checks,pass:checks.every(x=>x.pass)};fs.writeFileSync(__dirname+'/source-alignment.json',JSON.stringify(q,null,2));console.log(JSON.stringify(q,null,2));process.exitCode=q.pass?0:1;
