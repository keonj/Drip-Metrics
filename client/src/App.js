import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./components/navbar";
import Moisture from "./components/moisture";
import SensorImages from "./components/sensor-images";
import Map from "./components/map";
import Home from "./components/home";
 
const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
     <Route path="/" element={<Home />} />
       <Route path="/moisture" element={<Moisture />} />
       <Route path="/sensor-images" element={<SensorImages />} />
       <Route path="/map" element={<Map />} />
     </Routes>

     
     </div>
 );
};
 
export default App;