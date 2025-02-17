import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div className="min-h-screen bg-background dark:bg-gray-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-semibold text-primary dark:text-white mb-8 leading-tight">
              Full Stack Developer & <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Software Engineer
              </span>
            </h1>
            
            <div className="bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10 rounded-xl p-6 mb-8">
              <p className="text-lg text-text-light dark:text-gray-200 leading-relaxed">
                Building robust web applications and innovative solutions with modern technologies.
                Focused on creating clean, efficient, and scalable code while delivering exceptional user experiences.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="button-enterprise px-8 py-4 rounded-md font-medium 
                         inline-flex items-center justify-center
                         bg-primary text-white hover:bg-primary-light
                         dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
              >
                Get in touch
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/experience"
                className="button-enterprise-outline px-8 py-4 rounded-md font-medium 
                         inline-flex items-center justify-center
                         border border-primary text-primary hover:bg-primary/5
                         dark:border-white dark:text-white dark:hover:bg-white/10"
              >
                View Experience
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-background-darker dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-primary dark:text-white text-center mb-12"
            >
              Core Competencies
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Cloud Architecture',
                  description: 'Expert in AWS services, microservices, and scalable solutions'
                },
                {
                  title: 'AI Integration',
                  description: 'Implementing intelligent solutions and machine learning applications'
                },
                {
                  title: 'Web Development',
                  description: 'Full-stack expertise with modern frameworks and technologies'
                }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="glass-panel p-6 rounded-lg"
                >
                  <h3 className="text-xl font-semibold text-primary dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-text-light dark:text-gray-200">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Experience Preview */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary dark:text-white text-center mb-4">
                Professional Experience
              </h2>
              <p className="text-text-light dark:text-gray-200 text-center text-lg mb-12">
                Delivering innovative solutions at leading technology companies
              </p>
            </motion.div>
            
            <div className="space-y-6">
              {[
                {
                  role: 'Full Stack Software Engineer',
                  company: 'Standard Chartered Ventures',
                  period: '2023 - Present'
                },
                {
                  role: 'Software Engineer',
                  company: 'ImaliPay Kenya LLC',
                  period: '2021 - 2023'
                }
              ].map((experience, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="glass-panel p-6 rounded-lg"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-primary dark:text-white">
                        {experience.role}
                      </h3>
                      <p className="text-text-light dark:text-gray-200">{experience.company}</p>
                    </div>
                    <span className="text-sm text-text-light dark:text-gray-300">
                      {experience.period}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 text-center"
            >
              <Link
                to="/experience"
                className="button-enterprise-outline px-6 py-3 rounded-md 
                         inline-flex items-center font-medium
                         border border-primary text-primary hover:bg-primary/5
                         dark:border-white dark:text-white dark:hover:bg-white/10"
              >
                View Full Experience
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
