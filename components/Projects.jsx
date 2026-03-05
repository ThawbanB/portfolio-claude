'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, Folder } from 'lucide-react'

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'Plateforme de vente en ligne complète avec panier, paiement Stripe, gestion des commandes et tableau de bord admin.',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com',
    live: 'https://example.com',
    color: 'from-violet-500 to-purple-600',
    featured: true,
  },
  {
    title: 'Task Manager App',
    description:
      'Application de gestion de tâches collaborative avec temps réel, drag & drop et notifications.',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'DnD Kit'],
    github: 'https://github.com',
    live: 'https://example.com',
    color: 'from-cyan-500 to-blue-600',
    featured: true,
  },
  {
    title: 'API REST Météo',
    description:
      'API météo qui agrège plusieurs sources de données avec mise en cache Redis et documentation Swagger.',
    tags: ['Node.js', 'Express', 'Redis', 'Swagger'],
    github: 'https://github.com',
    live: null,
    color: 'from-emerald-500 to-teal-600',
    featured: false,
  },
  {
    title: 'Dashboard Analytics',
    description:
      'Tableau de bord analytique avec graphiques interactifs, filtres dynamiques et export PDF/Excel.',
    tags: ['React', 'Recharts', 'TypeScript', 'Shadcn UI'],
    github: 'https://github.com',
    live: 'https://example.com',
    color: 'from-orange-500 to-rose-600',
    featured: false,
  },
  {
    title: 'Chat en Temps Réel',
    description:
      'Application de messagerie instantanée avec salons, messages privés, partage de fichiers et émojis.',
    tags: ['Next.js', 'Socket.io', 'PostgreSQL', 'Prisma'],
    github: 'https://github.com',
    live: 'https://example.com',
    color: 'from-pink-500 to-rose-600',
    featured: false,
  },
  {
    title: 'Portfolio CMS',
    description:
      'CMS headless sur mesure pour gérer le contenu d\'un portfolio avec éditeur rich-text et gestion d\'assets.',
    tags: ['Next.js', 'Sanity.io', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com',
    live: null,
    color: 'from-yellow-500 to-orange-600',
    featured: false,
  },
]

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col gradient-border rounded-2xl p-6 bg-[#0d0d18] hover:bg-[#0f0f20] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-500/10"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg`}>
          <Folder className="w-5 h-5 text-white" />
        </div>
        <div className="flex items-center gap-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
            aria-label="Code source"
          >
            <Github className="w-4 h-4" />
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
              aria-label="Voir le projet"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors duration-200">
        {project.title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-md bg-white/5 text-gray-400 text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-50px' })

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-violet-500/50" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Mes réalisations
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projets <span className="gradient-text">récents</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Une sélection de projets sur lesquels j'ai travaillé, allant d'applications web complètes à des APIs robustes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium group"
          >
            <Github className="w-4 h-4" />
            Voir plus sur GitHub
            <ExternalLink className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
