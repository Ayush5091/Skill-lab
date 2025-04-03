
import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '@/components/Carousel';
import MovieCard from '@/components/MovieCard';
import { Button } from '@/components/ui/button';
import { featuredMovies, eventsFeatured, movies } from '@/data/moviesData';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  // Get recommended movies (top rated)
  const recommendedMovies = [...movies]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  // Get upcoming movies (not released)
  const upcomingMovies = movies.filter(movie => !movie.isReleased);

  return (
    <div className="min-h-screen bg-white dark:bg-background">
      {/* Hero Carousel */}
      <section className="w-full h-[450px] md:h-[500px]">
        <Carousel items={featuredMovies} className="h-full" />
      </section>

      {/* Recommended Movies */}
      <section className="container mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Recommended Movies</h2>
          <Link to="/movies" className="flex items-center text-primary hover:underline">
            See All <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {recommendedMovies.map(movie => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster={movie.poster}
              rating={movie.rating}
              genre={movie.genre}
              releaseDate={movie.releaseDate}
              price={movie.price}
              isReleased={movie.isReleased}
            />
          ))}
        </div>
      </section>

      {/* Events Section */}
      <section className="bg-gray-100 dark:bg-secondary py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Events & Experiences</h2>
          <div className="w-full h-[300px] md:h-[350px]">
            <Carousel items={eventsFeatured} className="h-full" />
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      {upcomingMovies.length > 0 && (
        <section className="container mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Coming Soon</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {upcomingMovies.map(movie => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster={movie.poster}
                rating={movie.rating}
                genre={movie.genre}
                releaseDate={movie.releaseDate}
                price={movie.price}
                isReleased={movie.isReleased}
              />
            ))}
          </div>
        </section>
      )}

      {/* Premiere Section */}
      <section className="bg-gradient-to-r from-primary/20 to-gray-100 dark:from-primary/20 dark:to-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Stream New Release Movies</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Watch the latest blockbusters from the comfort of your home
          </p>
          <Button className="btn-primary" size="lg">
            Explore Premieres
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
