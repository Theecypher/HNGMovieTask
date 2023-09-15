import { useEffect, useState } from "react"

// const { movie_id } =

const useFetchMovie = (url) => {
    const [movies, setMovies] = useState([]);
    // const [isPending, seetIsPending] = useState(false);
    // const [error, setError] = useState(null);

    const fetchUrl = async () => {
        const data = await fetch(url);
        const movies = await data.json();
        setMovies(movies.results);
    }


    useEffect(() => {
        fetchUrl()
    }, [])

    return {movies}
}

export default useFetchMovie;