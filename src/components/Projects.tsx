import { motion } from 'framer-motion'
import { Github, Link as LinkIcon } from 'lucide-react'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management.',
    image: 'https://via.placeholder.com/800x400',
    github: 'https://github.com/username/ecommerce',
    live: 'https://ecommerce-demo.com',
  },
  {
    title: 'AI Chat Assistant',
    description: 'An intelligent chatbot powered by machine learning for customer support automation.',
    image: 'https://via.placeholder.com/800x400',
    github: 'https://github.com/username/ai-chat',
    live: 'https://ai-chat-demo.com'
  },
  {
    title: 'Task Management System',
    description: 'A collaborative project management tool with real-time updates and team features.',
    image: 'https://via.placeholder.com/800x400',
    github: 'https://github.com/username/task-manager',
    live: 'https://task-manager-demo.com'
  }
]

const Projects = () => {
  return (
    <div className="min-h-screen pt-32 pb-16 px-4 bg-background dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-primary dark:text-white text-center mb-12"
        >
          My Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="glass-panel p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-primary dark:text-white">{project.title}</h3>
              <p className="text-text-light dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex gap-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-blue-600">
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-blue-600">
                    <LinkIcon className="w-5 h-5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
