# StudyKonnect Africa Website

A high-conversion, visually stunning website for StudyKonnect Africa (Kenya branch) built with Next.js, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Premium UI/UX** - Modern design with smooth animations and transitions
- **Brand Consistency** - Matches StudyKonnect brand colors and logo
- **Mobile-First** - Fully responsive design
- **SEO Optimized** - Server-side rendering with Next.js
- **High Performance** - Optimized images and lazy loading
- **Interactive Elements** - Hover effects, scroll animations, and micro-interactions

## 📱 Pages

- **Homepage** - Hero section, destinations grid, process timeline, testimonials
- **About** - Company information, team, statistics
- **Destinations** - Country listings with detailed information
- **Blog** - Educational articles and tips
- **Contact** - Contact form and information

## 🎨 Design System

### Colors
- **Primary**: Dark Blue (#1E3A8A)
- **Accent**: Gold (#FFD700)
- **Red**: Brand Red (#DC2626) - from logo hummingbird

### Typography
- **Headings**: Poppins Bold
- **Body**: Inter

### Animations
- Framer Motion for smooth transitions
- Scroll-triggered animations
- Hover effects on cards and buttons

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Poppins, Inter)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd studykonnect-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

## 📁 Project Structure

```
studykonnect-website/
├── components/          # Reusable components
│   ├── Navbar.js       # Navigation component
│   └── Footer.js       # Footer component
├── pages/              # Next.js pages
│   ├── index.js        # Homepage
│   ├── about.js        # About page
│   ├── destinations/   # Destinations pages
│   ├── blog.js         # Blog page
│   └── contact.js      # Contact page
├── styles/             # Global styles
│   └── globals.css     # Tailwind imports and custom styles
├── public/             # Static assets
└── package.json        # Dependencies and scripts
```

## 🎯 Key Features

### Homepage
- Hero section with compelling headline
- Interactive destinations grid with continent tabs
- 9-step process timeline
- Student testimonials
- Call-to-action sections

### Destinations
- Dynamic country pages with detailed information
- Cost breakdowns and deadlines
- Visa requirements and processes
- University listings

### Contact
- Contact form with country selection
- Multiple contact methods (Phone, WhatsApp, Email)
- Social media links
- Business hours

## 📞 Contact Information

- **Phone**: +254 715 194 181
- **WhatsApp**: +254 757 957 165
- **Email**: charles@studykonnectke.com
- **Location**: Nairobi, Kenya

## 🌟 Performance Features

- **Lazy Loading** - Images and components load on demand
- **Optimized Images** - Next.js Image component for better performance
- **Code Splitting** - Automatic code splitting with Next.js
- **SEO Friendly** - Meta tags and structured data
- **Mobile Optimized** - Touch-friendly interactions

## 🎨 Customization

### Adding New Countries
1. Add country data to the destinations data structure
2. Create country-specific content
3. Update navigation and links

### Styling Changes
- Modify `tailwind.config.js` for color changes
- Update `styles/globals.css` for custom styles
- Component-specific styles in individual files

## 📱 Responsive Design

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Code Style
- ESLint configuration included
- Prettier formatting recommended
- Component-based architecture

## 📄 License

This project is proprietary to StudyKonnect Africa.

## 🤝 Contributing

For internal development only. Please follow the established code style and component patterns.

---

**Built with ❤️ for StudyKonnect Africa** 