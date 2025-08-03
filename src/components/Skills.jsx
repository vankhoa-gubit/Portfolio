const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            iconSvg: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            bgColor: "bg-emerald-500",
            skills: [
                { name: "React", level: 60 },
                { name: "JavaScript", level: 55 },
                { name: "Tailwind CSS", level: 40 },
                { name: "HTML/CSS", level: 55 }
            ]
        },
        {
            title: "Backend",
            iconSvg: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
            ),
            bgColor: "bg-blue-500",
            skills: [
                { name: "Java", level: 60 },
                { name: "Node.js", level: 50 },
                { name: "JSP/Servlet", level: 60 }
            ]
        },
        {
            title: "Database",
            iconSvg: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
            ),
            bgColor: "bg-indigo-500",
            skills: [
                { name: "SQL Server", level: 50 },
                { name: "Database Design", level: 50 },
                { name: "MySQL", level: 60 }
            ]
        }
    ]

    return (
        <section id="skills" className="py-20 px-4 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto w-full">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Technologies and tools I use to build comprehensive healthcare systems, management applications, and modern web solutions.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700/50">
                            <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mb-4 shadow-lg`}>
                                <div className="text-white">{category.iconSvg}</div>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                            <div className="space-y-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="flex items-center justify-between">
                                        <span className="text-gray-300 font-medium">{skill.name}</span>
                                        <div className="w-24 bg-gray-700 rounded-full h-2.5">
                                            <div
                                                className={`${category.bgColor} h-2.5 rounded-full transition-all duration-1000 ease-out`}
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
