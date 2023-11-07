import logo from './logo.svg';
import './App.css';
import MyNavigation from "./components/MyNavigation";
import Posts from "./components/Posts";
import {Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import Logout from "./components/Logout";


function App() {
  return (
    <div className="App">
      <MyNavigation/>
        <Routes>
            <Route path={"/"} element={<Posts/>} />
            <Route path={"/login/"} element={<Login/>} />
            <Route path={"/logout/"} element={<Logout/>} />
        </Routes>
    </div>
  );
}

export default App;
