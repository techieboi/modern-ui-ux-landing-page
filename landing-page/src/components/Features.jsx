

const features = [
    {
        title: "AI-Powered Debugger (cs50.ai)",
        description: "An AI tool based on OpenAI's GPT-4, integrated into Visual Studio Code (cs50.dev) to help students troubleshoot code, explain concepts, and provide 24/7, one-on-one tutoring.",
        image: `${import.meta.env.BASE_URL}images.jpeg`,
        imagePosition: "left",
    },
    {
        title: "Global Reach",
        description: "The tool has been utilized by over 200,000 students and teachers worldwide.",
        image: `${import.meta.env.BASE_URL}images-2.jpeg`,
        imagePosition: "right",
    },
    {
        title: "Duck Around the World Campaign",
        description: "CS50 has installed massive physical rubber duck debuggers in major global cities to promote computer science education.",
        image: `${import.meta.env.BASE_URL}images-3.jpeg`,
        imagePosition: "left",
    },
    {
        title: "Pedagogical Goals",
        description: "The AI is designed to guide students rather than provide direct answers, acting as a \"pedagogical guardrail\".",
        image: `${import.meta.env.BASE_URL}images-4.jpeg`,
        imagePosition: "right",
    },
]

export default function Features() {
    return (
        <section id="about" className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                        <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
                            The CS50 Rubber Duck 
                        </span>
                        <br />
                        <span className="bg-gradient-to-b from-yellow-300 via-yellow-200 to-yellow-300 bg-clip-text text-transparent">
                            RubberDucking
                        </span>
                    </h2>
                </div>

                <div className="space-y-16 sm:space-y-20 lg:space-y-32">
                    {features.map((feature, key) => (
                        <div key={key} className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 ${feature.imagePosition === "right" ? "lg:flex-row-reverse" : ""}`}>
                            {/* image section */}
                            <div className="flex-1 w-full">
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20
                                                    rounded-xl sm:rounded-2xl transition-all duration-500" />
                                    <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 
                                                    rounded-xl sm:rounded-2xl p-4 sm:p-6 overflow-hidden group-hover:border-1 
                                                    group-hover:border-blue-600/50 transition-all duration-300">
                                        <img className="w-full h-full object-cover" src={feature.image} alt="CS50 Duck Around The World" />
                                    </div>
                                </div>
                            </div>
                            {/* text section */}
                            <div className="flex-1 w-full">
                                <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                                    <h3 className="text-4xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-300 text-base text-xl sm:text-lg leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
}
