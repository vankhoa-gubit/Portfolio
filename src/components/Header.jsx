import { useState } from 'react'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md border-b border-gray-700/50 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                            <span className="text-white font-bold text-lg">K</span>
                        </div>
                        <span className="text-xl font-bold text-white">Van Khoa Portfolio</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        <a href="#home" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 font-medium">Home</a>
                        <a href="#about" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 font-medium">About</a>
                        <a href="#skills" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 font-medium">Skills</a>
                        <a href="#projects" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 font-medium">Projects</a>
                        <a href="#contact" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 font-medium">Contact</a>
                    </div>

                    {/* CTA Button and Mobile Menu */}
                    <div className="flex items-center gap-4">
                        <a
                            href="#contact"
                            className="hidden sm:block bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-2 rounded-lg hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 font-medium shadow-lg"
                        >
                            Contact
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-gray-300 hover:text-white transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-gray-700/50">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/50 backdrop-blur-sm">
                            <a href="#home" className="block px-3 py-2 text-gray-300 hover:text-emerald-400 hover:bg-gray-700/50 rounded-lg transition-all">Home</a>
                            <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-emerald-400 hover:bg-gray-700/50 rounded-lg transition-all">About</a>
                            <a href="#skills" className="block px-3 py-2 text-gray-300 hover:text-emerald-400 hover:bg-gray-700/50 rounded-lg transition-all">Skills</a>
                            <a href="#projects" className="block px-3 py-2 text-gray-300 hover:text-emerald-400 hover:bg-gray-700/50 rounded-lg transition-all">Projects</a>
                            <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-emerald-400 hover:bg-gray-700/50 rounded-lg transition-all">Contact</a>
                            <a href="#contact" className="block mx-3 my-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-lg text-center font-medium">
                                Contact
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Header
