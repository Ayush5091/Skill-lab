
import React, { useState } from 'react';
import { movies } from '@/data/moviesData';
import MovieCard from '@/components/MovieCard';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [filterType, setFilterType] = useState('all');

  // Filter movies based on search term and type
  const filteredMovies = movies.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movie.genre.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = filterType === 'all' ? true :
      filterType === 'released' ? movie.isReleased :
      !movie.isReleased;
    
    return matchesSearch && matchesType;
  });

  // Sort movies based on selected option
  const sortedMovies = [...filteredMovies].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.title.localeCompare(b.title);
      case 'release':
        return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
      default:
        return 0;
    }
  });

  return (
    <div className="container mx-auto px-4 py-8 bg-white dark:bg-background">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Movies</h1>
      
      {/* Toggle between Now Showing and Coming Soon */}
      <div className="mb-6">
        <ToggleGroup type="single" value={filterType} onValueChange={(val) => val && setFilterType(val)}>
          <ToggleGroupItem value="all" className="px-6">All Movies</ToggleGroupItem>
          <ToggleGroupItem value="released" className="px-6">Now Showing</ToggleGroupItem>
          <ToggleGroupItem value="upcoming" className="px-6">Coming Soon</ToggleGroupItem>
        </ToggleGroup>
      </div>
      
      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Input
            type="text"
            placeholder="Search for movies or genres..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-gray-100 dark:bg-secondary"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        <div className="w-full md:w-48">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="bg-gray-100 dark:bg-secondary border-none">
              <div className="flex items-center">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Sort by" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">Rating (High to Low)</SelectItem>
              <SelectItem value="price-low">Price (Low to High)</SelectItem>
              <SelectItem value="price-high">Price (High to Low)</SelectItem>
              <SelectItem value="name">Name (A-Z)</SelectItem>
              <SelectItem value="release">Release Date (Newest)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      {/* Movie Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {sortedMovies.map(movie => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster={movie.poster}
            rating={movie.rating}
            genre={movie.genre}
            releaseDate={movie.releaseDate}
            duration={movie.duration}
            price={movie.price}
            isReleased={movie.isReleased}
          />
        ))}
      </div>
      
      {sortedMovies.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500 dark:text-gray-400">No movies found matching "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
};

export default Movies;
