import styled from "styled-components";
import Movie from "./Movie";
import useFetchMovie from "./useFetchMovie";
import '../styles/movies.css'

const FetchMovies = () => {
    const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=25d4d81ea227fa63fc9ceffaf3dc362c';

    const { movies } = useFetchMovie(url);

    return ( 
        <div className="fetchmovies"
         style={{
            padding: "20px 20px 20px 10px",
            display: "grid",
            justifyContent: "center",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridGap: "15px",
        }} 
        >
            {movies && movies.map((movie) => {

               return <Movie key={movie.id} movie={movie} />
            })}
        </div>
     );
}
 
export default FetchMovies;