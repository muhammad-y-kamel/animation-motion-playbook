// Reusable deterministic swept contact helpers. No episode dimensions here.
function sweptTimes({duration,fps=60,subsamples=4,boundaries=[],epsilon=1e-6}){const out=new Set();for(let i=0;i<duration*fps*subsamples;i++)out.add(i/(fps*subsamples));for(const t of boundaries)for(const d of[-epsilon,0,epsilon])if(t+d>=0&&t+d<duration)out.add(t+d);return [...out].sort((a,b)=>a-b);}
function ellipseBoundary({x,y,rx,ry,angle=0,stroke=0,samples=128}){let pts=[],c=Math.cos(angle),s=Math.sin(angle);for(let k=0;k<samples;k++){let a=k*Math.PI*2/samples,ca=Math.cos(a),sa=Math.sin(a),nx=ca/rx,ny=sa/ry,n=Math.hypot(nx,ny),xx=rx*ca+stroke/2*nx/n,yy=ry*sa+stroke/2*ny/n;pts.push({x:x+xx*c-yy*s,y:y+xx*s+yy*c});}return pts;}
function supportResidual(points,surface){return Math.max(...points.map(p=>p.y-surface(p.x)));}
function polygonRectDepth(points,r){let depth=0;for(const p of points)if(p.x>r.x0&&p.x<r.x1&&p.y>r.y0&&p.y<r.y1)depth=Math.max(depth,Math.min(p.x-r.x0,r.x1-p.x,p.y-r.y0,r.y1-p.y));return depth;}
function circleRectDepth(p,radius,r){let x=Math.max(r.x0,Math.min(r.x1,p.x)),y=Math.max(r.y0,Math.min(r.y1,p.y));return Math.max(0,radius-Math.hypot(x-p.x,y-p.y));}
module.exports={sweptTimes,ellipseBoundary,supportResidual,polygonRectDepth,circleRectDepth};
