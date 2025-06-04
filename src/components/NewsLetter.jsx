import React from 'react';

const Newsletter = () => {
    
    return (
        <div>
            <h3 className="font-semibold mb-2">Newsletter</h3>
            <p className="text-sm mb-4">Stay updated with local stories and culture.</p>
            <form className="flex flex-col sm:flex-row md:flex-col lg:flex-col xl:flex-row gap-2">
                <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    name='email'
                    className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E91E63]"
                />
                <button
                    type="submit"
                    className="bg-[#E91E63] text-white px-4 py-2 rounded-md hover:bg-pink-600 transition"
                >
                    Subscribe
                </button>
            </form>
        </div>
    );
};

export default Newsletter;