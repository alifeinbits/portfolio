import { motion } from 'framer-motion'
import { Calendar, Clock, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const blogPosts = [
  {
    slug: 'implementing-dark-mode-react',
    title: 'Implementing Dark Mode in React',
    excerpt: 'A guide to adding dark mode support in React applications.',
    date: '2024-02-15',
    readTime: '8 min read',
    image: 'https://via.placeholder.com/800x400',
  },
  {
    slug: 'microservices-architecture',
    title: 'Understanding Microservices Architecture',
    excerpt: 'Learn about the principles, benefits, and challenges of implementing microservices architecture.',
    date: '2024-02-10',
    readTime: '12 min read',
    image: 'https://via.placeholder.com/800x400',
  },
  {
    slug: 'aws-lambda-guide',
    title: 'AWS Lambda: A Practical Guide',
    excerpt: 'Everything you need to know about AWS Lambda and serverless computing.',
    date: '2024-02-05',
    readTime: '10 min read',
    image: 'https://via.placeholder.com/800x400',
  }
]

const categories = [
  'Web Development',
  'Software Engineering',
  'Best Practices',
  'Tutorials'
]

const Blog = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-16 px-4 bg-background dark:bg-gray-900"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-primary dark:text-white text-center mb-12"
        >
          Tech Blog
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-panel p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-text-light dark:text-gray-300">
                  <Calendar className="inline w-4 h-4 mr-1" />
                  {new Date(post.date).toLocaleDateString()}
                </span>
                <span className="text-sm text-text-light dark:text-gray-300">
                  <Clock className="inline w-4 h-4 mr-1" />
                  {post.readTime}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">{post.title}</h3>
              <p className="text-text-light dark:text-gray-300 mb-4">{post.excerpt}</p>
              <Link to={`/blog/${post.slug}`} className="text-primary hover:text-blue-600 flex items-center">
                Read More <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Blog
