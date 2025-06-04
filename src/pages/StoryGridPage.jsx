import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StoryCard from '../components/StoryCard';

const StoryGridPage = () => {
  const { id } = useParams();
  const [stories, setStories] = useState([]);
  const [story, setStory] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const res = await fetch('/data/stories.json'); 
        if (!res.ok) throw new Error("Fetch failed");
        const data = await res.json();
        setStories(data);

        
        if (id) {
          const found = data.find((s) => s.id === Number(id));
          if (found) {
            setStory(found);
            setError(false);
          } else {
            setError(true);
          }
        }
      } catch (err) {
        console.error("Failed to load JSON", err);
        setError(true);
      }
    };

    fetchStories();
  }, [id]);

  if (error) {
    return (
      <div className="bg-red-500 text-white p-3 mb-4 rounded">
        ⚠️ Unable to load stories.
      </div>
    );
  }

  if (id && !story) {
    return <div>Loading story...</div>;
  }

  if (id && story) {
    return (
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{story.title}</h1>
        <img
          src={story.imageUrl}
          alt={story.title}
          className="mb-4 w-full h-[200px] object-cover rounded"
        />
        <p>{story.snippet}</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {stories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </div>
  );
};

export default StoryGridPage;
