const About = () => {
    return (
        <section id="about" className="py-20 px-4 min-h-screen flex items-center bg-gradient-to-r from-indigo-600 to-emerald-600">
            <div className="max-w-7xl mx-auto w-full">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-indigo-100 max-w-2xl mx-auto">
                        I am a full-stack developer passionate about creating useful solutions that improve life and work.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-semibold text-white mb-4">My Journey</h3>
                        <p className="text-indigo-100 mb-6">
                            As a software engineering student, I've developed expertise in both frontend and backend technologies,
                            focusing on building comprehensive management systems and healthcare applications.
                        </p>
                        <p className="text-indigo-100 mb-6">
                            My experience includes working with Java EE technologies, React applications, and database design.
                            I enjoy tackling complex challenges in enterprise systems and healthcare technology.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">Full-Stack Developer</span>
                            <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">System Designer</span>
                        </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                        <h3 className="text-2xl font-semibold text-white mb-6">Quick Facts</h3>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 backdrop-blur-sm">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <span className="text-indigo-100">Based in Vietnam</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 backdrop-blur-sm">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <span className="text-indigo-100">Full-Stack Developer</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 backdrop-blur-sm">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <span className="text-indigo-100">Always Learning</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
