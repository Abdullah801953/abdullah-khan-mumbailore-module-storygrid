import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
             <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5">
                {/* Logo */}
                <Link to="/" className="text-2xl font-extrabold tracking-wide text-[#E91E63]">
                    Mumbai<span className="text-gray-800">Lore</span>
                </Link>
                {/* nav link */}
                <nav className="flex space-x-6">
                    <Link to="/" className="text-gray-700 hover:text-[#E91E63]">Home</Link>
                    <Link to="/stories" className="text-gray-700 hover:text-[#E91E63]">Stories</Link>
                    <Link to="/submit" className="text-gray-700 hover:text-[#E91E63]">Submit</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header
