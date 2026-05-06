import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const gallery = [
  '/Picsart_24-08-01_17-50-54-868.jpg.jpeg',
  '/B612_20250417_125747_836.jpg.jpeg',
  // '/B612_20250206_085852_551.jpg.jpeg',
  // '/B612_20250411_174750_488.jpg.jpeg',
  // '/B612_20250429_134629_681.jpg.jpeg',
  // '/B612_20240915_144233_036.jpg.jpeg',
]

function App() {
  const { i18n, t } = useTranslation()
  const [isContactOpen, setIsContactOpen] = useState(false)
  const direction = t('meta.dir')
  const lang = t('meta.lang')

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = direction
  }, [direction, lang])

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white" dir={direction}>
      <Nav onContactOpen={() => setIsContactOpen(true)} />
      <Hero />
      <About />
      <Services />
      <Proof />
      <Contact onContactOpen={() => setIsContactOpen(true)} />
      <Footer />
      <LanguageDock activeLanguage={i18n.language} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </main>
  )
}

function Nav({ onContactOpen }) {
  const { t } = useTranslation()

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-red-950/70 bg-black/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#hero" className="group leading-none">
          <span className="block text-sm font-black uppercase tracking-[0.42em] text-white">
            {t('brand.handle')}
          </span>
          <span className="mt-1 block text-[0.65rem] uppercase tracking-[0.34em] text-red-500">
            {t('brand.motto')}
          </span>
        </a>

        <div className="hidden items-center gap-8 text-xs font-bold uppercase tracking-[0.28em] text-zinc-400 md:flex">
          <a className="transition hover:text-white" href="#about">
            {t('nav.coach')}
          </a>
          <a className="transition hover:text-white" href="#services">
            {t('nav.programmes')}
          </a>
          <a className="transition hover:text-white" href="#proof">
            {t('nav.proof')}
          </a>
        </div>

        <button className="btn-primary px-4 py-3 text-xs" onClick={onContactOpen} type="button">
          {t('nav.contact')}
        </button>
      </nav>
    </header>
  )
}

