'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, Mail, MapPin, Github, Linkedin, CheckCircle2, Loader2 } from 'lucide-react'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'thawbanjabss@outlook.fr', href: 'mailto:thawbanjabss@outlook.fr' },
  { icon: MapPin, label: 'Localisation', value: 'Paris, France', href: null },
]

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/ThawbanB' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/thawban-boujja/' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success
  const [errors, setErrors] = useState({})
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' })

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Le nom est requis.'
    if (!form.email.trim()) errs.email = "L'email est requis."
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Email invalide.'
    if (!form.message.trim()) errs.message = 'Le message est requis.'
    return errs
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setStatus('loading')
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500))
    setStatus('success')
    setForm({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  return (
    <section id="contact" className="py-24 px-6 relative" ref={sectionRef}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-violet-500/50" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Travaillons ensemble
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Me <span className="gradient-text">contacter</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Vous avez un projet en tête ? N'hésitez pas à me contacter, je vous répondrai dans les plus brefs délais.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-center gap-4 gradient-border rounded-xl p-4 bg-[#0d0d18]"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                      {value}
                    </a>
                  ) : (
                    <p className="text-gray-300 text-sm font-medium">{value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="gradient-border rounded-xl p-5 bg-[#0d0d18]">
              <p className="text-xs text-gray-500 mb-3 uppercase tracking-widest">Retrouvez-moi sur</p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-violet-500/15 transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="gradient-border rounded-xl p-5 bg-[#0d0d18] flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-sm font-medium">Disponible</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Actuellement disponible pour des missions freelance ou des opportunités en CDI.
              </p>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="gradient-border rounded-2xl p-6 md:p-8 bg-[#0d0d18] h-full">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Message envoyé !</h3>
                  <p className="text-gray-400 mb-6">Je vous répondrai dans les plus brefs délais.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-5 py-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors text-sm"
                  >
                    Envoyer un autre message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 h-full">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2" htmlFor="name">
                        Nom complet
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jean Dupont"
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.06] ${
                          errors.name ? 'ring-1 ring-rose-500/40' : ''
                        } text-white placeholder-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:bg-violet-500/5 transition-all duration-200`}
                      />
                      {errors.name && <p className="text-rose-400 text-xs mt-1.5">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2" htmlFor="email">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jean@exemple.com"
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.06] ${
                          errors.email ? 'ring-1 ring-rose-500/40' : ''
                        } text-white placeholder-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:bg-violet-500/5 transition-all duration-200`}
                      />
                      {errors.email && <p className="text-rose-400 text-xs mt-1.5">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="flex-1">
                    <label className="block text-sm text-gray-400 mb-2" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={7}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre projet ou votre demande..."
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.06] ${
                        errors.message ? 'ring-1 ring-rose-500/40' : ''
                      } text-white placeholder-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:bg-violet-500/5 transition-all duration-200 resize-none`}
                    />
                    {errors.message && <p className="text-rose-400 text-xs mt-1.5">{errors.message}</p>}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-400 text-white font-semibold transition-all duration-200 hover:shadow-xl hover:shadow-violet-500/30 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Envoyer le message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
