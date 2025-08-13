import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { 
  Users, 
  Globe, 
  Award, 
  CheckCircle, 
  Phone, 
  Mail, 
  MessageCircle,
  GraduationCap,
  Heart,
  Target,
  Shield,
  Star
} from 'lucide-react'

const AboutPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { number: '500+', label: 'Students Placed', icon: Users },
    { number: '15+', label: 'Countries', icon: Globe },
    { number: '100%', label: 'Visa Success Rate', icon: Award },
    { number: '50+', label: 'Partner Universities', icon: GraduationCap },
  ]

  const values = [
    {
      icon: Heart,
      title: 'Student-Centric Approach',
      description: 'We put our students first, ensuring personalized guidance throughout their journey.'
    },
    {
      icon: Target,
      title: 'Clear Goals',
      description: 'We help students set and achieve clear academic and career objectives.'
    },
    {
      icon: Shield,
      title: 'Trust & Reliability',
      description: 'Building lasting relationships based on trust, transparency, and proven results.'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'Striving for excellence in every aspect of our service delivery.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/Destination%20Images/background%201.jpg')" }} />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 glass rounded-2xl p-8 md:p-12 text-white"
          >
            <h1 className="text-4xl md:text-6xl font-poppins font-bold">
              Your Bridge to Global Education
            </h1>
            <p className="text-xl md:text-2xl text-neutral-100 max-w-3xl mx-auto">
              Empowering students to achieve their international education dreams
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-6">
                About StudyKonnect
              </h2>
              <div className="space-y-6 text-neutral-600 leading-relaxed">
                <p>
                  StudyKonnect is a leading education consultancy dedicated to helping students 
                  achieve their dreams of studying abroad. Founded with the vision of making international 
                  education accessible and affordable, we have successfully placed hundreds of students in 
                  prestigious universities across the globe.
                </p>
                <p>
                  Our mission is to bridge the gap between students and world-class education 
                  opportunities. We understand the unique challenges faced by African students and provide 
                  comprehensive support throughout the entire process - from initial consultation to 
                  post-arrival assistance.
                </p>
                <p>
                  With our extensive network of partner universities and proven track record of 100% visa 
                  success rate, we ensure that every student receives personalized guidance and the best 
                  possible chance of success in their international education journey.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl p-8 bg-white shadow-xl">
                <h3 className="text-2xl font-poppins font-bold mb-6 text-primary">Why Choose StudyKonnect?</h3>
                <div className="space-y-4 text-neutral-800">
                  <div className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-gold mt-1" />
                    <span className="text-neutral-800">No IELTS requirement for many destinations</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-gold mt-1" />
                    <span className="text-neutral-800">100% visa success rate</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-gold mt-1" />
                    <span className="text-neutral-800">Gap acceptance for all students</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-gold mt-1" />
                    <span className="text-neutral-800">End-to-end support from application to arrival</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-gold mt-1" />
                    <span className="text-neutral-800">Affordable education options worldwide</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon size={24} className="text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-neutral-600 font-inter">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-neutral-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Get in touch with our team and take the first step towards your international education
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="https://wa.me/254757957165"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold text-primary px-8 py-4 rounded-lg font-poppins font-semibold text-lg hover:bg-gold-light transition-colors duration-200 flex items-center space-x-2"
              >
                <MessageCircle size={20} />
                <span>Chat on WhatsApp</span>
              </motion.a>
              <motion.a
                href="tel:+254715194181"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary px-8 py-4 rounded-lg font-poppins font-semibold text-lg hover:bg-neutral-100 transition-colors duration-200 flex items-center space-x-2"
              >
                <Phone size={20} />
                <span>Call Us</span>
              </motion.a>
              <motion.a
                href="mailto:charles@studykonnect.co.ke"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary px-8 py-4 rounded-lg font-poppins font-semibold text-lg hover:bg-neutral-100 transition-colors duration-200 flex items-center space-x-2"
              >
                <Mail size={20} />
                <span>Send Email</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutPage 