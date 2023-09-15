import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/Homepage";
import Movie from "./Components/Movie";
import MovieDetails from "./Components/MovieDetails";
// import Sidebar from "./Components/sidebar";


const App = () => {
  return ( 
    <div>

        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route 
           element={<MovieDetails />}
           path="/Movies/:id"
          //  loader: ({ params })
           />
        </Routes>
    </div>
   );
}
 
export default App;