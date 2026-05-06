import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  fr: {
    translation: {
      meta: {
        lang: 'fr',
        dir: 'ltr',
      },
      brand: {
        handle: 'toji_fit95',
        motto: "Nah, I'd win",
        name: 'Abdechafi Akram',
      },
      nav: {
        coach: 'Coach',
        programmes: 'Programmes',
        proof: 'Résultats',
        contact: 'Contacter le coach',
      },
      hero: {
        eyebrow: "Athlète & coach fitness à Infinity Gym",
        title: 'La discipline crée des monstres.',
        copy:
          "Pas d’excuses. Pas de promesses vides. Un plan précis, un entraînement intense et le mental pour aller jusqu’au bout.",
        primary: 'Commencer ta transformation',
        secondary: 'Voir les programmes',
        imageAlt: 'Abdechafi Akram, athlète et coach fitness',
      },
      stats: [
        { value: '1-on-1', label: 'Coaching élite' },
        { value: '7j/7', label: 'Suivi prioritaire' },
        { value: 'Infinity', label: 'Gym Saïda' },
      ],
      about: {
        eyebrow: 'À propos du coach',
        title: 'Construit en salle. Forgé par la discipline.',
        copy:
          "Abdechafi Akram est athlète, créateur de contenu fitness et coach à Infinity Gym. Son approche est simple : sculpter le corps, renforcer le mental et entraîner chaque client avec intention.",
        imageAlt: 'Abdechafi Akram posant dans la salle',
        tags: ['Athlète', 'Créateur fitness', 'Coach Infinity Gym'],
      },
      services: {
        eyebrow: 'Offres de coaching',
        title: 'Choisis la pression. Obtiens des résultats.',
        copy: "Programmes clairs. Suivi sérieux. L’engagement doit être total.",
        perMonth: '/ mois',
        cta: 'Commencer',
        items: [
          {
            name: 'Formule Musculation',
            price: '3 000 DA',
            intro: 'Pour construire une base solide.',
            features: [
              "Programme d’entraînement adapté à tes objectifs.",
              'Plan nutritionnel optimisé pour la prise de muscle.',
              'Option livre de recettes privé : +1 000 DA.',
            ],
          },
          {
            name: 'Formule Perte de Poids',
            price: '2 500 DA',
            intro: 'Pour affiner ta silhouette efficacement.',
            features: [
              'Encadrement des exercices avec focus sur le cardio.',
              'Conseils nutritionnels simples et efficaces.',
              'Option livre de recettes privé : +1 000 DA.',
            ],
          },
          {
            name: 'Formule VIP',
            price: '5 000 DA',
            intro: 'Un suivi complet pour progresser sans hésitation.',
            features: [
              'Programme musculation + plan alimentaire détaillé.',
              'Livre de recettes privé inclus.',
              'Ajustements réguliers pour éviter les plateaux.',
            ],
          },
          {
            name: "Offre Élite 1-on-1",
            price: '30 000 DA',
            intro: 'Un seul client par mois. Zéro hasard.',
            featured: true,
            features: [
              'Présence à tes côtés en salle, répétition après répétition.',
              'Correction précise de la technique et de la posture.',
              'Nutrition évolutive et programmation haute performance.',
              'Contact direct 7j/7 pour le mental et la technique.',
            ],
          },
        ],
      },
      proof: {
        eyebrow: 'Résultats visuels',
        title: 'Le corps reflète le standard.',
        copy:
          "Physique, présence, exécution. Ce n’est pas de la théorie. C’est le niveau que les clients doivent atteindre.",
        images: [
          'Abdechafi Akram pose frontale sous lumière sombre',
          'Double biceps dos à Infinity Gym',
          'Pose latérale bodybuilding à Infinity Gym',
          'Pose classique sous projecteur',
          'Pose artistique bras levés en salle',
          'Pose dos cinématographique dans le noir',
        ],
      },
      contact: {
        eyebrow: 'Rejoins maintenant',
        title: 'Arrête de regarder. Commence à devenir.',
        copy:
          'Infinity Gym, Saïda, Cité Riadh. Apporte la discipline. Le plan est prêt.',
        gymPhone: 'Téléphone salle : 0657282828',
        coachPhone: 'Téléphone coach : 0799513442',
        location: 'Localisation : Saïda, Cité Riadh',
        coachCta: 'Contacter le coach',
        joinCta: 'Rejoindre maintenant',
        mapTitle: 'Carte Infinity Gym Saïda Cité Riadh',
      },
      contactModal: {
        eyebrow: 'Contacter le coach',
        title: 'Choisis ton canal.',
        copy:
          'Écris maintenant. Si tu es sérieux, on lance le plan.',
        whatsapp: 'WhatsApp',
        instagram: 'Instagram',
        close: 'Fermer la fenêtre',
      },
      footer: {
        identity: 'Abdechafi Akram / toji_fit95',
        motto: "Nah, I'd win. Discipline avant tout.",
        instagram: 'Instagram',
      },
    },
  },
  en: {
    translation: {
      meta: {
        lang: 'en',
        dir: 'ltr',
      },
      brand: {
        handle: 'toji_fit95',
        motto: "Nah, I'd Win",
        name: 'Abdechafi Akram',
      },
      nav: {
        coach: 'Coach',
        programmes: 'Programs',
        proof: 'Proof',
        contact: 'Contact Coach',
      },
      hero: {
        eyebrow: 'Athlete & Fitness Coach at Infinity Gym',
        title: 'Discipline Builds Monsters.',
        copy:
          'No excuses. No soft promises. Just a precise plan, hard training, and the mindset to finish what you started.',
        primary: 'Start Your Transformation',
        secondary: 'See Programs',
        imageAlt: 'Abdechafi Akram, athlete and fitness coach',
      },
      stats: [
        { value: '1-on-1', label: 'Elite coaching' },
        { value: '7j/7', label: 'Priority access' },
        { value: 'Infinity', label: 'Gym Saida' },
      ],
      about: {
        eyebrow: 'About the Coach',
        title: 'Built in the gym. Proven by discipline.',
        copy:
          'Abdechafi Akram is an athlete, gym motivation creator, and coach at Infinity Gym. His work is simple: sharpen the body, harden the mind, and make every client train with intent.',
        imageAlt: 'Abdechafi Akram posing in the gym',
        tags: ['Athlete', 'Motivation Creator', 'Infinity Gym Coach'],
      },
      services: {
        eyebrow: 'Coaching Offers',
        title: 'Choose the pressure. Earn the result.',
        copy: 'Clear programs. Serious follow-up. Total commitment only.',
        perMonth: '/ month',
        cta: 'Get Started',
        items: [
          {
            name: 'Muscle Building',
            price: '3 000 DA',
            intro: 'Build a strong base.',
            features: [
              'Targeted training program based on your goals.',
              'Nutrition plan adapted for muscle gain.',
              'Private recipe book option: +1 000 DA.',
            ],
          },
          {
            name: 'Weight Loss',
            price: '2 500 DA',
            intro: 'Cut down with focus and control.',
            features: [
              'Exercise supervision with calorie burn and cardio focus.',
              'Simple nutrition guidance for daily meals.',
              'Private recipe book option: +1 000 DA.',
            ],
          },
          {
            name: 'VIP Program',
            price: '5 000 DA',
            intro: 'Complete follow-up. No confusion.',
            features: [
              'Muscle training plus detailed meal plan.',
              'Private recipe book included.',
              'Regular adjustments to avoid plateaus.',
            ],
          },
          {
            name: 'Elite 1-on-1 Offer',
            price: '30 000 DA',
            intro: 'One client per month. No random work.',
            featured: true,
            features: [
              'In-gym immersion, rep by rep.',
              'Precise correction of technique and posture.',
              'Evolving nutrition and high-performance programming.',
              'Direct 7/7 contact for mental and technical support.',
            ],
          },
        ],
      },
      proof: {
        eyebrow: 'Visual Proof',
        title: 'The body follows the standard.',
        copy:
          'Physique, presence, execution. This is not theory. This is the standard clients train around.',
        images: [
          'Abdechafi Akram front pose under dark lighting',
          'Back double biceps physique at Infinity Gym',
          'Side bodybuilding pose at Infinity Gym',
          'Classic pose under spotlight',
          'Artistic raised-arm pose in the gym',
          'Cinematic back pose in darkness',
        ],
      },
      contact: {
        eyebrow: 'Join Now',
        title: 'Stop watching. Start becoming.',
        copy: 'Infinity Gym. Saida, Cite Riadh. Bring discipline. The plan is ready.',
        gymPhone: 'Gym Phone: 0657282828',
        coachPhone: 'Coach Phone: 0799513442',
        location: 'Location: Saida, Cite Riadh',
        coachCta: 'Contact Coach',
        joinCta: 'Join Now',
        mapTitle: 'Infinity Gym Saida Cite Riadh map',
      },
      contactModal: {
        eyebrow: 'Contact Coach',
        title: 'Choose your channel.',
        copy: 'Send the message now. If you are serious, we start the plan.',
        whatsapp: 'WhatsApp',
        instagram: 'Instagram',
        close: 'Close contact window',
      },
      footer: {
        identity: 'Abdechafi Akram / toji_fit95',
        motto: "Nah, I'd Win. Discipline first.",
        instagram: 'Instagram',
      },
    },
  },
  ar: {
    translation: {
      meta: {
        lang: 'ar',
        dir: 'rtl',
      },
      brand: {
        handle: 'toji_fit95',
        motto: 'لا...سأفوز',
        name: 'عبد الشافي أكرم',
      },
      nav: {
        coach: 'المدرب',
        programmes: 'البرامج',
        proof: 'النتائج',
        contact: 'تواصل مع المدرب',
      },
      hero: {
        eyebrow: 'رياضي ومدرب لياقة في Infinity Gym',
        title: 'الانضباط يصنع الوحوش.',
        copy:
          'لا أعذار. لا وعود فارغة. خطة دقيقة، تدريب قاس، وعقلية تنهي ما بدأت.',
        primary: 'ابدأ تحولك',
        secondary: 'شاهد البرامج',
        imageAlt: 'عبد الشافي أكرم، رياضي ومدرب لياقة',
      },
      stats: [
        { value: '1-on-1', label: 'تدريب إيليت' },
        { value: '7/7', label: 'أولوية في التواصل' },
        { value: 'Infinity', label: 'جيم سعيدة' },
      ],
      about: {
        eyebrow: 'عن المدرب',
        title: 'القوة تُبنى هنا، والانضباط يكملها',
        copy:
          'عبد الشافي أكرم رياضي، صانع محتوى تحفيزي، ومدرب في Infinity Gym. مهمته واضحة: جسم أقوى، عقل أصلب، وكل حصة بتدريب له هدف.',
        imageAlt: 'عبد الشافي أكرم في وضعية داخل القاعة',
        tags: ['رياضي', 'صانع محتوى تحفيزي', 'مدرب Infinity Gym'],
      },
      services: {
        eyebrow: 'عروض التدريب',
        title: 'اختر الضغط. اكسب النتيجة.',
        copy: 'برامج واضحة. متابعة جدية. الالتزام الكامل فقط.',
        perMonth: '/ شهر',
        cta: 'ابدأ الآن',
        items: [
          {
            name: 'برنامج التضخيم',
            price: '3.000 دج',
            intro: 'لبناء قاعدة قوية.',
            features: [
              'برنامج تدريب موجه حسب هدفك.',
              'نظام غذائي مناسب لزيادة الكتلة العضلية.',
              'خيار كتاب وصفات خاص: + 1000 دج.',
            ],
          },
          {
            name: 'برنامج خسارة الوزن',
            price: '2.500 دج',
            intro: 'لتنحيف الجسم بتركيز.',
            features: [
              'إشراف على التمارين مع تركيز على الحرق والكارديو.',
              'نصائح غذائية بسيطة لتنظيم الوجبات اليومية.',
              'خيار كتاب وصفات خاص: + 1000 دج.',
            ],
          },
          {
            name: 'برنامج VIP',
            price: '5.000 دج',
            intro: 'متابعة كاملة بدون غموض.',
            features: [
              'تدريب عضلي مع خطة غذائية مفصلة.',
              'كتاب الوصفات الخاص مرفق.',
              'تعديلات منتظمة لتجنب التوقف في النتائج.',
            ],
          },
          {
            name: 'عرض إيليت 1-on-1',
            price: '30.000 دج',
            intro: 'عميل واحد فقط في الشهر. لا عشوائية.',
            featured: true,
            features: [
              'مرافقة داخل القاعة، تكرار بتكرار.',
              'تصحيح دقيق للتقنية والوضعية.',
              'تغذية متطورة وبرمجة عالية الأداء.',
              'تواصل مباشر 7/7 للدعم الذهني والتقني.',
            ],
          },
        ],
      },
      proof: {
        eyebrow: 'إثبات بصري',
        title: 'الجسم يتبع المعيار.',
        copy:
          'فورمة، حضور، وتنفيذ. هذا ليس كلاما نظريا. هذا هو المستوى الذي يتدرب حوله العملاء.',
        images: [
          'عبد الشافي أكرم في وضعية أمامية بإضاءة داكنة',
          'وضعية ظهر دبل بايسبس في Infinity Gym',
          'وضعية جانبية لكمال الأجسام في Infinity Gym',
          'وضعية كلاسيكية تحت الضوء',
          'وضعية فنية بالذراع مرفوع داخل القاعة',
          'وضعية ظهر سينمائية في الظلام',
        ],
      },
      contact: {
        eyebrow: 'انضم الآن',
        title: 'توقف عن المشاهدة. ابدأ التحول.',
        copy: 'Infinity Gym. سعيدة، حي الرياض. أحضر الانضباط. الخطة جاهزة.',
        gymPhone: 'هاتف القاعة: 0657282828',
        coachPhone: 'هاتف المدرب: 0799513442',
        location: 'الموقع: سعيدة، حي الرياض',
        coachCta: 'تواصل مع المدرب',
        joinCta: 'انضم الآن',
        mapTitle: 'خريطة Infinity Gym سعيدة حي الرياض',
      },
      contactModal: {
        eyebrow: 'تواصل مع المدرب',
        title: 'اختر طريقة التواصل.',
        copy: 'أرسل الرسالة الآن. إذا كنت جادا، نبدأ الخطة.',
        whatsapp: 'واتساب',
        instagram: 'إنستغرام',
        close: 'إغلاق نافذة التواصل',
      },
      footer: {
        identity: 'عبد الشافي أكرم / toji_fit95',
        motto: 'أنا أفوز. الانضباط أولا.',
        instagram: 'إنستغرام',
      },
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'fr',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
