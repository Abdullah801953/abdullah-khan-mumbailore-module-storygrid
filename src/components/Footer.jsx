import React from 'react'
import { Link } from 'react-router-dom'
import Newsletter from './NewsLetter'

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-900 mt-12">
            <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* About */}
                <div>
                    <h3 className="font-semibold mb-2">About <a href="/" className="text-xl font-extrabold tracking-wide text-[#E91E63]">
                        Mumbai<span className="text-gray-800">Lore</span>
                    </a></h3>
                    <p>Your daily dose of city stories and culture. Discover hidden gems and local legends.</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-1">
                        <li><Link to="/" className="hover:text-[#E91E63]">Home</Link></li>
                        <li><Link to="/stories" className="hover:text-[#E91E63]">Stories</Link></li>
                        <li><Link to="/submit" className="hover:text-[#E91E63]">Submit</Link></li>
                        <li><Link to="/contact" className="hover:text-[#E91E63]">Contact</Link></li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="font-semibold mb-2">Resources</h3>
                    <ul className="space-y-1">
                        <li><a href="/faq" className="hover:text-[#E91E63]">FAQ</a></li>
                        <li><a href="/privacy" className="hover:text-[#E91E63]">Privacy</a></li>
                        <li><a href="/terms" className="hover:text-[#E91E63]">Terms</a></li>
                    </ul>
                </div>

                {/* Newsletter Placeholder */}
                <div>
                    <h3 className="font-semibold mb-2">Newsletter Signup</h3>
                    <Newsletter/>
                </div>
            </div>
        </footer>
    )
}

export default Footer