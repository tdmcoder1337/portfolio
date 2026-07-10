import './Rezyume.css';

const summary = {
  title: 'Sodiqov Muhammadsodiq',
  subtitle: "Men hozirgi kunda o'sib kelayotgan va yangi bo'lgan texnalogiyalarni o'rganishda davom etayotgan Full Stack dasturchiman. Men o'z ishlarimni mukammal bajarishga intilaman va har doim yangi narsalarni o'rganishga tayyorman.",
  details: ["Toshkent, O'zbekiston", '+998 99 315 4322', 'shokirovich.uz'],
};

const education = [
  {
    title: 'Front End',
    year: '2023 - 2026',
    school: '"Information Technology Park, Toshkent, O\'zbekiston" da o\'qiganman.',
    desc: 'Men bu yo\'nalishda o\'z bilimlarimni oshirish va amaliy tajriba orttirish uchun turli kurslarda qatnashdim. Bu kurslar orqali men zamonaviy web texnologiyalari, JavaScript, React va boshqa front-end texnologiyalarini chuqur o\'rganish imkoniyatiga ega bo\'ldim.',
  },
  {
    title: 'Back End',
    year: '2024 - 2026 ',
    school: '"Information Technology Park, Toshkent, O\'zbekiston."da o\'qiganman.',
    desc: 'Mening asosiy yo\'nalishim backend bo\'lib, men server tomonida ishlash, ma\'lumotlar bazasi bilan ishlash va API larni yaratish bo\'yicha chuqur bilimga egaman. Bu yo\'nalishda men Node.js, Express.js va boshqa backend texnologiyalarini o\'rganib, amaliy tajriba orttirdim.',
  },
];

const experience = [
  {
    title: 'Middle Web Dasturchi',
    year: '2023 - Hozirgacha',
    company: 'company: TRINOVA, Toshkent, O\'zbekiston',
    points: [
      "Dasturiy ta'minot loyihalarini ishlab chiqish va amalga oshirish",
      "TRINOVA kompaniyaning veb-dasturchilarini ishini taqsimlash va nazorat qilish",
      'Barcha loyihalarning sifati server va kod uslubiga mos kelishini ta\'minlash.',
      "Loyihalarni rejalashtirish va bajarish uchun jamoa bilan hamkorlik qilish.",
    ],
  },
  {
    title: 'Nega aynan dasturlash ?',
    year: '2023 - Hozirgacha',
    company: 'company: TRINOVA, Toshkent, O\'zbekiston',
    points: [
      'Men dasturlashni tanladim, chunki bu soha doimo rivojlanib boradi va yangi texnologiyalarni o\'rganish imkoniyatini beradi. ',
      "Bosim ostida qattiq mehnat qilish hamda intizomli bo'lish bu haqiqiy dasturchi uchun muhim fazilatlardir.",
      "Mijozlarning ishlash talablari va ehtiyojlarini tushunish va ularga mos yechimlar ishlab chiqishga xarakat qilaman.",
      "Dasturlash bu har bir qiziquvchan insonni aqliy salohiyatini oshiradi hamda algoritmik fikrlashni rivojlantiradi. Shu sababli men dasturlashni tanladim va bu sohada o'z bilimlarimni oshirishga intilaman.",
    ],
  },
];

export default function Resume() {
  return (
    <section id="resume" className="resume section">
      <div className="container section-title">
        <h2>Rezyume</h2>
        <p>Sizning taklifingizga mos ravishda ehtiyojlarni qoplayman. Men loyihani har bir jihatini juda qattiq nazorat qilaman. Shuningdek jamoa bilan ishlashda liderlik qobilyatiga egaman. </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Xulosa</h3>
            <div className="resume-item">
              <h4>{summary.title}</h4>
              <p><em>{summary.subtitle}</em></p>
              <ul>
                {summary.details.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </div>

            <h3 className="resume-title">Ta'lim</h3>
            {education.map((item, i) => (
              <div key={i} className="resume-item">
                <h4>{item.title}</h4>
                <h5>{item.year}</h5>
                <p><em>{item.school}</em></p>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="col-lg-6">
            <h3 className="resume-title">Ish tajribasi</h3>
            {experience.map((item, i) => (
              <div key={i} className="resume-item">
                <h4>{item.title}</h4>
                <h5>{item.year}</h5>
                <p><em>{item.company}</em></p>
                <ul>
                  {item.points.map((point, j) => <li key={j}>{point}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
