import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MovieDetail from "../components/movieDetail.component";
import Footer from "../components/movieFooter.component";
import MoviesComponent from "../components/movies.component";


function HomePage(){
    return(
    <div>  
        <Router>
            <Routes>
                <Route path="/sem-spoiler" element={<MoviesComponent category="popular"/>}/>
                <Route path="movie/:id" element={<MovieDetail />}/>
            </Routes>
        </Router>
        <Footer/>
        
    </div>);
}

export default HomePage;