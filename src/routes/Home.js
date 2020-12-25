import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import Navigation from "../components/Navigation";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    // this.setState({movies:movies}) // state.movies: data.data.movices
    // movies를 저장하고, isLoading을 false로 바꿔줌
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader__text">Loading...</span>
          </div>
        ) : (
          <div class="movies">
            {isLoading
              ? "Loading..."
              : movies.map((movie) => {
                  return (
                    <Movie
                      key={movie.id}
                      id={movie.id}
                      year={movie.year}
                      title={movie.title}
                      summary={movie.summary}
                      poster={movie.medium_cover_image}
                      genres={movie.genres}
                    ></Movie>
                  );
                })}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
