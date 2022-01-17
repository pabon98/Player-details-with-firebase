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
import AuthProvider from './contexts/AuthProvider';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}>
          </Route>
          <Route path='/home' element={<Home/>}>
          </Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/details/:playerdetails' element={<PrivateRoute>
            <PlayerDetails/>
          </PrivateRoute>}></Route>
          <Route path='/home/details/:playerdetails' element={<PrivateRoute>
            <PlayerDetails/>
          </PrivateRoute>}></Route>
          <Route path='/allplayers/details/:playerdetails' element={<PlayerDetails/>}></Route>
          <Route path='/allplayers' element={<PrivateRoute>
            <AllPlayers/>
          </PrivateRoute>}>
          </Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
        <Footer/>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
