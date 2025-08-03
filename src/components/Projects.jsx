const Projects = () => {
    const projects = [
        {
            title: "Drug Use Prevention Support System",
            description: "A comprehensive community-based platform for drug prevention with online training courses, risk assessments (ASSIST, CRAFFT), appointment scheduling, and community education program management.",
            iconSvg: (
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            bgGradient: "from-red-500 to-red-600",
            cardGradient: "from-gray-800/50 to-gray-800/30",
            technologies: ["React", "Node.js", "Express", "SQL Server"],
            techColors: ["bg-white/20 text-white", "bg-white/20 text-white", "bg-white/20 text-white", "bg-white/20 text-white"],
            linkColor: "text-white hover:text-indigo-200",
            liveDemo: "#",
            github: "https://github.com/vankhoa-gubit/SWP391_DrugUsePreventionSupportSystem"
        },
        {
            title: "Car Rental Management System",
            description: "A comprehensive car rental management system with service ticket management, parts inventory, mechanic scheduling, and customer management features built with Java EE technologies.",
            iconSvg: (
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 6a1 1 0 011-1h8a1 1 0 011 1v2.5M7 6V4a1 1 0 011-1h8a1 1 0 011 1v2M7 6v2.5m12-2.5v2.5M5 21h14a2 2 0 002-2V9H3v10a2 2 0 002 2z" />
                </svg>
            ),
            bgGradient: "from-blue-500 to-blue-600",
            cardGradient: "from-gray-800/50 to-gray-800/30",
            technologies: ["Java", "JSP", "SQL Server", "Servlet"],
            techColors: ["bg-white/20 text-white", "bg-white/20 text-white", "bg-white/20 text-white", "bg-white/20 text-white"],
            linkColor: "text-white hover:text-indigo-200",
            liveDemo: "#",
            github: "https://github.com/vankhoa-gubit/PRJ301_CarRentalManagementSystem"
        },
        {
            title: "Portfolio Website",
            description: "A modern, responsive portfolio website built with React and Tailwind CSS featuring dark theme, smooth animations, and scroll-snap navigation.",
            iconSvg: (
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h8z" />
                </svg>
            ),
            bgGradient: "from-emerald-500 to-indigo-600",
            cardGradient: "from-gray-800/50 to-gray-800/30",
            technologies: ["React", "Tailwind CSS", "Vite", "JavaScript"],
            techColors: ["bg-white/20 text-white", "bg-white/20 text-white", "bg-white/20 text-white", "bg-white/20 text-white"],
            linkColor: "text-white hover:text-indigo-200",
            liveDemo: "#",
            github: "#"
        }
    ]

    return (
        <section id="projects" className="py-20 px-4 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto w-full">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
                    <p className="text-indigo-100 max-w-2xl mx-auto">
                        Here are some of my recent projects that showcase my skills and experience.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20`}>
                            <div className={`h-48 bg-gradient-to-r ${project.bgGradient} flex items-center justify-center`}>
                                <div className="text-white">{project.iconSvg}</div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                                <p className="text-indigo-100 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className={`${project.techColors[techIndex]} px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm`}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <a href={project.liveDemo} className={`${project.linkColor} transition-colors flex items-center gap-2`}>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        Live Demo
                                    </a>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className={`${project.linkColor} transition-colors flex items-center gap-2`}>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                        </svg>
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
