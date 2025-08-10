import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { 
  Calendar, 
  User, 
  ArrowRight, 
  Clock, 
  Tag,
  BookOpen,
  GraduationCap,
  Globe
} from 'lucide-react'

const BlogPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const featuredPosts = [
    {
      id: 1,
      title: 'How to Study in Germany Without IELTS',
      excerpt: 'Discover the universities and programs in Germany that don\'t require IELTS scores for admission. Learn about alternative language requirements and application strategies.',
      author: 'StudyKonnect Team',
      date: 'March 15, 2024',
      readTime: '5 min read',
      category: 'Germany',
      image: '/Destination%20Images/germany%201.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'UK Scholarships for Kenyan Students',
      excerpt: 'Comprehensive guide to scholarships available for Kenyan students in the UK, including eligibility criteria and application processes.',
      author: 'Sarah Njeri',
      date: 'March 10, 2024',
      readTime: '7 min read',
      category: 'UK',
      image: '/Destination%20Images/New%20York%201.jpg',
      featured: true
    },
    {
      id: 3,
      title: 'Complete Guide to Student Visa Application',
      excerpt: 'Step-by-step guide to applying for student visas, including required documents, interview tips, and common mistakes to avoid.',
      author: 'David Ochieng',
      date: 'March 5, 2024',
      readTime: '8 min read',
      category: 'Visa',
      image: '/Destination%20Images/background%202.jpg',
      featured: true
    }
  ]

  const blogPosts = [
    {
      id: 4,
      title: 'Top 10 Affordable Universities in Europe',
      excerpt: 'Explore the most affordable universities in Europe that offer quality education without breaking the bank.',
      author: 'StudyKonnect Team',
      date: 'February 28, 2024',
      readTime: '6 min read',
      category: 'Europe',
      image: '/Destination%20Images/background%201.jpg'
    },
    {
      id: 5,
      title: 'Study in Canada: A Complete Guide',
      excerpt: 'Everything you need to know about studying in Canada, from choosing a university to post-graduation opportunities.',
      author: 'Charles Mwangi',
      date: 'February 20, 2024',
      readTime: '10 min read',
      category: 'Canada',
      image: '/Destination%20Images/canada%201.jpg'
    },
    {
      id: 6,
      title: 'IELTS vs TOEFL: Which Should You Choose?',
      excerpt: 'Compare IELTS and TOEFL exams to determine which one is better for your study abroad application.',
      author: 'Sarah Njeri',
      date: 'February 15, 2024',
      readTime: '4 min read',
      category: 'Language Tests',
      image: '/Destination%20Images/background%202.jpg'
    },
    {
      id: 7,
      title: 'Malaysia: The Hidden Gem for International Students',
      excerpt: 'Discover why Malaysia is becoming a popular destination for international students seeking quality education.',
      author: 'David Ochieng',
      date: 'February 10, 2024',
      readTime: '5 min read',
      category: 'Malaysia',
      image: '/Destination%20Images/malta%202.jpg'
    },
    {
      id: 8,
      title: 'How to Write a Winning Personal Statement',
      excerpt: 'Tips and tricks for writing a compelling personal statement that will help you stand out in university applications.',
      author: 'StudyKonnect Team',
      date: 'February 5, 2024',
      readTime: '7 min read',
      category: 'Application Tips',
      image: '/Destination%20Images/background%201.jpg'
    },
    {
      id: 9,
      title: 'Study Abroad on a Budget: Money-Saving Tips',
      excerpt: 'Practical advice on how to manage your finances while studying abroad without compromising on your experience.',
      author: 'Charles Mwangi',
      date: 'January 30, 2024',
      readTime: '6 min read',
      category: 'Finance',
      image: '/Destination%20Images/background%202.jpg'
    }
  ]

  const categories = [
    { name: 'All', icon: BookOpen, count: 9 },
    { name: 'Germany', icon: GraduationCap, count: 1 },
    { name: 'UK', icon: Globe, count: 1 },
    { name: 'Canada', icon: GraduationCap, count: 1 },
    { name: 'Malaysia', icon: Globe, count: 1 },
    { name: 'Visa', icon: BookOpen, count: 1 },
    { name: 'Application Tips', icon: BookOpen, count: 1 },
    { name: 'Language Tests', icon: BookOpen, count: 1 },
    { name: 'Finance', icon: BookOpen, count: 1 },
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
              Study Abroad Blog
            </h1>
            <p className="text-xl md:text-2xl text-neutral-100 max-w-3xl mx-auto">
              Expert insights, tips, and guides to help you succeed in your international education journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
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
              Featured Posts
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our most popular and informative articles
            </p>
          </motion.div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold text-primary px-3 py-1 rounded-full text-sm font-poppins font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-neutral-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-primary mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-neutral-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center space-x-2 text-primary font-poppins font-semibold hover:text-primary-dark transition-colors duration-200"
                  >
                    <span>Read More</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-poppins font-semibold text-primary mb-4">
              Browse by Category
            </h3>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:bg-primary hover:text-white"
              >
                <category.icon size={16} />
                <span className="font-poppins font-medium">{category.name}</span>
                <span className="bg-neutral-100 text-neutral-600 px-2 py-1 rounded-full text-xs font-medium">
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* All Blog Posts */}
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
              Latest Articles
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Stay updated with the latest insights and tips for studying abroad
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold text-primary px-3 py-1 rounded-full text-sm font-poppins font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-neutral-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-primary mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-neutral-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center space-x-2 text-primary font-poppins font-semibold hover:text-primary-dark transition-colors duration-200"
                  >
                    <span>Read More</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
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
              Stay Updated
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Subscribe to our newsletter for the latest study abroad tips, scholarship opportunities, and expert advice
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-l-lg border-0 focus:ring-2 focus:ring-gold focus:outline-none"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gold text-primary px-6 py-3 rounded-r-lg font-poppins font-semibold hover:bg-gold-light transition-colors duration-200"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default BlogPage 