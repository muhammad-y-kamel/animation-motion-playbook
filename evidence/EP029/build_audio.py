"""EP029 original score and Foley, deterministic synthesis, no samples or speech."""
from pathlib import Path
import json
import numpy as np
from scipy.io import wavfile
from scipy.signal import butter,sosfilt
P=Path(__file__).resolve().parent;SR=48000;D=76;N=SR*D
rng=np.random.default_rng(290029);music=np.zeros((N,2));foley=np.zeros_like(music);cues=[]
def env(t,d,a=.006,r=.04):return np.minimum(1,t/a)*np.minimum(1,np.maximum(0,d-t)/r)
def put(dst,x,at,g,pan,label):
 i=round(at*SR);n=min(len(x),N-i);dst[i:i+n]+=x[:n,None]*g*np.sqrt(np.array([(1-pan)/2,(1+pan)/2]));cues.append({'time':float(at),'duration':n/SR,'gain':g,'pan':pan,'label':label,'stem':'music' if dst is music else 'foley'})
def tone(at,m,d=.35,g=.07,pan=0,voice='plucked'):
 t=np.arange(round(d*SR))/SR;f=440*2**((m-69)/12);p=2*np.pi*f*t
 if voice=='plucked':x=(np.sin(p)+.24*np.sin(2*p)+.09*np.sin(3*p))*np.exp(-t*9)*env(t,d,.003,.035)
 elif voice=='felt':x=(np.sin(p)+.11*np.sin(2*p))*env(t,d,.05,.23)
 else:x=(np.sin(p)+.16*np.sin(3*p))*env(t,d,.018,.06)
 put(music,x,at,g,pan,f'original {voice} note MIDI {m}')
def noise(d,lo=500,hi=6000):return sosfilt(butter(2,[lo,hi],btype='bandpass',fs=SR,output='sos'),rng.standard_normal(round(d*SR)))
def wool(at,d,g=.11,pan=.2,rate=32,label='wool unravel'):
 t=np.arange(round(d*SR))/SR;x=noise(d,800,6500)*(.35+.65*np.sin(np.pi*rate*t)**6)*env(t,d,.012,.045);put(foley,x,at,g,pan,label)
def knock(at,g=.13,pan=0,f=470,label='wood contact'):
 d=.12;t=np.arange(round(d*SR))/SR;x=(np.sin(2*np.pi*f*t)+.25*np.sin(2*np.pi*f*2.31*t)+.35*noise(d,700,6500))*np.exp(-t*45)*env(t,d,.0015,.02);put(foley,x,at,g,pan,label)
def gliss(at,d,f0,f1,g=.12,pan=0,label='musical reaction'):
 t=np.arange(round(d*SR))/SR;p=2*np.pi*(f0*t+(f1-f0)*t*t/(2*d));x=(np.sin(p)+.16*np.sin(3*p))*env(t,d,.006,.055);put(foley,x,at,g,pan,label)
def puff(at,d=.3,g=.16,pan=.2,label='soft wool landing'):
 t=np.arange(round(d*SR))/SR;x=(noise(d,100,1400)*.55+np.sin(2*np.pi*(110*t-30*t*t))*.4)*np.exp(-t*14)*env(t,d,.003,.06);put(foley,x,at,g,pan,label)
# Fresh playful 6/8-like lilting motif with unusual ascending/descending answers.
phrases=[(1.3,[67,71,74,72,69,67]),(10.1,[69,72,76,74]),(14.3,[67,69,73,72]),(20.3,[71,74,79,76]),(28.6,[69,72,71,67]),(34.6,[72,74,69,71]),(43.2,[64,67,71]),(58.3,[67,71,74]),(66.7,[74,76,79,76,74,71])]
for at,ns in phrases:
 for k,n in enumerate(ns):tone(at+k*.29,n,.28,.083,(-.18 if k%2 else .18))
