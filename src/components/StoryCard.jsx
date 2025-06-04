import React from 'react'
import { Link } from 'react-router-dom';

const StoryCard = ({story}) => {
    return (
        <div className="relative group overflow-hidden rounded-lg shadow-md bg-white">
            <img
                src={story.imageUrl}
                alt={story.title}
                className="w-full h-[300px] object-cover"
            />
            <div className="p-4">
                <h2 className="text-[24px] font-bold" style={{fontFamily:"Playfair Display"}}>{story.title}</h2>
                <p className="text-[16px] text-gray-700 mt-2 font-[Lora]">{story.snippet}</p>
            </div>

            <div className="absolute inset-0 bg-[#E91E63] bg-opacity-90 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                <Link
                    to={`/stories/${story.id}`}
                    className="text-sm font-[Lora] underline"
                >
                    Read More
                </Link>
            </div>
        </div>
    )
}

export default StoryCard
