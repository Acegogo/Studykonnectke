import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { 
  Play, 
  ArrowRight, 
  MessageCircle, 
  Globe, 
  GraduationCap, 
  FileText, 
  CheckCircle, 
  Users, 
  Phone, 
  Mail,
  Star,
  Quote,
  User as UserIcon
} from 'lucide-react'

const HomePage = () => {
  const [activeContinent, setActiveContinent] = useState('Europe')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const continents = [
    { name: 'Europe', countries: [
      { 
        name: 'Germany', 
        flag: '🇩🇪', 
        perk: 'Free Tuition, No IELTS', 
        deadline: 'March 31, 2025', 
        image: '/Destination%20Images/germany%202.jpg',
        flagImage: 'https://flagcdn.com/w80/de.png'
      },
      { 
        name: 'Latvia', 
        flag: '🇱🇻', 
        perk: 'Low Cost, English Programs', 
        deadline: 'April 15, 2025', 
        image: '/Destination%20Images/latvia%202.jpg',
        flagImage: 'https://flagcdn.com/w80/lv.png'
      },
      { 
        name: 'Poland', 
        flag: '🇵🇱', 
        perk: 'Affordable, No IELTS', 
        deadline: 'March 20, 2025', 
        image: '/Destination%20Images/background%202.jpg',
        flagImage: 'https://flagcdn.com/w80/pl.png'
      },
      { 
        name: 'Cyprus', 
        flag: '🇨🇾', 
        perk: 'Mediterranean Lifestyle', 
        deadline: 'April 30, 2025', 
        image: '/Destination%20Images/cyprus%201.jpg',
        flagImage: 'https://flagcdn.com/w80/cy.png'
      },
      { 
        name: 'Malta', 
        flag: '🇲🇹', 
        perk: 'English Speaking, EU', 
        deadline: 'May 15, 2025', 
        image: '/Destination%20Images/malta%202.jpg',
        flagImage: 'https://flagcdn.com/w80/mt.png'
      },
      { 
        name: 'Italy', 
        flag: '🇮🇹', 
        perk: 'Rich Culture, Low Cost', 
        deadline: 'March 25, 2025', 
        image: '/Destination%20Images/background%201.jpg',
        flagImage: 'https://flagcdn.com/w80/it.png'
      },
      { 
        name: 'Turkey', 
        flag: '🇹🇷', 
        perk: 'Affordable, No IELTS', 
        deadline: 'April 10, 2025', 
        image: '/Destination%20Images/turkey%201.jpg',
        flagImage: 'https://flagcdn.com/w80/tr.png'
      },
    ]},
    { name: 'America', countries: [
      { 
        name: 'USA', 
        flag: '🇺🇸', 
        perk: 'Top Universities, OPT', 
        deadline: 'May 1, 2025', 
        image: '/Destination%20Images/USA.jpg',
        flagImage: 'https://flagcdn.com/w80/us.png'
      },
      { 
        name: 'Canada', 
        flag: '🇨🇦', 
        perk: 'PR Pathway, No IELTS', 
        deadline: 'April 20, 2025', 
        image: '/Destination%20Images/canada.jpg',
        flagImage: 'https://flagcdn.com/w80/ca.png'
      },
    ]},
    { name: 'Asia', countries: [
      { 
        name: 'India', 
        flag: '🇮🇳', 
        perk: 'Affordable, English Medium', 
        deadline: 'March 15, 2025', 
        image: '/Destination%20Images/background%201.jpg',
        flagImage: 'https://flagcdn.com/w80/in.png'
      },
      { 
        name: 'China', 
        flag: '🇨🇳', 
        perk: 'Scholarships Available', 
        deadline: 'April 5, 2025', 
        image: '/Destination%20Images/background%202.jpg',
        flagImage: 'https://flagcdn.com/w80/cn.png'
      },
      { 
        name: 'Japan', 
        flag: '🇯🇵', 
        perk: 'Technology Focus', 
        deadline: 'May 10, 2025', 
        image: '/Destination%20Images/New%20York%201.jpg',
        flagImage: 'https://flagcdn.com/w80/jp.png'
      },
      { 
        name: 'Malaysia', 
        flag: '🇲🇾', 
        perk: 'Twinning Programs', 
        deadline: 'March 30, 2025', 
        image: '/Destination%20Images/malta%201.jpg',
        flagImage: 'https://flagcdn.com/w80/my.png'
      },
      { 
        name: 'Singapore', 
        flag: '🇸🇬', 
        perk: 'Global Hub, English', 
        deadline: 'April 25, 2025', 
        image: '/Destination%20Images/New%20York%202.jpg',
        flagImage: 'https://flagcdn.com/w80/sg.png'
      },
    ]},
  ]

  const processSteps = [
    { step: 1, title: 'Assessment', description: 'Evaluate your profile and goals', icon: FileText },
    { step: 2, title: 'Documentation', description: 'Prepare all required documents', icon: FileText },
    { step: 3, title: 'Application', description: 'Submit university applications', icon: GraduationCap },
    { step: 4, title: 'Visa Process', description: 'Handle visa documentation', icon: CheckCircle },
    { step: 5, title: 'Pre-departure', description: 'Travel arrangements & orientation', icon: Globe },
    { step: 6, title: 'Arrival Support', description: 'Airport pickup & accommodation', icon: Users },
    { step: 7, title: 'Academic Support', description: 'Ongoing academic guidance', icon: GraduationCap },
    { step: 8, title: 'Career Guidance', description: 'Job placement assistance', icon: CheckCircle },
    { step: 9, title: 'Follow-up', description: 'Regular check-ins & support', icon: Phone },
  ]

  const testimonials = [
    {
      name: 'Sarah Muthoni',
      country: 'Germany',
      university: 'Technical University of Munich',
      quote: 'StudyKonnect made my dream of studying in Germany a reality. No IELTS needed and they handled everything!',
      rating: 5,
    },
    {
      name: 'John Kamau',
      country: 'Canada',
      university: 'University of Toronto',
      quote: 'The visa process was smooth and I got 100% support throughout. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Grace Wanjiku',
      country: 'Malaysia',
      university: 'University of Malaya',
      quote: 'Affordable education with great quality. StudyKonnect found the perfect program for me.',
      rating: 5,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/Destination%20Images/background%201.jpg')" }}
        />
        <div className="absolute inset-0 bg-primary/70" />
        
        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 glass rounded-2xl p-8 md:p-12"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold leading-tight">
              From Africa to the World:
              <br />
              <span className="text-gold">Study Abroad Made Simple</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              No IELTS • Gap Acceptance • 100% Visa Success
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold text-primary px-8 py-4 rounded-lg font-poppins font-semibold text-lg hover:bg-gold-light transition-colors duration-200 flex items-center space-x-2"
                onClick={() => document.getElementById('destinations').scrollIntoView({ behavior: 'smooth' })}
              >
                <span>Explore Destinations</span>
                <ArrowRight size={20} />
              </motion.button>
              
              <motion.a
                href="https://wa.me/254757957165"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/90 text-primary px-8 py-4 rounded-lg font-poppins font-semibold text-lg hover:bg-white transition-colors duration-200 flex items-center space-x-2"
              >
                <MessageCircle size={20} />
                <span>Chat on WhatsApp</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
        
        {/* Floating WhatsApp Button */}
        <motion.a
          href="https://wa.me/254757957165"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200 z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <MessageCircle size={24} />
        </motion.a>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-poppins font-bold text-primary mb-4">
              Explore Your Study Destinations
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Choose from our carefully curated list of countries offering excellent education opportunities
            </motion.p>
          </motion.div>

          {/* Continent Tabs */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="flex justify-center mb-12"
          >
            <div className="bg-white rounded-lg p-2 shadow-lg">
              {continents.map((continent) => (
                <motion.button
                  key={continent.name}
                  variants={itemVariants}
                  onClick={() => setActiveContinent(continent.name)}
                  className={`px-6 py-3 rounded-md font-poppins font-semibold transition-all duration-300 ${
                    activeContinent === continent.name
                      ? 'bg-primary text-white shadow-lg'
                      : 'text-neutral-600 hover:text-primary hover:bg-neutral-100'
                  }`}
                >
                  {continent.name}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Countries Grid */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {continents
              .find(c => c.name === activeContinent)
              ?.countries.map((country, index) => (
                <motion.div
                  key={country.name}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 bg-cover bg-center"
                >
                  <div className="relative h-48">
                    <img
                      src={country.image}
                      alt={country.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-4 left-4 flex items-center space-x-2 glass px-2 py-1 rounded-md">
                      <img
                        src={country.flagImage}
                        alt={`${country.name} flag`}
                        className="w-6 h-4 rounded shadow-sm"
                      />
                      <span className="text-sm font-poppins text-white">{country.flag}</span>
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="text-xl font-poppins font-semibold text-primary mb-2">{country.name}</h3>
                    <p className="text-neutral-600 mb-4">{country.perk}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-neutral-500">Next Intake: {country.deadline}</span>
                      <motion.a
                        href={`/destinations/${country.name.toLowerCase()}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-primary text-white px-4 py-2 rounded-lg font-poppins font-semibold hover:bg-primary-dark transition-colors duration-200"
                      >
                        View Details
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="relative py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/Destination%20Images/background%202.jpg')" }}
        />
        <div className="absolute inset-0 bg-white/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-primary mb-4">
              Our 9-Step Process
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              From initial assessment to ongoing support, we guide you through every step
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-9 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center glass rounded-xl p-6"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <step.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-poppins font-semibold text-primary mb-2">
                  Step {step.step}: {step.title}
                </h3>
                <p className="text-neutral-700 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-primary mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Hear from our students who have successfully studied abroad
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-gold fill-current" />
                  ))}
                </div>
                <Quote size={24} className="text-primary mb-4" />
                <p className="text-neutral-600 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-neutral-200 flex items-center justify-center">
                    <UserIcon className="text-primary" size={22} />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-neutral-600">{testimonial.country} • {testimonial.university}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Join hundreds of students who have successfully studied abroad with StudyKonnect
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="https://wa.me/254757957165"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold text-primary px-8 py-4 rounded-lg font-poppins font-semibold text-lg hover:bg-gold-light transition-colors duration-200 flex items-center space-x-2"
              >
                <MessageCircle size={20} />
                <span>Start Chatting Now</span>
              </motion.a>
              <motion.a
                href="tel:+254715194181"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary px-8 py-4 rounded-lg font-poppins font-semibold text-lg hover:bg-neutral-100 transition-colors duration-200 flex items-center space-x-2"
              >
                <Phone size={20} />
                <span>Call Us Today</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default HomePage 