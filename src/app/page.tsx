'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import SectionHeading from '@/components/SectionHeading'

const services = [
  {
    title: 'Websites & Landingpages',
    description: 'Moderne, schnelle Websites mit klarem Fokus auf Conversion — für lokale Unternehmen und Online-Projekte in der Region Stuttgart.',
  },
  {
    title: 'WordPress & Website-Pflege',
    description: 'Professionelle WordPress-Einrichtung, regelmäßige Updates, Sicherheits-Backups und laufende Betreuung Ihrer bestehenden Website.',
  },
  {
    title: 'Frontend-Anpassungen',
    description: 'Gezielte Anpassungen an Design, Layout und Funktionen Ihrer bestehenden Website — ohne unnötige Neugestaltung.',
  },
  {
    title: 'Automatisierung einfacher Abläufe',
    description: 'Wiederkehrende digitale Prozesse automatisieren: Formulare, E-Mail-Benachrichtigungen, Terminbuchungen und mehr.',
  },
  {
    title: 'Online-Präsenz & Struktur',
    description: 'Aufbau einer klaren digitalen Identität: Domain, Hosting, Seitenstruktur und erste Sichtbarkeit für Ihr Unternehmen im Netz.',
  },
  {
    title: 'Digitale Prozessoptimierung',
    description: 'Analyse und gezielte Verbesserung digitaler Abläufe — damit Ihr Team weniger Zeit mit manuellen Aufgaben verbringt.',
  },
]

const showcase = [
  'Handwerk',
  'Reinigung',
  'Umzug',
  'Sicherheit',
  'Gutachter',
  'lokale Dienstleister',
  'Online-Projekte',
]

const why = [
  'Schnelles Verständnis für Geschäftsprozesse',
  'Klare Kommunikation',
  'Praktische Umsetzung',
  'Moderne Arbeitsweise',
  'Lösungsorientiertes Denken',
  'Fokus auf Ergebnis',
]

