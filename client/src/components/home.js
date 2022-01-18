import React, {useEffect} from "react";

 
export default function Home() {

  var num = 0;

  function moistureChange(){
    const moistures = ["52%"];
  }

 // This following section will display the form that takes the input from the user.
 // Put HTML here
 return ( 
     <div>
<p class="display-3 text-center pt-4">Valve Status: <span style={{color: "red"}}>OFF</span></p>

<div class="row" style ={{padding: "40px"}}>
<div class="col-sm">
<table class="table table-bordered">
       <thead class="thead-dark">
         <tr>
           <th scope="col">Current Moisture</th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td class="display-4">81.53%</td>
         </tr>
       </tbody>
     </table>
</div>
<div class="col-sm">
<table class="table table-bordered">
       <thead class="thead-dark">
         <tr>
           <th scope="col">Optimal Moisture</th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td class="display-4">80.00%</td>
         </tr>
       </tbody>
     </table>

</div>
</div>
<div class="row" style ={{padding: "40px"}}>
<div class="col-sm">
<table class="table table-bordered">
       <thead class="thead-dark">
         <tr>
           <th scope="col">Irrigation</th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td class="display-4">30.86%</td>
         </tr>
       </tbody>
     </table>
</div>
<div class="col-sm">
<table class="table table-bordered">
       <thead class="thead-dark">
         <tr>
           <th scope="col">Daily Rain</th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td class="display-4">5mm</td>
         </tr>
       </tbody>
     </table>
</div>
</div>
     </div>
 );
}