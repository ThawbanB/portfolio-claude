'use client'

import { motion } from 'framer-motion'
import { Code2, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center">
            <Code2 className="w-3 h-3 text-white" />
          </div>
          <span className="text-sm text-gray-500">
            © {new Date().getFullYear()} Votre Nom
          </span>
        </div>

        <p className="text-xs text-gray-600 flex items-center gap-1.5">
          Fait avec <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> en Next.js & Tailwind CSS
        </p>

        <nav className="flex items-center gap-6">
          {['#hero', '#projects', '#skills', '#contact'].map((href, i) => {
            const labels = ['Accueil', 'Projets', 'Compétences', 'Contact']
            return (
              <a
                key={href}
                href={href}
                className="text-xs text-gray-500 hover:text-gray-300 transition-colors duration-200"
              >
                {labels[i]}
              </a>
            )
          })}
        </nav>
      </div>
    </footer>
  )
}
