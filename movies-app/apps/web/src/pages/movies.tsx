import { Component } from "react";
import { Loader } from "~/components";
import { http } from "~/services";
import type { Genre, Movie } from "~/types";

interface MoviesState {
  movies: Movie[];
  genres: Genre[];
  isLoading: boolean;
  page: number; // started from 0
  pageSize: number;
  search: string;
  genreId: string;
}

export class Movies extends Component<{}, MoviesState> {
  state: MoviesState = {
    movies: [],
    genres: [],
    isLoading: true,
    page: 0,
    pageSize: 3,
    search: "",
    genreId: ""
  };

  async componentDidMount() {
    const { data: movies } = await http.get<Movie[]>("/movies");
    const { data: genres } = await http.get<Genre[]>("/genres");
    this.setState({ movies, genres, isLoading: false });
  }

  render() {
    if (this.state.isLoading) return <Loader full />;

    return (
      <div>
        <pre>Movies: {JSON.stringify(this.state.movies, null, 2)}</pre>
        <pre>Genres: {JSON.stringify(this.state.genres, null, 2)}</pre>
      </div>
    );
  }
}
