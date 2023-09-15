import HomeNavbar from "./HomeNavbar";
import HomeText from "./HomeText";
import useFetchMovie from "./useFetchMovie";

const HomeMain = () => {
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=25d4d81ea227fa63fc9ceffaf3dc362c';

    const { movies } = useFetchMovie(url);
    const random = Math.floor(Math.random() * movies.length);
    const randomMovie = movies[random];

    return ( 
        <div 
        style={{
            borderColor: "red",
            color: "black",
            backgroundImage: `
            linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
            url(https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "90vh"
        }} >
            <HomeNavbar />
            <HomeText />
        </div>
     );
}
 
export default HomeMain;