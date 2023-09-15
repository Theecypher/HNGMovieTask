import { styled } from "styled-components";
import tomato from '../images/tomato.svg'
import  imdb from '../images/imdb.svg'
import play from '../images/Play.svg'
import useFetchMovie from "./useFetchMovie";

const TextSection = styled.section`
color: #fff;
width: 60%;
position: absolute;
top: 50%;
transform: translateY(-50%);
.text {
    width: 35%; 
}
.home__logos {
    margin-top: 10px; 
    display: flex;
    margin-bottom: 8px; 
    gap: 15px;
}
h1 {
    font-size: 3.5rem;
}
.row {
    display: flex;
}
.overview {
    font-size: 1.5rem;
    margin-top: 5px;
    margin-bottom: 5px;
}
`


const HomeText = () => {
    const { movies } = useFetchMovie('https://api.themoviedb.org/3/movie/popular?api_key=25d4d81ea227fa63fc9ceffaf3dc362c');
    console.log(movies);

    return ( 
        <TextSection className="hometext">
            {/* <h1>{ movies }</h1> */}
            <h1>The nun</h1>
            <div className="home__logos">
                <div className="row">
                    <img src={imdb} alt="" />
                    <p>880/100</p>
                </div>
                <div className="row">
                    <img src={tomato} alt="" />
                    <p>97%</p>
                </div>
            </div>
            {/* <p className="overview">{ randomMovie.overview }</p> */}
            <p className="overview">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, cum!</p>
            <button className="btn">
                <img src={play} alt="" />
                WATCH TRAILER
            </button>
        </TextSection>
     );
}
 
export default HomeText;