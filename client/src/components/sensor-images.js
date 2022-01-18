/* eslint-disable jsx-a11y/alt-text */
import React from "react";

 
export default function SensorImages() {

 // This following section will display the form that takes the input from the user.
 // Put HTML here
 return ( 
     <div>
        <p>Sensor 1 (most recent)</p>
        <img src="http://mydrip.ca/wec2022/uploads/2022.01.13_22:20:58_esp32-cam.jpg" class="rounded float-left" style={{maxHeight: "300px"}}></img>
        <img src="http://mydrip.ca/wec2022/uploads/2022.01.13_18:33:39_esp32-cam.jpg" class="rounded float-right" style={{maxHeight: "300px"}}></img>
     </div>

 );
}