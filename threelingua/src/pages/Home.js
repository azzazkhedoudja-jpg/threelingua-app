import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../App';

const translations = {
  fr: {
    welcome: "Bienvenue à Paris 🗼",
    title: "Ton intégration commence ici",
    subtitle: "Métro, vie quotidienne, phrases essentielles",
    progress: "Progression globale de ton intégration",
    lines: "Lignes métro",
    themes: "Thèmes",
    phrases: "Phrases",
    metroCard: "Métro & RER",
    metroCardSub: "8 lignes expliquées",
    dailyCard: "Vie quotidienne",
    dailyCardSub: "6 thèmes pratiques",
    phrasesCard: "Phrases clés",
    phrasesCardSub: "17 phrases essentielles",
    urgCard: "Urgences",
    urgCardSub: "Numéros & phrases",
    tipsTitle: "Conseils du jour",
    tagMetro: "Métro", tagDaily: "Vie pratique", tagBonus: "Bon plan",
    tip1: "Le pass Navigo Découverte (86,40€/mois) couvre toutes les zones 1-5. Bien plus économique si tu prends les transports régulièrement.",
    tip2: "Inscris-toi à la sécurité sociale sur ameli.fr dès ton arrivée. Le remboursement de tes soins en dépend.",
    tip3: "Les musées nationaux sont gratuits le 1er dimanche du mois. Louvre, Orsay, Pompidou — profites-en !"
  },
  en: {
    welcome: "Welcome to Paris 🗼",
    title: "Your integration starts here",
    subtitle: "Metro, daily life, essential phrases",
    progress: "Overall integration progress",
    lines: "Metro lines",
    themes: "Themes",
    phrases: "Phrases",
    metroCard: "Metro & RER",
    metroCardSub: "8 lines explained",
    dailyCard: "Daily life",
    dailyCardSub: "6 practical themes",
    phrasesCard: "Key phrases",
    phrasesCardSub: "17 essential phrases",
    urgCard: "Emergencies",
    urgCardSub: "Numbers & phrases",
    tipsTitle: "Tips of the day",
    tagMetro: "Metro", tagDaily: "Daily life", tagBonus: "Good deal",
    tip1: "The Navigo Découverte pass (€86.40/month) covers all zones 1-5. Much cheaper if you use transport regularly.",
    tip2: "Register for social security on ameli.fr as soon as you arrive. Your healthcare reimbursement depends on it.",
    tip3: "National museums are free on the 1st Sunday of the month. Louvre, Orsay, Pompidou — enjoy!"
  },
  es: {
    welcome: "Bienvenido a París 🗼",
    title: "Tu integración empieza aquí",
    subtitle: "Metro, vida cotidiana, frases esenciales",
    progress: "Progreso global de tu integración",
    lines: "Líneas de metro",
    themes: "Temas",
    phrases: "Frases",
    metroCard: "Metro y RER",
    metroCardSub: "8 líneas explicadas",
    dailyCard: "Vida cotidiana",
    dailyCardSub: "6 temas prácticos",
    phrasesCard: "Frases clave",
    phrasesCardSub: "17 frases esenciales",
    urgCard: "Emergencias",
    urgCardSub: "Números y frases",
    tipsTitle: "Consejos del día",
    tagMetro: "Metro", tagDaily: "Vida práctica", tagBonus: "Buen plan",
    tip1: "El pase Navigo Découverte (86,40€/mes) cubre todas las zonas 1-5. Mucho más económico si usas el transporte regularmente.",
    tip2: "Regístrate en la seguridad social en ameli.fr al llegar. El reembolso de tu atención médica depende de ello.",
    tip3: "Los museos nacionales son gratuitos el 1er domingo del mes. Louvre, Orsay, Pompidou — ¡aprovecha!"
  },
  ar: {
    welcome: "أهلاً بك في باريس 🗼",
    title: "اندماجك يبدأ هنا",
    subtitle: "المترو، الحياة اليومية، العبارات الأساسية",
    progress: "التقدم العام لاندماجك",
    lines: "خطوط المترو",
    themes: "المواضيع",
    phrases: "العبارات",
    metroCard: "المترو و RER",
    metroCardSub: "8 خطوط مشروحة",
    dailyCard: "الحياة اليومية",
    dailyCardSub: "6 مواضيع عملية",
    phrasesCard: "عبارات مفتاحية",
    phrasesCardSub: "17 عبارة أساسية",
    urgCard: "الطوارئ",
    urgCardSub: "أرقام وعبارات",
    tipsTitle: "نصائح اليوم",
    tagMetro: "مترو", tagDaily: "حياة يومية", tagBonus: "عرض جيد",
    tip1: "تمرير Navigo Découverte (86.40 يورو/شهر) يغطي جميع المناطق 1-5. أكثر اقتصادًا إذا كنت تستخدم النقل بانتظام.",
    tip2: "سجل في الضمان الاجتماعي على ameli.fr عند وصولك. تعويض الرعاية الصحية يعتمد على ذلك.",
    tip3: "المتاحف الوطنية مجانية في أول أحد من الشهر. اللوفر، أورسيه، بومبيدو — استمتع!"
  },
  "ar-ma": {
    welcome: "مرحبا بك فباريس 🗼",
    title: "الاندماج ديالك كيبدا هنا",
    subtitle: "المترو، الحياة اليومية، العبارات الأساسية",
    progress: "التقدم العام ديال الاندماج",
    lines: "خطوط المترو",
    themes: "المواضيع",
    phrases: "العبارات",
    metroCard: "المترو و RER",
    metroCardSub: "8 خطوط مشروحين",
    dailyCard: "الحياة اليومية",
    dailyCardSub: "6 مواضيع عملية",
    phrasesCard: "عبارات مهمة",
    phrasesCardSub: "17 عبارة أساسية",
    urgCard: "الأوروجنس",
    urgCardSub: "أرقام وعبارات",
    tipsTitle: "نصائح اليوم",
    tagMetro: "مترو", tagDaily: "حياة يومية", tagBonus: "بون بلان",
    tip1: "Navigo Découverte (86.40 يورو فالشهر) كتغطي جميع الزون 1-5. أرخص بزاف إيلا كتركب التران بزربة.",
    tip2: "سجل فالضمان الاجتماعي على ameli.fr من داك ما توصل. تعويض الطبيب كيتعلق بهاد الشي.",
    tip3: "المتاحف الوطنية مجانية نهار الحد الأول من الشهر. اللوفر، أورسيه، بومبيدو — استافد!"
  },
  "ar-dz": {
    welcome: "مرحبا بيك في باريس 🗼",
    title: "الاندماج تاعك يبدا هنا",
    subtitle: "المترو، الحياة اليومية، العبارات الأساسية",
    progress: "التقدم العام تاع الاندماج",
    lines: "خطوط المترو",
    themes: "المواضيع",
    phrases: "العبارات",
    metroCard: "المترو و RER",
    metroCardSub: "8 خطوط مشروحين",
    dailyCard: "الحياة اليومية",
    dailyCardSub: "6 مواضيع عملية",
    phrasesCard: "عبارات مهمة",
    phrasesCardSub: "17 عبارة أساسية",
    urgCard: "الأوروجنس",
    urgCardSub: "أرقام وعبارات",
    tipsTitle: "نصائح اليوم",
    tagMetro: "مترو", tagDaily: "حياة يومية", tagBonus: "بلان مليح",
    tip1: "Navigo Découverte (86.40 يورو في الشهر) تغطي جميع الزون 1-5. أرخص برشة إذا كنت تركب التران ديما.",
    tip2: "سجل في الضمان الاجتماعي على ameli.fr كي توصل. تعويض الطبيب يتعلق بهذا الشي.",
    tip3: "المتاحف الوطنية مجانية نهار الحد الأول من الشهر. اللوفر، أورسيه، بومبيدو — استفد!"
  },
  "ar-tn": {
    welcome: "مرحبا بيك في باريس 🗼",
    title: "الاندماج متاعك يبدا هنا",
    subtitle: "المترو، الحياة اليومية، العبارات الأساسية",
    progress: "التقدم العام متاع الاندماج",
    lines: "خطوط المترو",
    themes: "المواضيع",
    phrases: "العبارات",
    metroCard: "المترو و RER",
    metroCardSub: "8 خطوط مشروحين",
    dailyCard: "الحياة اليومية",
    dailyCardSub: "6 مواضيع عملية",
    phrasesCard: "عبارات مهمة",
    phrasesCardSub: "17 عبارة أساسية",
    urgCard: "الأوروجنس",
    urgCardSub: "أرقام وعبارات",
    tipsTitle: "نصائح اليوم",
    tagMetro: "مترو", tagDaily: "حياة يومية", tagBonus: "بلان باهي",
    tip1: "Navigo Découverte (86.40 يورو في الشهر) تغطي جميع الزون 1-5. أرخص برشا كيف تركب التران ديما.",
    tip2: "سجل في الضمان الاجتماعي في ameli.fr كيف توصل. تعويض الطبيب يتعلق بهذا الشي.",
    tip3: "المتاحف الوطنية مجانية نهار الأحد الأول من الشهر. اللوفر، أورسيه، بومبيدو — استفد!"
  },
  "ar-eg": {
    welcome: "أهلاً بيك في باريس 🗼",
    title: "اندماجك بيبدأ من هنا",
    subtitle: "المترو، الحياة اليومية، العبارات الأساسية",
    progress: "التقدم العام لاندماجك",
    lines: "خطوط المترو",
    themes: "المواضيع",
    phrases: "العبارات",
    metroCard: "المترو و RER",
    metroCardSub: "8 خطوط مشروحة",
    dailyCard: "الحياة اليومية",
    dailyCardSub: "6 مواضيع عملية",
    phrasesCard: "عبارات مهمة",
    phrasesCardSub: "17 عبارة أساسية",
    urgCard: "الطوارئ",
    urgCardSub: "أرقام وعبارات",
    tipsTitle: "نصائح اليوم",
    tagMetro: "مترو", tagDaily: "حياة يومية", tagBonus: "عرض كويس",
    tip1: "تذكرة Navigo Découverte (86.40 يورو في الشهر) بتغطي كل الزون 1-5. أرخص بكتير لو بتركب المواصلات كتير.",
    tip2: "سجل في التأمين الصحي على ameli.fr أول ما توصل. تعويض العلاج بيعتمد عليه.",
    tip3: "المتاحف الوطنية مجانية أول أحد في الشهر. اللوفر، أورسيه، بومبيدو — استمتع!"
  },
  zh: {
    welcome: "欢迎来到巴黎 🗼",
    title: "你的融入从这里开始",
    subtitle: "地铁、日常生活、必备短语",
    progress: "你的整体融入进度",
    lines: "地铁线路",
    themes: "主题",
    phrases: "短语",
    metroCard: "地铁与 RER",
    metroCardSub: "8条线路详解",
    dailyCard: "日常生活",
    dailyCardSub: "6个实用主题",
    phrasesCard: "关键短语",
    phrasesCardSub: "17个必备短语",
    urgCard: "紧急情况",
    urgCardSub: "号码与短语",
    tipsTitle: "今日建议",
    tagMetro: "地铁", tagDaily: "日常", tagBonus: "优惠",
    tip1: "Navigo Découverte 月票（每月86.40欧元）覆盖所有1-5区。如果你经常乘坐交通工具，这更划算。",
    tip2: "到达后立即在 ameli.fr 注册社会保险。你的医疗报销取决于此。",
    tip3: "国家博物馆每月第一个周日免费。卢浮宫、奥赛、蓬皮杜——尽情享受！"
  }
};

