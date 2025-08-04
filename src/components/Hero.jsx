const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Floating Geometric Shapes */}
                <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-blue-500/10 rounded-full blur-lg animate-bounce"></div>
                <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl animate-ping"></div>
                <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-emerald-400/10 rounded-full blur-xl animate-pulse"></div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-slate-900/30"></div>
            </div>

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content Section */}
                    <div className="text-center lg:text-left space-y-8 order-2 lg:order-1">
                        {/* Greeting with Animation */}
                        <div className="space-y-4">
                            <div className="inline-flex items-center px-4 py-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full text-emerald-300 text-sm font-medium backdrop-blur-sm animate-fade-in-up">
                                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
                                Available for work
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight animate-slide-in-left">
                                Hi, I'm
                                <span className="block bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
                                    Van Khoa
                                </span>
                            </h1>
                        </div>

                        {/* Professional Title with Typewriter Effect */}
                        <div className="space-y-4">
                            <h2 className="text-2xl lg:text-3xl text-gray-300 font-light animate-slide-in-left delay-200">
                                <span className="text-emerald-400 font-semibold">Full-Stack Developer</span>
                                {/* <span className="text-blue-400 font-semibold"> Healthcare Tech Specialist</span> */}
                            </h2>

                            <p className="text-lg text-gray-400 max-w-xl leading-relaxed animate-fade-in delay-400">
                                As a 3rd year student majoring in Full Stack Programming, I have a special passion for technology, currently focusing on learning and practicing with React.js and Node.js. My goal is to become a good Full Stack Developer, so I am always proactive in learning and constantly challenging myself with new knowledge and projects.
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-600">
                            <a href="#projects" className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25 inline-block text-center">
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                                <span className="relative flex items-center gap-2">
                                    View My Work
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                            </a>
                            <a href="https://www.canva.com/design/DAGu9wNt_Ao/SkiNLwi4mf1NVYh3vSQ_Fw/view?utm_content=DAGu9wNt_Ao&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hebea45074a">
                                <button className="group px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300 hover:bg-emerald-400/10 backdrop-blur-sm">
                                    <span className="flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        Download CV
                                    </span>
                                </button>
                            </a>
                        </div>

                        {/* Social Links with Hover Effects */}
                        <div className="flex justify-center lg:justify-start gap-6 animate-fade-in delay-800">
                            {[
                                { icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z", color: "hover:text-blue-400", href: "#" },
                                { icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z", color: "hover:text-gray-300", href: "https://github.com/vankhoa-gubit" },
                                { icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z", color: "hover:text-blue-500", href: "https://www.facebook.com/khoa.phan.457790/" }
                            ].map((social, index) => (
                                <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full bg-gray-800/50 text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-gray-700/50 backdrop-blur-sm border border-gray-700/50`}>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d={social.icon} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Image Section */}
                    <div className="relative order-1 lg:order-2 animate-fade-in delay-300">
                        <div className="relative group">
                            {/* Decorative Elements */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
                            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>

                            {/* Main Image Container */}
                            <div className="relative bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-2xl p-8 border border-gray-600/50 backdrop-blur-sm overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                {/* Image Placeholder with Upload Indicator */}
                                <div className="relative aspect-square bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl overflow-hidden">
                                    {/* Upload Icon */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center space-y-4">
                                            {/* <div className="w-20 h-20 mx-auto bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center">
                                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            </div> */}
                                            <div className="text-gray-300">
                                                <img
                                                    src="/Portfolio/h3.jpg"
                                                    alt="My Photo"
                                                    className="w-full h-full object-cover rounded-xl"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Floating Particles */}
                                    <div className="absolute top-4 left-4 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
                                    <div className="absolute top-8 right-6 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                                    <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce"></div>
                                    <div className="absolute bottom-4 right-4 w-2 h-2 bg-emerald-300 rounded-full animate-ping delay-1000"></div>
                                </div>

                                {/* Decorative Corner Elements */}
                                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-emerald-400 opacity-60"></div>
                                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-blue-400 opacity-60"></div>
                            </div>

                            {/* Status Indicator */}
                            <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg">
                                Active
                            </div>
                        </div>

                        {/* Floating Info Cards */}
                        <div className="absolute -left-8 top-1/2 -translate-y-1/2 hidden lg:block animate-float">
                            {/* <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 rounded-lg p-4 text-center">
                                <div className="text-2xl font-bold text-emerald-400">3rd</div>
                                <div className="text-xs text-gray-300">Student</div>
                            </div> */}
                        </div>


                        {/* <div className="absolute -right-8 top-1/4 hidden lg:block animate-float delay-1000">
                            <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 rounded-lg p-4 text-center">
                                <div className="text-2xl font-bold text-blue-400">50+</div>
                                <div className="text-xs text-gray-300">Projects Done</div>
                            </div>
                        </div> */}
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="flex flex-col items-center gap-2 text-gray-400">
                        <span className="text-sm">Scroll down</span>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
