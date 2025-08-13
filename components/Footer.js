import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Phone, Mail, MessageCircle, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Services', href: '/destinations' },
      { name: 'Success Stories', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
    destinations: [
      { name: 'Germany', href: '/destinations/germany' },
      { name: 'Canada', href: '/destinations/canada' },
      { name: 'USA', href: '/destinations/usa' },
      { name: 'Malaysia', href: '/destinations/malaysia' },
    ],
    support: [
      { name: 'Visa Application', href: '/services/visa' },
      { name: 'Documentation', href: '/services/docs' },
      { name: 'IELTS Preparation', href: '/services/ielts' },
      { name: 'Pre-departure', href: '/services/pre-departure' },
    ],
  }

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
  ]

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-12 h-12">
                <Image
                  src="/Images/StudyKonnect logo.jpg"
                  alt="StudyKonnect Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-poppins font-bold">STUDYKONNECT AFRICA</h3>
                <p className="text-sm text-neutral-300">The Leap Opportunity</p>
              </div>
            </div>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              Your trusted partner for international education. We help students achieve their dreams of studying abroad with 100% visa success rate.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-6">Destinations</h4>
            <ul className="space-y-3">
              {footerLinks.destinations.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone size={20} className="text-gold mt-1" />
                <div>
                  <p className="text-neutral-300">Phone</p>
                  <a
                    href="tel:+254715194181"
                    className="text-white hover:text-gold transition-colors duration-200"
                  >
                    +254 715 194 181
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MessageCircle size={20} className="text-gold mt-1" />
                <div>
                  <p className="text-neutral-300">WhatsApp</p>
                  <a
                    href="https://wa.me/254757957165"
                    className="text-white hover:text-gold transition-colors duration-200"
                  >
                    +254 757 957 165
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={20} className="text-gold mt-1" />
                <div>
                  <p className="text-neutral-300">Email</p>
                  <a
                    href="mailto:charles@studykonnect.co.ke"
                    className="text-white hover:text-gold transition-colors duration-200"
                  >
                    charles@studykonnect.co.ke
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-gold mt-1" />
                <div>
                  <p className="text-neutral-300">Location</p>
                  <p className="text-white">Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-300 text-sm">
              © {currentYear} StudyKonnect Africa. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-neutral-300 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-neutral-300 hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 