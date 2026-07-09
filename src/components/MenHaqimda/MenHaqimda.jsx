import './MenHaqimda.css';

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container section-title">
        <h2>Men haqimda</h2>
        <p>Men veb dasturlash  sohasida tajribali mutaxassisman. Mijozlarimning ehtiyojlarini tushunib, ularga eng yaxshi yechimlarni taklif qilaman. Har bir loyihaga ijodiy yondashib, sifatli va zamonaviy mahsulot yaratishga intilaman.</p>
      </div>

      <div className="container">
        <div className="row about-row">
          <div className="col-lg-4">
            <img src="/assets/img/my-profile.jpg" alt="Profil" className="about-img" />
          </div>
          <div className="col-lg-8 about-content">
            <h2>UI/UX Dizayner va Veb Dasturchi.</h2>
            <p className="about-subtitle">Men foydalanuvchilarga qulay va zamonaviy veb-saytlar hamda ilovalar yaratishga ixtisoslashganman. Har bir loyihada mijoz talablariga mos, sifatli mahsulot taqdim etaman.</p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Tug'ilgan kun:</strong> <span>27 Aprel 2003</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Veb-sayt:</strong> <span>www.example.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Telefon:</strong> <span>+999 99 315 4322</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Shahar:</strong> <span>Toshkent, O'zbekiston</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Yosh:</strong> <span>23</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Daraja:</strong> <span>Middle</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>muhammadsodiq4322@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelans:</strong> <span>TRINOVA</span></li>
                </ul>
              </div>
            </div>
            <p>Men veb dasturlash brending sohalarida keng ko'lamli xizmatlarni taklif qilaman. Mijozlarim bilan yaqin hamkorlikda ishlab, ularning maqsadlariga erishish uchun eng yaxshi yechimlarni topaman. Har bir loyiha uchun individual yondashuv va yuqori sifat kafolatlanadi.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
