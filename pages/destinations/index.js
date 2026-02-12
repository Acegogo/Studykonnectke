import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { ArrowRight, Globe, GraduationCap, DollarSign, Clock, Users } from 'lucide-react'

const DestinationsPage = () => {
  const [activeContinent, setActiveContinent] = useState('Europe')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const continents = [
    {
      name: 'Europe',
      description: 'Explore world-class education in historic European cities',
      countries: [
        {
          name: 'Germany',
          flag: '🇩🇪',
          perk: 'Free Tuition, No IELTS',
          deadline: 'September 2026',
          cost: '€0-€500/year',
          duration: '3-4 years',
          slug: 'germany',
          image: '/Destination%20Images/germany%201.jpg',
          flagImage: 'https://flagcdn.com/w80/de.png'
        },
        {
          name: 'United Kingdom',
          flag: '🇬🇧',
          perk: 'World-Class Education, Global Recognition',
          deadline: 'September 2026',
          cost: '£15,000-£35,000/year',
          duration: '3-4 years',
          slug: 'uk',
          image: '/Destination%20Images/UK%201.jpg',
          flagImage: 'https://flagcdn.com/w80/gb.png'
        },
        {
          name: 'Latvia',
          flag: '🇱🇻',
          perk: 'Low Cost, English Programs',
          deadline: 'September 2026',
          cost: '€2,000-€4,000/year',
          duration: '3-4 years',
          slug: 'latvia',
          image: '/Destination%20Images/latvia%201.jpg',
          flagImage: 'https://flagcdn.com/w80/lv.png'
        },
        {
          name: 'Poland',
          flag: '🇵🇱',
          perk: 'Affordable, No IELTS',
          deadline: 'September 2026',
          cost: '€1,500-€3,000/year',
          duration: '3-4 years',
          slug: 'poland',
          image: '/Destination%20Images/background%202.jpg',
          flagImage: 'https://flagcdn.com/w80/pl.png'
        },
        {
          name: 'Cyprus',
          flag: '🇨🇾',
          perk: 'Mediterranean Lifestyle',
          deadline: 'September 2026',
          cost: '€3,000-€6,000/year',
          duration: '3-4 years',
          slug: 'cyprus',
          image: '/Destination%20Images/cyprus%202.jpg',
          flagImage: 'https://flagcdn.com/w80/cy.png'
        },
        {
          name: 'Malta',
          flag: '🇲🇹',
          perk: 'English Speaking, EU',
          deadline: 'September 2026',
          cost: '€4,000-€8,000/year',
          duration: '3-4 years',
          slug: 'malta',
          image: '/Destination%20Images/malta%201.jpg',
          flagImage: 'https://flagcdn.com/w80/mt.png'
        },
        {
          name: 'Italy',
          flag: '🇮🇹',
          perk: 'Rich Culture, Low Cost',
          deadline: 'September 2026',
          cost: '€1,000-€3,000/year',
          duration: '3-4 years',
          slug: 'italy',
          image: '/Destination%20Images/background%201.jpg',
          flagImage: 'https://flagcdn.com/w80/it.png'
        },
        {
          name: 'Turkey',
          flag: '🇹🇷',
          perk: 'Affordable, No IELTS',
          deadline: 'September 2026',
          cost: '€1,000-€3,000/year',
          duration: '3-4 years',
          slug: 'turkey',
          image: '/Destination%20Images/turkey%202.jpg',
          flagImage: 'https://flagcdn.com/w80/tr.png'
        },
      ]
    },
    {
      name: 'America',
      description: 'Study in North America with excellent career opportunities',
      countries: [
        {
          name: 'USA',
          flag: '🇺🇸',
          perk: 'Top Universities, OPT',
          deadline: 'September 2026',
          cost: '$20,000-$50,000/year',
          duration: '4 years',
          slug: 'usa',
          image: '/Destination%20Images/USA.jpg',
          flagImage: 'https://flagcdn.com/w80/us.png'
        },
        {
          name: 'Canada',
          flag: '🇨🇦',
          perk: 'PR Pathway, No IELTS',
          deadline: 'September 2026',
          cost: 'C$15,000-C$30,000/year',
          duration: '3-4 years',
          slug: 'canada',
          image: '/Destination%20Images/canada%201.jpg',
          flagImage: 'https://flagcdn.com/w80/ca.png'
        },
      ]
    },
    {
      name: 'Asia',
      description: 'Discover affordable education in dynamic Asian countries',
      countries: [
        {
          name: 'India',
          flag: '🇮🇳',
          perk: 'Affordable, English Medium',
          deadline: 'September 2026',
          cost: '₹50,000-₹2,00,000/year',
          duration: '3-4 years',
          slug: 'india',
          image: '/Destination%20Images/background%202.jpg',
          flagImage: 'https://flagcdn.com/w80/in.png'
        },
        {
          name: 'China',
          flag: '🇨🇳',
          perk: 'Scholarships Available',
          deadline: 'September 2026',
          cost: '¥20,000-¥50,000/year',
          duration: '3-4 years',
          slug: 'china',
          image: '/Destination%20Images/background%201.jpg',
          flagImage: 'https://flagcdn.com/w80/cn.png'
        },
        {
          name: 'Japan',
          flag: '🇯🇵',
          perk: 'Technology Focus',
          deadline: 'September 2026',
          cost: '¥500,000-¥1,000,000/year',
          duration: '4 years',
          slug: 'japan',
          image: '/Destination%20Images/New%20York%201.jpg',
          flagImage: 'https://flagcdn.com/w80/jp.png'
        },
        {
          name: 'Malaysia',
          flag: '🇲🇾',
          perk: 'Twinning Programs',
          deadline: 'September 2026',
          cost: 'RM15,000-RM30,000/year',
          duration: '3-4 years',
          slug: 'malaysia',
          image: '/Destination%20Images/Malaysia%201.jpg',
          flagImage: 'https://flagcdn.com/w80/my.png'
        },
        {
          name: 'Singapore',
          flag: '🇸🇬',
          perk: 'Global Hub, English',
          deadline: 'September 2026',
          cost: 'S$15,000-S$35,000/year',
          duration: '3-4 years',
          slug: 'singapore',
          image: '/Destination%20Images/New%20York%202.jpg',
          flagImage: 'https://flagcdn.com/w80/sg.png'
        },
        {
          name: 'UAE',
          flag: '🇦🇪',
          perk: 'Modern Infrastructure, Business Hub',
          deadline: 'September 2026',
          cost: 'AED10,000-AED20,000/year',
          duration: '3-4 years',
          slug: 'uae',
          image: '/Destination%20Images/UAE%201.jpg',
          flagImage: 'https://flagcdn.com/w80/ae.png'
        },
      ]
    },
    {
      name: 'Oceania',
      description: 'Study in Australia with excellent work opportunities',
      countries: [
        {
          name: 'Australia',
          flag: '🇦🇺',
          perk: 'Quality Education, Work Opportunities',
          deadline: 'September 2026',
          cost: 'A$25,000-A$45,000/year',
          duration: '3-4 years',
          slug: 'australia',
          image: '/Destination%20Images/Australia%201.jpg',
          flagImage: 'https://flagcdn.com/w80/au.png'
        },
      ]
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
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/Destination%20Images/background%202.jpg')" }} />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 glass rounded-2xl p-8 md:p-12 text-white"
          >
            <h1 className="text-4xl md:text-6xl font-poppins font-bold">Study Destinations</h1>
            <p className="text-xl md:text-2xl text-neutral-100 max-w-3xl mx-auto">
              Explore our carefully curated list of countries offering excellent education opportunities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Continent Tabs */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            {continents.map((continent) => (
              <motion.button
                key={continent.name}
                variants={itemVariants}
                onClick={() => setActiveContinent(continent.name)}
                className={`px-8 py-4 rounded-lg font-poppins font-semibold transition-all duration-300 ${activeContinent === continent.name
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-neutral-600 hover:text-primary hover:bg-neutral-100'
                  }`}
              >
                {continent.name}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-4">
              {activeContinent}
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              {continents.find(c => c.name === activeContinent)?.description}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {continents
              .find(c => c.name === activeContinent)
              ?.countries.map((country, index) => (
                <motion.div
                  key={country.name}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
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
                      <span className="text-sm text-white">{country.flag}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-poppins font-semibold text-primary mb-2">{country.name}</h3>
                    <p className="text-neutral-600 mb-4">{country.perk}</p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-2 text-sm text-neutral-600">
                        <DollarSign size={16} />
                        <span>Tuition: {country.cost}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-neutral-600">
                        <Clock size={16} />
                        <span>Duration: {country.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-neutral-600">
                        <GraduationCap size={16} />
                        <span>Next Intake: {country.deadline}</span>
                      </div>
                    </div>

                    <Link
                      href={`/destinations/${country.slug}`}
                      className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg font-poppins font-semibold hover:bg-primary-dark transition-colors duration-200"
                    >
                      <span>View Details</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </section>

      {/* Why Study Abroad */}
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
              Why Study Abroad?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Discover the benefits of international education
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Globe,
                title: 'Global Perspective',
                description: 'Gain international exposure and cultural understanding'
              },
              {
                icon: GraduationCap,
                title: 'Quality Education',
                description: 'Access world-class universities and programs'
              },
              {
                icon: DollarSign,
                title: 'Career Opportunities',
                description: 'Better job prospects and higher earning potential'
              },
              {
                icon: Users,
                title: 'Networking',
                description: 'Build international connections and friendships'
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-poppins font-semibold text-primary mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-neutral-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default DestinationsPage 