import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Blog from './components/Blog'
import BlogPost from './components/BlogPost'
import FloatingAction from './components/FloatingAction'
import ScrollToTop from './components/ScrollToTop'
import { ThemeProvider } from './context/ThemeContext'
import { useEffect } from 'react'
import Tools from './components/Tools'
import Playlist from './components/Playlist'

const AnimatedRoutes = () => {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        {/* <Route path="/blog" element={<Blog />} /> */}
        {/* <Route path="/blog/:slug" element={<BlogPost />} /> */}
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/tools" element={<Tools />} /> */}
        <Route path="/playlist" element={<Playlist />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  useEffect(() => {
    const link = document.createElement('link')
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    return () => {
      document.head.removeChild(link)
    }
  }, [])

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col transition-colors duration-300 bg-background dark:bg-gray-900">
          <Navbar />
          <main className="flex-grow">
            <AnimatedRoutes />
          </main>
          <FloatingAction />
          <ScrollToTop />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
