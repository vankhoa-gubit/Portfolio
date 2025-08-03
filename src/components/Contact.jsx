const Contact = () => {
    const contactInfo = [
        {
            iconSvg: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.95a2 2 0 001.78 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            bgColor: "bg-emerald-500",
            hoverColor: "hover:bg-red-500",
            label: "Email",
            value: "khoapvan204@gmail.com",
            description: "Send me an email anytime",
            href: "mailto:khoapvan204@gmail.com",
            action: () => window.open("mailto:khoapvan204@gmail.com", "_blank")
        },
        {
            iconSvg: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            bgColor: "bg-blue-500",
            hoverColor: "hover:bg-green-500",
            label: "Phone",
            value: "+84 329 164 661",
            description: "Available Mon-Fri, 9AM-6PM",
            href: "tel:+84329164661",
            action: () => window.open("tel:+84329164661", "_blank")
        },
        {
            iconSvg: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            bgColor: "bg-emerald-600",
            hoverColor: "hover:bg-red-600",
            label: "Location",
            value: "Vietnam",
            description: "Tang Nhon Phu ward, Ho Chi Minh City",
            href: "https://maps.app.goo.gl/TfpWK6tnsTuvq3Bw8",
            action: () => window.open("https://maps.app.goo.gl/TfpWK6tnsTuvq3Bw8", "_blank")
        }
    ]

    const socialLinks = [
        {
            name: "Facebook",
            iconSvg: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
            ),
            bgColor: "bg-gray-600",
            hoverColor: "hover:bg-blue-600",
            href: "https://www.facebook.com/khoa.phan.457790/"
        },
        {
            name: "LinkedIn",
            iconSvg: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
            bgColor: "bg-gray-600",
            hoverColor: "hover:bg-blue-700",
            href: "https://linkedin.com/in/yourprofile"
        },
        {
            name: "GitHub",
            iconSvg: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            ),
            bgColor: "bg-gray-600",
            hoverColor: "hover:bg-gray-800",
            href: "https://github.com/vankhoa-gubit"
        }
    ]

    const handleContactClick = (info) => {
        if (info.action) {
            info.action();
        }
    }

    return (
        <section id="contact" className="py-20 px-4 min-h-screen flex items-center">
            <div className="max-w-6xl mx-auto w-full">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-4">Contact with me</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        I'm always open to discussing new opportunities and interesting projects. Let's connect and create something amazing together!
                    </p>
                </div>

                {/* Contact Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {contactInfo.map((info, index) => (
                        <div
                            key={index}
                            className={`bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-700/50 cursor-pointer group`}
                            onClick={() => handleContactClick(info)}
                        >
                            <div className="text-center">
                                <div className={`w-16 h-16 ${info.bgColor} ${info.hoverColor} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg transition-all duration-300`}>
                                    <div className="text-white">{info.iconSvg}</div>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">{info.label}</h3>
                                <p className="text-gray-300 font-medium mb-2">{info.value}</p>
                                <p className="text-gray-400 text-sm">{info.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Social Links Section */}
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/50">
                    <div className="flex justify-center space-x-6">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group relative w-14 h-14 ${social.bgColor} ${social.hoverColor} rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                                title={social.name}
                            >
                                <div className="transition-transform duration-300 group-hover:scale-110">{social.iconSvg}</div>
                                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {social.name}
                                </div>
                            </a>
                        ))}
                    </div>

                    <div className="mt-6 text-center">
                        <p className="text-gray-400 text-sm">
                            Feel free to reach out through any platform you prefer
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
