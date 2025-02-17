import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const FloatingAction = () => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <Link
        to="/contact"
        className="floating-action-button"
        aria-label="Contact me"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </Link>
    </motion.div>
  )
}

export default FloatingAction
