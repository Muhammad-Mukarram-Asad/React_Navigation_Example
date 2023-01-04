import logo from "./logo.svg";
import "./App.css";

import  {useState } from "react";
import Sweetalertdemo from "./Sweetalertdemo";
// import Facebook_Post from "./FB";
// import profile_image from "./wallpaper 1.jpg";
// import post_image from "./web developer image 3.jpg";
// import Example from "./Example";
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";

function App() {
  // const [screen , setScreen] = useState('sweetalert');
  // const post_1 = {
  //   title: "A very beautiful picture of mountains",
  //   userName : "Asad Ullah",
  //   date : "11/25/2022",
  //   profile : post_image,
  //   image: profile_image
  // }

  // const post_2 = {
  //   title: "Awesome View of Swat, Pakistan",
  //   userName : "Mukarram Bhai",
  //   date : "1/11/2021",
  //   profile : post_image,
  //   image: profile_image
  // }
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
     
      <div className="navigated_item">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
      

      <Footer />

      
        
        {/* { screen === "sweetalert" && <Sweetalertdemo />} */}
        
        {/* { screen === "facebookpost" && <div className="multiple_component">
          <Facebook_Post {...post_1} />
          <Facebook_Post {...post_2} />
          </div>}
         
         {screen === "example"  && <Example />}
        <button className="home_btns" onClick={() => setScreen("sweetalert")}>
          HomeScreen
        </button>
        <button className="home_btns" onClick={() => setScreen("facebookpost")}>
          Facebook Post Screen
        </button>

        <button className="home_btns" onClick={()=> setScreen("example")}>Example</button> */}


        
      </BrowserRouter>
    </div>
  );
}

export default App;
