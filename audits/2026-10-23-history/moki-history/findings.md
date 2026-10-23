# MOKI / What If / Hawaky Hara / Prophets — historical conversation audit

Retrieved 2026-10-23 through cloud_threads_read. Five specified threads, all pagination exhausted (93 pages, 377 messages). This does not establish all account conversations audited. Message dates and conversation URLs were not returned; exact thread/item IDs below are source locators, not invented web links. Four messages in the prompt thread were empty. Five messages in the prompts thread reported truncated=true (listed in coverage.json); four of those were empty, and one large prompt-extraction reply was truncated. These missing contents were not reconstructed. No artifacts independently viewed, audio listened to, or render tests rerun in this audit. All repairs are historical assistant claims unless explicit user report/acceptance is identified. Causes not recorded are not guessed. Secrets and unrelated discussion omitted. Existing EP026/27 case files not duplicated.

## MOKI-H01: Contact + miss readability
- Project: MOKI initial / Star
- Observed/reported issue: Launch hand overlapped star, disguising failed grab; planted feet drifted during lift.
- Cause and repair attempts: Source cause not specified; contacts and held jump pose adjusted.
- Outcome / evidence limit: Claimed revised beat frames clean; later user still reported overall choppiness.
- Status: historical_report_not_independently_verified
- Source: thread `01a157ad-5689-71e2-99e1-63bb19f0605b`, item `msg_0d962f3dd9a65c76016ad6f6f81cd88191b3aac114b9475279` (assistant); message excerpt:
> The beat-by-beat review caught two things to fix: the launch hand briefly overlapped the star, making the miss unclear, and the hero’s planted feet drifted during the lift. I’m correcting those contacts and giving the jump a short held pose so the near miss reads clearly.
- Source: thread `01a157ad-5689-71e2-99e1-63bb19f0605b`, item `msg_0d962f3dd9a65c76016ad6f7c87b24819185b865dea46d5f24` (assistant); message excerpt:
> The revised frames are clean: the missed grabs are clear, the ceiling impact compresses against the surface, and the feet and supporting hand stay fixed at their contact points. I’m finishing the timing checks, then rendering all 1,200 frames with three motion-blur samples per frame.
- Source: thread `01a157ad-5689-71e2-99e1-63bb19f0605b`, item `01a157be-8ef4-75fe-893e-26c83909d4db` (user); message excerpt:
> حلو دا
> 
> 
> أنت حصل عندك بس عطل صغير في تحريك الشخصيات وحركتها كانت مقطعة كتير
> 
> اعمل دي سلسلة كرتون شاملة غلف وصورة للشخصيات وبراندينج لقناة يوتيوب 
> 
> اعملي 100 حلقة طويلة من الكرتون دا مثلا كل واحدة من دقيقة لخمس دقائق باطوال مختلفة بافكر مختلفة وكلها مهيئة تطلع فايرال
> 
> وابعتلي كل حاجه بالايديتبول في ملف واحد

