
export interface Movie {
  id: number;
  title: string;
  genre: string;
  releaseDate: string;
  rating: number;
  price: number;
  poster: string;
  duration: string;
  isReleased: boolean;
}

export const featuredMovies = [
  {
    id: 1,
    image: "https://wallpapers.com/images/hd/avengers-endgame-fantasy-m8fbpfs2m580r7l3.jpg",
    title: "Avengers: Endgame",
    subtitle: "The epic conclusion to the Infinity Saga"
  },
  {
    id: 2,
    image: "https://www.wallpaperflare.com/static/735/898/350/batman-dark-knight-poster-wallpaper.jpg",
    title: "The Dark Knight",
    subtitle: "The legend ends, the dark knight rises"
  },
  {
    id: 3,
    image: "https://images7.alphacoders.com/586/thumb-1920-586904.jpg",
    title: "Inception",
    subtitle: "Your mind is the scene of the crime"
  },
  {
    id: 4,
    image: "https://rukminim3.flixcart.com/image/850/1000/juk4gi80/poster/s/g/3/large-newposter8503-movie-interstellar-hd-wallpaper-background-original-imaf5ttsfnfgt2zh.jpeg?q=90&crop=false",
    title: "Interstellar",
    subtitle: "The end of Earth will not be the end of us"
  }
];

export const eventsFeatured = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1474&auto=format&fit=crop",
    title: "Music Festival 2023",
    subtitle: "The biggest concert of the year"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1470&auto=format&fit=crop",
    title: "Stand-up Comedy Night",
    subtitle: "Laugh your heart out"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1470&auto=format&fit=crop",
    title: "Theater Festival",
    subtitle: "Experience world-class performances"
  }
];

export const movies: Movie[] = [
  {
    id: 1,
    title: "Avengers: Endgame",
    genre: "Action, Adventure, Fantasy",
    releaseDate: "26 Apr 2023",
    rating: 8.4,
    price: 350,
    poster: "https://m.media-amazon.com/images/I/91syHT466TL.jpg",
    duration: "3h 1m",
    isReleased: true
  },
  {
    id: 2,
    title: "The Dark Knight",
    genre: "Action, Crime, Drama",
    releaseDate: "18 July 2008",
    rating: 9.0,
    price: 300,
    poster: "https://m.media-amazon.com/images/I/91syHT466TL.jpg",
    duration: "2h 32m",
    isReleased: true
  },
  {
    id: 3,
    title: "Inception",
    genre: "Action, Adventure, Sci-Fi",
    releaseDate: "16 July 2010",
    rating: 8.8,
    price: 320,
    poster: "https://m.media-amazon.com/images/I/71thFiIUSpL._AC_UF894,1000_QL80_.jpg",
    duration: "2h 28m",
    isReleased: true
  },
  {
    id: 4,
    title: "Interstellar",
    genre: "Adventure, Drama, Sci-Fi",
    releaseDate: "07 Nov 2014",
    rating: 8.6,
    price: 330,
    poster: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    duration: "2h 49m",
    isReleased: true
  },
  {
    id: 5,
    title: "Parasite",
    genre: "Comedy, Drama, Thriller",
    releaseDate: "08 Nov 2019",
    rating: 8.5,
    price: 280,
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFFNdMSabGZt8imnxpt-FzaiIL3r-MIbg6LA&s",
    duration: "2h 12m",
    isReleased: true
  },
  {
    id: 6,
    title: "The Batman",
    genre: "Action, Crime, Drama",
    releaseDate: "04 Mar 2022",
    rating: 7.8,
    price: 350,
    poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?q=80&w=1470&auto=format&fit=crop",
    duration: "2h 56m",
    isReleased: true
  },
  {
    id: 7,
    title: "Oppenheimer",
    genre: "Biography, Drama, History",
    releaseDate: "21 July 2023",
    rating: 8.5,
    price: 400,
    poster: "https://m.media-amazon.com/images/M/MV5BN2JkMDc5MGQtZjg3YS00NmFiLWIyZmQtZTJmNTM5MjVmYTQ4XkEyXkFqcGc@._V1_.jpg",
    duration: "3h 0m",
    isReleased: true
  },
  {
    id: 8,
    title: "Avatar: The Way of Water",
    genre: "Action, Adventure, Fantasy",
    releaseDate: "16 Dec 2022",
    rating: 7.6,
    price: 450,
    poster: "https://images-cdn.ubuy.co.in/6481878865e15815f21bcbda-avatar-the-way-of-water-movie-teaser.jpg",
    duration: "3h 12m",
    isReleased: true
  },
  {
    id: 9,
    title: "Spider-Man: Across the Spider-Verse",
    genre: "Animation, Action, Adventure",
    releaseDate: "02 Jun 2023",
    rating: 8.7,
    price: 320,
    poster: "https://m.media-amazon.com/images/I/8105Oc1+FPL.jpg",
    duration: "2h 20m",
    isReleased: true
  },
  {
    id: 10,
    title: "Dune: Part Two",
    genre: "Action, Adventure, Drama",
    releaseDate: "01 Mar 2024",
    rating: 8.8,
    price: 380,
    poster: "https://m.media-amazon.com/images/I/71cS3aGfH0L.jpg",
    duration: "2h 46m",
    isReleased: true
  },
  {
    id: 11,
    title: "Deadpool & Wolverine",
    genre: "Action, Adventure, Comedy",
    releaseDate: "26 July 2024",
    rating: 9.2,
    price: 400,
    poster: "https://cdn.marvel.com/content/1x/dp3_1sht_digital_srgb_ka_swords_v5_resized.jpg",
    duration: "2h 7m",
    isReleased: false
  },
  {
    id: 12,
    title: "Joker: Folie à Deux",
    genre: "Crime, Drama, Musical",
    releaseDate: "04 Oct 2024",
    rating: 8.5,
    price: 380,
    poster: "https://pbs.twimg.com/media/GWzhFZ2WEAAynuA.jpg:large",
    duration: "TBA",
    isReleased: false
  }
];
