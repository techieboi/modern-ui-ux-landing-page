

const testiMonials = [
    {
        name: "Vibgyor",
        batch: "CS50 2023",
        image: `${import.meta.env.BASE_URL}vibgyor.jpg`,
        content: "The CS50 Rubber Duck is a game-changer for CS50 students. It provides a unique and interactive way to debug code, making the learning process more engaging and effective. The AI's ability to guide students through their coding challenges without giving direct answers is truly impressive. It's like having a personal coding mentor available 24/7! Thankyou professor Malan and the CS50 team!",
    },
    {
        name: "Kiwi",
        batch: "CS50 2023",
        image: `${import.meta.env.BASE_URL}kiwi.jpg`,
        content: "The CS50 Rubber Duck is a game-changer for CS50 students. It provides a unique and interactive way to debug code, making the learning process more engaging and effective. The AI's ability to guide students through their coding challenges without giving direct answers is truly impressive. It's like having a personal coding mentor available 24/7! Thankyou professor Malan and the CS50 team!",
    },
    {
        name: "Panda",
        batch: "CS50 2023",
        image: `${import.meta.env.BASE_URL}panda.jpg`,
        content: "The CS50 Rubber Duck is a game-changer for CS50 students. It provides a unique and interactive way to debug code, making the learning process more engaging and effective. The AI's ability to guide students through their coding challenges without giving direct answers is truly impressive. It's like having a personal coding mentor available 24/7! Thankyou professor Malan and the CS50 team!",
    }
]

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                        <span className="bg-gradient-to-b from-yellow-400 via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                            Words from CS50 Alumni
                        </span>
                    </h2>
                </div>

                <div className="space-y-16 sm:space-y-20 lg:space-y-32">
                    {testiMonials.map((testi, key) => (
                        <div key={key} className="flex flex-col items-center gap-8 sm:gap-12">
                            {/* image section */}
                            <div className="flex-1 w-full max-w-sm">
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20
                                                    rounded-full sm:rounded-full transition-all duration-500" />    
                                    <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 
                                                    rounded-full sm:rounded-full p-4 sm:p-6 overflow-hidden group-hover:border-1 
                                                    group-hover:border-blue-600/50 transition-all duration-300">
                                        <img src={testi.image} alt={`${testi.name}'s picture`} className="w-full h-auto rounded-full" />
                                    </div>
                                </div>
                            </div>
                            {/* text section */}
                            <div className="w-full max-w-2xl text-center">
                                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">
                                    #{testi.name}, {testi.batch}
                                </h3>
                                <p className="text-gray-300/80 text-lg sm:text-xl italic leading-relaxed">
                                    "{testi.content}"
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