## MOKI-H02: Choppy pose transitions
- Project: MOKI initial100
- Observed/reported issue: User reported broken/choppy character motion.
- Cause and repair attempts: Assistant attributed part to abrupt pose changes; built fixed rigs/contact constraints/curves rather than only higher fps.
- Outcome / evidence limit: Blender test and contact checks claimed; no independent artifacts inspected.
- Status: historical_report_not_independently_verified
- Source: thread `01a157ad-5689-71e2-99e1-63bb19f0605b`, item `01a157be-8ef4-75fe-893e-26c83909d4db` (user); message excerpt:
> حلو دا
> 
> 
> أنت حصل عندك بس عطل صغير في تحريك الشخصيات وحركتها كانت مقطعة كتير
> 
> اعمل دي سلسلة كرتون شاملة غلف وصورة للشخصيات وبراندينج لقناة يوتيوب 
> 
> اعملي 100 حلقة طويلة من الكرتون دا مثلا كل واحدة من دقيقة لخمس دقائق باطوال مختلفة بافكر مختلفة وكلها مهيئة تطلع فايرال
> 
> وابعتلي كل حاجه بالايديتبول في ملف واحد
- Source: thread `01a157ad-5689-71e2-99e1-63bb19f0605b`, item `01a157bf-8c9a-74c0-9234-f2cbad70e4ce` (user); message excerpt:
> ينفع تعملهم بابلكيشن تحريك مثلا عندك او بليندر او حاجه ؟ 
> 
> [حيث مايحصلش الكسور دي؟
- Source: thread `01a157ad-5689-71e2-99e1-63bb19f0605b`, item `msg_0d962f3dd9a65c76016ad6f9cbdba48191aea8cdb624495d36` (assistant); message excerpt:
> آه، ينفع، وده اتجاه مناسب للسلسلة. من الكود السابق واضح إن بعض وضعيات الجسم بتتغيّر فجأة بين مراحل الحركة، وده يفسّر جزءًا من التقطيع؛ زيادة الفريمات وحدها مش كفاية.
> 
> هراجع تشغيل Blender هنا، وأبني للشخصيات هيكل تحريك ثابت، مع تثبيت اليد والقدم وقت التلامس، وضبط منحنيات الحركة بين الوضعيات. كمان هضيف ملفات المشروع الأصلية القابلة للتعديل للحزمة. هثبت جودة الحركة في مشهد اختبار قبل تطبيقها على الحلقات كلها.
- Source: thread `01a157ad-5689-71e2-99e1-63bb19f0605b`, item `msg_0d962f3dd9a65c76016ad6fac33d6881919176df536d6988ee` (assistant); message excerpt:
> اختبار Blender نجح، وملفات الشخصيات هتكون مشاريع تحريك فعلية قابلة للتعديل. لكن قياس سرعة الرندر هنا كشف إن تصدير 100 حلقة من Blender مباشرة هيحتاج وقتًا كبيرًا جدًا، لأن البيئة بتشتغل من غير كارت شاشة.
> 
> هجهّز مسار تصدير أسرع يستخدم نفس بيانات الحركة، مع الاحتفاظ بمشاريع Blender الأصلية. هراجع تطابق الحركة بين الاتنين في مشهد الاختبار، خصوصًا الإمساك بالأشياء وثبات القدمين، قبل بدء الإنتاج الجماعي.

## MOKI-H03: Temporal undersampling of short legs
- Project: MOKI initial100
- Observed/reported issue: Peb attempted long distances with tiny rapid steps, entire stride vanished between frames.
- Cause and repair attempts: Changed transitions; long-distance locomotion became short hops with fixed landings.
- Outcome / evidence limit: Selected-frame running test claimed no landing slips.
- Status: historical_report_not_independently_verified
- Source: thread `01a157ad-5689-71e2-99e1-63bb19f0605b`, item `msg_0d962f3dd9a65c76016ad6ffba841c8191b6c5a4f8307b9bc9` (assistant); message excerpt:
> اتحدد سبب إضافي للتقطيع: بيب قصير الرجلين، وكان بيحاول يقطع مسافة كبيرة بخطوات صغيرة وسريعة جدًا، فتختفي خطوة كاملة بين فريمين. عدّلت الانتقالات بين الوضعيات، وبحوّل المسافات الطويلة عنده لجري بقفزات قصيرة مع هبوط ثابت. الاختبار الحالي بقى من غير قفزات مفاجئة في مواضع اليدين عند تغيّر اللقطات، والموسيقى والمؤثرات الأصلية بدأت تتصدّر مع الحلقات.
- Source: thread `01a157ad-5689-71e2-99e1-63bb19f0605b`, item `msg_0d962f3dd9a65c76016ad700b3f9988191b61dd35dcfbac121` (assistant); message excerpt:
> اختبار الجري الجديد نجح: بيب بقى يثبت رجليه وقت الهبوط، من غير انزلاق في الفريمات اللي راجعتها. كمان ملف Blender اتفتح واترندر فعليًا، والصوت متضمّن داخله، فالتسليم هيشمل مشروعًا تتحكم فيه وتعدّل حركته. باقي المراجعة مركّز على وضوح الأدوات والمقالب، وبعدها التصدير الجماعي وتجميع البرومبت النهائي مع الملفات.

## MOKI-H04: Attachment / release lifecycle
- Project: MOKI initial100
- Observed/reported issue: Tools hung after release; Peb left lifting hand too early.
- Cause and repair attempts: Repaired body/prop/hand attachment relation; reaction camera adjusted.
- Outcome / evidence limit: Later global claims, no case-specific artifact proof.
- Status: historical_report_not_independently_verified
- Source: thread `01a157ad-5689-71e2-99e1-63bb19f0605b`, item `msg_0d962f3dd9a65c76016ad6fdca21e881918650991215f81b23` (assistant); message excerpt:
> مراجعة الصور كشفت نقطتين مهمتين قبل التصدير: بعض الأدوات كانت تفضل معلّقة بعد تركها، وبيب كان ينزل من اليد مبكرًا في مشهد الرفع. بصلّح الارتباط بين الجسم والأداة أو اليد نفسها، وبقرّب الكاميرا في ردود الفعل عشان التعبير والجملة الكوميدية يقروّا بوضوح. ملفات الهوية والشخصيات القابلة للتعديل خلصت بالفعل.

## MOKI-H05: Payoff state persistence
- Project: MOKI initial100
- Observed/reported issue: Bubble vanished without returning; character remained suspended after deflation.
- Cause and repair attempts: Repair claimed; exact algorithm not recorded.
- Outcome / evidence limit: Claimed repaired, continued ending review.
- Status: historical_report_not_independently_verified
- Source: thread `01a157ad-5689-71e2-99e1-63bb19f0605b`, item `msg_0d962f3dd9a65c76016ad7038e06f081918b0f0e035b927f09` (assistant); message excerpt:
> المراجعة كشفت كام مشكلة في نتيجة المقلب نفسه: فقاعة بتختفي ومبترجعش، وشخصية بتفضل معلّقة بعد خروج الهوا. اتصلحوا، وبراجع لقطات النهاية في الحلقات الطويلة. التصدير والتجميع هياخدوا وقت؛ الحزمة فيها فيديو فعلي ومشروع Blender منفصل لكل واحدة من الـ100 حلقة.
> 

## MOKI-H06: Occlusion and transform ownership
- Project: MOKI initial100
- Observed/reported issue: Moki body hid drum/tools; curtain rod rotated with cloth.
- Cause and repair attempts: Adjusted poses/grip; fixed rod independently.
- Outcome / evidence limit: No specific retest recorded in visible messages.
- Status: historical_report_not_independently_verified
- Source: thread `01a157ad-5689-71e2-99e1-63bb19f0605b`, item `msg_0d962f3dd9a65c76016ad704918ffc81919c819ad9a4be70e0` (assistant); message excerpt:
> مراجعة الحلقات كشفت كمان أدوات كانت موجودة فعلًا لكن جسم موكي بيحجبها، خصوصًا الطبلة، وستارة كان العارض بتاعها بيلف مع القماش. بظبط الوقفات وموضع الإمساك، وبثبّت عارض الستارة عشان المقلب يبان بوضوح. ملفات الصوت كمان بتتراجع لآخر ثانية قبل دمجها بالفيديو.
> 

## MOKI-H07: Face occlusion at bucket beat
- Project: MOKI initial100 EP002
- Observed/reported issue: Overlap obscured Peb face at bucket strike.
- Cause and repair attempts: Moved Peb and lowered Moki hand in earlier tired pose.
- Outcome / evidence limit: Claimed gag/reaction clearer; rerender planned.
- Status: historical_report_not_independently_verified
- Source: thread `01a157ad-5689-71e2-99e1-63bb19f0605b`, item `msg_0d962f3dd9a65c76016ad70ae4d22c8191a5972c462de98c02` (assistant); message excerpt:
> خلصت أول 50 حلقة فيديو. أثناء المراجعة ظهر تداخل في الحلقة الثانية كان بيحجب وش بيب وقت دقة الدلو؛ عدّلت مكانه وخليت إيد موكي تنزل في وقفة الإرهاق السابقة، فبقت الدقة ورد الفعل أوضح. هعيد إخراج الحلقة دي وفحصها مع استمرار تصدير باقي الموسم.

## MOKI-H08: Payoff persistence across support / consumption
- Project: MOKI initial100
- Observed/reported issue: Pot must remain on cart; Peb on moving board; food disappear after eating.
- Cause and repair attempts: 37 affected videos rerendered; timing/audio preserved.
- Outcome / evidence limit: 37 repairs and final MP4 decode claims, not independent visual verification.
- Status: historical_report_not_independently_verified
- Source: thread `01a157ad-5689-71e2-99e1-63bb19f0605b`, item `msg_0d962f3dd9a65c76016ad710f7ff708191a08080c20bf7f044` (assistant); message excerpt:
> قطة في الحلقات المئة. الإصلاحات الأخيرة ركّزت على إن النتيجة تظهر وتفضل موجودة: الأصيص فوق العربة، بيب فوق اللوح المتحرك، والأكل يختفي بعد ما يتاكل. الجاري الآن إعادة إخراج الحلقات المتأثرة وفحص ملفاتها النهائية قبل تجميع التسليم.
> 
- Source: thread `01a157ad-5689-71e2-99e1-63bb19f0605b`, item `msg_0d962f3dd9a65c76016ad713c804e48191a08229c17508c9f2` (assistant); message excerpt:
> اكتملت 23 من 37 نسخة فيديو احتاجت تعديلات أخيرة، من غير أخطاء جديدة في التصدير. الإصلاحات بتظهر في نتائج المقالب نفسها—زي بقاء الأشياء فوق وسائل النقل واختفاء الأكل بعد أكله—مع الحفاظ على مواعيد اللقطات والصوت.
- Source: thread `01a157ad-5689-71e2-99e1-63bb19f0605b`, item `msg_0d962f3dd9a65c76016ad71578da448191acc31120a4dd7451` (assistant); message excerpt:
> اكتملت كل إصلاحات الفيديو الـ37، وأصبح عندنا 100 ملف MP4 بالنسخ المصححة. الفحص الأخير بيعيد قراءة أي فيديو اتغيّر بالكامل، وفي نفس الوقت بيتكمل اعتماد مشروعات Blender. برومبت الإنشاء النهائي موجود داخل الحزمة باسم `PROMPT_FINAL_AR.txt`.

## MOKI-H09: Between-key interpolation contact drift
- Project: MOKI initial100 Blender
- Observed/reported issue: Three frames across two episodes had hand-grip slips despite source contact being correct.
- Cause and repair attempts: Increased animation key density; updated creation prompt1.2. Fast-rotation/puzzle, snowball and paper grips separately mentioned.
- Outcome / evidence limit: Claimed repaired saved Blender files; aggregate >3.5m endpoint/92k grip measurements within1px. Not independently replayed.
- Status: historical_report_not_independently_verified
- Source: thread `01a157ad-5689-71e2-99e1-63bb19f0605b`, item `msg_0d962f3dd9a65c76016ad71692de1481919e613ecb2d1b7896` (assistant); message excerpt:
> الفحص الأخير كشف انزلاقًا في مسكة اليد خلال ثلاثة إطارات موزعة على حلقتين. نقاط التلامس سليمة في المصدر، والمشكلة ظهرت بين مفاتيح الحركة داخل Blender؛ زوّدت كثافة المفاتيح في الحلقتين، وبعيد فحصهما قبل التسليم. وضفت الإصلاح ده إلى برومبت الإنشاء النهائي.
- Source: thread `01a157ad-5689-71e2-99e1-63bb19f0605b`, item `msg_0d962f3dd9a65c76016ad71724cba48191b275de345dd9a914` (assistant); message excerpt:
> إصلاح مسكة كرة الثلج اجتاز الفحص داخل ملف Blender الجديد. كمان نجح 38 من أصل 39 مشروعًا في دفعة الإصلاح الأساسية؛ باقي آخر الفحوص قبل تجميع الملف النهائي.
- Source: thread `01a157ad-5689-71e2-99e1-63bb19f0605b`, item `msg_0d962f3dd9a65c76016ad717a7c4a481919a78625f2d6fe93b` (assistant); message excerpt:
> إصلاح مسكة الورقة نجح أيضًا، فأصبحت كل حالات الانزلاق التي كشفها الفحص مُصلحة ومُعاد فحصها. المتبقي الآن مشروع الحلقة الأخيرة وفحصه، ثم تجهيز رابط تحميل الحزمة كاملة.
- Source: thread `01a157ad-5689-71e2-99e1-63bb19f0605b`, item `msg_0d962f3dd9a65c76016ad715ecccc48191ba5ed6e8601e3aea` (assistant); message excerpt:
> نجح فحص المسكات في لقطات الدوران السريع وقطعة الأحجية داخل ملفات Blender المصححة؛ فرق التلامس المقاس في الحالتين أقل بكثير من بكسل واحد. الحلقة المئة قيد البناء الآن، وباقي مشروعات الإصلاح بتكمل فحوصها بالتوازي.
- Source: thread `01a157ad-5689-71e2-99e1-63bb19f0605b`, item `msg_0d962f3dd9a65c76016ad7192a6d988191ad1cdb14cd428e8e` (assistant); message excerpt:
> اجتازت مشروعات Blender المئة الفحص النهائي: أكثر من **3.5 مليون قياس لنقاط الأطراف** و**92 ألف فحص لمسكات الأشياء**، بدون أخطاء تتجاوز بكسلًا واحدًا ضمن هذه الفحوص. الصوت المضمّن سليم في كل المشروعات. بجهّز الآن الملف الواحد الذي يجمع الفيديوهات والتعديل والهوية وبرومبت الإنشاء.

## MOKI-H10: Packaging size / delivery failure
- Project: MOKI initial100
- Observed/reported issue: 2.26GB archive could not be made available as one attachment.
- Cause and repair attempts: Reported512MB attachment cap; five split parts + assembly tool with checks, standalone preview/prompt.
- Outcome / evidence limit: Byte-identical reassembly claimed; no receiver-side success shown.
- Status: historical_report_not_independently_verified
- Source: thread `01a157ad-5689-71e2-99e1-63bb19f0605b`, item `msg_0d962f3dd9a65c76016ad719fe0b7081918c6061b548b2cff9` (assistant); message excerpt:
> الملف مكتمل وسليم، لكن حصل عطل في وسيلة حفظه وإتاحته. بعالج خطوة التسليم دي الآن؛ محتوى الأرشيف وفحوص الفيديو وBlender مكتملين.
- Source: thread `01a157ad-5689-71e2-99e1-63bb19f0605b`, item `msg_0d962f3dd9a65c76016ad71a87d9688191869365f8c5882da8` (assistant); message excerpt:
> سبب المشكلة اتضح: الحد الأقصى للمرفق الواحد **512 ميجابايت**، والحزمة الكاملة حجمها **2.26 جيجابايت**. هسلّم نفس الأرشيف في **خمسة أجزاء للتنزيل**، ومعاهم أداة صغيرة تعيد تجميعه إلى ملف ZIP واحد مطابق للأصل. وهرفق برومبت الإنشاء كملف مستقل كمان عشان تفتحه مباشرة.
- Source: thread `01a157ad-5689-71e2-99e1-63bb19f0605b`, item `msg_0d962f3dd9a65c76016ad71b6f78588191aee3035e15c401cc` (assistant); message excerpt:
> الأجزاء الخمسة جاهزة، واتأكدت إن تجميعها يطابق الأرشيف الأصلي بالكامل. بضيف كمان الحلقة الأولى كفيديو منفصل، عشان تقدر تشوف النتيجة قبل تحميل الحزمة الكبيرة.
> 

## MOKI-H11: Heavy conversation unavailable on user device
- Project: MOKI EP002 recovery
- Observed/reported issue: User could not load Code Animation Build and asked completedfiles/EP002 alone.
- Cause and repair attempts: Located completed bundle, extracted EP002 separately.
- Outcome / evidence limit: Assistant delivered1:08 1080p60 and claimed AV integrity; user-side download unverified.
- Status: historical_report_not_independently_verified
- Source: thread `01a158a7-4a10-74e1-a3ee-91d863e46041`, item `01a158a7-cb2f-705e-8d63-0d718883dd2e` (user); message excerpt:
> في محادثة عالحساب باسم code animation build مش راضية تحمل عالجهاز عندي نهائي وممكن لان فيها عنلية طويلة ومعقدة ممكن تعرفلي هي وصلت لفين لحد دلوقتي
- Source: thread `01a158a7-4a10-74e1-a3ee-91d863e46041`, item `msg_02c68397fadaff3b016ad7368a32788191bb1e9596a8190c70` (assistant); message excerpt:
> الحلقة الثانية موجودة ضمن الحزمة الكبيرة؛ جاري سحب الحزمة لاستخراج الفيديو وحده.
- Source: thread `01a158a7-4a10-74e1-a3ee-91d863e46041`, item `msg_02c68397fadaff3b016ad736fbc5bc81919169d32a9df99d04` (assistant); message excerpt:
> [تحميل الحلقة الثانية — MOKI_PEB_EP002.mp4](sandbox:/workspace/scratch/2bd226f8a726/episode2_extract/MOKI_PEB_EP002.mp4)
> 
> مدتها **دقيقة و8 ثوانٍ**، بجودة **1080p و60 إطار/ثانية**. تم فحص سلامة الفيديو والصوت.

## MOKI-H12: Conflicting detailed scripts vs outline
- Project: MOKI Gemini source
- Observed/reported issue: EP028 ending differs; EP029 hat versus scarf; EP030 elevator solution differs; three long episode tables label8scenes but contain7story+endcard.
- Cause and repair attempts: Extracted15 fullscripts016–030 and13conflicts; kept031–100 index-only; separated textual completeness from production readiness.
- Outcome / evidence limit: Conflict resolution not established for individual endings; original source preserved.
- Status: historical_report_not_independently_verified
- Source: thread `01a15f04-7dc4-76fd-a6ac-be390cbbf014`, item `msg_0a0fa065ef347140016ad8d8488fa4819782645c2de367c34b` (assistant); bounded excerpt:
> -21/task-2/moki-peb-extraction/missing-scripts.md). لم أُعد إنتاج EP001–EP015.
> 
> وثّقت **13 تعارضًا وملاحظة**، أبرزها اختلاف قفلة EP028، وتحول نهاية EP029 من قبعة إلى وشاح، واختلاف حل المصعد في EP030. التفاصيل في [تقرير التعارضات](/home/bat/Documents/Codex/2026-10-21/task-2/moki-peb-extraction/conflicts.md).
> 
> - [الحزمة الكاملة ZIP](/home/bat/Documents/Codex/2026-10-21/task-2/moki-peb-extraction.zip)
> - [التقرير والفهرس وروابط النصوص](/home/bat/Documents/Codex/2026-10-21/task-2/moki-peb-extraction/README.md)
> - [لقطة تؤكد آخر حلقة مكتملة](/home/bat/Documents/Codex/2026-10-21/task-2/moki-peb-extraction/source/page-end.png)
> 
> التحقق نجح لجميع الملفات الخمسة عشر. المرفقات الأصلية غير معروضة بالصفحة؛ لم تُفحص. لا يوجد عائق متبقٍ 
- Source: thread `01a15f04-7dc4-76fd-a6ac-be390cbbf014`, item `msg_0a0fa065ef347140016ad8d78c8d548197817cc1294df497cb` (assistant); message excerpt:
> 0 موجودة كفهرس فقط. أبرز الاختلافات في نهايتي EP028 وEP029، وآلية حل EP030؛ كما تصف الحلقات الطويلة ثلاثة جداول بأنها «8 مشاهد» بينما تحتوي فعليًا على 7 مشاهد قصة وبطاقة نهاية منفصلة.
> 
- Source: thread `01a15f04-7dc4-76fd-a6ac-be390cbbf014`, item `msg_0a0fa065ef347140016ad8d722434881978d226b1cf28a4493` (assistant); message excerpt:
> ة وجدول مشاهد يصل إلى النهاية؛ لكن توجد تعارضات بين بعض الملخصات والمشاهد، لذلك أفصل اكتمال النص عن جاهزيته للإنتاج.
> 

