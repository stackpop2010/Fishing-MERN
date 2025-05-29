import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CatchFish from './pages/CatchFishPage';
import EditFish from './pages/EditFishPage';
import Navigation from './components/Navigation';
import { GiBoatFishing, GiLuckyFisherman  } from "react-icons/gi";

function App() {

  return (
    
    <div className="app">
      <header>
        <h1>Animal Crossing: New Horizons Fishing Log<GiBoatFishing/> </h1>
        <img src="fishing_header.png"></img>
        <p>Full Stack MERN App Demonstration</p>
      </header>
               
        <Router>
          <Navigation/>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/catch-fish" element={ <CatchFish/>}></Route>
            <Route path="/edit-fish/:id" element={ <EditFish/>}></Route>
          </Routes>
        </Router>
        
        <footer><p>© 2025 Trish Stackpole <GiLuckyFisherman /></p>
        <p>Note: This project incorporates references to trademarked or copywriten material for educational purposes, including 
          names and images from the Animal Crossing franchise. This use is considered fair use under 
          copyright law because it is for non-profit educational purposes, uses only a small portion of the original work, 
          and does not negatively impact the potential market for the copyrighted or trademarked material.</p>
         <p>Additional Credits: Many of the images and data were retrieved from <a href="https://nookipedia.com/wiki/">
         The Animal Crossing wiki at Nookipedia</a></p> 
         <p>Animal crossing themed color palets were retreived from <a href="https://www.color-hex.com/color-palette/95498">color-hex.com</a></p>
        </footer>
    </div>
  );
}

export default App;