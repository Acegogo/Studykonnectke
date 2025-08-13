import { motion } from 'framer-motion'
import { useState } from 'react'
import { Calendar, Clock, User, ArrowRight, BookOpen, GraduationCap, Award } from 'lucide-react'
import Head from 'next/head'

const featuredPosts = [
  {
    id: 1,
    title: 'WINNING SCHOLARSHIPS',
    excerpt: 'Winning scholarships can significantly ease the financial burden of education. Here\'s a breakdown of key strategies to improve your chances...',
    content: `Winning scholarships can significantly ease the financial burden of education. Here's a breakdown of key strategies to improve your chances:

1. Start Early and Stay Organized:
   • Timeline:
     - Begin your scholarship search well in advance. Deadlines can vary widely, and some may be a year or more before the start of the academic year.
     - Create a calendar or spreadsheet to track deadlines, application requirements, and necessary documents.
   • Organization:
     - Maintain a file (physical or digital) of your academic records, extracurricular activities, awards, and letters of recommendation.
     - Keep copies of all your applications.

2. Research and Identify Relevant Scholarships:
   • Diversify your search:
     - Don't rely solely on large, national scholarships. Explore local, regional, and university-specific opportunities.
     - Look for scholarships based on your:
       * Academic major
       * Extracurricular activities
       * Community involvement
       * Background and demographics
   • Utilize online resources:
     - Websites like:
       * Going Merry
       * Scholarships360
       * Fastweb
       * College Board
     - Also, check with:
       * Your high school or college counselor
       * University financial aid offices
       * Community organizations
       * Professional associations

3. Craft Compelling Applications:
   • Pay close attention to instructions:
     - Follow all guidelines precisely. Incomplete or incorrect applications are often disqualified.
   • Write strong essays:
     - Tell your unique story. Highlight your achievements, goals, and how the scholarship will help you.
     - Proofread carefully for grammar and spelling errors.
     - Have others review your essays for feedback.
   • Secure strong letters of recommendation:
     - Ask teachers, professors, or mentors who know you well and can speak to your strengths.
     - Provide them with ample time and information to write a thoughtful letter.
   • Showcase your achievements:
     - Provide detailed information about your academic achievements, extracurricular activities, and community involvement.
     - Quantify your accomplishments whenever possible.

4. Present Yourself Professionally:
   • Maintain a positive online presence:
     - Scholarship committees may review your social media profiles. Ensure they reflect positively on you.
   • Prepare for interviews:
     - If an interview is required, practice answering common questions.
     - Dress professionally and arrive on time.
     - Be confident and enthusiastic.

Key Takeaways:
   • Persistence is key. Don't be discouraged by rejections.
   • Tailor each application to the specific scholarship requirements.
   • Highlight your unique qualities and experiences.

By following these tips, you can increase your chances of winning scholarships and achieving your educational goals.`,
    image: '/Destination Images/background 2.jpg',
    featured: true,
    author: 'StudyKonnect Team',
    date: 'January 15, 2025',
    readTime: '8 min read',
    category: 'Scholarships'
  },
  {
    id: 2,
    title: 'STUDY ABROAD PROCESS',
    excerpt: 'Studying abroad is an exciting venture, but it requires careful planning. Here\'s a breakdown of the typical steps involved...',
    content: `Studying abroad is an exciting venture, but it requires careful planning. Here's a breakdown of the typical steps involved:

1. Exploration and Goal Setting:
   • Determine Your Objectives:
     - Why do you want to study abroad? (e.g., career advancement, cultural immersion, language acquisition)
     - What field of study interests you?
     - What are your academic and personal goals?
   • Research Destinations:
     - Consider countries and cities that align with your goals and interests.
     - Research the cost of living, culture, and safety of potential destinations.
   • Program Selection:
     - Explore universities and programs that offer your desired field of study.
     - Consider program duration, curriculum, and accreditation.

2. Financial Planning:
   • Create a Budget:
     - Estimate tuition fees, living expenses, travel costs, and other potential expenses.
   • Explore Funding Options:
     - Research scholarships, grants, and financial aid opportunities.
     - Consider part-time work options (if allowed by your visa).

3. Application Process:
   • Meet Entry Requirements:
     - Ensure you meet the academic and language proficiency requirements of your chosen institutions.
     - Prepare required documents, such as transcripts, letters of recommendation, and personal statements.
   • Submit Applications:
     - Adhere to application deadlines and submit all required materials.
     - Track your application status.

4. Visa and Immigration:
   • Visa Application:
     - Research visa requirements for your chosen country.
     - Gather necessary documents and apply for a student visa.
   • Health Insurance:
     - Obtain adequate health insurance that covers your stay abroad.

5. Pre-Departure Preparations:
   • Accommodation:
     - Arrange accommodation, whether on-campus or off-campus.
   • Travel Arrangements:
     - Book flights and make travel arrangements.
   • Cultural Preparation:
     - Learn about the culture and customs of your host country.
     - Consider learning basic phrases in the local language.
   • Financial arrangements:
     - Inform your bank of your travels.
     - Consider how you will access your funds while abroad.

6. Arrival and Settling In:
   • Orientation:
     - Attend orientation programs to familiarize yourself with the university and the city.
   • Integration:
     - Engage with local students and the community.
     - Adapt to the new culture and environment.

By following these steps, you can navigate the study abroad process more effectively and ensure a successful and enriching experience.`,
    image: '/Destination Images/background 1.jpg',
    featured: true,
    author: 'StudyKonnect Team',
    date: 'January 12, 2025',
    readTime: '6 min read',
    category: 'Study Abroad'
  },
  {
    id: 3,
    title: 'NAVIGATING THE SCHOLARSHIP APPLICATION PROCESS',
    excerpt: 'Studying abroad is a transformative experience, but it requires careful planning and a clear understanding of the process...',
    content: `Studying abroad is a transformative experience, but it requires careful planning and a clear understanding of the process. For students, the journey involves a series of distinct steps, from setting your academic goals to settling into a new culture. Here is a detailed breakdown of the typical steps involved, with specific considerations for students.

1. Exploration and Goal Setting
   • Determine Your Objectives: Start by asking yourself why you want to study abroad. Are you seeking a specific degree not available locally, aiming for international career advancement, or eager to immerse yourself in a new culture? Be clear about your academic and personal goals.
   • Research Destinations: The world is your oyster, but some destinations may be a better fit than others. Consider countries with strong programs in your field of interest. Research the cost of living and explore the culture, safety, and lifestyle of potential destinations.
   • Program Selection: Once you've narrowed down your countries, start looking at universities and specific programs. Pay close attention to the curriculum, the duration of the program, and whether the institution is accredited. It's often wise to choose universities that have a good track record of accepting international students and have established support systems for them.

2. Financial Planning
   • Create a Budget: This is a critical step. Estimate all potential expenses, including tuition fees, living costs, and travel. Remember that currency exchange rates can fluctuate, so factor this into your budget.
   • Explore Funding Options: Scholarships and grants are crucial for many students. Look for opportunities that are specifically for African students, such as the DAAD Scholarship for Germany, the Chevening Scholarships for the UK, or the Fulbright program for the USA. Don't forget to check with the universities you're applying to, as many have their own scholarships for international students. Consider part-time work options. Regulations vary by country; for example, in Canada, international students can work up to 24 hours per week off-campus, while in Australia, it's 48 hours per fortnight during term time. In the UK, students can work up to 20 hours per week during term.

3. Application Process
   • Meet Entry Requirements: Ensure you meet the academic and language proficiency requirements of your chosen institutions. This often involves taking standardized tests like the SAT, GRE, or GMAT and language tests such as IELTS or TOEFL. Prepare all your documents well in advance, including transcripts, letters of recommendation from professors or employers, and a compelling personal statement that highlights your unique story and aspirations.
   • Submit Applications: Pay close attention to application deadlines, as they can be strict. Submit all required materials and keep track of your application status through the university's portal.

4. Visa and Immigration
   • Visa Application: This is often the most complex part of the process. Research the specific visa requirements for your chosen country. You will typically need a Certificate of Acceptance for Studies (CAS) for the UK or an unconditional letter of admission for Germany. You will also need to provide proof of sufficient funds to cover your tuition and living expenses. You will apply for your student visa at the embassy or visa application center. For instance, the German student visa (Visum zu Studienzwecken – Visa Type D) requires proof of funds of €861 per month, while for the UK, you must show you have £1,334 per month for living costs if studying in London, or £1,023 per month for outside London.
   • Health Insurance: Obtain adequate health insurance that is valid for your entire stay. Many countries require international students to have specific health coverage.

5. Pre-Departure Preparations
   • Accommodation: Arrange your housing before you leave. This could be on-campus housing, a private rental, or a homestay.
   • Travel Arrangements: Book your flights well in advance to get the best rates.
   • Cultural Preparation: Take the time to learn about the culture and customs of your host country. Learning basic phrases in the local language, if applicable, can make a huge difference in your ability to settle in and make connections.
   • Financial Arrangements: Inform your local bank of your travel plans to avoid any issues with your cards while abroad. Consider how you will access funds, whether through an international card or by setting up a local bank account upon arrival.

6. Arrival and Settling In
   • Orientation: Attend all orientation programs offered by your university. This is your chance to familiarize yourself with the campus, meet other students, and learn about the local area.
   • Integration: Make an effort to engage with your new community. Join student clubs, participate in social events, and connect with local people to truly experience your new environment.

By following these steps, students can navigate the study abroad process more effectively and ensure a successful and enriching experience.`,
    image: '/Destination Images/New York 1.jpg',
    featured: true,
    author: 'StudyKonnect Team',
    date: 'January 10, 2025',
    readTime: '10 min read',
    category: 'Application Process'
  }
]

