import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from 'lucide-react'
import { useState } from 'react'

const blogPosts = {
  'implementing-dark-mode-react': {
    title: 'Implementing Dark Mode in React Applications',
    date: '2024-02-15',
    readTime: '8 min read',
    category: 'React',
    author: {
      name: 'Felix Mutua',
      avatar: 'https://via.placeholder.com/60x60',
      role: 'Senior Software Engineer'
    },
    content: `
      # Implementing Dark Mode in React Applications

      Dark mode has become an essential feature in modern web applications. In this article, we'll explore how to implement a robust dark mode solution in React applications using Context API and Tailwind CSS.

      ## Why Dark Mode?

      Dark mode not only provides a better viewing experience in low-light conditions but also helps reduce eye strain and save battery life on OLED displays.

      ## Implementation Steps

      1. First, set up your Tailwind CSS configuration
      2. Create a Theme Context
      3. Implement the theme toggle
      4. Add dark mode styles

      ## Code Example

      \`\`\`jsx
      const ThemeContext = createContext({
        theme: 'light',
        toggleTheme: () => {},
      });

      export const ThemeProvider = ({ children }) => {
        const [theme, setTheme] = useState('light');

        const toggleTheme = () => {
          setTheme(theme === 'light' ? 'dark' : 'light');
        };

        return (
          <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
          </ThemeContext.Provider>
        );
      };
      \`\`\`

      ## Best Practices

      - Store user preference in localStorage
      - Respect system preferences
      - Provide smooth transitions
      - Test in both themes
    `
  },
  // Add more blog posts here
}

const BlogPost = () => {
  const { slug } = useParams()
  const post = blogPosts[slug as keyof typeof blogPosts]
  const [copied, setCopied] = useState(false)

  if (!post) {
    return (
      <div className="min-h-screen pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-primary dark:text-white mb-4">
            Post not found
          </h2>
          <Link
            to="/blog"
            className="text-primary dark:text-white hover:text-primary-light 
                     dark:hover:text-gray-300 inline-flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  const handleShare = async () => {
    const url = window.location.href
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy URL:', err)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-16 px-4"
    >
      <article className="container mx-auto max-w-3xl">
        <Link
          to="/blog"
          className="text-primary dark:text-white hover:text-primary-light 
                   dark:hover:text-gray-300 inline-flex items-center mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        <div className="glass-panel p-8 rounded-xl dark:bg-gray-800/50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center justify-between mb-6">
              <span className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 
                           text-blue-800 dark:text-blue-100 rounded-full">
                {post.category}
              </span>
              <button
                onClick={handleShare}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700
                         transition-colors duration-200"
                title="Share post"
              >
                <Share2 className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
            </div>

            <h1 className="text-4xl font-bold text-primary dark:text-white mb-6">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium text-primary dark:text-white">
                    {post.author.name}
                  </p>
                  <p className="text-sm text-text-light dark:text-gray-400">
                    {post.author.role}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-text-light dark:text-gray-400 text-sm">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {post.readTime}
                </div>
              </div>
            </div>

            <div className="blog-content">
              <h1 className="text-4xl font-bold text-primary dark:text-white mb-6">{post.title}</h1>
              <div className="flex items-center gap-4 text-text-light dark:text-gray-300 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="w-5 h-5" />
                  <span>{post.category}</span>
                </div>
              </div>
              {post.content}
            </div>

            {copied && (
              <div className="fixed bottom-8 right-8 bg-gray-900 text-white px-4 py-2 rounded-lg
                           shadow-lg animate-fade-in-up">
                URL copied to clipboard!
              </div>
            )}
          </motion.div>
        </div>
      </article>
    </motion.div>
  )
}

export default BlogPost