for at,n in [(1.3,43),(10.1,45),(14.3,43),(20.3,47),(28.6,45),(34.6,43),(43.2,40),(58.3,43),(66.7,47)]:tone(at,n,.65,.09,-.12)
# Confident stroll; score beats are not represented as physical foot-contact Foley.
for k in range(10):tone(4+k*.48,[67,71,74,71,69][k%5],.25,.055,-.2)
# Thread pull begins at exact hook.
wool(.5,.48,.19,.25,42,'hook: first row unravel');gliss(.98,.22,510,760,.08,.22,'wordless shocked musical gasp')
wool(4,5,.11,.16,29,'continuous walk-driven unravel')
wool(9.5,4.1,.065,.3,20,'loose yarn gathered in hands')
wool(15,3,.105,.2,18,'yarn rolled into ball')
wool(19.5,.32,.07,-.15,15,'ball placed below chin')
# Ball rustle accelerates before soft catch; no harsh collision.
wool(23,1.25,.12,-.1,15,'ball rolling off scarf');knock(24.4,.10,-.2,780,'ball thread catches chair nail')
wool(25,3,.18,.2,47,'rapid unravel to one collar ring')
# Mobile disguise score tension; no guessed footsteps.
for k in range(15):tone(30+k*.59,[69,70,69,74][k%4],.22,.06,0,'reed')
gliss(40,.42,1100,530,.18,0,'last collar ring PING');puff(41.5,.38,.22,.18,'Peb and yarn pile soft floor landing')
# Pause and regret, then explicitly wooden knitting Foley.
for n in [64,67,71]:tone(42.1,n,.6,.035,0,'felt')
knock(45,.11,.2,880,'wooden knitting needles retrieved')
for k in range(83):
 at=46.5+k*.1;knock(at,.08+.015*(k%3==0),(-.13 if k%2 else .13),900 if k%2 else 690,'knitting needle contact')
for k in range(17):tone(46.5+k*.5,[67,71,74,79,76,74,71,69][k%8],.31,.057,0)
wool(46.5,8.5,.045,.12,21,'yarn feeds knitting')
wool(55.5,.5,.09,0,12,'shared scarf lifted');
for n in [55,67,71,74,79]:tone(56,n,1.7,.06,0,'felt')
# Circular tag: suspense, harmless hand-stop and musical chuckle rather than speech.
for at,n in [(60,71),(61.2,72),(62.3,73),(63,74)]:tone(at,n,.45,.075,-.1,'reed')
gliss(64.35,.15,460,1050,.13,.2,'wordless stop gasp');knock(64.5,.12,.2,410,'Peb catches Moki hand');wool(65,.3,.07,.2,18,'loose thread tucked away')
for k in range(5):gliss(66+k*.30,.18,480+(k%2)*90,400,.055,-.2,'musical laughing bounce')
# Exact six-second CTA has a newly written closing cadence.
for at,ns in [(70.15,[55,67,71,74]),(71.9,[57,69,72,76]),(73.35,[50,66,69,74]),(74.7,[43,67,71,79])]:
 for n in ns:tone(at,n,1.08,.055,0,'felt')
# Common linear attenuation preserves stem reconstruction. Final 250 ms fades to zero.
fade=np.sin(np.linspace(np.pi/2,0,12000))**2
for a in [music,foley]:a[-12000:]*=fade[:,None]
gain=min(1.6,.78/np.max(np.abs(music+foley)));music*=gain;foley*=gain
for name,a in [('music',music),('foley',foley),('EP029-mix',music+foley)]:wavfile.write(P/(name+'.wav'),SR,np.rint(a*32767).astype(np.int16))
(P/'cue-sheet.json').write_text(json.dumps({'episode':'EP029','duration':D,'sample_rate':SR,'seed':290029,'global_gain':float(gain),'critical_times':[.5,23,25,40,41.5,45,46.5,54.7,56,64.5],'visual_alignment':'Script-derived only; producer must compare actual rendered event frames. Footstep Foley intentionally omitted pending actual foot-contact timing.','cues':cues},indent=2))
print('EP029 original audio:',len(cues),'events; peak',np.max(np.abs(music+foley)))
