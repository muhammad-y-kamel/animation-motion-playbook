"""Pure proposed classification only. No poll, signal, wait, fd open or grant."""
POLLIN=1;POLLERR=8;POLLHUP=16;POLLNVAL=32
def classify(e):
 hold={'classification':'UNRESOLVED_HOLD','ownWaitReap':False,'returncode':None,'qaAcceptance':False,'releaseAuthorized':False}
 required=('sameOriginalOwnerContinuouslyAlive','sameOriginalPidfdContinuouslyRetained','registeredFullIdentityMatches','kernelProcessPidfdFlagsZero','actualBatPollSemanticsQualified','rootExitCategoryExplicitlyAdmitted','ownWaitAttempted')
 if not all(e.get(k)is True for k in required):return hold
 if e.get('ownWaitErrno')!='ECHILD':return hold
 events=e.get('pollEvents')
 if type(events)is not int or events&~(POLLIN|POLLHUP)or not(events&(POLLIN|POLLHUP)):return hold
 return {'classification':'EXIT_OBSERVED_VIA_RETAINED_PROCESS_PIDFD_NO_OWN_REAP','ownWaitReap':False,'returncode':None,'qaAcceptance':False,'releaseAuthorized':False,'eligibleForFailureOnlyClosureReview':True,'observedPollMask':events,'kernelHangupObserved':bool(events&POLLHUP),'scope':'No live thread group at observed poll under qualified semantics; no successful decoder/normal controller-reap/exit-code claim. Lease policy still requires every owned target and separate terminal authority.'}
