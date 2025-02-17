import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Moon, Sun, Download, House } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.png'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Experience', href: '/experience' },
  { name: 'Skills', href: '/skills' },
  // { name: 'Projects', href: '/projects' },
  // { name: 'Blog', href: '/blog' },
  // { name: 'Tools', href: '/tools' },
  { name: 'Playlist', href: '/playlist' },
  { name: 'Contact', href: '/contact' }
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = '/assets/Felix Mwanza - Resume.pdf'
    link.download = 'Felix Mwanza - Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 
                    bg-white/80 dark:bg-gray-900/90 border-b 
                    border-gray-200 dark:border-gray-800 backdrop-blur-xl ${
      scrolled ? 'py-1 shadow-lg' : 'py-2'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-extrabold bg-gradient-to-r from-primary to-blue-600 
                           dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
              Felix Mwanza
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-all duration-200 ${
                  location.pathname === item.href
                    ? 'text-primary dark:text-blue-400 font-semibold scale-105'
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400'
                }`}
              >
                {item.name}
              </Link>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadCV}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 
                       hover:text-primary dark:hover:text-blue-400 transition-colors duration-200"
            >
              <Download className="w-5 h-5" />
              <span className="font-medium">CV</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 
                       dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </motion.button>

            <Link
              to="/contact"
              className="px-4 py-2 rounded-md text-sm font-medium text-white
                        bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 
                        hover:to-primary transition-all duration-300 shadow-md 
                        hover:shadow-lg"
            >
              Get in Touch
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 mr-2 rounded-full bg-primary/10 dark:bg-gray-800"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-primary" />
              )}
            </motion.button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary dark:text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 bg-white dark:bg-gray-800 rounded-lg 
                         shadow-enterprise border border-accent dark:border-gray-700">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-4 py-3 text-sm ${
                  location.pathname === item.href
                    ? 'text-primary dark:text-white font-semibold'
                    : 'text-text-light dark:text-gray-300'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={handleDownloadCV}
              className="w-full text-left px-4 py-3 text-sm text-primary 
                       dark:text-white font-medium flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download CV
            </button>
            <Link
              to="/contact"
              className="block px-4 py-3 text-sm text-primary dark:text-white 
                       font-medium hover:bg-gray-100 dark:hover:bg-gray-700
                       transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0)
  // ... implementation
  return (
    <div className="h-1 bg-blue-600 fixed top-0 left-0" 
         style={{ width: `${progress}%` }} />
  )
}

export default Navbar
