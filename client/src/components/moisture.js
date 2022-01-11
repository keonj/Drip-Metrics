import React, { useState } from "react";
import ChartsEmbedSDK from '@mongodb-js/charts-embed-dom';
 
export default function Moisture() {

 // This following section will display the form that takes the input from the user.
 // Put HTML here
 
 function myFunction() {

    const sdk = new ChartsEmbedSDK({ baseUrl: "https://charts.mongodb.com/charts-dripdatabase-tkohi", showAttribution: false });
    const chart = sdk.createChart({ chartId: "8fae5196-bd76-4776-b6b0-ae7931086753" });

    chart.render(document.getElementById('chart'));
    }

 return (
     <div>
        <div ref="chart"></div>
        <button onclick={myFunction}></button>
     </div> 
 );
}