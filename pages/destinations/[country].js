import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { 
  ArrowLeft, 
  MessageCircle, 
  Phone, 
  Mail, 
  Globe, 
  GraduationCap, 
  DollarSign, 
  Clock, 
  CheckCircle,
  MapPin,
  Users,
  Award,
  BookOpen
} from 'lucide-react'

const CountryPage = () => {
  const router = useRouter()
  const { country } = router.query
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Background image map (served from /public)
  const backgroundFor = {
    germany: "/Destination%20Images/germany%203.jpg",
    latvia: "/Destination%20Images/latvia%201.jpg",
    poland: "/Destination%20Images/background%202.jpg",
    cyprus: "/Destination%20Images/cyprus%201.jpg",
    malta: "/Destination%20Images/malta%201.jpg",
    italy: "/Destination%20Images/background%201.jpg",
    turkey: "/Destination%20Images/turkey%202.jpg",
    usa: "/Destination%20Images/USA.jpg",
    canada: "/Destination%20Images/canada.jpg",
    india: "/Destination%20Images/background%201.jpg",
    china: "/Destination%20Images/background%202.jpg",
    japan: "/Destination%20Images/New%20York%201.jpg",
    malaysia: "/Destination%20Images/malta%202.jpg",
    singapore: "/Destination%20Images/New%20York%202.jpg",
  }

  // Country data - crafted using standard requirements/benefits; posters available in /public/destination details for downloads
  const countryData = {
    germany: {
      name: 'Germany', flag: '🇩🇪', capital: 'Berlin', language: 'German/English', currency: 'Euro (€)', population: '83 million',
      description: 'Germany offers world-class education with many public universities charging little to no tuition fees, strong research culture, and excellent post-study prospects.',
      benefits: ['Free/low tuition at public universities', 'No IELTS for many programs', 'Strong engineering and research focus', 'High quality of life', 'Student-friendly cities'],
      requirements: ['High school diploma or equivalent', 'Language proficiency (German/English)', 'Blocked account/financial proof', 'Health insurance', 'Student visa'],
      universities: ['Technical University of Munich', 'Humboldt University of Berlin', 'RWTH Aachen University', 'LMU Munich', 'Heidelberg University'],
      programs: ['Engineering', 'Computer Science', 'Business', 'Medicine', 'Sciences', 'Arts'],
      costs: { tuition: '€0–€1,500/year', living: '€900–€1,200/month', accommodation: '€350–€650/month', food: '€200–€300/month', transport: '€60–€100/month' },
      deadlines: { winter: 'July 15', summer: 'January 15' },
      visa: { type: 'Student Visa (Type D)', processing: '4–8 weeks', requirements: ['Valid passport', 'Offer letter', 'Financial proof', 'Health insurance', 'Biometrics'] }
    },
    latvia: {
      name: 'Latvia', flag: '🇱🇻', capital: 'Riga', language: 'English/Latvian', currency: 'Euro (€)', population: '1.8 million',
      description: 'Latvia provides affordable European education with English-taught programs and a welcoming student environment.',
      benefits: ['Affordable tuition & living', 'English-taught programs', 'EU degree recognition', 'Safe and friendly'],
      requirements: ['High school diploma', 'English proficiency', 'Proof of funds', 'Medical insurance', 'Student visa'],
      universities: ['University of Latvia', 'Riga Technical University', 'Turiba University'],
      programs: ['IT', 'Business', 'Engineering', 'Health Sciences'],
      costs: { tuition: '€2,000–€4,000/year', living: '€500–€800/month', accommodation: '€200–€400/month', food: '€150–€250/month', transport: '€30–€50/month' },
      deadlines: { fall: 'June 30', spring: 'November 30' },
      visa: { type: 'Long-term Study Visa', processing: '3–6 weeks', requirements: ['Passport', 'Offer letter', 'Proof of funds', 'Medical insurance'] }
    },
    poland: {
      name: 'Poland', flag: '🇵🇱', capital: 'Warsaw', language: 'Polish/English', currency: 'Polish Złoty (PLN)', population: '37 million',
      description: 'Poland offers quality education with competitive tuition fees and a vibrant student life across historic cities.',
      benefits: ['Affordable tuition', 'No IELTS options', 'Strong STEM & business programs', 'EU location'],
      requirements: ['High school diploma', 'English proficiency', 'Proof of funds', 'Insurance', 'Visa'],
      universities: ['University of Warsaw', 'Jagiellonian University', 'Warsaw University of Technology'],
      programs: ['Engineering', 'IT', 'Business', 'Medicine'],
      costs: { tuition: '€2,000–€4,500/year', living: '€600–€900/month', accommodation: '€250–€400/month', food: '€150–€250/month', transport: '€20–€40/month' },
      deadlines: { fall: 'July 31', spring: 'December 15' },
      visa: { type: 'National D Visa', processing: '4–8 weeks', requirements: ['Passport', 'Offer letter', 'Funds', 'Insurance'] }
    },
    cyprus: {
      name: 'Cyprus', flag: '🇨🇾', capital: 'Nicosia', language: 'Greek/English', currency: 'Euro (€)', population: '1.2 million',
      description: 'Cyprus combines Mediterranean lifestyle with growing universities offering English-medium programs.',
      benefits: ['Mild climate & lifestyle', 'English programs', 'Affordable fees'],
      requirements: ['High school diploma', 'English proficiency', 'Funds proof', 'Insurance', 'Visa'],
      universities: ['University of Cyprus', 'European University Cyprus', 'University of Nicosia'],
      programs: ['Business', 'Tourism & Hospitality', 'IT', 'Health Sciences'],
      costs: { tuition: '€3,000–€6,000/year', living: '€700–€1,000/month', accommodation: '€300–€500/month', food: '€150–€250/month', transport: '€30–€50/month' },
      deadlines: { fall: 'June 30', spring: 'November 30' },
      visa: { type: 'Student Visa', processing: '3–6 weeks', requirements: ['Passport', 'Offer letter', 'Funds', 'Medical'] }
    },
    malta: {
      name: 'Malta', flag: '🇲🇹', capital: 'Valletta', language: 'English/Maltese', currency: 'Euro (€)', population: '0.5 million',
      description: 'An English-speaking EU nation with reputable institutions and a growing tech/business ecosystem.',
      benefits: ['English-speaking', 'Safe & sunny', 'EU recognition'],
      requirements: ['High school diploma', 'English proof', 'Funds', 'Insurance'],
      universities: ['University of Malta', 'MCAST', 'American University of Malta'],
      programs: ['IT', 'Business', 'Engineering', 'Health'],
      costs: { tuition: '€4,000–€8,000/year', living: '€800–€1,200/month', accommodation: '€400–€700/month', food: '€200–€300/month', transport: '€30–€50/month' },
      deadlines: { fall: 'June 30', spring: 'November 30' },
      visa: { type: 'Student Visa', processing: '4–8 weeks', requirements: ['Passport', 'Offer letter', 'Funds', 'Insurance'] }
    },
    italy: {
      name: 'Italy', flag: '🇮🇹', capital: 'Rome', language: 'Italian/English', currency: 'Euro (€)', population: '60 million',
      description: 'Italy offers rich culture, affordable tuition (with scholarships) and strong programs in design, arts, engineering and business.',
      benefits: ['Scholarships & fee waivers', 'Top design & arts schools', 'Historic cities'],
      requirements: ['High school diploma', 'English/Italian proficiency', 'Funds proof', 'Insurance', 'Visa'],
      universities: ['Politecnico di Milano', 'Sapienza University of Rome', 'University of Bologna'],
      programs: ['Design', 'Engineering', 'Business', 'Architecture'],
      costs: { tuition: '€0–€3,000/year (with scholarships)', living: '€800–€1,200/month', accommodation: '€350–€700/month', food: '€200–€300/month', transport: '€30–€50/month' },
      deadlines: { fall: 'July 31', spring: 'December 15' },
      visa: { type: 'National D Visa', processing: '4–8 weeks', requirements: ['Passport', 'Offer letter', 'Funds', 'Insurance'] }
    },
    turkey: {
      name: 'Turkey', flag: '🇹🇷', capital: 'Ankara', language: 'Turkish/English', currency: 'Turkish Lira (TRY)', population: '85 million',
      description: 'Turkey provides affordable English-medium degrees with vibrant culture and modern campuses.',
      benefits: ['Affordable fees', 'English-medium options', 'Rich culture'],
      requirements: ['High school diploma', 'English proof', 'Funds', 'Insurance', 'Visa'],
      universities: ['Middle East Technical University', 'Istanbul University', 'Bilkent University'],
      programs: ['Engineering', 'Medicine', 'Business', 'IT'],
      costs: { tuition: '€1,000–€3,000/year', living: '€500–€800/month', accommodation: '€200–€400/month', food: '€150–€250/month', transport: '€20–€40/month' },
      deadlines: { fall: 'July 31', spring: 'December 15' },
      visa: { type: 'Student Visa', processing: '3–6 weeks', requirements: ['Passport', 'Offer letter', 'Funds', 'Insurance'] }
    },
    usa: {
      name: 'USA', flag: '🇺🇸', capital: 'Washington, D.C.', language: 'English', currency: 'USD ($)', population: '331 million',
      description: 'Home to top-ranked universities with cutting-edge research and extensive campus resources.',
      benefits: ['World-leading institutions', 'OPT/CPT work options', 'Diverse programs'],
      requirements: ['High school diploma', 'English proficiency', 'I-20 & SEVIS payment', 'Financial proof', 'F-1 Visa'],
      universities: ['Harvard University', 'MIT', 'Stanford University', 'UC Berkeley'],
      programs: ['Computer Science', 'Business', 'Engineering', 'Sciences'],
      costs: { tuition: '$20,000–$50,000/year', living: '$1,200–$2,000/month', accommodation: '$600–$1,200/month', food: '$300–$500/month', transport: '$60–$120/month' },
      deadlines: { fall: 'Jan–Mar (varies)', spring: 'Aug–Oct (varies)' },
      visa: { type: 'F-1 Student Visa', processing: '3–8 weeks', requirements: ['Passport', 'I-20', 'Financials', 'SEVIS fee', 'Interview'] }
    },
    canada: {
      name: 'Canada', flag: '🇨🇦', capital: 'Ottawa', language: 'English/French', currency: 'Canadian Dollar (C$)', population: '38 million',
      description: 'Canada offers high-quality education, multicultural environment, and excellent PR pathways.',
      benefits: ['High-quality institutions', 'Post-Study Work Permit', 'PR pathways'],
      requirements: ['High school diploma', 'English/French proficiency', 'Proof of funds', 'Medical exam', 'Study Permit'],
      universities: ['University of Toronto', 'UBC', 'McGill University', 'University of Waterloo'],
      programs: ['Computer Science', 'Engineering', 'Business', 'Health Sciences'],
      costs: { tuition: 'C$15,000–C$30,000/year', living: 'C$1,200–C$2,000/month', accommodation: 'C$500–C$1,200/month', food: 'C$300–C$500/month', transport: 'C$100–C$150/month' },
      deadlines: { fall: 'Jan–Mar (varies)', winter: 'Sep–Nov (varies)' },
      visa: { type: 'Study Permit', processing: '6–8 weeks', requirements: ['Passport', 'Offer letter', 'Funds', 'Medical exam', 'Police certificate'] }
    },
    india: {
      name: 'India', flag: '🇮🇳', capital: 'New Delhi', language: 'English/Hindi', currency: 'INR (₹)', population: '1.4 billion',
      description: 'India provides affordable English-medium education in diverse disciplines across prestigious institutes.',
      benefits: ['Very affordable tuition', 'English-medium options', 'Diverse programs'],
      requirements: ['High school diploma', 'English proficiency', 'Funds', 'Visa'],
      universities: ['IITs (various)', 'Delhi University', 'Manipal University'],
      programs: ['Engineering', 'Medicine', 'Business', 'IT'],
      costs: { tuition: '₹50,000–₹200,000/year', living: '₹20,000–₹40,000/month', accommodation: '₹8,000–₹20,000/month', food: '₹6,000–₹10,000/month', transport: '₹2,000–₹5,000/month' },
      deadlines: { fall: 'June–August', spring: 'Nov–Jan' },
      visa: { type: 'Student Visa', processing: '2–4 weeks', requirements: ['Passport', 'Offer letter', 'Funds', 'Medical'] }
    },
    china: {
      name: 'China', flag: '🇨🇳', capital: 'Beijing', language: 'Chinese/English', currency: 'CNY (¥)', population: '1.4 billion',
      description: 'China offers scholarships, modern facilities, and strong STEM/medicine programs.',
      benefits: ['Scholarship opportunities', 'Modern campuses', 'Strong STEM & medicine'],
      requirements: ['High school diploma', 'Language proficiency', 'Funds', 'JW201/202', 'X1/X2 Visa'],
      universities: ['Tsinghua University', 'Peking University', 'Fudan University'],
      programs: ['Engineering', 'Medicine', 'Business', 'Chinese Studies'],
      costs: { tuition: '¥20,000–¥50,000/year', living: '¥2,500–¥4,000/month', accommodation: '¥800–¥1,500/month', food: '¥800–¥1,200/month', transport: '¥100–¥200/month' },
      deadlines: { fall: 'May–July', spring: 'Oct–Dec' },
      visa: { type: 'X1/X2 Student Visa', processing: '3–6 weeks', requirements: ['Passport', 'Admission', 'JW form', 'Funds'] }
    },
    japan: {
      name: 'Japan', flag: '🇯🇵', capital: 'Tokyo', language: 'Japanese/English', currency: 'JPY (¥)', population: '126 million',
      description: 'Japan is renowned for technology, research, and unique cultural experience with scholarships for international students.',
      benefits: ['Top technology & research', 'Scholarships', 'Safe and clean cities'],
      requirements: ['High school diploma', 'Language proficiency', 'Funds', 'COE', 'Student visa'],
      universities: ['University of Tokyo', 'Kyoto University', 'Osaka University'],
      programs: ['Engineering', 'IT', 'Business', 'Design'],
      costs: { tuition: '¥500,000–¥1,000,000/year', living: '¥100,000–¥180,000/month', accommodation: '¥40,000–¥80,000/month', food: '¥30,000–¥50,000/month', transport: '¥5,000–¥10,000/month' },
      deadlines: { fall: 'May–July', spring: 'Nov–Jan' },
      visa: { type: 'Student Visa', processing: '4–8 weeks', requirements: ['Passport', 'COE', 'Funds', 'Insurance'] }
    },
    malaysia: {
      name: 'Malaysia', flag: '🇲🇾', capital: 'Kuala Lumpur', language: 'Malay/English', currency: 'MYR (RM)', population: '32 million',
      description: 'Affordable English-medium education with twinning programs and international campuses.',
      benefits: ['Affordable fees', 'English-medium', 'Twinning with UK/Australia'],
      requirements: ['High school diploma', 'English proficiency', 'Funds', 'Medical', 'Student Pass'],
      universities: ['University of Malaya', 'UKM', 'UPM', 'Monash Malaysia', 'Nottingham Malaysia'],
      programs: ['Engineering', 'Business', 'Computer Science', 'Medicine'],
      costs: { tuition: 'RM15,000–RM30,000/year', living: 'RM1,500–RM2,500/month', accommodation: 'RM500–RM1,000/month', food: 'RM300–RM500/month', transport: 'RM100–RM200/month' },
      deadlines: { february: 'Oct 15', september: 'May 15' },
      visa: { type: 'Student Pass', processing: '2–4 weeks', requirements: ['Passport', 'Acceptance', 'Funds', 'Medical', 'Security clearance'] }
    },
    singapore: {
      name: 'Singapore', flag: '🇸🇬', capital: 'Singapore', language: 'English', currency: 'SGD (S$)', population: '5.5 million',
      description: 'A global education hub with top-ranked universities and excellent career outcomes.',
      benefits: ['Top Asian universities', 'English-medium', 'Strong industry links'],
      requirements: ['High school diploma', 'English proficiency', 'Funds', 'Student Pass'],
      universities: ['National University of Singapore', 'Nanyang Technological University'],
      programs: ['Engineering', 'Business', 'Computer Science', 'Sciences'],
      costs: { tuition: 'S$15,000–S$35,000/year', living: 'S$1,200–S$2,000/month', accommodation: 'S$400–S$900/month', food: 'S$300–S$500/month', transport: 'S$80–S$120/month' },
      deadlines: { fall: 'Feb–Mar', spring: 'Aug–Sep' },
      visa: { type: 'Student Pass', processing: '3–6 weeks', requirements: ['Passport', 'Offer', 'Funds', 'Insurance'] }
    },
  }

  const currentCountry = country ? countryData[country] : undefined

  if (!currentCountry) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-poppins font-bold text-primary mb-4">Country Not Found</h1>
          <p className="text-gray-600 mb-8">The country you're looking for doesn't exist in our database.</p>
          <Link
            href="/destinations"
            className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg font-poppins font-semibold hover:bg-primary-dark transition-colors duration-200"
          >
            <ArrowLeft size={16} />
            <span>Back to Destinations</span>
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${backgroundFor[country] || "/Destination%20Images/background%201.jpg"}')` }} />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center justify-between text-white glass rounded-2xl p-8"
          >
            <div className="lg:w-2/3 space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-6xl">{currentCountry.flag}</span>
                <div>
                  <h1 className="text-4xl md:text-6xl font-poppins font-bold">
                    Study in {currentCountry.name}
                  </h1>
                  <p className="text-xl text-neutral-100">Your gateway to international education</p>
                </div>
              </div>
              <p className="text-lg text-neutral-100 max-w-3xl">
                {currentCountry.description}
              </p>
            </div>
            <div className="lg:w-1/3 mt-8 lg:mt-0">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <h3 className="text-xl font-poppins font-semibold mb-4">Quick Facts</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Capital:</span>
                    <span>{currentCountry.capital}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Language:</span>
                    <span>{currentCountry.language}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Currency:</span>
                    <span>{currentCountry.currency}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Population:</span>
                    <span>{currentCountry.population}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-8">
                Key Benefits of Studying in {currentCountry.name}
              </h2>
              <div className="space-y-4">
                {currentCountry.benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle size={20} className="text-accent mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-poppins font-semibold text-primary mb-6">
                Requirements
              </h3>
              <div className="space-y-4">
                {currentCountry.requirements.map((requirement, index) => (
                  <motion.div
                    key={requirement}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{requirement}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Universities and Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-4">
              Top Universities & Programs
            </h2>
            <p className="text-lg md:text-xl text-neutral-700 max-w-3xl mx-auto">
              Discover the best educational opportunities in {currentCountry.name}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-2xl font-poppins font-semibold text-primary mb-6">
                Top Universities
              </h3>
              <div className="space-y-4">
                {currentCountry.universities.map((university, index) => (
                  <motion.div
                    key={university}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3 text-neutral-800">
                      <GraduationCap size={20} className="text-primary flex-shrink-0" />
                      <span className="font-inter font-medium leading-snug break-words">{university}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-poppins font-semibold text-primary mb-6">
                Popular Programs
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-4">
                {currentCountry.programs.map((program, index) => (
                  <motion.div
                    key={program}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 text-center"
                  >
                    <BookOpen size={20} className="text-primary mx-auto mb-2" />
                    <span className="font-inter font-medium text-sm text-neutral-800 leading-snug break-words">{program}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Costs and Deadlines */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-4">
              Costs & Deadlines
            </h2>
            <p className="text-lg md:text-xl text-neutral-700 max-w-3xl mx-auto">
              Plan your budget and application timeline
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-poppins font-semibold text-primary mb-6">
                Estimated Costs
              </h3>
              <div className="space-y-4">
                {Object.entries(currentCountry.costs).map(([category, cost], index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-center bg-gray-50 rounded-lg p-4 text-neutral-800"
                  >
                    <span className="font-inter font-medium capitalize">{category}:</span>
                    <span className="font-poppins font-semibold text-primary">{cost}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-poppins font-semibold text-primary mb-6">
                Application Deadlines
              </h3>
              <div className="space-y-4">
                {Object.entries(currentCountry.deadlines).map(([semester, deadline], index) => (
                  <motion.div
                    key={semester}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-center bg-gray-50 rounded-lg p-4 text-neutral-800"
                  >
                    <span className="font-inter font-medium capitalize">{semester} Semester:</span>
                    <span className="font-poppins font-semibold text-primary">{deadline}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-4">
              Visa Information
            </h2>
            <p className="text-lg md:text-xl text-neutral-700 max-w-3xl mx-auto">
              Everything you need to know about student visas
            </p>
          </motion.div>

          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-poppins font-semibold text-primary mb-4">
                  Visa Details
                </h3>
                <div className="space-y-3 text-neutral-800">
                  <div className="flex justify-between">
                    <span className="font-medium">Visa Type:</span>
                    <span>{currentCountry.visa.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Processing Time:</span>
                    <span>{currentCountry.visa.processing}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-poppins font-semibold text-primary mb-4">
                  Requirements
                </h3>
                <div className="space-y-2 text-neutral-800">
                  {currentCountry.visa.requirements?.map((requirement) => (
                    <div key={requirement} className="flex items-start space-x-2">
                      <CheckCircle size={16} className="text-accent mt-1 flex-shrink-0" />
                      <span className="text-sm">{requirement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
              Ready to Study in {currentCountry.name}?
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Let our experts guide you through the application process
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="https://wa.me/254757957165"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent text-primary px-8 py-4 rounded-lg font-poppins font-semibold text-lg hover:bg-accent-light transition-colors duration-200 flex items-center space-x-2"
              >
                <MessageCircle size={20} />
                <span>Enquire on WhatsApp</span>
              </motion.a>
              <motion.a
                href="tel:+254715194181"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary px-8 py-4 rounded-lg font-poppins font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2"
              >
                <Phone size={20} />
                <span>Call for Details</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CountryPage 