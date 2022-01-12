import React, {useEffect} from "react";
import ChartsEmbedSDK from '@mongodb-js/charts-embed-dom';

 
export default function Map() {

    function myFunction1(){
        const sdk = new ChartsEmbedSDK({
            baseUrl: 'https://charts.mongodb.com/charts-dripdatabase-tkohi',
          });
          const chart = sdk.createChart({
            chartId: '889cc49f-8982-4484-bd8d-f66369a33410',
          });
          
          // render the chart into a container
          chart
            .render(document.getElementById('chart1'))
            .catch(() => window.alert('Chart failed to initialise'));
    }

    function myFunction2(){
        const sdk = new ChartsEmbedSDK({
            baseUrl: 'https://charts.mongodb.com/charts-dripdatabase-tkohi',
          });
          const chart = sdk.createChart({
            chartId: 'acecc4d1-4bfc-41b4-b943-80d7f491f86a',
          });
          
          // render the chart into a container
          chart
            .render(document.getElementById('chart2'))
            .catch(() => window.alert('Chart failed to initialise'));
    }

    useEffect(() => {
        myFunction1();
        myFunction2();
    })


 // This following section will display the form that takes the input from the user.
 // Put HTML here
 return ( 
     <div>
         <div style={{height: "500px", padding: "50px"}} id="chart1"></div>
         <div style={{height: "500px", padding: "50px"}} id="chart2"></div>
     </div>
 );
}