// Jeppis Carwash - Next.js App (App Router)
// Instructions:
// 1. npx create-next-app@latest jeppis-carwash
// 2. Replace /app/page.tsx with this file
// 3. Run: npm run dev
// 4. Deploy to Vercel (recommended)

'use client'

import { useState } from 'react'

export default function Home() {
  const [lang, setLang] = useState<'sv' | 'fi'>('sv')

  const text = {
    sv: {
      title: '🧽 Jeppis Carwash 🧽',
      book: 'Boka tid',
      services: 'Tjänster',
      name: 'Namn',
      date: 'Datum',
      submit: 'Skicka',
      success: 'Tack! Vi kontaktar dig snart.'
    },
    fi: {
      title: '🧽 Jeppis Carwash 🧽',
      book: 'Varaa aika',
      services: 'Palvelut',
      name: 'Nimi',
      date: 'Päivämäärä',
      submit: 'Lähetä',
      success: 'Kiitos! Otamme sinuun pian yhteyttä.'
    }
  }

  const t = text[lang]
  const [submitted, setSubmitted] = useState(false)

  return (
    <main className="min-h-screen bg-blue-100 p-6">
      <div className="flex justify-end gap-2">
        <button onClick={() => setLang('sv')} className="px-3 py-1 bg-white rounded">SV</button>
        <button onClick={() => setLang('fi')} className="px-3 py-1 bg-white rounded">FI</button>
      </div>

      <h1 className="text-4xl font-bold text-center mt-4">{t.title}</h1>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">{t.services}</h2>
        <ul className="mt-4 space-y-2">
          <li>🚗 Basic Wash - 15€</li>
          <li>✨ Premium Wash - 25€</li>
          <li>🧼 Full Detail - 50€</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">{t.book}</h2>

        {submitted ? (
          <p className="mt-4 text-green-600">{t.success}</p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setSubmitted(true)
            }}
            className="mt-4 space-y-4"
          >
            <input
              required
              placeholder={t.name}
              className="w-full p-2 rounded border"
            />
            <input
              type="date"
              required
              className="w-full p-2 rounded border"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              {t.submit}
            </button>
          </form>
        )}
      </section>

      <footer className="mt-16 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Jeppis Carwash
      </footer>
    </main>
  )
}

// LOGO (use this SVG and save as /public/logo.svg)
/*
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <circle cx="100" cy="100" r="90" fill="#3B82F6" />
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="20" fill="white">🧽 JC</text>
</svg>
*/

// HOW TO PUBLISH TO GOOGLE:
// 1. Deploy to https://vercel.com
// 2. After deploy, go to https://search.google.com/search-console
// 3. Add your website URL
// 4. Submit sitemap (Next.js auto or /sitemap.xml)
