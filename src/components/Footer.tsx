import { Github, Linkedin, Mail, Twitter, Send } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/alifeinbits',
      label: 'GitHub',
      hoverColor: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://www.linkedin.com/in/felix-mutua/',
      label: 'LinkedIn',
      hoverColor: 'hover:text-blue-600 dark:hover:text-blue-400'
    },

    {
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:felix.mutua@icloud.com',
      label: 'Email',
      hoverColor: 'hover:text-red-500 dark:hover:text-red-400'
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: 'https://x.com/devfyi',
      label: 'X',
      hoverColor: 'hover:text-blue-400'
    }
  ]

  const sitemapLinks = {
    Main: [
      { name: 'Home', href: '/' },
      { name: 'Experience', href: '/experience' },
      { name: 'Skills', href: '/skills' },
      // { name: 'Projects', href: '/projects' }
    ],
    Resources: [
      // { name: 'Blog', href: '/blog' },
      // { name: 'Tools', href: '/tools' },
      { name: 'Playlist', href: '/playlist' }
    ],
    Connect: [
      { name: 'Contact', href: '/contact' },
      { name: 'Resume', href: '/assets/Felix Mwanza - Resume.pdf' }
    ]
  }

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || subscribeStatus === 'loading') return

    setSubscribeStatus('loading')
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubscribeStatus('success')
      setEmail('')
      setTimeout(() => setSubscribeStatus('idle'), 3000)
    } catch (error) {
      setSubscribeStatus('error')
      setTimeout(() => setSubscribeStatus('idle'), 3000)
    }
  }

  return (
    <footer className="w-full py-12 px-4 mt-auto bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Newsletter Section */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-primary dark:text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-text-light dark:text-gray-300 mb-4">
              Subscribe to my newsletter for the latest articles, tools, and tech insights.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 
                         border border-gray-200 dark:border-gray-700
                         focus:ring-2 focus:ring-primary/20 dark:focus:ring-blue-500/20"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="px-4 py-2 rounded-lg bg-primary dark:bg-blue-600 text-white
                         hover:bg-primary-light dark:hover:bg-blue-700 transition-colors"
                disabled={subscribeStatus === 'loading'}
              >
                {subscribeStatus === 'loading' ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </motion.button>
            </form>
            {subscribeStatus === 'success' && (
              <p className="text-green-600 dark:text-green-400 text-sm mt-2">
                Thanks for subscribing!
              </p>
            )}
            {subscribeStatus === 'error' && (
              <p className="text-red-600 dark:text-red-400 text-sm mt-2">
                Something went wrong. Please try again.
              </p>
            )}
          </div>

          {/* Sitemap Links */}
          {Object.entries(sitemapLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold text-primary dark:text-white mb-4">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-text-light dark:text-gray-300 hover:text-primary 
                               dark:hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links & Copyright */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-text-light ${link.hoverColor} transition-colors`}
                  aria-label={link.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-text-light dark:text-gray-400">
              &copy; {currentYear} Felix Mutua. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