## WHATIF-H01: Object and character continuity
- Project: Harris1788
- Observed/reported issue: Money saving motion, book/paper transitions and room trajectories required correction.
- Cause and repair attempts: Corrections claimed before full render; exact algorithms not recorded.
- Outcome / evidence limit: Later encoded/fulltechnical checks claimed; no direct artifact inspection.
- Status: historical_report_not_independently_verified
- Source: thread `01a15161-568f-727a-9d02-00fe38e08077`, item `msg_00cae75d6af9eafd016ad57e932ef0819195ea4460f9b2d3c4` (assistant); message excerpt:
> راجعت لقطات موزّعة على الفيديو كله، وظهر منها شوية تفاصيل محتاجة تصحيح: حركة الفلوس مع الادّخار، انتقال الكتاب والورقة، ومسار الشخصيات بين الغرف. التصحيحات اتعملت، وبفحص لقطاتها الأخيرة قبل التصدير الكامل بجودة 1080p و60 إطار في الثانية. مدة الفيديو هتكون نفس التسجيل: 10 دقائق و6 ثوانٍ تقريبًا.

## WHATIF-H02: Occluded story papers
- Project: Harris vertical
- Observed/reported issue: Two papers' motion hidden by book in portrait composition.
- Cause and repair attempts: Adjusted their visibility.
- Outcome / evidence limit: Later composition reviewed; per-frame specifics unavailable.
- Status: historical_report_not_independently_verified
- Source: thread `01a15161-568f-727a-9d02-00fe38e08077`, item `msg_00cae75d6af9eafd016ad5961c5c10819188a845ffe4c1fca5` (assistant); message excerpt:
> مة اكتمل، والعناوين والثامبنيلز وجدول النشر جاهزين. مراجعة النسخة الرأسية أظهرت ورقتين كان الكتاب بيحجب حركتهما؛ بظبط ظهورهما لأنهما جزء من القصة، وبعدها يبدأ إخراج الفيديوهات النهائية.

