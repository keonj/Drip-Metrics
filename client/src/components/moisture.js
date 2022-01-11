import React, { useEffect, useState } from "react";
import ChartsEmbedSDK from '@mongodb-js/charts-embed-dom';
import "./moisture.css";
 
export default function Moisture() {
    function myFunction(){
        const sdk = new ChartsEmbedSDK({
            baseUrl: 'https://charts.mongodb.com/charts-dripdatabase-tkohi',
          });
          const chart = sdk.createChart({
            chartId: '8fae5196-bd76-4776-b6b0-ae7931086753',
          });
          
          // render the chart into a container
          chart
            .render(document.getElementById('chart'))
            .catch(() => window.alert('Chart failed to initialise'));
    }

    useEffect(() => {
        myFunction();
    })

 // This following section will display the form that takes the input from the user.
 // Put HTML here
 return ( 
     <div class="container mt-3">
        <div class="row text-center">
            <h1>Moisture Level</h1>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Zone</th>
                    <th scope="col">Optimal Moisture</th>
                    <th scope="col">Current Moisture</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>72%</td>
                    <td>60%</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>70%</td>
                    <td>75%</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>75%</td>
                    <td>50%</td>
                    <td>AT RISK</td>
                </tr>
            </tbody>
        </table>
        <div style={{height: "500px"}} id="chart"></div>
        
     </div>
 );
}