import { useParams } from "react-router-dom";
import Sidebar from "./sidebar";
import useFetchMovie from "./useFetchMovie";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { RxDividerVertical } from 'react-icons/rx'
import { AiOutlineBars } from "react-icons/ai";
import { FiSmartphone } from 'react-icons/fi'
import styled from "styled-components";
import '../styles/movieDetailStyles.css'


const MovieDetailSection = styled.section`

.rating {
  display: flex;
}
h3 {
  fontSize: 3rem;
}
.movie__name {
  display: flex;
  gap: 10px;
  fontWeight: 500;
}
`

const MovieDetails = () => {
    const [data, setData] = useState([]);
    const [loader, setLoaders] = useState(false);
    const {id} = useParams();


    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNWQ0ZDgxZWEyMjdmYTYzZmM5Y2VmZmFmM2RjMzYyYyIsInN1YiI6IjY0ZmU2MDYyMmRmZmQ4MDEwMDEzZmE3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qjjJO8LWYVo4gGFeiLSDaisR161vlpuVy7HzlPioDTk'
        }
      };

      useEffect(() => {      
          fetch(`https://api.themoviedb.org/3/movie/${id}language=en-US`, options)
          .then(response => response.json())
          .then(response => {
            setData(response);
            console.log(response);
          })
          .catch(err => console.error(err));
    })

    
    return ( 
        <div>
            <Sidebar />
            <MovieDetailSection style={{position: "absolute",
            left: "20%"
        }}>
                <img className="img" src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
                width={800}
                 alt="" />
                <div  className="movieDetailCard" style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "750px"
                }}>
                  <div className="movie__name">
                  <h3 className="movie__title" data-testid="movie-title">{ data.title } . </h3>
                  <p className="movie__year" data-testid="movie-release-date"> { data.release_date } . </p>
                  <p className="movie__duration" data-testid="movie-runtime"></p>
                  <div className="genre"></div>
                  </div>
                  <div className="rating">
                    <FaStar style={{
                      color: 'yellow'
                    }} />
                    <p>{data.vote_average}</p>
                    <RxDividerVertical />
                    <p>{data.runtime}k</p>
                  </div>
                </div>
                <div data-testid="movie-overview" className="movie__overview">
                  <div>
                    <p style={{
                      fontSize: "1rem",
                      width: "70%",
                    }}>{data.overview}</p>
                    <p style={{
                      marginTop: "18px",
                      color: "red",
                      fontWeight: "600"
                    }}>Director: Mma Obiora</p>
                  </div>
                  <div className="img__section">
                    <button className="btn btn1">
                      <FiSmartphone />
                      See Showtimes
                    </button>
                    <div className="card__poster">
                      <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                       height={170}
                       width={200}
                       alt="" />
                    </div>
                    <button className="btn btn1">
                      <AiOutlineBars />
                      More watch options
                    </button>
                  </div>
                </div>
            </MovieDetailSection>
        </div>
     );
}
 
export default MovieDetails;

