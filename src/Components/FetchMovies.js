import styled from "styled-components";
import Movie from "./Movie";
import useFetchMovie from "./useFetchMovie";
import '../styles/movies.css'

const FetchMovies = () => {
    const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=25d4d81ea227fa63fc9ceffaf3dc362c';

    const { movies } = useFetchMovie(url);

    const movie_s = movies.slice(10);

    return ( 
        <div className="fetchmovies"
        >
            {movie_s && movie_s.map((movie) => {

               return <Movie key={movie.id} movie={movie} />
            })}
        </div>
     );
}
 
export default FetchMovies;