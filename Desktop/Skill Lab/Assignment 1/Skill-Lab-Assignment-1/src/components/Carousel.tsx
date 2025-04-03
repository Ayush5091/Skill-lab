
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CarouselItem {
  id: number;
  image: string;
  title: string;
  subtitle?: string;
}

interface CarouselProps {
  items: CarouselItem[];
  autoSlideInterval?: number;
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({ 
  items, 
  autoSlideInterval = 5000,
  className
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  }, [items.length, isTransitioning]);

  const prevSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  useEffect(() => {
    if (autoSlideInterval > 0) {
      const intervalId = setInterval(nextSlide, autoSlideInterval);
      return () => clearInterval(intervalId);
    }
  }, [nextSlide, autoSlideInterval]);

  return (
    <div className={cn("relative overflow-hidden rounded-lg", className)}>
      {/* Main Carousel */}
      <div className="relative h-full">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`absolute w-full h-full transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-white text-xl md:text-2xl font-bold">{item.title}</h3>
              {item.subtitle && (
                <p className="text-gray-300 mt-2">{item.subtitle}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
