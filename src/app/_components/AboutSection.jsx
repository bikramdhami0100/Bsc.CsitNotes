const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About BSC CSIT</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Bachelor of Science in Computer Science and Information Technology is a four-year program affiliated with Far Western University, designed to provide comprehensive knowledge in IT and Computing.
                </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-8 bg-gray-50 rounded-2xl transition-all duration-300 ease-in-out hover:transform hover:-translate-y-2 hover:shadow-2xl">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-4">4-Year Program</h3>
                    <p className="text-gray-600">Eight semesters with 137 total credit hours covering comprehensive computer science curriculum.</p>
                </div>
                
                <div className="text-center p-8 bg-gray-50 rounded-2xl transition-all duration-300 ease-in-out hover:transform hover:-translate-y-2 hover:shadow-2xl">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Comprehensive Curriculum</h3>
                    <p className="text-gray-600">Covers both theoretical foundations and practical applications in computer science and IT.</p>
                </div>
                
                <div className="text-center p-8 bg-gray-50 rounded-2xl transition-all duration-300 ease-in-out hover:transform hover:-translate-y-2 hover:shadow-2xl">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Far Western University</h3>
                    <p className="text-gray-600">Affiliated with Far Western University, established in 2010 and located in Mahendranagar, Kanchanpur.</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default AboutSection;