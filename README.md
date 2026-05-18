# CS50 Duck Debugger Landing Page


#### Description:

This is a modern, high-performance landing page showcasing **CS50's Duck Debugger** — an AI-powered debugging tool built on OpenAI's GPT-4 that helps students and educators worldwide learn to code more effectively. The landing page is built with **React** and **Vite**, leveraging **Tailwind CSS** for styling and delivering an interactive, fully responsive experience across all devices.

The Duck Debugger is more than just a tool; it's a pedagogical approach to education. Rather than providing direct answers, it guides students through their coding challenges like a personal mentor available 24/7. This landing page communicates that vision through stunning visuals, interactive components, and authentic testimonials from CS50's global community of over 200,000 users.

## What This Project Does

The landing page serves as a marketing and informational hub for the CS50 Duck Debugger initiative. It features:

- **Interactive Hero Section** with a mouse-tracking gradient background that dynamically follows cursor movement, creating an immersive first impression
- **Live Code Editor Mockup** displaying syntax-highlighted React component examples with tabbed navigation
- **Features Showcase** highlighting the AI-powered debugger, global reach, the "Duck Around the World" physical campaign, and pedagogical design philosophy
- **Alumni Testimonials** with profile images and authentic feedback from CS50 students
- **Responsive Navigation** that adapts seamlessly between desktop and mobile views with a collapsible hamburger menu

## File-by-File Breakdown

### `src/App.jsx`
The root component that orchestrates the entire application. It imports and arranges all major section components (Navbar, Hero, Features, Pricing, Testimonials, Footer) in sequence. This file establishes the overall layout hierarchy and applies global styling through Tailwind classes, ensuring consistent dark theme (slate-950 background) and white text throughout. The modular structure allows each section to be independently updated or replaced without affecting the overall application flow.

### `src/components/Hero.jsx`
The most complex and interactive component, serving as the landing page's focal point. It implements:
- **Mouse-tracking gradient background**: Uses React's `useState` and `useEffect` hooks to track real-time cursor position and generate a dynamic radial gradient that follows the user's mouse. This transforms a static header into an interactive playground.
- **Syntax-highlighted code editor**: Displays three React component examples (App.jsx, Hero.jsx, Navbar.jsx) using the `react-syntax-highlighter` library with the "nightOwl" theme, providing visual authenticity.
- **Tabbed interface**: Users can click tabs to switch between different code examples, with the corresponding floating feature card updating dynamically.
- **Animated elements**: Text and UI elements slide in from the bottom with staggered delays, creating a polished reveal animation.
- **Glassmorphism floating cards**: Semi-transparent cards with backdrop blur effects display feature highlights, adding visual depth and modern design aesthetics.

### `src/components/Navbar.jsx`
Implements a fixed navigation bar with intelligent responsive behavior. The desktop view displays horizontal navigation links to key sections ("About DDB", "Words from Alumni"). The mobile view hides these links behind a hamburger menu icon (from `lucide-react`), which toggles to reveal a vertical menu. The navbar includes the project branding with a duck logo and "CS50ddb" text. Smooth transitions and hover effects provide visual feedback, while the fixed positioning ensures the navigation remains accessible as users scroll.

### `src/components/Features.jsx`
Showcases four pillars of the CS50 Duck Debugger initiative through an alternating layout pattern:
1. **AI-Powered Debugger** - Describes GPT-4 integration in VS Code
2. **Global Reach** - Highlights 200,000+ student and teacher users
3. **Duck Around the World Campaign** - Explains the physical rubber duck installations in major cities
4. **Pedagogical Goals** - Emphasizes guided learning rather than direct answers

The component separates data from presentation by storing feature information in an array, then mapping over it to generate cards. The `imagePosition` property controls whether images appear left or right, creating visual rhythm and maintaining reader engagement through layout variation.

### `src/components/Testimonials.jsx`
Displays student testimonials with circular profile avatars and italicized feedback text. Each testimonial includes name, batch year, profile image, and content. The component uses the `map` function to iterate over testimonial data, generating consistent card layouts. Profile images use `rounded-full` for circular styling, humanizing the feedback and building community credibility through authentic voices.

### `src/components/Pricing.jsx` & `src/components/Footer.jsx`
Currently empty placeholder components reserved for future implementation. Pricing will showcase subscription tiers or free access information, while Footer will contain links, social media, and legal information.

### `src/data/CodeExample.js`
Serves as the centralized data layer, exporting two key objects:
- **`codeExamples`**: Contains three code snippets (App.jsx, Hero.jsx, Navbar.jsx) displayed in the hero section's code editor. These demonstrate real React patterns.
- **`floatingCards`**: Provides configuration objects for each floating feature card, including background colors, icon colors, text, and content. This separation allows the Hero component to dynamically update cards based on active code tabs without modifying component logic.

### `src/index.css`
Contains Tailwind CSS imports and custom animation utilities. Defines keyframe animations (`slideInFromTop`, `slideInFromBottom`) and utility classes (`animate-in`, `.duration-300`, `.delay-100`, etc.) that enable the landing page's smooth entrance animations. Using Tailwind's `@layer utilities`, these custom animations integrate seamlessly with Tailwind's existing utility system.

### `src/main.jsx`
The application entry point that renders the React app into the DOM. Uses React 19's `createRoot` API for rendering and wraps the app in `StrictMode` for detecting potential issues during development.

## Design Decisions & Why

**Mouse-Tracking Gradient**: Rather than static animations, this interactive gradient encourages engagement and creates a memorable first impression. It demonstrates sophistication while rewarding user interaction.

**Tailwind CSS**: Utility-first styling enables rapid development and ensures design consistency. Responsive breakpoints (sm, md, lg, xl) allow one codebase to elegantly adapt from mobile phones to large displays without complex media queries.

**Component Separation**: Breaking the app into small, focused components (each handling one concern) promotes reusability, easier testing, and scalability.

**Data Layer Separation**: Storing content in `CodeExample.js` separates concerns — content updates don't require component modifications, making the code more maintainable.

**Alternating Feature Layout**: Left-right-left-right image positioning creates visual interest and breaks monotony while maintaining readability across screen sizes.

## Getting Started

```bash
# Install dependencies
npm install

# Start development server with HMR
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm lint
```

The dev server runs on `http://localhost:5173` by default. The project includes the React Compiler for optimized rendering and ESLint configuration for code quality.