const workflow = [
  {
    step: 'Analyse',
    description: 'Ich verstehe Ihr Geschäft, Ihre Ziele und den aktuellen Stand Ihrer digitalen Präsenz — bevor ich auch nur eine Zeile Code schreibe.',
  },
  {
    step: 'Konzept',
    description: 'Klare Struktur, Technologieauswahl und ein realistischer Plan mit konkreten Schritten und Zeitrahmen.',
  },
  {
    step: 'Umsetzung',
    description: 'Saubere, funktionierende Entwicklung — Schritt für Schritt, mit regelmäßigen Updates zum Stand der Arbeit.',
  },
  {
    step: 'Prüfung',
    description: 'Test auf allen Geräten: Desktop, Tablet und Smartphone. Kontrolle von Inhalten, Ladezeit und Benutzerfreundlichkeit.',
  },
  {
    step: 'Übergabe',
    description: 'Sie erhalten alle Zugänge, eine klare Erklärung und ein System, das Sie selbst bedienen und pflegen können.',
  },
  {
    step: 'Optimierung',
    description: 'Nach dem Launch beobachte ich die Ergebnisse und passe gezielt an — auf Basis echter Nutzerdaten und Ihres Feedbacks.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function Home() {
  return (
    <div id="top" className="min-h-screen overflow-hidden">
      <Navbar />
      <main className="relative overflow-hidden px-6 pb-24 pt-8 sm:px-10 lg:px-12">
        <div className="absolute inset-x-0 top-0 h-96 bg-hero-gradient opacity-75 blur-3xl" />
        <section className="relative mx-auto flex max-w-7xl flex-col gap-14 py-12 lg:flex-row lg:items-center lg:gap-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-2xl space-y-8"
          >
            <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm uppercase tracking-[0.2em] text-cyan-200/90">
              Webentwicklung · Backnang
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Digitale Lösungen, die Unternehmen moderner, schneller und sichtbarer machen.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
              Webentwicklung, WordPress, Automatisierung und digitale Prozesse für kleine und mittelständische Unternehmen.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:bg-cyan-300"
              >
                Projekt anfragen
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/30 hover:bg-white/10"
              >
                Leistungen ansehen
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="glass-card p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-200/80">Name</p>
                <p className="mt-3 text-xl font-semibold text-white">Ulvi Quliyev</p>
              </div>
              <div className="glass-card p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-200/80">Ort</p>
                <p className="mt-3 text-xl font-semibold text-white">Backnang, Deutschland</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            className="relative mx-auto w-full max-w-3xl"
          >
            <div className="glass-card relative overflow-hidden border-white/10 px-7 py-8 shadow-glow sm:px-8 sm:py-10">
              <div className="absolute -left-10 top-10 h-36 w-36 rounded-full bg-cyan-400/15 blur-3xl" />
              <div className="absolute -right-8 bottom-10 h-24 w-24 rounded-full bg-fuchsia-400/15 blur-3xl" />
              <div className="space-y-8">
                <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.12)]">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Für lokale Unternehmen</p>
                    <h2 className="mt-3 text-2xl font-semibold text-white">Digitale Lösungen, die wirklich funktionieren.</h2>
                  </div>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300 text-xl">✦</span>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    { label: 'Websites', text: 'Moderne Seiten für klare Anfragen' },
                    { label: 'WordPress', text: 'Pflege, Anpassung und Struktur' },
                    { label: 'Automatisierung', text: 'Abläufe einfacher machen' },
                  ].map((item) => (
                    <div key={item.label} className="rounded-3xl border border-white/10 bg-slate-950/90 p-5">
                      <p className="text-sm text-cyan-300/80">{item.label}</p>
                      <p className="mt-3 text-sm font-medium text-white leading-snug">{item.text}</p>
                    </div>
                  ))}
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {['Planen', 'Umsetzen', 'Optimieren'].map((label) => (
                    <div key={label} className="rounded-3xl border border-white/10 bg-white/5 p-4 text-center text-sm text-slate-200">
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <motion.section
          id="services"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative mx-auto max-w-7xl pt-12"
        >
          <SectionHeading
            title="Leistungen für Ihren digitalen Auftritt"
            description="Professionelle Angebote für eine starke Online-Präsenz, langfristige Betreuung und effiziente Geschäftsprozesse."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="glass-card p-6 transition hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-white/10">
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-200/80">Leistung</p>
                <h3 className="mt-4 text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-slate-300">{service.description}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="showcase"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative mx-auto max-w-7xl pt-20"
        >
          <SectionHeading
            title="Einsatzbereiche"
            description="Digitale Lösungen für unterschiedliche Branchen — von Handwerk und Dienstleistern bis zu lokalen Online-Projekten."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {showcase.map((item) => (
              <div key={item} className="glass-card p-6 transition hover:-translate-y-1 hover:border-fuchsia-300/25 hover:bg-white/10">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Branche</p>
                <h3 className="mt-4 text-xl font-semibold text-white">{item}</h3>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="why"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative mx-auto max-w-7xl pt-20"
        >
          <SectionHeading
            title="Warum mit mir zusammenarbeiten?"
            description="Klare Ergebnisse, professionelle Betreuung und eine moderne Herangehensweise an digitale Projekte."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {why.map((item) => (
              <div key={item} className="glass-card p-6 transition hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-white/10">
                <p className="text-base font-semibold text-white">{item}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="workflow"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative mx-auto max-w-7xl pt-20"
        >
          <SectionHeading
            title="Arbeitsweise als Timeline"
            description="Ein klarer Ablauf von der ersten Analyse bis zur Optimierung nach dem Launch."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {workflow.map((item, index) => (
              <div key={item.step} className="glass-card p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-400/10 text-xl font-semibold text-cyan-200">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{item.step}</h3>
                </div>
                <p className="mt-4 text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative mx-auto max-w-7xl pt-20 pb-20"
        >
          <div className="glass-card border-white/10 p-8 sm:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-200/80">Kontakt</p>
                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Lassen Sie uns über Ihr Projekt sprechen.</h2>
                <p className="mt-4 max-w-xl text-slate-300">
                  Ich unterstütze Sie bei Webprojekten, Automatisierung und digitalen Prozessen, die echte Wirkung zeigen.
                </p>
              </div>

              <div className="grid gap-4 rounded-3xl border border-white/10 bg-slate-950/85 p-6 text-slate-200 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Name</p>
                  <p className="mt-2 text-lg font-semibold text-white">Ulvi Quliyev</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Ort</p>
                  <p className="mt-2 text-lg font-semibold text-white">Backnang, Deutschland</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">E-Mail</p>
                  <a href="mailto:ulviroza2013@gmail.com" className="mt-2 block text-lg font-semibold text-cyan-200 hover:text-white">
                    ulviroza2013@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Telefon</p>
                  <a href="tel:+4915510595198" className="mt-2 block text-lg font-semibold text-cyan-200 hover:text-white">
                    +49 15510 595198
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  )
}
