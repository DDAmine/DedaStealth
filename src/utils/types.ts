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