const BlogCard = ({ post, isFeatured = false }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
        isFeatured ? 'lg:col-span-2' : ''
      }`}
    >
      <div className="relative h-48 md:h-64">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-poppins font-semibold">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center space-x-4 text-sm text-neutral-600 mb-4">
          <div className="flex items-center space-x-2">
            <User size={16} />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar size={16} />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock size={16} />
            <span>{post.readTime}</span>
          </div>
        </div>
        
        <h3 className="text-xl md:text-2xl font-poppins font-bold text-primary mb-3">
          {post.title}
        </h3>
        
        <div className="text-neutral-700 leading-relaxed">
          {isExpanded ? (
            <div className="whitespace-pre-line">{post.content}</div>
          ) : (
            <p>{post.excerpt}</p>
          )}
        </div>
        
        <div className="mt-6">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center space-x-2 text-accent hover:text-accent-light font-poppins font-semibold transition-colors duration-200"
          >
            <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
            <ArrowRight size={16} className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog - StudyKonnect Africa</title>
        <meta name="description" content="Stay updated with the latest study abroad tips, scholarship opportunities, and educational insights from StudyKonnect Africa." />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Destination Images/background 2.jpg"
            alt="Blog Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-poppins font-bold mb-6"
          >
            Study Abroad Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-neutral-200 max-w-3xl mx-auto"
          >
            Expert insights, tips, and guidance for your international education journey
          </motion.p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-4">
              Featured Articles
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Essential guides and insights to help you succeed in your study abroad journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <BlogCard key={post.id} post={post} isFeatured={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Posts */}
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
              Latest Articles
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Stay updated with our latest insights and tips
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-neutral-200 mb-8">
              Get the latest study abroad tips and scholarship opportunities delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-6 py-3 rounded-lg text-lg flex-1 max-w-md text-primary placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button className="bg-gold text-primary px-8 py-3 rounded-lg font-poppins font-semibold text-lg hover:bg-gold-light transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
} 