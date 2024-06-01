// This a generic response on app for pagination
export interface PaginatedApplication<T> {
  // Total data length
  totalResults: number;
  // Array of data returned (items have generic type T)
  Search: T[];
}

export interface Movies {
  Poster: string;
  Title: string;
  type: string;
  year: string;
  imdbID: string;
}

interface Rating {
  Source: string;
  Value: string;
}

export interface MovieDetail {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}
