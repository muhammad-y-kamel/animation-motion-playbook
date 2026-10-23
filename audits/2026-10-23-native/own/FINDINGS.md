# Coursera / chibi — native conversation findings

These six records are new to the existing playbook corpus. All are historical user-reported defects or a generation-workflow failure, not newly verified repairs. Every proposed repair must be tested on an actual output.

## NATIVE-COURSERA-01 — Repeated puppet-like nodding and inappropriate notebook interaction

**Discovery:** user

Viewer repeatedly nods throughout clip; pen/notebook actions contradict focused listening.

**Cause:** Assistant hypothesis: vague engaged/interested wording led to repetitive nodding; not model-internal proof.

**Trials:**
1. Original detailed gesture prompt.
2. Replaced nodding/pen/reading with sparse breathing/blink/posture micro-movements and brief end cat pat.

**Outcome:** Revised prompt supplied; later freezing regression documented separately; no verified video fix.

**Prevention:** Specify discrete motivated actions and review temporal repetition, not only still-frame fidelity.

- [user 2026-07-06T21:46:55.367190Z](https://chatgpt.com/c/6a4c060c-8f30-83ea-a1e1-8de605143eeb?messageId=bbb21fda-faad-4a67-91ed-4874d5279b2c) — بص فكك من التعديل بتاع الصورة للامنة دا ، هو الشخص اضلا ai generated  هستعمل جوجل اومني افضل ، بس عاوزك تظبط البرومبت ، الشخصية عمالة تومئ براسها طول الفيديو كانها لعبة صلح المشكلة دي ، وكمان عاوزك تشيل خطوة مسك القلم او التقري من النوتة لانها غير منطقية هي بتستمع مركة وممكن تربت عالقطة فلنهاية قبل قفلة الفيديو وبس
- [assistant 2026-07-06T21:47:00.430249Z](https://chatgpt.com/c/6a4c060c-8f30-83ea-a1e1-8de605143eeb?messageId=4c4c625b-20ef-4dfd-ae7f-081ad310d7bf) — تمام، المشكلة واضحة:   **الموديل فهم “مركز ومهتم” = هز راس مستمر**، وده بيطلع الشخصية كأنها لعبة.   الحل إننا **نقفل الحركة دي صراحة** ونحدد بدلها **micro-movements قليلة جدًا**.  وده التعديل الصح: - **ممنوع head bobbing / repeated nodding / rhythmic nodding** - مفيش مسك قلم - مفيش قراءة من النوتة - النوتة موجودة كجزء من الديكور فقط - التفاعل الوحيد الإضافي: **ربتة خفيفة على القطة قرب النهاية ثم قفلة هادية**  ---  # برومبت 1 — نسخة الراجل (Project Management)  ```text Use the uploaded First Frame as the exact opening frame of the video. Preserve the same composition, room layout, decor, camera

## NATIVE-COURSERA-02 — Image/UI content distorted with overlapping letters

**Discovery:** user

User reports changed image content and overlapping letters in several positions.

**Cause:** Regeneration of image/UI is suspected from response; not independently established.

**Trials:**
1. Added exact first-frame preservation and no redraw/rewrite/morph screen constraints.
2. Strong global preservation later produced freezing complaint (COURSERA-03).

**Outcome:** Prompt revisions only; image fidelity fix not verified.

**Prevention:** Define protected static UI separately from allowed moving regions; compare screen text across actual rendered frames.

- [user 2026-07-06T21:49:14.217296Z](https://chatgpt.com/c/6a4c060c-8f30-83ea-a1e1-8de605143eeb?messageId=bbb2152c-dffd-4acf-95f2-b693f00c898d) — ضيف للبرومبت وهات البرومبت النهائي   انه ميحصلش اي تغيير في محتوى الصورة بانه طلعها ملغبطة خالص والحروف داخلة في بعضها في عدة مواضع
- [assistant 2026-07-06T21:49:14.649669Z](https://chatgpt.com/c/6a4c060c-8f30-83ea-a1e1-8de605143eeb?messageId=b44e99d0-9311-4630-9cbf-ee31defb85ed) — تمام. أضفت شرط مهم جدًا:  **الموديل لا يعيد رسم الصورة ولا يغير محتوى الشاشة ولا يركّب UI جديد.**   يتعامل مع الـ First Frame كأنه لقطة ثابتة، ويعمل عليها حركة بسيطة فقط.  ---  # البرومبت النهائي — نسخة الراجل  ```text Use the uploaded First Frame as the exact opening frame of the video. Preserve the image content exactly as shown. Do not redraw, regenerate, reinterpret, redesign, or modify any visible part of the first frame. Keep the same composition, room layout, character, TV position, Coursera screen content, notebook, mug, phone, cat, lighting, colors, and camera angle.  The video must start from this exact image and only add subtle nat

## NATIVE-COURSERA-03 — Repair regression: global preservation freezes animation

**Discovery:** user

After preservation/motion suppression prompt, user says «دلوقتي اصبح مابيتحركش».

**Cause:** Assistant explicitly attributes freezing to overly strict prompt, a plausible diagnosis not independently measured.

**Trials:**
1. Strong no-change instructions and lowest motion/highest adherence recommendation.
2. After freeze report, selective animation of instructor, breathing/blink/posture and optional cat; suggested medium-low motion rather than lowest and high adherence rather than maximum.
3. Separate male/female final prompts supplied.

**Outcome:** Final proposed repair has no subsequent success report or artifact verification in recovered thread.

**Prevention:** Regression-test both fidelity and nonzero purposeful motion after adding negative constraints. Do not solve drift by freezing all regions.

- [user 2026-07-06T22:01:33.643192Z](https://chatgpt.com/c/6a4c060c-8f30-83ea-a1e1-8de605143eeb?messageId=bbb21592-91a0-468b-8cbe-d389580b9300) — دلوقتي اصبح مابيتحركش
- [assistant 2026-07-06T22:01:34.104772Z](https://chatgpt.com/c/6a4c060c-8f30-83ea-a1e1-8de605143eeb?messageId=4cdd6820-aaab-4481-ad03-02a27f0a8227) — أيوه، كده إحنا شدّينا البرومبت زيادة، فالموديل فهمها: **جمّد الصورة بالكامل**.  الحل: بدل ما نقول له *لا تغيّر أي جزء* نقول له:  > **حافظ على التكوين والـ UI والشكل العام، لكن حرّك عناصر محددة فقط.**  يعني نسمح بالحركة في: - المدرس داخل فيديو كورسيرا على الشاشة. - نفس/رمش/حركة بسيطة جدًا للشخص اللي بيتفرج. - ربتة خفيفة على القطة آخر الفيديو. - Flicker طبيعي خفيف من شاشة التلفزيون.  ونمنع: - تغيير الـ UI. - تلغبيط الحروف. - هز الرأس المستمر. - تحريك كل حاجة مرة واحدة.  ---  # البرومبت النهائي المتوازن  استخدم ده بدل السابق:  ```text Use the uploaded First Frame as the visual base and opening frame for the video. Preserve the same composition, room layout, camera angle, lighting, character position, TV position, cat position if visible, notebook, mug, phone, and overall cozy smartphone-shot atmosphere.  Do not redesign the scene. Do not replace the room, character, TV, objects, or camera framing. Keep the Coursera page on the TV visually consistent with the First Frame. Preserve the offi

## NATIVE-COURSERA-04 — Generation blocked by provider image privacy classifier

**Discovery:** user

User pasted HTTP400 InputImageSensitiveContentDetected.PrivacyInformation: input image may contain real person.

**Cause:** Provider reported classification only; actual identity/ground truth not established. User says viewer AI-generated.

**Trials:**
1. Assistant hypothesized viewer or TV instructor face triggered classification.
2. User rejected image-edit workaround and stated intent to use another tool; resumed prompt editing.

**Outcome:** No verified successful provider generation; do not describe safeguards as repaired or offer bypass instructions.

**Prevention:** Check provider-supported input permissions and retain exact failure category without exposing credentials or promising model compatibility.

- [user 2026-07-06T21:32:37.769047Z](https://chatgpt.com/c/6a4c060c-8f30-83ea-a1e1-8de605143eeb?messageId=bbb2121a-8a39-4194-a46e-a3eb0d66cf0f) — Generation failed — HTTP 400: InputImageSensitiveContentDetected.PrivacyInformation; “The request failed because the input image may contain real person.”
- [user 2026-07-06T21:46:55.367190Z](https://chatgpt.com/c/6a4c060c-8f30-83ea-a1e1-8de605143eeb?messageId=bbb21fda-faad-4a67-91ed-4874d5279b2c) — بص فكك من التعديل بتاع الصورة للامنة دا ، هو الشخص اضلا ai generated  هستعمل جوجل اومني افضل ، بس عاوزك تظبط البرومبت ، الشخصية عمالة تومئ براسها طول الفيديو كانها لعبة صلح المشكلة دي ، وكمان عاوزك تشيل خطوة مسك القلم او التقري من النوتة لانها غير منطقية هي بتستمع مركة وممكن تربت عالقطة فلنهاية قبل قفلة الفيديو وبس

## NATIVE-CHIBI-01 — Character source identity lost during chibi stylization

**Discovery:** user

User requests correcting character to actual facial features, indicating prior identity fidelity unsatisfactory.

**Cause:** Assistant attributed it to generic beautification/chibi styling, hypothesis only.

**Trials:**
1. Reference-based chibi prompt already asked to preserve face.
2. Revised feature-by-feature identity constraints, no beautification/idealization.

**Outcome:** No explicit confirmed successful image result; subsequent motion request does not prove identity fix.

**Prevention:** Validate reference identity before animation; distinguish requested stylization from unintended identity changes.

- [user 2026-01-15T12:46:23.714834Z](https://chatgpt.com/c/6968d7df-37ac-8327-b969-c213398c3b64?messageId=bbb21876-6729-415d-8a25-b2457ca756ea) — عاوزين نعدل البرومبت عشان يطلع البنت بملامحها الحقيقية 
- [assistant 2026-01-15T12:46:23.953469Z](https://chatgpt.com/c/6968d7df-37ac-8327-b969-c213398c3b64?messageId=d1679a8f-d6a0-43ee-add9-1b10fd2ce4a8) — تمام. خلّيك معايا بتركيز، لأن اللي كان حاصل قبل كده **طبيعي**:   الـ chibi بيحب يزوّق ويغيّر الملامح لو ما مسكتوش من إيده.  إحنا هنا هنقفل عليه **قفل هوية**.   الهدف: **نفس البنت 1:1 في الملامح** → بس متحوّلة لدمية chibi، مش بنت تانية.  ---  ## 🔴 PROMPT المعدّل (نسخة هوية حديد)  انسخه **كله** واده لـ Nano Banana:  ``` Ultra-realistic 3D chibi doll of the SAME PERSON from the provided reference photos. STRICT facial identity preservation is required.  Match the real facial structure exactly: - Same eye shape, eye spacing, and eye color - Same nose shape and size - Same lips shape and natural smile - Same face width, cheeks volume, jaw softness - Same skin tone and natural blush - Same eyebrows shape and position  Do NOT beautify, do NOT idealize, do NOT change facial features. This is NOT a generic cute girl. This is a stylized chibi version of the SAME REAL PERSON.  Chibi proportions on

## NATIVE-CHIBI-02 — Hand interaction and character reactions run sequentially instead of concurrently

**Discovery:** user

Character stays still until hand leaves; user calls result strange/creepy and requests simultaneous gentle play.

**Cause:** Assistant diagnosed sequential action interpretation; no generation trace independently proves cause.

**Trials:**
1. Original prose reaction prompt then music addition.
2. Concurrent-motion JSON with overlap, hand retained, no idle.
3. Added exact source-image use.
4. Added motion_line and optional force/enforce flags, full timed JSON, then plain text.

**Outcome:** All are proposed prompt trials; no later render/success confirmation. Arbitrary JSON fields are not established supported API controls.

**Prevention:** Explicit overlapping action intervals and contact continuity; inspect full playback for delays/idle. Test actual output, don't treat prompt syntax as guaranteed enforcement.

- [user 2026-01-15T12:57:10.664495Z](https://chatgpt.com/c/6968d7df-37ac-8327-b969-c213398c3b64?messageId=bbb21f92-b739-4821-9e32-f3cb28e8bd19) — الفيديو طلع شكله غريب ومريب   الشخصية مش بتتحرك غير بعد مالايد تمشي وثابتة   انا عاوز الايد تقرص خدودها براحة وتلاعبها وهي تتنطط وتلعب في نفس الوقت وتبقى مبسوطة والحركة سلسة وناعمة  هات البرومبت جيسون ممكن يكون احسن
- [assistant 2026-01-15T12:57:10.807201Z](https://chatgpt.com/c/6968d7df-37ac-8327-b969-c213398c3b64?messageId=7fb7519a-afb0-4eaf-b45c-7c369275dfe8) — تمام. اللي طلع عندك **غلط بنيوي** مش مجرد إعداد.   الـ Veo نفّذ الحركة **Sequential** (الإيد → تمشي → الشخصية تتحرك).   إحنا محتاجين **Concurrent Motion** = تفاعل متزامن.  ده **JSON Prompt نظيف ومقفول** يجبر Veo 3 على الحركة المتزامنة السلسة.  ---  ## ✅ **Veo 3 JSON Motion Prompt (Concurrent Interaction)**  انسخه **كما هو**:  ```json {   "mode": "image_to_video",   "interaction_type": "continuous_concurrent",   "scene_description": {     "summary": "Cute playful interaction between a chibi doll character and a human hand, happening at the same 
- [assistant 2026-01-15T12:58:38.617115Z](https://chatgpt.com/c/6968d7df-37ac-8327-b969-c213398c3b64?messageId=7da8235a-35f3-45d1-bba1-ffd13a4e87f6) — تمام. ده **تعديل مباشر** بإضافة **سطر حركة (motion_line)** صريح يجبر Veo على الحركة المستمرة المتزامنة — من غير ما نغيّر باقي البرومبت.  أضِف السطر ده **داخل الـ JSON** (يفضّل داخل `scene` أو أعلى `synchronization`):  ```json "motion_line": "continuous simultaneous motion from start to end: the hand gently pinches and plays with the cheeks WHILE the character is bouncing, clapping, wiggling, and reacting happily with smooth elastic movement, no pauses, no idle moments" ```  ولو عايز **تشديد أقوى** (اختياري)، أضف ده كمان داخل `synchronization`:  ```json "force_continuous_motion": true ```  ده كفاية يقفل مشكلة الثبات والتسلسل.   لو لسه حسّيت أي توقف، قولي ونشدّه أكتر.