## WHATIF-H03: Word onset cut at segment boundary
- Project: Harris vertical shorts
- Observed/reported issue: Part3 end touched beginning of next word; another quiet consonant onset crossed boundary.
- Cause and repair attempts: Moved first cut7frames and second3frames earlier into silence; updated captions/durations and part numbering.
- Outcome / evidence limit: Claimed exported boundary review clean.
- Status: historical_report_not_independently_verified
- Source: thread `01a15161-568f-727a-9d02-00fe38e08077`, item `msg_00cae75d6af9eafd016ad5989dcf988191a81d4b6bd95a4853` (assistant); message excerpt:
> فحص فواصل الصوت كشف إن نهاية الجزء الثالث بتلمس بداية الكلمة التالية. بقدّم الفاصل إلى السكتة اللي قبلها، وبطابق معه الترجمة؛ التسجيل نفسه كامل ومن غير تغيير. كمان ملفات الصوت الأصلية والمزيج المنفصل جاهزة ضمن الحزمة لو حبيت تعدّل المونتاج لاحقًا.
- Source: thread `01a15161-568f-727a-9d02-00fe38e08077`, item `msg_00cae75d6af9eafd016ad59a99f6d0819181bd1e967e161078` (assistant); message excerpt:
> الفاصل اتظبط بتقديمه 7 إطارات فقط إلى موضع صامت، واتحدثت الترجمة ومدد الجزأين الثالث والرابع في كل الملفات. بقية الفواصل سليمة، والرندر هيكمل من المقاطع المكتملة بعد التأكد إنها لم تتأثر بالتعديل.
- Source: thread `01a15161-568f-727a-9d02-00fe38e08077`, item `msg_00cae75d6af9eafd016ad59bc8eb3c81918f40eb50656e1cdc` (assistant); message excerpt:
> ظهر تمهيد حرف خافت عند فاصل ثانٍ، فبقدّمه 3 إطارات إلى السكتة السابقة أيضًا. كده الفصل بين الأجزاء يحافظ على بداية كل كلمة. حزمة الصور ونصوص النشر اتجمعت بالفعل، وباقي التجميع النهائي مرتبط باكتمال الفيديوهات وفحصها.
- Source: thread `01a15161-568f-727a-9d02-00fe38e08077`, item `msg_00cae75d6af9eafd016ad5a1ecb2a48191982bbd1993da2042` (assistant); message excerpt:
> مراجعة فواصل الأجزاء على الفيديو المصدّر سليمة حتى الآن، بما فيها الفاصلان اللي اتضبطوا لحماية بداية الكلمات. الفحص التقني مستمر، والمراجعة البصرية بتكمل باقي الكادرات.
> 

