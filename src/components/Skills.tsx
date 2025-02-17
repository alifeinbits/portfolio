import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Music, Hammer } from 'lucide-react'

const skillGroups = [
  {
    category: 'Backend Technologies',
    technologies: ['Java', 'Spring Boot', 'Python', 'TypeScript'],
    level: 'Advanced'
  },
  {
    category: 'Tools & Infrastructure',
    technologies: ['Git', 'Jenkins', 'Docker', 'Kubernetes', 'AWS'],
    level: 'Advanced'
  },
  {
    category: 'Web Frameworks',
    technologies: ['React.js', 'Angular', 'Django', 'Next.js'],
    level: 'Advanced'
  }
]

const certifications = [
  {
    name: 'AWS Certified Developer',
    organization: 'Amazon Web Services',
    year: '2024'
  },
  {
    name: 'Mobile Web Specialist',
    organization: 'Google Africa Developer Scholarship',
    year: '2020',
    url: 'https://www.pluralsight.com'
  }
]

const languages = [
  {
    name: 'English',
    level: 'Fluent'
  },
  {
    name: 'Swahili',
    level: 'Native'
  }
]

const education = {
  school: 'Jomo Kenyatta University of Agriculture and Technology',
  location: 'Nairobi, Kenya',
  degree: 'Bachelor of Science in IT',
  period: 'September 2013 - November 2018',
  website: 'https://www.jkuat.ac.ke/',
  highlights: [
    'Established a strong foundation in IT principles, including systems, networks, and software development',
    'Developed problem-solving skills through hands-on projects and real-world applications',
    'Cultivated a deep understanding of theoretical concepts and their practical implications in the IT industry'
  ]
}

// Organize skills into categories
const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB']
  },
  {
    title: 'Tools & Practices',
    skills: ['Git', 'Docker', 'CI/CD', 'Agile']
  }
]

const Skills = () => {
  return (
    <div className="min-h-screen pt-32 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-primary dark:text-white text-center"
        >
          Skills & Education
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: groupIndex * 0.2 }}
              className="glass-panel p-6 rounded-xl"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-primary dark:text-white">
                  {group.category}
                </h3>
                <span className="text-sm text-primary dark:text-gray-200">{group.level}</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {group.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: groupIndex * 0.2 + techIndex * 0.1,
                      type: 'spring',
                      stiffness: 100,
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 rounded-lg bg-primary/10 dark:bg-white/10
                             border border-primary/20 dark:border-white/20 
                             text-primary dark:text-white hover:border-primary/40 
                             dark:hover:border-white/40 transition-all duration-300"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 glass-panel p-6 rounded-xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold text-primary dark:text-white">Education</h3>
          </div>
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="text-lg text-primary dark:text-white font-medium">{education.degree}</h4>
                <p className="text-text-light dark:text-gray-200">{education.school}</p>
                <p className="text-sm text-text-light dark:text-gray-300">{education.location}</p>
                <p className="text-sm text-text-light dark:text-gray-300">{education.period}</p>
              </div>
              {education.website && (
                <a
                  href={education.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary dark:text-blue-400 hover:text-primary-light dark:hover:text-blue-300 transition-colors"
                >
                  Visit Website
                </a>
              )}
            </div>
            <ul className="mt-4 space-y-2">
              {education.highlights.map((highlight, index) => (
                <li key={index} className="text-text-light dark:text-gray-200 flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary dark:bg-gray-200 flex-shrink-0"></span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 glass-panel p-6 rounded-xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-6 h-6 text-primary dark:text-white" />
            <h3 className="text-xl font-semibold text-primary dark:text-white">Certifications</h3>
          </div>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex justify-between items-center"
              >
                <div>
                  <h4 className="text-lg text-primary dark:text-white">{cert.name}</h4>
                  <p className="text-sm text-text-light dark:text-gray-200">{cert.organization}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-primary dark:text-gray-200">{cert.year}</span>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary dark:text-blue-400 hover:text-primary-light 
                               dark:hover:text-blue-300 transition-colors text-sm"
                    >
                      View Certificate
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 glass-panel p-6 rounded-xl"
        >
          <h3 className="text-xl font-semibold text-primary dark:text-white mb-6">Languages</h3>
          <div className="space-y-4">
            {languages.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="flex justify-between items-center"
              >
                <h4 className="text-lg text-primary dark:text-white">{lang.name}</h4>
                <span className="text-primary dark:text-gray-200">{lang.level}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-8 glass-panel p-6 rounded-xl"
        >
          <h3 className="text-xl font-semibold text-primary dark:text-white mb-4">References</h3>
          <p className="text-text-light dark:text-gray-200 text-center py-4">
            Professional references are available upon request.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills
