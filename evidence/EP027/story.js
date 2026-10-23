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