## WHATIF-H04: Intra-frame pose mutation
- Project: Harris vertical part8
- Observed/reported issue: Transient overlap at first frame of part8; Anne sitting pose changed inside same frame.
- Cause and repair attempts: Local pose transition correction; re-render affected internal segment.
- Outcome / evidence limit: Corrected final version said to pass; no independent frame inspected.
- Status: historical_report_not_independently_verified
- Source: thread `01a15161-568f-727a-9d02-00fe38e08077`, item `msg_00cae75d6af9eafd016ad5a2a417b48191b041932bef4b92b4` (assistant); message excerpt:
> المراجعة البصرية لقطت تراكبًا خاطفًا في وضع الشخصية عند أول إطار من الجزء الثامن. بصحّح الانتقال ده موضعيًا، ثم أعيد فحصه؛ الصوت وباقي القصة جاهزين.
> 
- Source: thread `01a15161-568f-727a-9d02-00fe38e08077`, item `msg_00cae75d6af9eafd016ad5a318fce08191bf73b46cae45a807` (assistant); message excerpt:
> سبب التراكب اتحدد واتصلّح: وضع جلوس آن كان بيتغير وسط الإطار نفسه. التصحيح بيؤثر على إطار واحد، وبيُعاد إخراج المقطع الداخلي اللي يحتويه مع الحفاظ على بقية الصورة والصوت.
> 
- Source: thread `01a15161-568f-727a-9d02-00fe38e08077`, item `msg_00cae75d6af9eafd016ad5a6d2e7608191acdc98b3fd932f2f` (assistant); message excerpt:
> النسخة المصححة اجتازت الفحص النهائي، والمراجعة البصرية اكتملت. بجمّع الآن الحزمة الكاملة، ومعها الحزمة الخفيفة الخاصة بالثامبنيلز ونصوص النشر وجدول المواعيد.
> 

## WHATIF-H05: Stale output reused after source fix
- Project: Harris vertical
- Observed/reported issue: Assembly used previous segment despite source correction.
- Cause and repair attempts: Replaced with actual fresh export and checked unaffected footage remained same.
- Outcome / evidence limit: Final corrected verification claimed; illustrates source fix ≠ delivered fix.
- Status: historical_report_not_independently_verified
- Source: thread `01a15161-568f-727a-9d02-00fe38e08077`, item `msg_00cae75d6af9eafd016ad5a48fbdd08191bdb502d67def1c69` (assistant); message excerpt:
> التصحيح جاهز في المصدر، لكن فحص التجميع كشف إنه أعاد استخدام نسخة المقطع القديمة. باستبدالها الآن بإخراج جديد فعلي، عشان الملف اللي هتستلمه يحتوي التصحيح فعلًا.
> 
- Source: thread `01a15161-568f-727a-9d02-00fe38e08077`, item `msg_00cae75d6af9eafd016ad5a3c6e0c48191a422f2c43d4c61f3` (assistant); message excerpt:
> الفحص الحالي بيتأكد إن التصحيح محصور في موضعه، وإن باقي لقطات القصة مطابقة للنسخة اللي اتراجعت. بعدها هتتضغط الملفات وتظهر لك روابطها مباشرة.
> 
- Source: thread `01a15161-568f-727a-9d02-00fe38e08077`, item `msg_00cae75d6af9eafd016ad5a6d2e7608191acdc98b3fd932f2f` (assistant); message excerpt:
> النسخة المصححة اجتازت الفحص النهائي، والمراجعة البصرية اكتملت. بجمّع الآن الحزمة الكاملة، ومعها الحزمة الخفيفة الخاصة بالثامبنيلز ونصوص النشر وجدول المواعيد.
> 

## WHATIF-H06: End duration drift
- Project: Harris titled shorts / Milan02
- Observed/reported issue: Small end differences after export; later Milan02 specifically1frame.
- Cause and repair attempts: Adjusted export settings on sample then allparts; updated source/handoff.
- Outcome / evidence limit: Claimed final timing checks / Milan02 pass.
- Status: historical_report_not_independently_verified
- Source: thread `01a15161-568f-727a-9d02-00fe38e08077`, item `msg_0bde8721998e6dd3016ad635f87bdc8191af531a23ef7fab00` (assistant); message excerpt:
> الأجزاء العشرة اتصدّرت. فحص التوقيت كشف فرقًا صغيرًا جدًا في نهاية بعض الملفات بسبب إعداد التصدير؛ ظبّطته في العينة، وبطبّق التصحيح على باقي الأجزاء قبل المراجعة النهائية.
- Source: thread `01a15161-568f-727a-9d02-00fe38e08077`, item `msg_0bde8721998e6dd3016ad636ab9bcc81919957e4624260e60c` (assistant); message excerpt:
> المراجعة النهائية نجحت للأجزاء العشرة: العناوين والأرقام واضحة، والصوت وتوقيتاته مطابقان للأصل. بجهّز لك كل فيديو منفصلًا، ومعاهم حزمتين صغيرتين للتحميل.
- Source: thread `01a15161-568f-727a-9d02-00fe38e08077`, item `msg_0fc5331f62e66b09016ad83d61eb508191af07bcfc2207a669` (assistant); message excerpt:
> براجع كمان نهايات الأجزاء بعد التصدير. ظهر فرق إطار واحد في مدة الجزء الثاني من ميلانو؛ بصحّحه قبل ضمّه للحزمة، والصوت نفسه كامل. الحلقة المختلفة «آران» بتكمل التصدير بأسلوب الحفر بالحبر على الورق.
> 
- Source: thread `01a15161-568f-727a-9d02-00fe38e08077`, item `msg_0fc5331f62e66b09016ad83dfced34819197c4dcb97198d75b` (assistant); message excerpt:
> تصحيح الجزء الثاني اكتمل واجتاز الفحص؛ دلوقتي أجزاء ميلانو 1 و2 و3 جاهزة. أول جزء من آران وصل لنحو 80٪ من التصدير، وبعد اكتماله هتقدر تشوف اختلاف الرسم والتحريك في فيديو بالصوت.
> 

