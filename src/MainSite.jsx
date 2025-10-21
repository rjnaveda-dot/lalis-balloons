import React from 'react'
import { useTranslation } from 'react-i18next'

export default function MainSite() {
  const { t } = useTranslation()
  return (
    <div>
      <header className="header">
        <div className="logo container">
          <div className="title font-handwriting">Lali’s Balloons & Designs</div>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h1 className="font-handwriting">Lali’s Balloons & Designs</h1>
          <p className="mt-2">{t('tagline')}</p>
        </div>
      </section>

      <main className="container">
        <section>
          <h2 className="text-2xl font-semibold mt-6">{t('services')}</h2>

          <h3 className="mt-4">{t('balloons')}</h3>
          <div className="grid">
            <div className="card"><img src="/src/assets/gallery/balloons/balloon_1.jpg" alt="balloon 1" /></div>
            <div className="card"><img src="/src/assets/gallery/balloons/balloon_2.jpg" alt="balloon 2" /></div>
            <div className="card"><img src="/src/assets/gallery/balloons/balloon_3.jpg" alt="balloon 3" /></div>
            <div className="card"><img src="/src/assets/gallery/balloons/balloon_4.jpg" alt="balloon 4" /></div>
            <div className="card"><img src="/src/assets/gallery/balloons/balloon_5.jpg" alt="balloon 5" /></div>

          </div>

          <h3 className="mt-6">{t('flowers')}</h3>
          <div className="grid">
            <div className="card"><img src="/src/assets/gallery/placeholder_flower1.jpg" alt="flower 1" /></div>
            <div className="card"><img src="/src/assets/gallery/placeholder_flower2.jpg" alt="flower 2" /></div>
          </div>

          <h3 className="mt-6">{t('crafts')}</h3>
          <div className="grid">
            <div className="card"><img src="/src/assets/gallery/placeholder_craft1.jpg" alt="craft 1" /></div>
            <div className="card"><img src="/src/assets/gallery/placeholder_craft2.jpg" alt="craft 2" /></div>
          </div>

          <h3 className="mt-6">{t('sublimation')}</h3>
          <div className="grid">
            <div className="card"><img src="/src/assets/gallery/placeholder_sub1.jpg" alt="sub 1" /></div>
            <div className="card"><img src="/src/assets/gallery/placeholder_sub2.jpg" alt="sub 2" /></div>
          </div>
        </section>

        <section className="about">
          <h3>{t('about_title')}</h3>
          <p>{t('about_text')}</p>
        </section>

        <section className="mt-6">
          <h3>Contacto</h3>
          <p>Tel: 318-794-0794 · 318-451-8500 · 318-319-5678</p>
          <p>Email: amjimenezg@gmail.com · rjnaveda@gmail.com</p>
        </section>

        <footer className="footer">
          © {new Date().getFullYear()} Lali’s Balloons & Designs
        </footer>
      </main>
    </div>
  )
}
