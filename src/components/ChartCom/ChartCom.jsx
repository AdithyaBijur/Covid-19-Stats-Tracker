import React, { useState, useEffect } from "react";
import { fetchDailyDatacompare } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./ChartCom.module.css";

const ChartCom = (props) => {
  const [dailyData, setDailyData] = useState([]);
  
  useEffect(() => {
    const fetchAPI = async () => {
        // console.log(props.country)
      setDailyData(await fetchDailyDatacompare(props.country));
      // console.log(Object.keys(dailyData.cases));
      // console.log(Object.values(dailyData.cases));
    };
    fetchAPI();
    
  },[props]);
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  const lineChart = dailyData.length>0? 

  (
    <Line
      data={{
        labels:Object.keys(dailyData[0].cases),
        datasets: 
         dailyData.map((count)=>{return(  {
            label: count.country,
            fill: true,
           
            backgroundColor:  'rgba(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) +  ',' +0.7+')',
            borderColor: "rgba(0,0,0,1)",
        
            data:Object.values(count.cases),
          })})
        
      }
    }
    />
  ) : null;

  return (<div className={styles.container}>{lineChart}</div>);
};

export default ChartCom;
