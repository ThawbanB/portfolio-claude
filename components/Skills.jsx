'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    title: 'Frontend',
    color: 'violet',
    skills: [
      { name: 'React / Next.js', level: 90 },
      { name: 'HTML & CSS', level: 95 },
      { name: 'JavaScript / TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Framer Motion', level: 75 },
    ],
  },
  {
    title: 'Backend',
    color: 'cyan',
    skills: [
      { name: 'Node.js / Express', level: 82 },
      { name: 'PostgreSQL / MySQL', level: 78 },
      { name: 'MongoDB', level: 75 },
      { name: 'REST API', level: 88 },
      { name: 'GraphQL', level: 65 },
    ],
  },
]

const tools = [
  'Git / GitHub', 'Docker', 'VS Code', 'Figma',
  'Vercel', 'Linux', 'Jest', 'Prisma',
  'Redux', 'Zustand', 'Next Auth', 'Swagger',
]

const colorMap = {
  violet: {
    bar: 'from-violet-600 to-violet-400',
    badge: 'bg-violet-500/10 border-violet-500/20 text-violet-300',
    text: 'text-violet-400',
    glow: 'shadow-violet-500/20',
  },
  cyan: {
    bar: 'from-cyan-600 to-cyan-400',
    badge: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300',
    text: 'text-cyan-400',
    glow: 'shadow-cyan-500/20',
  },
}

function SkillBar({ name, level, color, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-30px' })
  const c = colorMap[color]

  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-300 text-sm font-medium">{name}</span>
        <span className={`text-xs font-semibold ${c.text}`}>{level}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className={`h-full rounded-full bg-gradient-to-r ${c.bar} shadow-sm ${c.glow}`}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-50px' })

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-cyan-500/50" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Mon expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mes <span className="gradient-text">compétences</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Technologies et outils que j'utilise au quotidien pour construire des applications web modernes.
          </p>
        </motion.div>

        {/* Skill bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, catIndex) => {
            const c = colorMap[category.color]
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: catIndex === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: catIndex * 0.15 }}
                className="gradient-border rounded-2xl p-6 bg-[#0d0d18]"
              >
                <h3 className={`text-lg font-semibold mb-6 ${c.text}`}>
                  {category.title}
                </h3>
                {category.skills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={category.color}
                    index={i}
                  />
                ))}
              </motion.div>
            )
          })}
        </div>

        {/* Tools grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="gradient-border rounded-2xl p-6 bg-[#0d0d18]"
        >
          <h3 className="text-lg font-semibold text-gray-300 mb-5 text-center">
            Outils & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-3.5 py-2 rounded-lg bg-white/5 text-gray-300 text-sm font-medium cursor-default hover:bg-violet-500/10 hover:text-violet-300 transition-all duration-200"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
