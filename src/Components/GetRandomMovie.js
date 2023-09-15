import { useEffect, useState } from "react";
import useFetchMovie from "./useFetchMovie";

const GetRandomMovie = () => {
    const [movieRandom, setMovieRandom] = useState([]);

    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=25d4d81ea227fa63fc9ceffaf3dc362c';

    const random = Math.floor(Math.random() * 20);

    const fetchUrl = async () => {
        const data = await fetch(url);
        const movies = await data.json();
        setMovieRandom(movies.results[random]);
    }


    useEffect(() => {
        fetchUrl()
    }, [])

    return { movieRandom }
}
 
export default GetRandomMovie;