export default function Home() {
  const { progress, lang } = useApp();
  const t = translations[lang] || translations.fr;

  const totalMetro = 8;
  const totalDaily = 6;
  const totalPhrases = 17;

  const metroProgress = Math.round((progress.metroLinesViewed.length / totalMetro) * 100);
  const dailyProgress = Math.round((progress.dailyCatsViewed.length / totalDaily) * 100);
  const phrasesProgress = Math.round((progress.phrasesPlayed.length / totalPhrases) * 100);
  const globalProgress = Math.round((metroProgress + dailyProgress + phrasesProgress) / 3);

  const tips = [
    { tag: t.tagMetro, tagColor: "#1A3A5C", tagBg: "#E6F1FB", border: "#378ADD", text: t.tip1 },
    { tag: t.tagDaily, tagColor: "#0F6E56", tagBg: "#E3F7EF", border: "#0FA871", text: t.tip2 },
    { tag: t.tagBonus, tagColor: "#854F0B", tagBg: "#FEF3DC", border: "#F5A623", text: t.tip3 }
  ];

  return (
    <div style={{ padding: '20px 16px' }}>
      <div style={{
        background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 60%, #0F6E56 100%)',
        borderRadius: 'var(--radius-lg)',
        padding: '20px',
        marginBottom: 20,
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', top: -20, right: -20,
          width: 120, height: 120, borderRadius: '50%',
          background: 'rgba(255,255,255,0.04)'
        }} />
        <div style={{ fontSize: 12, opacity: 0.65, marginBottom: 4 }}>{t.welcome}</div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, marginBottom: 2 }}>
          {t.title}
        </div>
        <div style={{ fontSize: 12, opacity: 0.6, marginBottom: 18 }}>
          {t.subtitle}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
          <div style={{
            flex: 1, background: 'rgba(255,255,255,0.15)',
            borderRadius: 8, height: 8, overflow: 'hidden'
          }}>
            <div style={{
              width: `${globalProgress}%`, height: '100%',
              background: 'var(--teal)', borderRadius: 8,
              transition: 'width 0.5s ease'
            }} />
          </div>
          <div style={{ fontSize: 13, fontWeight: 600 }}>{globalProgress}%</div>
        </div>
        <div style={{ fontSize: 11, opacity: 0.6 }}>{t.progress}</div>

        <div style={{ display: 'flex', gap: 16, marginTop: 18 }}>
          {[
            { label: t.lines, val: progress.metroLinesViewed.length, total: totalMetro },
            { label: t.themes, val: progress.dailyCatsViewed.length, total: totalDaily },
            { label: t.phrases, val: progress.phrasesPlayed.length, total: totalPhrases },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 22, fontWeight: 700, fontFamily: 'var(--font-display)' }}>
                {s.val}<span style={{ fontSize: 12, opacity: 0.5 }}>/{s.total}</span>
              </div>
              <div style={{ fontSize: 10, opacity: 0.6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 20 }}>
        {[
          { to: '/metro', icon: '🚇', title: t.metroCard, sub: t.metroCardSub, color: 'var(--navy)' },
          { to: '/quotidien', icon: '🛒', title: t.dailyCard, sub: t.dailyCardSub, color: 'var(--teal)' },
          { to: '/phrases', icon: '💬', title: t.phrasesCard, sub: t.phrasesCardSub, color: '#F5A623' },
          { to: '/phrases?cat=urgences', icon: '🆘', title: t.urgCard, sub: t.urgCardSub, color: 'var(--coral)' },
        ].map(card => (
          <Link key={card.to} to={card.to} style={{
            background: 'var(--white)',
            borderRadius: 'var(--radius-md)',
            padding: '16px 14px',
            border: '1px solid var(--gray-100)',
            boxShadow: 'var(--shadow-sm)',
            textDecoration: 'none',
            display: 'block',
            transition: 'transform 0.15s, box-shadow 0.15s',
          }}>
            <div style={{ fontSize: 24, marginBottom: 8 }}>{card.icon}</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700, color: 'var(--gray-800)', marginBottom: 2 }}>{card.title}</div>
            <div style={{ fontSize: 12, color: 'var(--gray-400)' }}>{card.sub}</div>
          </Link>
        ))}
      </div>

      <div style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700, color: 'var(--gray-600)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 }}>
        {t.tipsTitle}
      </div>
      {tips.map((tip, i) => (
        <div key={i} style={{
          background: 'var(--white)',
          borderRadius: 'var(--radius-md)',
          padding: '12px 14px',
          marginBottom: 10,
          borderLeft: `3px solid ${tip.border}`,
          boxShadow: 'var(--shadow-sm)'
        }}>
          <span style={{
            fontSize: 10, fontWeight: 600,
            color: tip.tagColor, background: tip.tagBg,
            padding: '2px 8px', borderRadius: 20,
            display: 'inline-block', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 0.5
          }}>{tip.tag}</span>
          <div style={{ fontSize: 13, color: 'var(--gray-800)', lineHeight: 1.55 }}>{tip.text}</div>
        </div>
      ))}
    </div>
  );
}