function Hero() {
  const { t } = useTranslation()
  const stats = t('stats', { returnObjects: true })

  return (
    <section id="hero" className="relative flex min-h-screen items-center pt-24">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover object-[center_28%] opacity-[0.38]"
          src="/Picsart_24-08-01_17-50-54-868.jpg.jpeg"
          alt={t('hero.imageAlt')}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(120,20,20,0.38),transparent_30%),linear-gradient(90deg,#000_0%,rgba(0,0,0,0.86)_34%,rgba(0,0,0,0.32)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div className="max-w-3xl animate-rise">
          <p className="eyebrow">{t('hero.eyebrow')}</p>
          <h1 className="mt-5 text-5xl font-black uppercase leading-[0.86] tracking-[-0.07em] text-white sm:text-7xl lg:text-8xl">
            {t('hero.title')}
          </h1>
          <p className="mt-6 max-w-xl text-lg font-medium leading-8 text-zinc-300 sm:text-xl">
            {t('hero.copy')}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a className="btn-primary" href="#contact">
              {t('hero.primary')}
            </a>
            <a className="btn-secondary" href="#services">
              {t('hero.secondary')}
            </a>
          </div>
        </div>

        <div className="animate-rise rounded-[2rem] border border-red-900/60 bg-red-950/10 p-4 shadow-2xl shadow-red-950/30 [animation-delay:160ms] lg:justify-self-end">
          <div className="grid grid-cols-3 divide-x divide-red-900/70 rounded-[1.5rem] border border-red-950 bg-black/80">
            {stats.map(({ value, label }) => (
              <div className="p-4 text-center sm:p-6" key={value}>
                <p className="text-xl font-black uppercase text-white sm:text-2xl">
                  {value}
                </p>
                <p className="mt-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-red-500">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  const { t } = useTranslation()
  const tags = t('about.tags', { returnObjects: true })

  return (
    <section id="about" className="section-padding border-t border-red-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div className="relative">
          <img
            className="aspect-[4/5] w-full rounded-[2rem] border border-red-900/70 object-cover shadow-2xl shadow-red-950/20"
            src="/B612_20241004_101816_497.jpg.jpeg"
            alt={t('about.imageAlt')}
          />
          <div className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-red-800/70 bg-black/85 p-5 backdrop-blur">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-red-500">
              {t('brand.name')}
            </p>
            <p className="mt-1 text-2xl font-black uppercase">{t('brand.handle')}</p>
          </div>
        </div>

        <div>
          <p className="eyebrow">{t('about.eyebrow')}</p>
          <h2 className="section-title mt-4">{t('about.title')}</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            {t('about.copy')}
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {tags.map((item) => (
              <div
                className="rounded-2xl border border-red-950 bg-red-950/20 p-5 text-sm font-black uppercase tracking-[0.16em] text-white"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  const { t } = useTranslation()
  const services = t('services.items', { returnObjects: true })

  return (
    <section id="services" className="section-padding bg-[linear-gradient(180deg,#140303,#000)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="eyebrow">{t('services.eyebrow')}</p>
          <h2 className="section-title mt-4">{t('services.title')}</h2>
          <p className="mt-5 text-lg leading-8 text-zinc-400">
            {t('services.copy')}
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {services.map((service) => (
            <article
              className={`group flex min-h-[30rem] flex-col rounded-[1.75rem] border p-6 transition duration-500 hover:-translate-y-2 ${
                service.featured
                  ? 'border-red-500 bg-red-950/35 shadow-2xl shadow-red-950/40'
                  : 'border-red-950 bg-zinc-950/70 hover:border-red-700'
              }`}
              key={service.name}
            >
              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-red-500">
                  {service.price} {t('services.perMonth')}
                </p>
                <h3 className="mt-5 text-2xl font-black uppercase leading-tight text-white">
                  {service.name}
                </h3>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.08em] text-zinc-400">
                  {service.intro}
                </p>
              </div>

              <ul className="mt-8 space-y-4 text-sm leading-6 text-zinc-300">
                {service.features.map((feature) => (
                  <li className="flex gap-3" key={feature}>
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a className="btn-card mt-auto" href="#contact">
                {t('services.cta')}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Proof() {
  const { t } = useTranslation()
  const imageAlts = t('proof.images', { returnObjects: true })

  return (
    <section id="proof" className="section-padding border-y border-red-950">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">{t('proof.eyebrow')}</p>
            <h2 className="section-title mt-4">{t('proof.title')}</h2>
          </div>
          <p className="max-w-md text-base leading-7 text-zinc-400">
            {t('proof.copy')}
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[18rem] gap-4 md:grid-cols-4">
          {gallery.map((image, index) => (
            <figure
              className={`group relative overflow-hidden rounded-[1.5rem] border border-red-950 bg-red-950/10 ${
                index === 0 || index === 1 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              key={image}
            >
              <img
                className="h-full w-full object-cover opacity-[0.82] grayscale transition duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                src={image}
                alt={imageAlts[index]}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact({ onContactOpen }) {
  const { t } = useTranslation()

  return (
    <section id="contact" className="section-padding bg-red-950/10">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] border border-red-900/70 bg-black p-7 sm:p-10">
          <p className="eyebrow">{t('contact.eyebrow')}</p>
          <h2 className="section-title mt-4">{t('contact.title')}</h2>
          <p className="mt-5 text-lg leading-8 text-zinc-300">
            {t('contact.copy')}
          </p>

          <div className="mt-8 space-y-4 text-sm font-bold uppercase tracking-[0.15em] text-zinc-300">
            <p>{t('contact.gymPhone')}</p>
            <p>{t('contact.coachPhone')}</p>
            <p>{t('contact.location')}</p>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button className="btn-primary" onClick={onContactOpen} type="button">
              {t('contact.coachCta')}
            </button>
            <a className="btn-secondary" href="tel:0657282828">
              {t('contact.joinCta')}
            </a>
          </div>
        </div>

        <div className="min-h-[28rem] overflow-hidden rounded-[2rem] border border-red-900/70 bg-zinc-950">
          <iframe
            className="h-full min-h-[28rem] w-full grayscale invert"
            title={t('contact.mapTitle')}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Infinity%20Gym%20Saida%20Cite%20Riadh&output=embed"
          />
        </div>
      </div>
    </section>
  )
}

function ContactModal({ isOpen, onClose }) {
  const { t } = useTranslation()

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) {
    return null
  }

  return (
    <div
      aria-labelledby="contact-modal-title"
      aria-modal="true"
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/55 px-5 py-8 backdrop-blur-xl"
      role="dialog"
    >
      <button
        aria-label={t('contactModal.close')}
        className="absolute inset-0 h-full w-full cursor-default"
        onClick={onClose}
        type="button"
      />
      <div className="relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-red-700/70 bg-black/90 p-6 shadow-2xl shadow-red-950/50 sm:p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(220,38,38,0.24),transparent_40%)]" />
        <div className="relative">
          <button
            aria-label={t('contactModal.close')}
            className="absolute right-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-red-900 text-xl font-black text-zinc-400 transition hover:border-red-500 hover:text-white rtl:left-0 rtl:right-auto"
            onClick={onClose}
            type="button"
          >
            x
          </button>

          <p className="eyebrow">{t('contactModal.eyebrow')}</p>
          <h2
            className="mt-4 max-w-md text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] text-white sm:text-5xl"
            id="contact-modal-title"
          >
            {t('contactModal.title')}
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-zinc-300">
            {t('contactModal.copy')}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <a
              className="rounded-2xl border border-red-600 bg-red-600 px-5 py-5 text-center text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-red-500"
              href="https://wa.me/213799513442"
              rel="noreferrer"
              target="_blank"
            >
              {t('contactModal.whatsapp')}
            </a>
            <a
              className="rounded-2xl border border-red-800 bg-red-950/50 px-5 py-5 text-center text-sm font-black uppercase tracking-[0.16em] text-white transition hover:border-red-500 hover:bg-red-900/70"
              href="https://www.instagram.com/toji_fit95"
              rel="noreferrer"
              target="_blank"
            >
              {t('contactModal.instagram')}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-red-950 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
        <p className="font-black uppercase tracking-[0.3em] text-white">
          {t('footer.identity')}
        </p>
        <p className="uppercase tracking-[0.22em]">{t('footer.motto')}</p>
        <a
          className="font-black uppercase tracking-[0.24em] text-red-500 transition hover:text-white"
          href="https://www.instagram.com/toji_fit95"
          rel="noreferrer"
          target="_blank"
        >
          {t('footer.instagram')}
        </a>
      </div>
    </footer>
  )
}

function LanguageDock({ activeLanguage }) {
  const { i18n } = useTranslation()
  const languages = [
    ['fr', 'FR'],
    ['en', 'EN'],
    ['ar', 'AR'],
  ]

  return (
    <div className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 gap-1 rounded-full border border-red-900/80 bg-black/80 p-1 shadow-2xl shadow-red-950/40 backdrop-blur">
      {languages.map(([code, label]) => (
        <button
          className={`rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.18em] transition ${
            activeLanguage === code
              ? 'bg-red-500 text-black'
              : 'text-zinc-400 hover:bg-red-950/60 hover:text-white'
          }`}
          key={code}
          onClick={() => i18n.changeLanguage(code)}
          type="button"
        >
          {label}
        </button>
      ))}
    </div>
  )
}

export default App
