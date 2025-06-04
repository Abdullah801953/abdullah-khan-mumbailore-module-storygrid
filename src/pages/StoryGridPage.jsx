import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import storiesData from '../data/stories.json';
import StoryCard from '../components/StoryCard';

const StoryGridPage = () => {
  const { id } = useParams();  
  const [story, setStory] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (id) {
    
      const found = storiesData.find(s => s.id === Number(id));
      if (found) {
        setStory(found);
        setError(false);
      } else {
        setError(true);
      }
    }
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
        <img src={story.imageUrl} alt={story.title} className="mb-4 w-full h-[200px] object-cover rounded" />
        <p>{story.snippet}</p>
      </div>
    );
  }

 
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {storiesData.map(story => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </div>
  );
};

export default StoryGridPage;
