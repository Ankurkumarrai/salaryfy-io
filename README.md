# Salaryfy.io - Financial Awareness Platform

A modern, responsive web application focused on financial empowerment through salary understanding, tax optimization, and financial education.

##  Project Overview

Salaryfy.io is a comprehensive financial platform that helps individuals:
- **Understand their salary** with detailed breakdown calculators
- **Optimize their taxes** through information and strategies
- **Build financial literacy** with educational resources and tools

The platform emphasizes **clarity, transparency, and financial literacy** to empower users in making informed financial decisions.

##  Features

###  Interactive Calculators
- **Salary Calculator**: Break down gross pay into net income with tax deductions
- **Visual Charts**: Pie charts and bar graphs for salary distribution analysis
- **Real-time Calculations**: Instant results with responsive input fields

###  Tax Information Center
- **2024 Tax Brackets**: Complete federal tax bracket information
- **Deduction Guide**: Standard and itemized deduction explanations
- **Tax Calendar**: Important dates and deadlines throughout the year
- **Optimization Tips**: Strategies to minimize tax burden legally

###  Financial Education Hub
- **Interactive Courses**: Progressive learning paths for financial topics
- **Educational Articles**: Quick reads on various financial concepts
- **Financial Tools**: Budget trackers, investment calculators, and planners
- **Progress Tracking**: Achievement system and learning milestones

##  Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS with custom design system
- **UI Components**: shadcn/ui component library
- **Charts**: Recharts for data visualization
- **Routing**: React Router DOM
- **State Management**: React Query for server state
- **Icons**: Lucide React

##  Design System

- **Color Palette**: Professional blue (#3b82f6) and success green (#22c55e)
- **Typography**: Clean, readable fonts with proper hierarchy
- **Layout**: Card-based design with consistent spacing
- **Responsive**: Mobile-first approach with breakpoint optimization
- **Accessibility**: Semantic HTML and proper contrast ratios

##  Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd salaryfy-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:8080
   ```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

##  Screenshots

### Home Page
Modern hero section with financial dashboard imagery and clear call-to-action buttons.

### Salary Calculator
Interactive calculator with real-time results and visual charts showing salary breakdown.

### Tax Information
Comprehensive tax brackets, deductions guide, and optimization strategies.

### Education Hub
Progressive learning courses with achievement tracking and financial tools.

##  Deployment

The application can be deployed to various platforms:

### Netlify
```bash
npm run build
# Deploy dist folder to Netlify
```

### Vercel
```bash
npm run build
# Deploy dist folder to Vercel
```

### GitHub Pages
```bash
npm run build
# Deploy dist folder to GitHub Pages
```

##  Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   └── Navigation.tsx  # Main navigation component
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── SalaryCalculator.tsx
│   ├── TaxInfo.tsx
│   └── Education.tsx
├── assets/             # Static assets
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── styles/             # CSS and styling files
```

##  Features Implemented

###  Core Features
- [x] Responsive landing page with hero section
- [x] Interactive salary calculator with visual charts
- [x] Comprehensive tax information center
- [x] Financial education hub with courses and articles
- [x] Mobile-responsive design
- [x] Professional design system
- [x] SEO optimization

###  Technical Features
- [x] TypeScript for type safety
- [x] Modern React with hooks
- [x] Component-based architecture
- [x] Responsive design with TailwindCSS
- [x] Interactive data visualizations
- [x] Client-side routing
- [x] Accessible UI components

##  Development Guidelines

### Code Style
- TypeScript strict mode enabled
- ESLint configuration for code quality
- Consistent component structure
- Semantic HTML elements

### Design Principles
- Mobile-first responsive design
- Professional color scheme for financial trust
- Clear typography hierarchy
- Intuitive user interface

### Performance
- Optimized images and assets
- Lazy loading where applicable
- Efficient component rendering
- Minimal bundle size

##  Future Enhancements

- [ ] User authentication and profiles
- [ ] Data persistence for calculations
- [ ] More advanced financial calculators
- [ ] Investment portfolio tracking
- [ ] Email notifications for tax deadlines
- [ ] Multi-language support

##  Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

##  License

This project is created as an internship assignment demonstrating modern web development skills.

##  Assignment Completion

This project fulfills all assignment requirements:
- ✅ **Theme**: Salaryfy.io financial platform implemented
- ✅ **Pages**: Salary breakdown, tax info, and financial education
- ✅ **Calculators**: Interactive frontend-only financial tools
- ✅ **UI/UX**: Professional, informative, user-centric design
- ✅ **Technology**: React, TailwindCSS as specified
- ✅ **Responsive**: Works across all device sizes
- ✅ **Deployment Ready**: Can be deployed to Netlify/Vercel/GitHub Pages
- ✅ **Documentation**: Complete setup and usage instructions

---

