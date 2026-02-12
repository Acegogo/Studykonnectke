import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'
import {
  Trophy,
  Target,
  Users,
  Calendar,
  MapPin,
  ArrowRight,
  MessageCircle,
  Phone,
  Mail
} from 'lucide-react'

const SkRisingStars = () => {
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
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/Images/hero_background.png"
            alt="SK Rising Stars Hero Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" /> {/* Overlay for text readability */}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center mt-20"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-full overflow-hidden border-4 border-gold shadow-2xl mb-6 bg-white">
              <Image
                src="/Images/SK stars rising logo.jpeg"
                alt="SK Rising Stars Logo"
                fill
                className="object-cover"
              />
            </div>

            <h1 className="text-4xl md:text-6xl font-poppins font-bold leading-tight mb-4">
              SK Rising Stars
            </h1>
            <p className="text-xl md:text-2xl text-gold font-medium mb-8">
              Nurturing Talent in Kitale
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="space-y-6"
            >
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-poppins font-bold text-primary">
                About the Initiative
              </motion.h2>
              <motion.p variants={itemVariants} className="text-lg text-neutral-600 leading-relaxed">
                SK Rising Stars is a sports initiative in Kitale under the Study Konnect umbrella. We are dedicated to identifying, nurturing, and empowering young athletic talent in our community.
              </motion.p>
              <motion.p variants={itemVariants} className="text-lg text-neutral-600 leading-relaxed">
                Currently focused on <span className="font-semibold text-primary">Football</span>, we aim to build a strong foundation for young athletes, providing them with training, mentorship, and opportunities to showcase their skills. As we grow, we plan to expand into other sports like <span className="font-semibold text-primary">Basketball</span>.
              </motion.p>

              <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-start space-x-3">
                  <Target className="text-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary">Talent Development</h4>
                    <p className="text-sm text-neutral-600">Professional training</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="text-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary">Community</h4>
                    <p className="text-sm text-neutral-600">Building character</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/Images/about_action_shot.png"
                alt="Football Action Shot"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Focus Sports */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-4">Our Focus</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">Growing champions one sport at a time</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Football Card */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <div className="h-48 relative">
                <Image
                  src="/Images/football_card.png"
                  alt="Football Team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-3">Football</h3>
                <p className="text-neutral-600 mb-4">
                  Our primary focus is developing football talent. We organize regular training sessions, friendly matches, and participate in local tournaments to give our players competitive exposure.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-neutral-600">
                    <div className="w-2 h-2 rounded-full bg-gold mr-2" />
                    Professional Coaching
                  </li>
                  <li className="flex items-center text-sm text-neutral-600">
                    <div className="w-2 h-2 rounded-full bg-gold mr-2" />
                    Regular Tournaments
                  </li>
                  <li className="flex items-center text-sm text-neutral-600">
                    <div className="w-2 h-2 rounded-full bg-gold mr-2" />
                    Kit & Equipment Support
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Basketball Card */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-transparent hover:border-gold transition-colors"
            >
              <div className="h-48 relative">
                <Image
                  src="/Images/basketball_card.png"
                  alt="Basketball"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-white text-xl font-bold border-2 border-white px-4 py-2 rounded">Coming Soon</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-3">Basketball</h3>
                <p className="text-neutral-600 mb-4">
                  As we grow, we will introduce basketball programs to cater to more aspiring athletes in Kitale.
                </p>
                <ul className="space-y-2 mb-6 opacity-60">
                  <li className="flex items-center text-sm text-neutral-600">
                    <div className="w-2 h-2 rounded-full bg-neutral-400 mr-2" />
                    Court Construction
                  </li>
                  <li className="flex items-center text-sm text-neutral-600">
                    <div className="w-2 h-2 rounded-full bg-neutral-400 mr-2" />
                    Team Formation
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">Join SK Rising Stars</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Are you a young talent in Kitale looking to take your game to the next level? Or a partner looking to support grassroots sports? Get in touch!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://wa.me/254757957165"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold text-primary px-8 py-4 rounded-lg font-poppins font-semibold text-lg hover:bg-gold-light transition-colors flex items-center justify-center space-x-2"
            >
              <MessageCircle size={20} />
              <span>Contact Us on WhatsApp</span>
            </motion.a>
            <motion.a
              href="mailto:sports@studykonnectke.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-poppins font-semibold text-lg hover:bg-white/20 transition-colors flex items-center justify-center space-x-2"
            >
              <Mail size={20} />
              <span>Email Us</span>
            </motion.a>
            <motion.a
              href="tel:+254715194181"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-poppins font-semibold text-lg hover:bg-white/20 transition-colors flex items-center justify-center space-x-2"
            >
              <Phone size={20} />
              <span>Call for Info</span>
            </motion.a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default SkRisingStars
