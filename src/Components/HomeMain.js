import HomeNavbar from "./HomeNavbar";

import useFetchMovie from "./useFetchMovie";
import tomato from '../images/tomato.svg'
import  imdb from '../images/imdb.svg'
import styled from "styled-components";
import { AiFillPlayCircle } from "react-icons/ai";

const TextSection = styled.section`
.text {
    width: 35%; 
}
.home__logos { 
    display: flex;
    margin-bottom: 8px; 
    gap: 15px;
}
h1 {
    color: #fff;
    font-size: 3rem;
}
.row {
    display: flex;
}
.overview {
    color: #fff;
    font-size: 1.2rem;
    width: 50%;
}
.homeText {
    margin: 3rem 10px;
}
`

const HomeMain = () => {
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=25d4d81ea227fa63fc9ceffaf3dc362c';

    const { movies } = useFetchMovie(url);
    const random = Math.floor(Math.random() * movies.length);
    const randomMovie = movies[random];

    console.log(randomMovie);

    return ( 
        <TextSection
        style={{
            borderColor: "red",
            color: "black",
            backgroundImage: `
            linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
            url(https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "90vh",
            objectFit: "cover"
        }} >
            <HomeNavbar />
            <div className="homeText">
                <h1>{randomMovie?.title}</h1>
                <div className="home__logos">
                    <div className="row">
                        <img src={imdb} alt="imbd" />
                        <p>880/100</p>
                    </div>
                    <div className="row">
                        <img src={tomato} alt="rating" />
                        <p>97%</p>
                    </div>
                </div>
                    <p className="overview">{ randomMovie?.overview }</p>
                    <button className="btn">
                        <AiFillPlayCircle />
                        Watch Trailer
                    </button>
            </div>
        </TextSection>
     );
}


export default HomeMain;