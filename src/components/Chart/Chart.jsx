import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";

const Chart = (props) => {
  const [dailyData, setDailyData] = useState({});
  
  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData(props.country));
      // console.log(Object.keys(dailyData.cases));
      // console.log(Object.values(dailyData.cases));
    };
    fetchAPI();
    
  },[props]);
  const lineChart = 'cases' in dailyData? 

  (
    <Line
      data={{
        labels: Object.keys(dailyData.cases),
        datasets: [
          {
            label: "Total Cases",
            fill: true,
           
            backgroundColor: "rgba(0,0,192,0.5)",
            borderColor: "rgba(0,0,0,1)",
        
            data:Object.values(dailyData.cases),
          },
          {
            label: "Deaths",
            fill: true,
           
            backgroundColor: "rgba(250,0,0,1)",
            borderColor: "rgba(0,0,0,1)",
        
            data:Object.values(dailyData.deaths),
          },
          {
            label: "Recovered",
            fill: true,
           
            backgroundColor: "rgba(0,230,0.5)",
            borderColor: "rgba(0,0,0,1)",
        
            data:Object.values(dailyData.recovered),
          },

        ],
      }}
    />
  ) : null;

  return (<div className={styles.container}>{lineChart}</div>);
};

export default Chart;
