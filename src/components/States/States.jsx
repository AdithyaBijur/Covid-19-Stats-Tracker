import React, { useEffect, useState } from "react";
import { Cards, Chart, CountryPicker } from "../../components";
import { Bar } from "react-chartjs-2";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./States.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import ChartCom from "../ChartCom/ChartCom";
import { DataTable, Text } from "grommet";

import { fetchState, fetchStateAll, fetchStateCard } from "../../api";

export default function States() {
  const [selectedState, setselectstate] = React.useState("Maharashtra");
  const [states, setStates] = React.useState([]);
  const [allData, setAllData] = React.useState([]);
  const [card, setCard] = React.useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      setStates(await fetchState());
      setAllData(await fetchStateAll());
      setCard(await fetchStateCard(selectedState));
    

      // console.log(Object.keys(dailyData.cases));
      // console.log(Object.values(dailyData.cases));
    };
    fetchAPI();
 
    
  }, []);


  const handleCountryChange=async(state) =>{
      // console.log(state)
    setselectstate(state)
    setCard(await fetchStateCard(state))
   
  
  }
  const state = {
    labels: allData.map((value)=>value.loc),
    datasets: [
      {
        label: "Confirmed Cases",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 3,
        data: allData.map((value)=>value.totalConfirmed)
      },
    ],
  };
  // console.log(card,states,selectedState)
  return (
    <div className={styles.container}>
      <h1>{selectedState}</h1>
    
    
      
        <FormControl className={styles.formControl}>
          <NativeSelect defaultValue="Maharashtra" onChange={(e) => handleCountryChange(e.target.value)}>
          <option value="Maharashtra">Maharashtra</option>
           
            {states.map((s, i) => (
              <option key={i} value={s}>
                {s}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
      

        {card?<Cards data={{total:card.totalConfirmed,recovered:card.discharged,deaths:card.deaths,active:card.totalConfirmed-card.discharged-card.deaths}}/>:null}
<div className={styles.warning}>Please view graphs in landscape view</div>
      <div className={styles.table}>

        <Bar
          data={state}
          options={{
           
               
            title: {
              display: true,
              text: "Confirmed Cases in All Indian States and UT",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>
    </div>
  );
}
