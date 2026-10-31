import unittest
from pidfd_exit_model import classify,POLLIN,POLLHUP,POLLERR,POLLNVAL
class ExitModel(unittest.TestCase):
 def evidence(self):return {**{k:True for k in ('sameOriginalOwnerContinuouslyAlive','sameOriginalPidfdContinuouslyRetained','registeredFullIdentityMatches','kernelProcessPidfdFlagsZero','actualBatPollSemanticsQualified','rootExitCategoryExplicitlyAdmitted','ownWaitAttempted')},'ownWaitErrno':'ECHILD','pollEvents':POLLIN}
 def test_in_and_hup_failure_only_no_fake_reap(self):
  for flags in (POLLIN,POLLHUP,POLLIN|POLLHUP):
   e=self.evidence();e['pollEvents']=flags;r=classify(e);self.assertEqual(r['classification'],'EXIT_OBSERVED_VIA_RETAINED_PROCESS_PIDFD_NO_OWN_REAP');self.assertFalse(r['ownWaitReap']);self.assertIsNone(r['returncode']);self.assertFalse(r['qaAcceptance']);self.assertFalse(r['releaseAuthorized'])
 def test_every_missing_provenance_or_authority_holds(self):
  e=self.evidence()
  for k,v in list(e.items()):
   if v is True:
    bad=dict(e);bad[k]=False;self.assertEqual(classify(bad)['classification'],'UNRESOLVED_HOLD')
 def test_errors_no_event_threadfd_or_unknown_wait_hold(self):
  for events in (0,POLLERR,POLLNVAL,POLLIN|POLLERR,POLLIN|POLLNVAL,POLLIN|8192):
   e=self.evidence();e['pollEvents']=events;self.assertEqual(classify(e)['classification'],'UNRESOLVED_HOLD')
  e=self.evidence();e['ownWaitErrno']='EAGAIN';self.assertEqual(classify(e)['classification'],'UNRESOLVED_HOLD')
 def test_later_runner_or_reopened_numeric_pid_never_suffices(self):
  for key in ('sameOriginalOwnerContinuouslyAlive','sameOriginalPidfdContinuouslyRetained','registeredFullIdentityMatches'):
   e=self.evidence();e[key]=False;e['numericNamespaceAndPidMatch']=True;self.assertEqual(classify(e)['classification'],'UNRESOLVED_HOLD')
if __name__=='__main__':unittest.main(verbosity=2)
