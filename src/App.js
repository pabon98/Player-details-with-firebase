import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import AllPlayers from './Components/AllPlayers/AllPlayers';
import NotFound from './Components/NotFound/NotFound';
import Navbar from './Components/Navbar/Navbar';
import PlayerDetails from './Components/PlayerDetails/PlayerDetails';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}>
          </Route>
          <Route path='/details/:playerdetails' element={<PlayerDetails/>}></Route>
          <Route path='/allplayers' element={<AllPlayers/>}>
          </Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
