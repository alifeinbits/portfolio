import { motion, AnimatePresence } from 'framer-motion'
import { Send, Mail, Phone, MapPin, CircleCheck, Squircle } from 'lucide-react'
import { useState, useEffect } from 'react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>(() => {
    const saved = localStorage.getItem('contactFormData')
    return saved ? JSON.parse(saved) : {
      name: '',
      email: '',
      subject: '',
      message: '',
    }
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  useEffect(() => {
    localStorage.setItem('contactFormData', JSON.stringify(formData))
  }, [formData])

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      localStorage.removeItem('contactFormData')
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  return (
    <div className="min-h-screen pt-32 pb-16 px-4 bg-background dark:bg-gray-900">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary dark:text-white mb-4">Get in Touch</h2>
          <p className="text-text-light dark:text-gray-200 text-lg max-w-2xl mx-auto">
            Have a question or want to work together? I'd love to hear from you.
            Please fill out the form below or use the contact information.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 glass-panel p-8 rounded-xl h-fit dark:bg-gray-800"
          >
            <h3 className="text-xl font-semibold text-primary dark:text-white mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-white/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary dark:text-white" />
                </div>
                <div>
                  <p className="text-sm text-text-light dark:text-gray-400">Email</p>
                  <a href="mailto:hello@felixmutua.com" 
                     className="text-primary dark:text-white hover:text-primary-light dark:hover:text-gray-300">
                    hello@felixmutua.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-white/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary dark:text-white" />
                </div>
                <div>
                  <p className="text-sm text-text-light dark:text-gray-400">Phone</p>
                  <a href="tel:+254722000000" 
                     className="text-primary dark:text-white hover:text-primary-light dark:hover:text-gray-300">
                    +254 722 000 000
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary dark:text-white" />
                </div>
                <div>
                  <p className="text-sm text-text-light dark:text-gray-400">Location</p>
                  <p className="text-primary dark:text-white">Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-3 glass-panel p-8 rounded-xl dark:bg-gray-800"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-text dark:text-white mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`input-enterprise w-full px-4 py-3 rounded-lg 
                    dark:bg-gray-700 dark:text-white dark:border-gray-600
                    ${errors.name ? 'border-red-500' : ''}`}
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text dark:text-white mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`input-enterprise w-full px-4 py-3 rounded-lg 
                    dark:bg-gray-700 dark:text-white dark:border-gray-600
                    ${errors.email ? 'border-red-500' : ''}`}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-text dark:text-white mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`input-enterprise w-full px-4 py-3 rounded-lg 
                    dark:bg-gray-700 dark:text-white dark:border-gray-600
                    ${errors.subject ? 'border-red-500' : ''}`}
                  disabled={isSubmitting}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text dark:text-white mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`input-enterprise w-full px-4 py-3 rounded-lg 
                    dark:bg-gray-700 dark:text-white dark:border-gray-600
                    ${errors.message ? 'border-red-500' : ''}`}
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <AnimatePresence>
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`p-4 rounded-lg ${
                      submitStatus === 'success'
                        ? 'bg-green-50 dark:bg-green-900 text-green-800 dark:text-green-200'
                        : 'bg-red-50 dark:bg-red-900 text-red-800 dark:text-red-200'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {submitStatus === 'success' ? (
                        <CircleCheck className="w-5 h-5" />
                      ) : (
                        <Squircle className="w-5 h-5" />
                      )}
                      <p>
                        {submitStatus === 'success'
                          ? 'Message sent successfully!'
                          : 'There was an error sending your message. Please try again.'}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="button-enterprise w-full px-8 py-4 rounded-lg font-medium
                         flex items-center justify-center gap-2 disabled:opacity-70
                         dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact
