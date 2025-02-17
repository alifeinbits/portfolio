import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'lucide-react'

const experiences = [
  {
    title: 'Full Stack Software Engineer',
    company: 'Standard Chartered Ventures - Solv Kenya',
    period: 'April 2023 - Present',
    location: 'Nairobi, Kenya',
    website: 'https://solv.co.ke/',
    description: [
      'Designed and developed a scalable supply chain financing platform using Java Spring Boot, ensuring high performance and reliability',
      'Built interactive customer channels for ImaliPay platform, enhancing user experience and engagement',
      'Successfully deployed and managed platform infrastructure using Kubernetes and AWS services, ensuring seamless operations and scalability'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'ImaliPay Kenya LLC',
    period: 'February 2021 - March 2023',
    location: 'Nairobi, Kenya / Johannesburg, South Africa',
    website: 'https://www.imalipay.com/',
    description: [
      'Designed and implemented scalable platform features, resulting in significant revenue growth',
      'Developed interactive customer channels, enhancing user engagement and experience',
      'Integrated with multiple partners and APIs, ensuring seamless data exchange and process automation'
    ]
  },
  {
    title: 'Cloud Engineer',
    company: 'GOODINFO / Shipht',
    period: 'July 2020 - Feb 2021',
    location: 'Nairobi, Kenya',
    website: 'http://shipht.it/',
    description: [
      'Designed and developed scalable cloud-based solutions for clients and internal projects, ensuring robust code quality and reliability',
      'Utilized proficiency in multiple programming languages and frameworks to drive project success and improve team efficiency',
      'Fostered collaborative relationships with cross-functional teams to ensure seamless project execution and knowledge sharing'
    ]
  },
  {
    title: 'Implementation Engineer',
    company: 'Cellulant Kenya',
    period: 'December 2018 - June 2020',
    location: 'Nairobi, Kenya',
    website: 'https://www.cellulant.io/',
    description: [
      'Designed and developed core features of Fund-MasterXI using Java, Spring, and JavaScript, enhancing the platform\'s functionality and user experience',
      'Collaborated with cross-functional teams, including UX designers and developers, to ensure seamless integration and cohesive user experiences',
      'Optimized cloud service scalability, resolving application issues and improving overall system performance and reliability'
    ]
  },
  {
    title: 'Software Developer',
    company: 'Systech Limited',
    period: 'July 2017 - November 2018',
    location: 'Nairobi, Kenya',
    website: 'https://systechafrica.com/',
    description: [
      'Designed and developed scalable cloud-based solutions utilizing cutting-edge technologies to drive business growth',
      'Collaborated with cross-functional teams to troubleshoot and resolve complex technical issues, ensuring timely project delivery',
      'Delivered high-quality software solutions that met and exceeded stakeholder expectations, resulting in improved customer satisfaction'
    ]
  }
]

const Experience = () => {
  return (
    <div className="min-h-screen pt-32 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 gradient-text text-center"
        >
          Professional Experience
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.1,
            })

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="glass-panel p-8 rounded-xl relative"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-primary dark:text-white mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-lg text-text-light dark:text-gray-300 mb-1">
                        <span>{exp.company}</span>
                        {exp.website && (
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary-light transition-colors"
                          >
                            <Link className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                      <p className="text-sm text-text-light dark:text-gray-400 mb-1">{exp.period}</p>
                      <p className="text-sm text-text-light dark:text-gray-400">{exp.location}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-text dark:text-gray-300 flex items-start">
                          <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {index !== experiences.length - 1 && (
                  <div className="absolute left-8 bottom-0 w-px h-12 bg-gradient-to-b from-primary/50 to-transparent -mb-12 hidden md:block" />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Experience
