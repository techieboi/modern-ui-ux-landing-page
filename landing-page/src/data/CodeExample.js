

export const codeExamples = {
    "App.jsx": `
    import React from 'react';
    import './App.css';

    function App() {
        return (
            <div className="App">
                <h1>Hello, World!</h1>
                <p>This is a basic React component using JSX.</p>
            </div>
        );
    }

    export default App;
    `,
"Hero.jsx": `
    import React from 'react';
    import './Hero.css';

    const Hero = ({ title, subtitle, ctaText }) => {
    return (
        <div className="hero-container">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        <button className="hero-cta-button">{ctaText}</button>
        </div>
    );
    };

    export default Hero;
 `,
    "Navbar.jsx": `
    import React from 'react';

    const Navbar = () => {
    return (
        <nav className="navbar">
        <a href="/" className="logo">
            MyWebsite
        </a>
        <ul className="nav-links">
            <li>
            <a href="/">Home</a>
            </li>
            <li>
            <a href="/about">About</a>
            </li>
            <li>
            <a href="/contact">Contact</a>
            </li>
        </ul>
        </nav>
    );
    };

    export default Navbar;

    `

};

export const floatingCards = {
    "App.jsx": {
        bgColor: "bg-blue-500/20",
        iconColor: "text-blue-400",
        textColor: "text-blue-200",
        contentColor: "text-blue-300",
        icon: "🐣",
        title: "AI-Powered Debugger",
        content: "An AI tool based on OpenAI's GPT-4, integrated into Visual Studio Code (cs50.dev) to help students troubleshoot code, explain concepts, and provide 24/7, one-on-one tutoring.",
    },
    
    "Hero.jsx": {
        bgColor: "bg-purple-500/20",
        iconColor: "text-purple-400",
        textColor: "text-purple-200",
        contentColor: "text-purple-300",
        icon: "🐤",
        title: "Global Reach",
        content: "The tool has been utilized by over 200,000 students and teachers worldwide.",
    },
    
    "Navbar.jsx": {
        bgColor: "bg-cyan-500/20",
        iconColor: "text-cyan-400",
        textColor: "text-cyan-200",
        contentColor: "text-cyan-300",
        icon: "🐥",
        title: "Pedagogical Goals",
        content: "The AI is designed to guide students rather than provide direct answers, acting as a \"pedagogical guardrail\".",
    },
};