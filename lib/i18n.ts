export type Locale = "ar" | "en";

export const locales: readonly Locale[] = ["ar", "en"];
export const defaultLocale: Locale = "ar";

export const localeConfig = {
  ar: { label: "العربية", shortLabel: "عربي", dir: "rtl" as const, hreflang: "ar-SA", ogLocale: "ar_SA" },
  en: { label: "English", shortLabel: "EN", dir: "ltr" as const, hreflang: "en-US", ogLocale: "en_US" },
};

export const dictionaries = {
  ar: {
    language: { label: "اللغة", switchTo: "English", current: "العربية" },
    nav: { selectedWork: "أعمال مختارة", orasoft: "Orasoft", approach: "المنهج", about: "نبذة", contact: "تواصل" },
    header: { availability: "متاح لمشاريع مختارة", downloadCv: "تحميل السيرة الذاتية", menu: "فتح قائمة التنقل", closeMenu: "إغلاق قائمة التنقل", home: "العودة إلى الصفحة الرئيسية" },
    home: {
      eyebrow: "مهندس برمجيات · صانع منتجات",
      founderNote: "مؤسس Orasoft · أبني أنظمة رقمية عملية",
      heroTitle: "أهندس الأنظمة التي<highlight>يثق بها الناس.</highlight>",
      heroLead: "أنا بسام الحكيم — مهندس برمجيات متكامل ذو عقلية نظم، أعمل عبر Laravel وNext.js وFlutter وإنترنت الأشياء والبيانات وتجارب المنتجات. أحوّل العمليات المعقدة إلى برمجيات واضحة وقادرة ومصممة لتدوم.",
      exploreWork: "استكشف الأعمال المختارة",
      downloadResume: "تحميل السيرة الذاتية",
      proof: ["أنظمة مختارة", "مستودعًا عامًا وأكثر", "مجالات تقنية"],
      portraitAlt: "بسام الحكيم، مهندس برمجيات",
      portraitLocation: "اليمن · عن بُعد",
      portraitDiscipline: "أنظمة برمجية",
      scrollToExplore: "مرر للاستكشاف",
      aboutKicker: "ما أهتم به",
      aboutTitle: "يجب أن تبدو الهندسة الجيدة <highlight>حتمية.</highlight>",
      aboutParagraphs: ["أعمل عند تقاطع التفكير في المنتجات وهندسة البرمجيات. الهدف ليس إضافة التعقيد لذاته، بل جعل الأفكار الطموحة أسهل فهمًا وتشغيلًا ونموًا.", "من سير العمل المؤسسي إلى التجارة الغامرة، أضفي بنية على الأجزاء الصعبة وذوقًا على الأجزاء المرئية."],
      aboutLink: "لنصنع شيئًا مدروسًا",
      approachKicker: "نطاق الهندسة",
      approachEyebrow: "المكدس ليس سوى البداية",
      approachTitle: "عمق يمتد عبر<highlight>البناء كاملًا.</highlight>",
      approachIntro: "من أول قرار في المنتج إلى آخر تفصيل تشغيلي، أعمل عبر الطبقات التي تجعل البرمجيات مفيدة: الواجهة، والخلفية، والبيانات، والنشر، والأنظمة المحيطة بها.",
      coreTechnologies: "التقنيات الأساسية",
      expertiseNote: "أختارها وفق المشكلة لا وفق الرائج",
      expertise: [
        ["المنتجات والويب", "Next.js · React · TypeScript", "تجارة، ولوحات تحكم، وأنظمة تحرير، وواجهات تقودها الحركة."],
        ["الخلفية والبيانات", "Laravel · PHP · Prisma · PostgreSQL", "سير عمل تشغيلي، ومصادقة، وواجهات API، وبيانات مترابطة، ولوحات إدارة."],
        ["الهاتف والطرفية", "Flutter · Dart · ESP32 · C++", "تطبيقات تعمل دون اتصال، وأجهزة متصلة، وقياس عن بُعد، وتخزين محلي."],
        ["طبقة التجربة", "Three.js · Framer Motion · Tailwind", "توجيه بصري واضح مع سرعة وإتاحة وانضباط."],
      ],
      workingToolkit: "أدوات العمل",
      workKicker: "نماذج من العمل",
      workEyebrow: "عشرة أنظمة. معيار واحد.",
      workTitle: "مبنية من أجل<highlight>العالم الحقيقي.</highlight>",
      workIntro: "مجموعة مختارة من منتجات التجارة، والرعاية الصحية، وإنترنت الأشياء، وتقنيات المتاجر. تعرض كل حالة التفكير والأدوات والعمق التشغيلي خلف الواجهة.",
      repositories: "15 مستودعًا عامًا على GitHub",
      viewRepositories: "عرض جميع المستودعات",
      orasoftKicker: "شركة يقودها المؤسس",
      orasoftEyebrow: "بسام الحكيم · المؤسس",
      orasoftTitle: "Orasoft — <highlight>نبني برمجيات ذات غاية.</highlight>",
      orasoftDescription: "Orasoft هي شركة البرمجيات التي أسسها وبناها بسام الحكيم. تساعد الشركات الطموحة على تحويل الأفكار والمنتجات والعمليات اليومية إلى أنظمة رقمية واضحة يمكن إطلاقها وتنميتها وتحسينها.",
      orasoftServices: "اكتشاف المنتجات · تجربة المستخدم والواجهة · منصات الويب · تطبيقات الهاتف · العمليات الرقمية",
      visitOrasoft: "زيارة Orasoft",
      viewCompanyWork: "عرض أعمال الشركة",
      orasoftProcess: ["استكشف السياق", "ارسم المسار", "ابنِ بوضوح", "حسّن ما يهم"],
      contactLabel: "04 / تواصل",
      contactAvailability: "منفتح على التحدي المناسب",
      contactEyebrow: "ابدأ محادثة",
      contactTitle: "لديك فكرة معقدة؟<highlight>لنمنحها شكلًا.</highlight>",
      contactDescription: "سواء كنت تحتاج إلى بناء منتج من الصفر، أو أساس تقني أقوى، أو رأيًا ثانيًا في نظام صعب، فسيسعدني أن أسمع ما تعمل على بنائه.",
      contactEmailCta: "bassam.alhakim.dev@gmail.com",
      footerDesigned: "صُمم وهُندس وأُطلق بقصد.",
      backToTop: "العودة إلى الأعلى",
    },
    gallery: {
      gallery: "المعرض",
      screens: "شاشات",
      viewFull: "عرض المعرض كاملًا",
      projectGallery: "معرض المشروع",
      openFull: "فتح المعرض كاملًا",
      previousProjectScreen: "الشاشة السابقة للمشروع",
      nextProjectScreen: "الشاشة التالية للمشروع",
      showProjectScreen: "عرض شاشة المشروع",
      close: "إغلاق معرض الصور",
      previous: "الشاشة السابقة",
      next: "الشاشة التالية",
      return: "العودة إلى حاوية المعرض",
      fullGallery: "المعرض الكامل",
      projectScreens: "شاشات المشروع",
      instructions: "انقر على الصورة أو خارجها للعودة · استخدم ← → للتصفح",
      thumbnails: "صور المعرض المصغرة",
    },
    detail: {
      backToWork: "العودة إلى الأعمال المختارة",
      caseStudy: "بسام الحكيم / دراسة حالة",
      visitLive: "زيارة المنتج المباشر",
      viewSource: "GitHub · عرض المصدر",
      projectImages: "صور المشروع",
      technology: "التقنيات",
      backToPortfolio: "العودة إلى معرض الأعمال",
      builtWithIntent: "بُني بقصد بواسطة بسام الحكيم.",
    },
    metadata: {
      title: "بسام الحكيم — مهندس برمجيات وصانع منتجات",
      description: "بسام الحكيم مهندس برمجيات وصانع منتجات ومؤسس Orasoft، يركز على البنية الموثوقة، والتطوير المتكامل، والواجهات التعبيرية، والمنتجات الرقمية المصممة للعالم الحقيقي.",
      siteName: "بسام الحكيم — مهندس برمجيات وصانع منتجات",
      imageAlt: "معرض أعمال بسام الحكيم — مهندس منتجات ومطور متكامل",
      jobTitle: "مهندس برمجيات وصانع منتجات",
    },
  },
  en: {
    language: { label: "Language", switchTo: "العربية", current: "English" },
    nav: { selectedWork: "Selected work", orasoft: "Orasoft", approach: "Approach", about: "About", contact: "Contact" },
    header: { availability: "Available for select work", downloadCv: "Download CV", menu: "Open navigation menu", closeMenu: "Close navigation menu", home: "Bassam Alhakim home" },
    home: {
      eyebrow: "Software engineer · Product builder",
      founderNote: "Founder of Orasoft · building practical digital systems",
      heroTitle: "I engineer the systems<highlight>people trust.</highlight>",
      heroLead: "I’m Bassam Alhakim — a systems-minded full-stack engineer working across Laravel, Next.js, Flutter, IoT, data, and product experience. I turn complex operations into software that feels clear, capable, and built to last.",
      exploreWork: "Explore selected work",
      downloadResume: "Download résumé",
      proof: ["selected systems", "repositories", "technology areas"],
      portraitAlt: "Bassam Alhakim, software engineer",
      portraitLocation: "Yemen · Remote",
      portraitDiscipline: "Software systems",
      scrollToExplore: "Scroll to explore",
      aboutKicker: "What I care about",
      aboutTitle: "Good engineering should feel <highlight>inevitable.</highlight>",
      aboutParagraphs: ["I work at the intersection of product thinking and software engineering. The goal is never to add complexity for its own sake; it is to make ambitious ideas easier to understand, operate, and grow.", "From enterprise workflows to immersive commerce, I bring structure to the hard parts and taste to the visible ones."],
      aboutLink: "Let’s make something considered",
      approachKicker: "Engineering range",
      approachEyebrow: "The stack is only the beginning",
      approachTitle: "Depth across<highlight>the whole build.</highlight>",
      approachIntro: "From the first product decision to the last operational detail, I work across the layers that make software useful: interface, backend, data, deployment, and the systems around them.",
      coreTechnologies: "Core technologies",
      expertiseNote: "Selected by the problem, not the trend",
      expertise: [
        ["Product & web", "Next.js · React · TypeScript", "Commerce, dashboards, editorial systems, motion-led interfaces."],
        ["Backend & data", "Laravel · PHP · Prisma · PostgreSQL", "Operational workflows, auth, APIs, relational data, admin surfaces."],
        ["Mobile & edge", "Flutter · Dart · ESP32 · C++", "Offline-first apps, connected devices, telemetry, local persistence."],
        ["Experience layer", "Three.js · Framer Motion · Tailwind", "High-signal art direction with speed, accessibility, and restraint."],
      ],
      workingToolkit: "Working toolkit",
      workKicker: "Proof of work",
      workEyebrow: "Ten systems. One standard.",
      workTitle: "Built for<highlight>the real world.</highlight>",
      workIntro: "A selected body of commerce, healthcare, IoT, and store-technology products. Each case shows the thinking, tools, and operational depth behind the interface.",
      repositories: "15 public repositories on GitHub",
      viewRepositories: "View all repositories",
      orasoftKicker: "Founder-led company",
      orasoftEyebrow: "Bassam Alhakim · Founder",
      orasoftTitle: "Orasoft — <highlight>building software with purpose.</highlight>",
      orasoftDescription: "Orasoft is the software company founded and built by Bassam Alhakim. It helps ambitious businesses turn ideas, products, and daily operations into clear digital systems that can launch, grow, and improve.",
      orasoftServices: "Product discovery · UX/UI · Web platforms · Mobile apps · Digital operations",
      visitOrasoft: "Visit Orasoft",
      viewCompanyWork: "View company work",
      orasoftProcess: ["Explore the context", "Map the path", "Build with clarity", "Improve what matters"],
      contactLabel: "04 / Contact",
      contactAvailability: "Open to the right challenge",
      contactEyebrow: "Start a conversation",
      contactTitle: "Have a complex idea?<highlight>Let’s give it shape.</highlight>",
      contactDescription: "Whether you need a product from zero, a stronger technical foundation, or a second pair of eyes on a difficult system, I’d be glad to hear what you’re building.",
      contactEmailCta: "bassam.alhakim.dev@gmail.com",
      footerDesigned: "Designed, engineered, and shipped with intent.",
      backToTop: "Back to top",
    },
    gallery: {
      gallery: "Gallery",
      screens: "screens",
      viewFull: "View full gallery",
      projectGallery: "Project gallery",
      openFull: "Open full gallery",
      previousProjectScreen: "Previous project screen",
      nextProjectScreen: "Next project screen",
      showProjectScreen: "Show project screen",
      close: "Close image gallery",
      previous: "Previous screen",
      next: "Next screen",
      return: "Return to the gallery container",
      fullGallery: "Full gallery",
      projectScreens: "project screens",
      instructions: "Click image or outside to return · Use ← → to browse",
      thumbnails: "Gallery thumbnails",
    },
    detail: {
      backToWork: "Back to selected work",
      caseStudy: "BASSAM ALHAKIM / CASE STUDY",
      visitLive: "Visit live product",
      viewSource: "GitHub · View source",
      projectImages: "project images",
      technology: "TECHNOLOGY",
      backToPortfolio: "Back to portfolio",
      builtWithIntent: "Built with intent by Bassam Alhakim.",
    },
    metadata: {
      title: "Bassam Alhakim — Software Engineer & Product Builder",
      description: "Bassam Alhakim is a software engineer, product builder, and founder of Orasoft, focused on reliable architecture, full-stack delivery, expressive interfaces, and digital products that hold up in the real world.",
      siteName: "Bassam Alhakim — Software Engineer & Product Builder",
      imageAlt: "Bassam Alhakim Portfolio — Product Engineer & Full Stack Developer",
      jobTitle: "Software Engineer & Product Builder",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];

export function getLocale(value: string): Locale {
  return value === "en" ? "en" : "ar";
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

const arabicProjectCopy: Record<string, { eyebrow: string; title: string; description: string; impact: string }> = {
  "Restaurant ERP / إدارة المطعم": { eyebrow: "تشغيل المطاعم / تخطيط موارد المؤسسة", title: "نظام التشغيل خلف نشاط مطاعم جاد", description: "منصة لإدارة المطاعم مبنية بـ Laravel، تربط نقاط البيع والمخزون والمشتريات وسير عمل المطبخ وعمليات الموظفين والتقارير والطباعة والتحكم متعدد الواجهات في نظام موثوق واحد.", impact: "نقاط البيع · المخزون والمشتريات · سير عمل المطبخ · التقارير والطباعة" },
  "ESP32 Smart Meter / العداد الذكي": { eyebrow: "إنترنت الأشياء / مراقبة الطاقة", title: "نظام حي للقياس الكهربائي عن بُعد", description: "نظام لإنترنت الأشياء يقرأ فيه ESP32 الجهد والتيار، ويحسب القدرة والطاقة، ويرسل القياسات إلى خلفية PHP وMySQL، ويعرض لوحة ويب للمراقبة الحية والتنبيهات والتقارير والتحكم عن بُعد بالمرحّل.", impact: "قياسات لحظية · قياس REST عن بُعد · تحكم بالمرحّل · لوحة تحكم وتقارير" },
  "WiFi Monitor Pro / مراقب WiFi": { eyebrow: "أنظمة / أداة هاتفية", title: "طبقة قياس مركزة لنظام Android", description: "أداة Android مبنية بـ Flutter وKotlin لمراقبة استهلاك الشبكة لكل تطبيق، مع محرك أمامي دائم وسجل محلي وطبقات حماية تركّز على الأمان.", impact: "قياس لكل تطبيق · خدمة أمامية · سجل محلي · طبقة حماية" },
  "TIF / طيف": { eyebrow: "تجارة فاخرة / ثلاثية الأبعاد", title: "بوتيك سينمائي للعطور", description: "متجر عطور عالي الأداء يلتقي فيه الرفاه الهادئ مع ثلاثي الأبعاد الفوري. يتعامل المنتج مع اكتشاف العطر بوصفه رحلة حسية، عبر تحميل شبيه بالكريستال، وتصوير تفاعلي للزجاجة، وكتالوج هاتفي انسيابي.", impact: "تصوير منتجات لحظي · سرد تقوده الحركة · إرسال طلبات منظم" },
  "House of Spices / بيت البهارات": { eyebrow: "تجارة ثقافية / بيع بالتجزئة", title: "بيت رقمي للمذاق الأصيل", description: "تجربة تجارة محلية دافئة لعلامة يمنية متخصصة في البهارات والأعشاب. من التصنيفات المختارة والزعفران الفاخر إلى التسوق الهاتفي والدفع وعمليات المتجر، يحوّل المنتج التراث إلى رحلة رقمية واضحة.", impact: "اكتشاف منتجات محلي · سرد تحريري للعلامة · تجارة من الكتالوج إلى الدفع" },
  "ATHR / أثر": { eyebrow: "تجارة أزياء / تحريرية", title: "طريقة أكثر هدوءًا لاختيار الخطوة المناسبة", description: "متجر أحذية تحريري مبني حول الخامة والحركة والاختيار الواثق. يمنح التصميم كل مجموعة مساحة للتنفس، مع دعم اكتشاف أحذية الرجال والنساء والأطفال والرسمية والكاجوال والأداء.", impact: "توجيه بصري قائم على الخامة · فهرس للمجموعات · وضوح المقاسات وثقة الشراء" },
  "ORVÉN / أورفن": { eyebrow: "تجزئة فاخرة / ساعات", title: "الوقت في صورة أندر", description: "متجر ساعات مدروس تشكله البساطة والدقة والمجموعة. يجمع النظام هوية تحريرية داكنة مع خطوط منتجات من Editions وObsidian إلى Skeleton وMarine وHeritage وChronograph.", impact: "نظام علامة · بنية منتجات منتقاة · أسطح تجارة وغرفة تحكم" },
  "TAQA HOME / طاقة هوم": { eyebrow: "تقنية المنزل / الطاقة", title: "طبقة تشغيل أذكى للمنزل", description: "منصة تجارة عربية أولًا للأجهزة والأدوات الذكية والطاقة الشمسية والتخزين وتسخين المياه. تربط بين مواصفات المنتجات الواضحة والاستشارة والكتالوجات القابلة للتوسع والسلة والدفع والإدارة وخدمات ما بعد البيع.", impact: "10 مجموعات · كتالوج من 100 منتج · تجارة الطاقة والتخزين · عمليات الإدارة" },
  "Dr. Layan Clinic / عيادة د. ليان": { eyebrow: "رعاية صحية / تجربة المريض", title: "دقة بإيقاع إنساني", description: "واجهة رقمية هادئة لطب الأسنان التجميلي والترميمي. تجعل التجربة تصميم الابتسامة والتشخيص الرقمي والتحولات قبل وبعد والاستشارة الأولى واضحة وشخصية ومطمئنة.", impact: "تصميم ابتسامة مخصص · استقبال الاستشارات · سرد التحول · تحقق آمن" },
  "MATEEN / متين": { eyebrow: "تجزئة تعمل دون اتصال / Flutter", title: "طبقة تشغيل موثوقة لمتجر الحي", description: "نظام لإدارة المتاجر مبني بـ Flutter، يحافظ على استمرار العمل الأساسي دون اتصال دائم بالإنترنت. يجمع المخزون ونقاط البيع والمشتريات والعملاء والموردين والمصروفات والتقارير وسير العمل العربي في مساحة تشغيل مركزة، مع شاشة LAN للشاشات الأكبر.", impact: "سير عمل دون اتصال · تخزين SQLite محلي · عمليات تجزئة عربية · شاشة هاتف إلى LAN" },
};

export function getLocalizedProject<T extends { name: string; eyebrow: string; title: string; description: string; impact: string }>(project: T, locale: Locale): T {
  if (locale === "en") return project;
  const copy = arabicProjectCopy[project.name];
  return copy ? { ...project, ...copy } : project;
}

export function localizedHref(path: string, locale: Locale): string {
  if (!path.startsWith("/")) return path;
  return `/${locale}${path === "/" ? "" : path}`;
}