## WHATIF-H07: Download / archive interoperability
- Project: Harris and later episodes
- Observed/reported issue: Repeated full/bundle/parts1–5 download failures; user saw password prompt; later episodes2–4 download failure.
- Cause and repair attempts: Fresh shorter ASCII names, Library alternatives, smaller bundles; simple unencrypted ZIP test extraction; direct MP4 bypass.
- Outcome / evidence limit: Assistant could extract without password; actual cause at user's device unknown, later download issues recur.
- Status: historical_report_not_independently_verified
- Source: thread `01a15161-568f-727a-9d02-00fe38e08077`, item `01a15495-11fe-7245-8584-531582b3ecc3` (user); message excerpt:
> بواطه خطا في تحميل الملف الكامل والحزمات
- Source: thread `01a15161-568f-727a-9d02-00fe38e08077`, item `01a154f2-e560-7265-af01-10b6eebec141` (user); message excerpt:
> الملفين محميين بكلمة مرور
- Source: thread `01a15161-568f-727a-9d02-00fe38e08077`, item `01a15540-766d-76f3-8c5f-84cee9f202c6` (user); message excerpt:
> ملفات 1 ل 5 فيها مشكلة مش راضية تتحمل
- Source: thread `01a15161-568f-727a-9d02-00fe38e08077`, item `01a15eb8-58a4-77df-8ac2-4acc516512e1` (user); message excerpt:
> وجدت خطأ في تحميل الحلقة الثانية والثالثة والرابعة
- Source: thread `01a15161-568f-727a-9d02-00fe38e08077`, item `msg_0bde8721998e6dd3016ad6431aa548819196b7406f0a4bd3f6` (assistant); message excerpt:
> ين أبسط، وأبعت كمان روابط الفيديوهات MP4 مباشرة عشان تقدر تحملها من غير فك ضغط. لسه ما عنديش دليل يحدد سبب طلب كلمة المرور عندك.
- Source: thread `01a15161-568f-727a-9d02-00fe38e08077`, item `msg_0bde8721998e6dd3016ad657990b2881918135d5a2b4d818ac` (assistant); bounded excerpt:
> أعدت إتاحة **الأجزاء من ١ لـ٥ بنسخ وروابط جديدة وأسماء أقصر**. دي نفس الفيديوهات اللي عليها العنوان ورقم الجزء، وراجعت إن الملفات سليمة.
> 
> **حمّل كل فيديو لوحده من هنا.** لو رابط اسم الملف مش بيحمّل، جرّب «تنزيل بديل» في نفس الصف:
> 
> | الجزء والعنوان | ملف الفيديو | الحجم | رابط بديل |
> |---|---|---:|---|
> | **١ — البداية** | [Harris_01.mp4](sandbox:/workspace/scratch/104693317ed9/resend/Harris_01.mp4) | 7.2 MB | [تنزيل بديل](https://chatgpt.com/api/library/files/libfile_1eb54e436b288191abdeaa58bb5cf53f/download) |
> | **٢ — حلم الخياطة** | [Harris_02.mp4](sandbox:/workspace/scratch/104693317ed9/resend/Harris_02.mp4) | 5.9 MB | [تنزيل بديل](https://
- Source: thread `01a15161-568f-727a-9d02-00fe38e08077`, item `msg_0dd7de45ee3a43ff016ad8c3b389d48191b97aef4fde8e5330` (assistant); bounded excerpt:
> جهّزت لك **روابط تحميل جديدة للحلقات الثانية والثالثة والرابعة**، وتأكدت إن الملفات كاملة ومطابقة للأصول، وإن بيانات الفيديو والصوت سليمة.
> 
> ### تحميل الحلقات الكاملة
> 
> اضغط على اسم الملف في الجدول:
> 
> | الحلقة | المدة | حجم الملف | رابط التحميل الجديد |
> |---|---:|---:|---|
> | **الثانية — باريس** | 9 دقائق و24 ثانية | 45 ميجابايت | [ep02_paris_Long.mp4](sandbox:/workspace/scratch/104693317ed9/episode_downloads_fixed/ep02_paris_Long.mp4) |
> | **الثالثة — منجم السلطان** | 9 دقائق و36 ثانية | 49.7 ميجابايت | [ep03_mine_Long.mp4](sandbox:/workspace/scratch/104693317ed9/episode_downloads_fixed/ep03_mine_Long.mp4) |
> | **الرابعة — آران** | 10 دقائق و23 ثانية | 126.9

## WHATIF-H08: Boring / repetitive writing and insufficient style novelty
- Project: WhatIf fourstories
- Observed/reported issue: User said ideas/scripts boring; wanted one genuinely new drawing/motion style.
- Cause and repair attempts: Decision-driven failure/cost, differentiated ending; Aran engraving/ink/yarn morphs rather than palette-only change.
- Outcome / evidence limit: User later adopted new writing/drawing style; not video-error proof.
- Status: historical_report_not_independently_verified
- Source: thread `01a15161-568f-727a-9d02-00fe38e08077`, item `01a15c38-cdbf-7281-a894-f0483b1795c5` (user); message excerpt:
> ع اختلاف واحد , حلقة منهم هتعملها باسلوب تحريك ورسم مختلف تماما ومناسب للقناة , واسلوب الاسكريبت حاليا ممل محتاج نسحنه شوية ونخليه جذاب اكتر
> 
> اعمل الاربع حلقات وبينهم حلقة واحدة مميزة وتبعتلي زي المرة اللي فاتت فيديو طويل عرضي وقسم الباقي لفيديوهات شورتس طولية
> 
> الافكار مش لازم تكون تابو اوي بس تكون صادمة شوية ومؤلمة وفيها حكمة وخالية من الملل لان الافكار الي فاتت كانت مملة كتير
- Source: thread `01a15161-568f-727a-9d02-00fe38e08077`, item `msg_0bde8721998e6dd3016ad823c87330819191debcd4eb457e30` (assistant); message excerpt:
> عدّلت نهاية سالم عشان ما تكررش إحساس نهاية حكاية الأم: الراوي يصلّح حذاء صاحبه، ويختار يسحَب رسالة تبريره ويرجع الحذاء وحده. كده كل حلقة لها أثر مختلف. براجع الآن ملفات النص والأداء الصوتي، وهجمع لكل حلقة حزمة مستقلة بأسماء قصيرة ومن غير كلمة مرور.
- Source: thread `01a15161-568f-727a-9d02-00fe38e08077`, item `msg_0bde8721998e6dd3016ad82e68c4d881919545854a8fa7f253` (assistant); message excerpt:
> خيط بيتفك ويتكوّن ويتحوّل إلى موج وحدود قارب، مع حركة للإبر والمجاديف والقماش.
> 
> الفرق في الرسم وطريقة التحريك نفسها، مش تغيير ألوان بس. لسه براجع شكلها والحركة قبل تصدير الفيديو النهائي، والاسكريبت محفوظ زي ما طلبت.
> 
> 
- Source: thread `01a15161-568f-727a-9d02-00fe38e08077`, item `01a15f38-68c8-7593-9644-ca5bb9d9d950` (user); message excerpt:
> اعتمد اسلوب التحريك والرسم الجديد
> واعتمد اسلوب كتابة الاسكريبت واعملي نسخه من كل برومبت فيهم نصية 

## WHATIF-H09: Composition defects
- Project: Aran portrait
- Observed/reported issue: Two composition locations needed correction; portrait character/detail clarity at risk.
- Cause and repair attempts: Corrected before fullrender; reviewed bothratios.
- Outcome / evidence limit: Claimed clean reviewed frames; unspecified coordinates/defect details.
- Status: historical_report_not_independently_verified
- Source: thread `01a15161-568f-727a-9d02-00fe38e08077`, item `msg_0bde8721998e6dd3016ad831225a108191ae3725de0f1358c5` (assistant); message excerpt:
>  والنصوص كما هي، وبجهّز حزمات منفصلة لكل حلقة بدون كلمات مرور. مراجعة آران كشفت موضعين محتاجين تعديل في تكوين الصورة؛ صلحتهم قبل الرندر الكامل، وجاري التأكد من ظهور الشخصيات والتفاصيل بوضوح في القياس الطولي.
> 
> 
- Source: thread `01a15161-568f-727a-9d02-00fe38e08077`, item `msg_0fc5331f62e66b09016ad835c42dbc8191a1ede93ebb1b0fd1` (assistant); message excerpt:
> مراجعة آران في المقاسين اكتملت بعد التعديلات، من غير أخطاء رسم ظاهرة في الإطارات المفحوصة. وبجهّز 3 صور مصغرة لكل حلقة؛ وبسبب مشاكل التحميل اللي حصلت قبل كده، هسلّم الشورتس كملفات منفردة وكمان في حزمات صغيرة بدون كلمة مرور.

## WHATIF-H10: Clipping ascent shot
- Project: Mine episode
- Observed/reported issue: Small crop/clipping at mine ascent.
- Cause and repair attempts: Fixed beforeexport.
- Outcome / evidence limit: Claim only; no artifact inspected.
- Status: historical_report_not_independently_verified
- Source: thread `01a15161-568f-727a-9d02-00fe38e08077`, item `msg_0fc5331f62e66b09016ad83a4af84c8191837ba19e2d50b239` (assistant); message excerpt:
> ن فيديو ميلانو الطولي اتصدّرت واتحققت من سلامتها؛ باقي المقطع بيكمل. كمان أصلحت قصًّا بسيطًا في مشهد صعود المنجم قبل دخوله مرحلة التصدير.

## WHATIF-H11: Corrupt intermediate video
- Project: Aran short02
- Observed/reported issue: Mux failed because intermediate image/video export invalid; audio intact.
- Cause and repair attempts: Added validation before mux and reran affectedpart; sourcearchive updated.
- Outcome / evidence limit: Later44finals claimed complete; intermediate technical cause not given.
- Status: historical_report_not_independently_verified
- Source: thread `01a15161-568f-727a-9d02-00fe38e08077`, item `msg_0fc5331f62e66b09016ad84a68737c81918f494772f9718c7a` (assistant); message excerpt:
> الجزء الثالث من آران اكتمل، لكن الجزء الثاني تعطل عند دمج الصورة مع الصوت بسبب ملف تصدير وسيط غير سليم. التسجيل الصوتي سليم؛ براجع السبب وأصلح الجزء قبل تسليمه، وبقية الفيديوهات مستمرة.
> 
- Source: thread `01a15161-568f-727a-9d02-00fe38e08077`, item `msg_0fc5331f62e66b09016ad84c3440148191a56526eaedd49c7d` (assistant); message excerpt:
> المشكلة اتحصرت في ملف الصورة الوسيط للجزء الثاني؛ التسجيل الصوتي سليم. بضيف فحصًا لملف التصدير قبل دمجه مع الصوت، ثم أعيد الجزء المتعطل. باقي التصدير مستمر بنفس الجودة والتحريك المتفق عليه.
- Source: thread `01a15161-568f-727a-9d02-00fe38e08077`, item `msg_0fc5331f62e66b09016ad84d63891481919653fb75a5e64477` (assistant); message excerpt:
> ource.zip](sandbox:/workspace/scratch/104693317ed9/production_batch_v2/delivery/Project_Source.zip) بالإصلاح. أسلوب آران المميز مستمر: رسم بالحبر على ورق فاتح، وحركة الخيوط والأمواج والقارب مرتبطة بأحداث الحكاية.

## WHATIF-H12: ASR false positive
- Project: Paris narration QA
- Observed/reported issue: Suspected missing speech in Paris.
- Cause and repair attempts: Compared recording; reported words complete and transcription wrong.
- Outcome / evidence limit: Record as ASR misclassification, not established TTS defect.
- Status: historical_report_not_independently_verified
- Source: thread `01a15161-568f-727a-9d02-00fe38e08077`, item `msg_0fc5331f62e66b09016ad8367bd8408191a529e31521c07c7d` (assistant); message excerpt:
> لمراجعة في العرضي والطولي، والعنوان المختصر ورقم الجزء ظاهرين على كل مقطع. كمان فحص الصوت حسم موضعًا مشتبهًا في باريس: الكلام موجود كامل، والمشكلة كانت في التفريغ الآلي. جاري الآن تجهيز ملفات التصدير النهائية.

## PROMPT-H01: Text lock blocked pronunciation normalization
- Project: Hawaky Hara TTS
- Observed/reported issue: Old instructions forbade number/word spelling changes even for pronunciation.
- Cause and repair attempts: Separate original script from TTS form; semantic/religious quote check; one request only if length permits.
- Outcome / evidence limit: Prompt repair claimed; no generatedaudio comparison here.
- Status: historical_report_not_independently_verified
- Source: thread `01a15135-c119-75c0-8c41-2d31e4351050`, item `msg_031100ec8af7f1be016ad939a5c6788191b36d7bec5190a33a` (assistant); bounded excerpt:
> 
> 
> **2. فصلت السكريبت الأصلي عن نسخة النطق**
> 
> دي أهم نقطة اتصلحت. النسخة القديمة كانت بتمنع تغيير كتابة الأرقام والكلمات بشكل يعطّل الطريقة الجديدة.
> 
> دلوقتي السكريبت الأصلي بيتحفظ كما هو، وتتجهز منه **نسخة مخصوصة للنطق** تسمح بـ:
> 
> - كتابة الأرقام بالنطق المصري المقصود، مع الحفاظ على القيمة والوحدة.
> - كتابة الأسماء الأجنبية بطريقة تساعد على نطقها.
> - التشكيل الجزئي للكلمات المحتاجة توضيح.
> - فصل تعبيرات زي «هنبعتلك» إلى «هنبعت لك» عند الحاجة.
> - ضبط الفواصل والنقط وحدود الجمل لخدمة الوقفات الطبيعية.
> 
> التحويلات دي مسموحة مباشرة، لكن إعادة صياغة الحكاية أو تغيير معلومة فيها محتاج طلب واضح. والآية أو الحديث المعتمد يفضل **حرفيًا بتشكيله وترقيمه**.
> 
> **3. خليت الأداء الطبيعي من غير وسوم هو الافتراضي**
> 
> النص المرسل للصوت هيكون نسخة
- Source: thread `01a15135-c119-75c0-8c41-2d31e4351050`, item `msg_031100ec8af7f1be016ad9396bf60881918367b1132a70080a` (assistant); message excerpt:
> فصلة تسمح بضبط الأرقام والأسماء والفواصل، ومن غير وسوم أداء افتراضيًا. ضفت كمان فحص يربط نسخة النطق بالأصل، عشان التعديلات الصوتية ما تغيّرش رقم أو معنى أو كلمة من الاقتباس الديني. هبعت لك ملف الـTTS المحدّث والحزمة بعد استبداله فيها.

## PROMPT-H02: Conflicting diacritization requirements
- Project: Hawaky Hara TTS
- Observed/reported issue: Old prompt had contradictory diacritics rules.
- Cause and repair attempts: Selective pronunciation-focused diacritics; preserve scripture/vocalization.
- Outcome / evidence limit: Prompt repair claimed, not audible validation.
- Status: historical_report_not_independently_verified
- Source: thread `01a15135-c119-75c0-8c41-2d31e4351050`, item `msg_031100ec8af7f1be016ad9339215108191bfad41c661df57b1` (assistant); message excerpt:
> تصعيد والعاقبة نابعين من اختيارات الشخصية بدل أعداد إجبارية للخناقات والصدمات. ولقيت تعارض قديم في التشكيل؛ هحسمه لصالح تشكيل انتقائي يخدم النطق، مع حفظ تشكيل الآية أو الحديث كما هو.

## PROMPT-H03: Overfixed voice choice
- Project: Hawaky Hara TTS
- Observed/reported issue: User rejected fixing Haytham for every narrator.
- Cause and repair attempts: Allow male/female; agent selects available female voice, useroverride priority; stable voice perstory.
- Outcome / evidence limit: Updated prompt claimed; no generatedaudio test.
- Status: historical_report_not_independently_verified
- Source: thread `01a15135-c119-75c0-8c41-2d31e4351050`, item `01a160d8-379e-701f-8736-ac71e92c7331` (user); message excerpt:
> ماتثبتش الصوت على هيثم بس
> 
> خلي فيه اختيار للصوت الحريمي
- Source: thread `01a15135-c119-75c0-8c41-2d31e4351050`, item `01a160d8-4baa-7084-813e-1a3fce6e7093` (user); message excerpt:
> خلي الاجينت هو يختار الصوت الحريمي
- Source: thread `01a15135-c119-75c0-8c41-2d31e4351050`, item `msg_0bf4a3a7c26f350e016ad94eb6c274819185d3b5ec3ec57a3d` (assistant); bounded excerpt:
> تمام يا يحيى، **عدّلت البرومبت بحيث الأجينت هو اللي يختار الصوت الحريمي بنفسه**، من غير ما يطلب منك اسم الصوت أو الـVoice ID.
> 
> قواعد الاختيار بقت كده:
> 
> - **لو الراوية ست:** يختار صوت حريمي من الأصوات المتاحة فعليًا، بنطق مصري طبيعي وأداء مناسب لشخصيتها وجو الحكاية، ويتحقق من اسم الصوت والـID قبل التوليد.
> - **لو الراوي راجل:** يختار صوت مناسب؛ هيثم موجود كاختيار سبق ونجح، لكنه مش إلزامي.
> - **الصوت المختار يفضل ثابت طول القصة** وكل أجزائها، مع الحفاظ على ضمائر السكريبت وشخصية الراوي.
> - لو إنت حدّدت صوت بعينه، اختيارك يبقى له الأولوية.
> 
> وحافظت على تحسينات النطق المصري، وكتابة الأرقام، والتشكيل الجزئي، والأداء الطبيعي من غير وسوم مشاعر مضافة افتراضيًا.
> 
> ### المل

## PROMPT-H04: Physical gesture versus audio expression scope
- Project: Historical TTS / video workflow
- Observed/reported issue: User wanted emotions/gestures/laughs in TTS; physical movements are not audible.
- Cause and repair attempts: Moved head/hand gestures to video instructions, kept audible expressions in TTS. Later Hawaky defaults removed tags in favor of supplied successful approach.
- Outcome / evidence limit: Workflow evolution, not demonstrated rendered defect.
- Status: historical_report_not_independently_verified
- Source: thread `01a15135-c119-75c0-8c41-2d31e4351050`, item `01a15143-1986-7692-b202-93668702ae25` (user); message excerpt:
> الtts البرومبت دا محتاج تعديل مهم اخراج الtts يطلع اوامر في الصوت للمشاعر والحركات والايماءات والضحكات والخ لان الفين لابس بقى بيدعمها وهي دي اللي هعملها
- Source: thread `01a15135-c119-75c0-8c41-2d31e4351050`, item `msg_09a52937867a763d016ad55150a3c08191ac0e2fd1e80725c9` (assistant); message excerpt:
> نص. هدمج تجهيز النطق والأداء في برومبت TTS واحد يطلع النص جاهزًا بهذه العلامات. أما حركة الرأس واليدين فدي تعليمات للفيديو؛ مش هضعها كأنها أوامر صوتية. genui{"citation":{"refs":["turn2view0","turn3view0"]}}
- Source: thread `01a15135-c119-75c0-8c41-2d31e4351050`, item `msg_031100ec8af7f1be016ad9396bf60881918367b1132a70080a` (assistant); message excerpt:
>  بالـID اللي بعته، ونسخة نطق مصرية منفصلة تسمح بضبط الأرقام والأسماء والفواصل، ومن غير وسوم أداء افتراضيًا. ضفت كمان فحص يربط نسخة النطق بالأصل، عشان التعديلات الصوتية ما تغيّرش رقم أو معنى أو كلمة من الاقتباس الديني. هبعت لك ملف الـTTS المحدّث والحزمة بعد استبداله فيها.

## Covered but not an observed defect

Prophets prompt adaptation explicitly retained easy Fusha rather than transferring Egyptian dialect wholesale, prohibited depicting prophets and unsupported dialogue, preserved religious texts, and decoupled narrator gender from prophet identity. These are requirements/prevention, not proof a generated video violated them. Source thread `01a15135-c119-75c0-8c41-2d31e4351050`, items `msg_0bf4a3a7c26f350e016ada0842e3608191a39718bd248071c0` and `msg_0bf4a3a7c26f350e016ada096c7ee88191bec17b878e0d3d95`.

Historical script factual/calculation disagreements were reported, but user subsequently instructed preserving supplied script words. This audit does not silently treat the proposed textual corrections as authorized/performed or validate historical facts. The full final audio is not independently checked.

Gemini source URL actually returned: https://gemini.google.com/share/407b503ca9fa . Its detailed script conflict claims are attributed to the extraction task, not a new browser inspection. No browser used.

