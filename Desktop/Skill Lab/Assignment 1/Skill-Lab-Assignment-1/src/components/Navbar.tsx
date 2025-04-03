import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleSearch = () => {
    setSearchActive(!searchActive);
  };

  return (
    <>
      {/* Top Navbar */}
      <nav className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black text-gray-800 dark:text-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="text-xl font-bold">
                <span className="text-inherit">book</span>
                <span className="text-primary">my</span>
                <span className="text-inherit">show</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            {!isMobile ? (
              <>
                <div className="relative flex-grow max-w-lg mx-12">
                  <Input
                    type="text"
                    placeholder="Search for movies, events, plays, sports and activities"
                    className="pl-10 bg-gray-100 dark:bg-secondary border-none rounded-md"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <span className="text-sm">Mangaluru</span>
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </div>
                  <ThemeToggle />
                  <Button variant="destructive" className="bg-primary hover:bg-primary/90 text-white">
                    Sign in
                  </Button>
                  <Menu className="h-6 w-6 cursor-pointer" />
                </div>
              </>
            ) : (
              <>
                {/* Mobile Navigation */}
                <div className="flex md:hidden items-center space-x-3">
                  <ThemeToggle />
                  {searchActive ? (
                    <div className="relative w-full px-2">
                      <Input
                        type="text"
                        placeholder="Search..."
                        className="bg-gray-100 dark:bg-secondary border-none text-black dark:text-white w-full"
                        autoFocus
                      />
                      <X
                        className="absolute right-4 top-2.5 h-4 w-4 text-gray-400"
                        onClick={toggleSearch}
                      />
                    </div>
                  ) : (
                    <div className="flex items-center space-x-4">
                      <button onClick={toggleSearch}>
                        <Search className="h-5 w-5" />
                      </button>
                      <button onClick={toggleMobileMenu}>
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Secondary Navbar */}
      <nav className="bg-white dark:bg-black text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-12 overflow-x-auto hide-scrollbar">
            <Link to="/movies" className="nav-link whitespace-nowrap">Movies</Link>
            <Link to="/" className="nav-link whitespace-nowrap">Stream</Link>
            <Link to="/" className="nav-link whitespace-nowrap">Events</Link>
            <Link to="/" className="nav-link whitespace-nowrap">Plays</Link>
            <Link to="/" className="nav-link whitespace-nowrap">Activities</Link>
            
            {/* Secondary menu items on right */}
            <div className="ml-auto flex space-x-2">
              <Link to="/" className="nav-link whitespace-nowrap">ListYourShow</Link>
              <Link to="/" className="nav-link whitespace-nowrap">Corporates</Link>
              <Link to="/" className="nav-link whitespace-nowrap">Offers</Link>
              <Link to="/" className="nav-link whitespace-nowrap">Gift Cards</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobile && mobileMenuOpen && (
        <div className="md:hidden pb-4 px-2 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
          <div className="flex flex-col space-y-2 pt-2 pb-3">
            <Link to="/movies" className="nav-link block py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-secondary">Movies</Link>
            <Link to="/" className="nav-link block py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-secondary">Stream</Link>
            <Link to="/" className="nav-link block py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-secondary">Events</Link>
            <Link to="/" className="nav-link block py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-secondary">Plays</Link>
            <Link to="/" className="nav-link block py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-secondary">Activities</Link>
            <Link to="/" className="nav-link block py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-secondary">Offers</Link>
            <Link to="/" className="nav-link block py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-secondary">Gift Cards</Link>
            <Button variant="ghost" className="flex items-center justify-start py-2">
              <User className="h-5 w-5 mr-2" /> Sign In
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
