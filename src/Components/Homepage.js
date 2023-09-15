import FetchMovies from "./FetchMovies";
import styled from "styled-components"; 
import HomeMain from "./HomeMain";
import Footer from "./Footer";



const HomePageStyle = styled.div`
text-decoration: none;
.row {
    padding: 20px;
    display: flex;
    justify-content: space-between;
}
`
// display: flex;
// justify-items: space-between;


const HomePage = () => {
    return ( 
        <HomePageStyle>
            <div>
                <HomeMain />
            </div>
            <div>
                <div className="row">
                    <h3>Featured</h3>
                    <span>See more....</span>
                </div>
            <FetchMovies />
            </div>
            <Footer />
        </HomePageStyle>
     );
}
 
export default HomePage;