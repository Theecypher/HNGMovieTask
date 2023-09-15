import { Link } from 'react-router-dom';
import imdbImg from '../images/imdb.svg';
import rot from '../images/tomato.svg'
import { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import styled from 'styled-components';

const MovieCard = styled.div`
color: black;
backgroundColor: red;

.title {
    font-weight: bolder;
    color: black;
}

.favorite {
    color: red;
}
.imdb-card {
    display: flex;
    gap: 10px;
    marginTop: -2rem;
}
.row {
    display: flex;
}
`

const Movie = ({ movie}) => {
    const [toggleFavorite, setToggleFavorite] = useState(false);

    return ( 
        <MovieCard id='movies' className='movies'>
                <span onClick={() => setToggleFavorite((prev) => !prev)}>
                    {toggleFavorite ? (
                        <AiFillHeart className='favorite' style={{display: "block",
                        width: "30px",
                        height: "20px"
                    }} />
                    ) : (
                        <AiOutlineHeart className='favorite' style={{display: "block",
                        width: "30px",
                        height: "20px"
                    }} />
                    )}
                </span>
        <Link to={`/Movies/${movie.id}`}>
            <div className="movie-card">
                <img data-testid="movie-poster" 
                 src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} 
                 height={300}
                 width={200}
                  alt={movie.title} 
                  />
            </div>
            {/* <p className="genre">{ movie.genre_ids }</p> */}
            <div data-testid="movie-card">
              <h2 className='title' data-testid="movie-title">{ movie.title }</h2>
              <p className="release"  data-testid="movie-release-date">
                {movie.release_date}
               </p>
            </div>
            <div className="imdb-card">
                <span className="row">
                    <img src={imdbImg} alt="" />
                    <p>{movie.vote_average}</p>
                </span>
                <span className="row">
                    <img src={rot} alt="" />
                    <p>97%</p>
                </span>
            </div>
        </Link>
        </MovieCard>
     );
}
 
export default Movie;