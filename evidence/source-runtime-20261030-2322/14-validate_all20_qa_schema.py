"""Metadata-only full standing QA schema gate; never creates authority or media."""
import argparse,json,pathlib,hashlib,importlib.util
B=pathlib.Path(__file__).parent
spec=importlib.util.spec_from_file_location('bound',B/'build_bound_plan.py');m=importlib.util.module_from_spec(spec);spec.loader.exec_module(m)
def validate(plan,go,plan_hash):
 c={'standingPlanSha256':plan_hash,'motionPlanSha256':plan_hash}
 authority=m.validate_standing_documents(c,plan,go,m.read(m.EXPECTED)['windows'])
 auth=authority['authorization'];fresh=auth['freshRuntimeInventoryAuthorization'];inv=m.read(plan['qaRuntimeInventory']['path'])
 assert m.sha(plan['qaRuntimeInventory']['path'])==plan['qaRuntimeInventory']['sha256']
 assert fresh=={'status':'ROOT_APPROVED_EXACT_FRESH_RUNTIME_INVENTORY','sha256':plan['qaRuntimeInventory']['sha256'],'fileCount':437,'bootId':plan['freshEnvironment']['bootId']}
 assert len(inv['files'])==437 and inv['labelFontPath']
 assert m.sha(B/'run_qa.py')==auth['qaWrapperSha256']==m.QA_SHA
 assert m.sha(B/'qa_window.py')==auth['qaEngineSha256']==m.ENGINE_SHA
 rows=[]
 for wid in plan['sequentialWindowOrder']:
  assignment=authority['assignments'][wid];assert assignment['qaSlotId'] in authority['slots']
  rows.append({'windowId':wid,'assignment':assignment,'freshRuntimeInventoryAuthorization':fresh,'status':'COMPLETE_METADATA_SCHEMA_PASS_NO_FUTURE_MEDIA_CLAIM'})
 assert len(rows)==20
 return {'status':'ALL20_QA_METADATA_SCHEMA_PASS','rows':rows,'scope':'Actual standing authority metadata only. Every later encoder closure/media hash/slot/decoder admission still separately fail-closed.'}
if __name__=='__main__':
 ap=argparse.ArgumentParser();ap.add_argument('--plan',required=True);ap.add_argument('--go',required=True);ap.add_argument('--output',required=True);a=ap.parse_args();p=m.read(a.plan);g=m.read(a.go);r=validate(p,g,m.sha(a.plan));r.update(planSha256=m.sha(a.plan),standingGoSha256=m.sha(a.go))
 with pathlib.Path(a.output).open('x')as f:json.dump(r,f,indent=2);f.write('\n')
 print(r['status'])
