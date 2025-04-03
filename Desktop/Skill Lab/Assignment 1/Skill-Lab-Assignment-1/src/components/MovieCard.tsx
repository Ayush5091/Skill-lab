
import React from 'react';
import { Star, Heart, ThumbsUp } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MovieCardProps {
  id: number;
  title: string;
  poster: string;
  rating: number;
  genre: string;
  releaseDate: string;
  duration?: string;
  price?: number;
  isReleased: boolean;
  votes?: number;
  likes?: number;
}

const MovieCard = ({ 
  id, 
  title, 
  poster, 
  rating, 
  genre, 
  votes = Math.floor(Math.random() * 50) + 1 + 'K',
  likes = Math.floor(Math.random() * 50) + 'K', 
  isReleased 
}: MovieCardProps) => {
  // Rating color based on score
  const getRatingColor = () => {
    if (rating >= 8) return "green";
    if (rating >= 6) return "orange";
    return "red";
  };

  // Format genres
  const formattedGenre = genre.split('/').join('/');

  return (
    <div className="movie-card">
      <div className="relative overflow-hidden rounded-t-lg">
        <img 
          src={poster} 
          alt={title} 
          className="w-full h-[280px] object-cover transition-transform duration-300 hover:scale-105"
        />
        {isReleased && (
          <div className="absolute bottom-0 left-0 right-0 p-2 flex justify-between items-center">
            <div className={`movie-rating ${getRatingColor()} bg-black/70 px-2 py-1 rounded flex items-center`}>
              {getRatingColor() === 'green' ? (
                <ThumbsUp className="w-4 h-4 mr-1" />
              ) : (
                <Star className="w-4 h-4 mr-1" fill="currentColor" />
              )}
              {rating}/10
            </div>
            <div className="text-white text-sm bg-black/70 px-2 py-1 rounded">
              {getRatingColor() === 'green' ? votes : likes + ' Likes'}
            </div>
          </div>
        )}
        {!isReleased && (
          <div className="absolute top-2 right-2 bg-primary/90 text-white px-2 py-1 rounded text-xs font-medium">
            COMING SOON
          </div>
        )}
      </div>
      <div className="p-3">
        <h3 className="font-medium text-gray-800 dark:text-white line-clamp-1">{title}</h3>
        <p className="movie-genre">{formattedGenre}</p>
      </div>
    </div>
  );
};

export default MovieCard;
