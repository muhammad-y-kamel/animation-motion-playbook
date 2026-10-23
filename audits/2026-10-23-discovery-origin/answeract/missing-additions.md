# Autonomous-discovery re-audit additions

These are historical assistant-reported findings, not independently verified fixes. Re-read all 164 pages / 460 visible items. Add attempts to existing records rather than duplicate mechanisms. Exact source excerpts and discovery mapping for all 33 previous records are in discovery-review.json.

## A01
New failed repair detail, not duplicate case: initial resizing/column-spacing fix lost alignment settings during transitions; code review caught it, repair claimed before output.

Source: thread 01a1499a-0980-7305-b35e-303f6cc8804e, item msg_01970fd4588b4086016ad3d70284008191aa080537a5cb094a.

> التعديل الأول جاهز: العناوين أصغر، والردود لها مساحة داخلية أوسع، وحقول الطلب اتقسمت لاسم وقيمة بمحاذاة واضحة. أراجع دلوقتي الصور الناتجة؛ وأول فحص للكود كشف إن بعض إعدادات المحاذاة بتضيع أثناء الانتقال، فبصلّح ده قبل التصدير النهائي.

## A03
New attempt detail: traveling connector dots jumped when loop repeated. Claimed fix: follow card-local connection points, arrowhead follows angle, dots enter and disappear into target instead of teleporting.

Source: thread 01a1499a-0980-7305-b35e-303f6cc8804e, item msg_01970fd4588b4086016ad3919a10588191aad0ff97186ca8de.

> الأسهم اتغيّر مسارها وبقت مرتبطة بنقاط على الكروت نفسها، ورأس السهم بيتبع زاوية الكارت. كمان النقاط اللي بتتحرك على الوصلات بقت تدخل الكارت وتختفي عنده بدل القفزة اللي كانت بتحصل عند تكرار الحركة. بجهّز معاينة متصلة للتأكد من شكلها مع الأغنية قبل التصدير النهائي.
> 
> 

## A17
New occurrence and fix: long subtitle auto-shrank font; split it by actual speech timing to preserve size. Same review independently caught card-back intersections/text temporarily escaping fields.

Source: thread 01a1499a-0980-7305-b35e-303f6cc8804e, item msg_01970fd4588b4086016ad69eb21208819186ec855207c6ad97.

> التدقيق كشف مشاكل فعلية: خلفيات كروت كانت بتتقاطع أثناء التحول، وبعض النصوص كانت بتخرج مؤقتًا من خاناتها، وسطر ترجمة طويل كان بيصغّر الخط. بصلّح مسارات التحول وارتباط النصوص بخاناتها، وبقسّم الترجمة الطويلة على توقيت الكلام عشان تفضل بنفس الحجم الواضح.

## A18
New intermediate failed-preview evidence: old scene remnants, lines crossing heading, thin perspective seams; claimed repair/full-size affected-segment review.

Source: thread 01a1499a-0980-7305-b35e-303f6cc8804e, item msg_01970fd4588b4086016ad6f87878688191983ddc2617d6cbeb.

> المراجعة الأخيرة كشفت ثلاث مشاكل بصرية محددة: بقايا المشهد القديم أثناء الانتقال، خطوط بتعدّي فوق عنوان، وفواصل رفيعة في منظور الواجهة. بصلّحهم قبل التصدير، وبراجع المقاطع المتأثرة بالحجم الكامل عشان ما تتكررش كسور الحركة اللي ضايقتك قبل كده.

## A10
New autonomous semantic QA attempt: assistant reply looked like headline, not conversation; replaced with five-message booking-change request followed by booking-number question to demonstrate smart wait.

Source: thread 01a1499a-0980-7305-b35e-303f6cc8804e, item msg_01970fd4588b4086016ad6b90d60f88191aa7c84dd101ec7dc.

> المراجعة البصرية كشفت إن ردّ المساعد داخل الشات كان أقرب لعنوان. غيّرته لموقف طبيعي: عميل بيكمّل طلب تغيير حجز على خمس رسايل، والمساعد يستنى وبعدين يسأله عن رقم الحجز. كده المثال يوضح الفهم والمتابعة، ويبعد عن التركيز على بيع المنتجات.
> 
> 

## A05
New earlier pronunciation trial: problematic «نقطة للذكاء الاصطناعي» reordered to «ومعاها رصيد للذكاء الاصطناعي، أربعمية نقطة»; ASR reported complete sentence. Subsequent user pronunciation rejection remains, so not final validated solution.

Source: thread 01a1499a-0980-7305-b35e-303f6cc8804e, item msg_01970fd4588b4086016ad6b25ede148191b7a66bc9d99c2f96.

> اختبار العرض كشف موضعًا محتاج تعديل عند «نقطة للذكاء الاصطناعي». غيّرت ترتيبها إلى «ومعاها رصيد للذكاء الاصطناعي، أربعمية نقطة»، وظهرت الجملة كاملة في فحص التفريغ الجديد. بدأت دلوقتي التسجيل العربي الكامل بنفس الخامة، والإنجليزي الجديد اتولّد بالصوت اللي عجبك.

## A20-new
New autonomous rendering finding: card typography distribution faulty and fog weakened final name reveal; agent said cause identified/corrected but exact cause/parameter changes absent. Do not invent fog settings.

Source: thread 01a1499a-0980-7305-b35e-303f6cc8804e, item msg_01970fd4588b4086016ad36d1cf2d48191a87c1a49abc4b214.

> البراين روت اتصدّر بالصوت، واتشغّل كاملًا بالسرعة العادية ونصف السرعة. النسخة النهائية فيها نفس الحركة والموسيقى، مع التنسيق الجديد ومن غير كلام الهوامش أو عدّاد المشاهد.
> 
> أما أول تجربة للموشن، فكشفت خللًا في توزيع الطباعة على الكروت، وضبابًا بيضعف لقطة النهاية. اتحدد سببهم، وجاري مراجعة لقطات جديدة بعد التصحيح قبل التصدير.

## A20-new
Subsequent same rebuild preview found wall-card overlap; claimed corrected before camera-motion sample. Separate occurrence, no claim final artifact independently verified.

Source: thread 01a1499a-0980-7305-b35e-303f6cc8804e, item msg_01970fd4588b4086016ad37030bc208191a2c6e43f06f746bc.

> تكوينات الموشن الأساسية بقت جاهزة للمراجعة بالحركة. فيه أيضًا تراكب بين بعض كروت الجدران بيتصلّح الآن، عشان تفاصيلها تبقى أنظف أثناء حركة الكاميرا.
> 
> عينة الحركة هتشمل الانتقال من الجدار إلى إعداد الوكيل، ثم الرد والطلب، والسحب الأخير لكشف الاسم. البراين روت جاهز ضمن التسليم.

## B08-new
New autonomous brainrot opening QA occurrence: order paper approached lower text too closely; spacing changed. No exact distance or independent result available.

Source: thread 01a147b2-5b70-741a-a766-5677de487044, item msg_0bd9f608fae1fb7d016ad2f9c22ad08191a464f54ebd67d4a9.

> المراجعة الأولى كشفت إن ورقة الطلب في افتتاحية الفيديو كانت بتقرب زيادة من السطر السفلي؛ عدّلت المسافة. ولقطة «أقل من ساعة» مكتوبة كتحدّي لصاحب البيزنس، ضمن حكاية بناء الوكيل وتجربته وتشغيله.
> 

