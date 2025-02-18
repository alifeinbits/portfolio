import { motion } from 'framer-motion'
import { Music, Headphones, Play } from 'lucide-react'

const Playlist = () => {
  return (
    <div className="min-h-screen pt-32 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary dark:text-white mb-4">
            My Coding Playlist
          </h2>
          <p className="text-text-light dark:text-gray-200 text-lg max-w-2xl mx-auto">
            Music that keeps me in the flow while coding. A mix of lo-fi, ambient, and instrumental tracks.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-panel p-6 rounded-xl mb-8"
        >
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://open.spotify.com/embed/playlist/2eby4v3p3x716tmwJMlJt5"
              width="100%"
              height="380"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              className="rounded-lg"
            ></iframe>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-panel p-6 rounded-xl"
        >
          <h3 className="text-xl font-semibold text-primary dark:text-white mb-6 flex items-center gap-2">
            <Headphones className="w-5 h-5" />
            Why Music Matters
          </h3>
          <div className="space-y-4 text-text-light dark:text-gray-200">
            <p>
              Music has always been an essential part of my coding workflow. The right soundtrack helps me:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary dark:bg-gray-200 flex-shrink-0"></span>
                <span>Maintain focus during long coding sessions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary dark:bg-gray-200 flex-shrink-0"></span>
                <span>Create a productive atmosphere</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary dark:bg-gray-200 flex-shrink-0"></span>
                <span>Block out distracting background noise</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Playlist 