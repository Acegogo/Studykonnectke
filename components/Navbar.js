import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  const linkClass = scrolled
    ? 'text-neutral-800 hover:text-primary'
    : 'text-white hover:text-gold'

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/Images/StudyKonnect logo.jpg"
                  alt="StudyKonnect Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className={`text-xl font-poppins font-bold ${scrolled ? 'text-primary' : 'text-white'}`}>STUDYKONNECT AFRICA</h1>
                <p className={`text-xs font-inter ${scrolled ? 'text-neutral-600' : 'text-neutral-100'}`}>The Leap Opportunity</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${linkClass} font-inter font-medium transition-colors duration-200 relative group`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${scrolled ? 'bg-primary' : 'bg-gold'} transition-all duration-300 group-hover:w-full`}></span>
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://wa.me/254757957165"
              className={`flex items-center space-x-2 ${scrolled ? 'bg-gold text-primary' : 'bg-white/90 text-primary'} px-4 py-2 rounded-lg font-poppins font-semibold hover:bg-gold-light transition-colors duration-200`}
            >
              <MessageCircle size={16} />
              <span>WhatsApp</span>
            </a>
            <a
              href="tel:+254715194181"
              className={`flex items-center space-x-2 ${scrolled ? 'bg-primary text-white' : 'bg-primary/90 text-white'} px-4 py-2 rounded-lg font-poppins font-semibold hover:bg-primary-dark transition-colors duration-200`}
            >
              <Phone size={16} />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-md ${scrolled ? 'text-neutral-700 hover:text-primary hover:bg-neutral-100' : 'text-white hover:text-gold hover:bg-white/10'} transition-colors duration-200`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden ${scrolled ? 'bg-white' : 'bg-primary/95'} border-t border-neutral-200`}
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block ${scrolled ? 'text-neutral-700' : 'text-white'} hover:text-gold font-inter font-medium py-2 transition-colors duration-200`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <a
                  href="https://wa.me/254757957165"
                  className={`flex items-center justify-center space-x-2 ${scrolled ? 'bg-gold text-primary' : 'bg-white text-primary'} px-4 py-3 rounded-lg font-poppins font-semibold hover:bg-gold-light transition-colors duration-200`}
                >
                  <MessageCircle size={16} />
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href="tel:+254715194181"
                  className={`flex items-center justify-center space-x-2 ${scrolled ? 'bg-primary text-white' : 'bg-primary/90 text-white'} px-4 py-3 rounded-lg font-poppins font-semibold hover:bg-primary-dark transition-colors duration-200`}
                >
                  <Phone size={16} />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar 