import Link from 'next/link';

const HeroSection = () => {
    return (
        <section className="relative gradient-bg min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-10 rounded-full blob"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-white opacity-10 rounded-full blob" style={{ animationDelay: '-2s' }}></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white opacity-10 rounded-full blob" style={{ animationDelay: '-4s' }}></div>
            
            <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
                <div className="float-animation">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        BSC CSIT NOTES
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 font-light">
                        Far Western University
                    </p>
                    <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
                        Your comprehensive resource for Computer Science and Information Technology study materials, notes, and exam preparation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="#semesters" className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                            Browse Notes
                        </Link>
                        <Link href="#resources" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                            Study Resources
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;