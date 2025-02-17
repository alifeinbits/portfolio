import { motion } from 'framer-motion'
import { 
  Code, Terminal, Laptop, Palette, Cloud, Coffee,
  Headphones, Monitor, Keyboard, Mouse
} from 'lucide-react'

const toolCategories = [
  {
    title: 'Development Environment',
    icon: <Code className="w-6 h-6" />,
    tools: [
      { name: 'VS Code', description: 'Primary code editor', link: 'https://code.visualstudio.com/' },
      { name: 'iTerm2', description: 'Terminal emulator', link: 'https://iterm2.com/' },
      { name: 'Git', description: 'Version control', link: 'https://git-scm.com/' },
      { name: 'Docker', description: 'Containerization', link: 'https://www.docker.com/' }
    ]
  },
  {
    title: 'Design Tools',
    icon: <Palette className="w-6 h-6" />,
    tools: [
      { name: 'Figma', description: 'UI/UX design', link: 'https://www.figma.com/' },
      { name: 'Adobe XD', description: 'Prototyping', link: 'https://www.adobe.com/products/xd.html' }
    ]
  },
  {
    title: 'Cloud Services',
    icon: <Cloud className="w-6 h-6" />,
    tools: [
      { name: 'AWS', description: 'Cloud infrastructure', link: 'https://aws.amazon.com/' },
      { name: 'Vercel', description: 'Deployment platform', link: 'https://vercel.com/' }
    ]
  },
  {
    title: 'Hardware Setup',
    icon: <Laptop className="w-6 h-6" />,
    tools: [
      { name: 'MacBook Pro M1', description: 'Primary machine', link: null },
      { name: 'Dell 27" 4K Monitor', description: 'External display', link: null },
      { name: 'Keychron K2', description: 'Mechanical keyboard', link: 'https://www.keychron.com/' },
      { name: 'MX Master 3', description: 'Wireless mouse', link: 'https://www.logitech.com/' }
    ]
  }
]

const Tools = () => {
  return (
    <div className="min-h-screen pt-32 pb-16 px-4 bg-background dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-primary dark:text-white text-center mb-12"
        >
          Tools & Technologies
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toolCategories.map((category) => (
            <motion.div
              key={category.title}
              className="glass-panel p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold text-primary dark:text-white">{category.title}</h3>
              <ul className="mt-4">
                {category.tools.map((tool) => (
                  <li key={tool.name} className="mb-2 flex items-start">
                    <span className="font-medium text-text-light dark:text-gray-200">{tool.name}</span>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{tool.description}</p>
                    {tool.link && (
                      <a href={tool.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-blue-600">
                        Learn More
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tools 