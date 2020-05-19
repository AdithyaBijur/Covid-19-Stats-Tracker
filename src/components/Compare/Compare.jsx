import React, { useEffect ,useCallback} from "react";
import { Cards, Chart, CountryPicker } from "../../components";
import styles from "./Compare.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import ChartCom from "../ChartCom/ChartCom";
import world from '../../images/world.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: theme.spacing(0.5),
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function ChipsArray() {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([]);
  const [country, setCountryData] = React.useState([]);
 
  useEffect(() => {
    // console.log('rerender')
    // const fetchAPI = async () => {
    // //   setChipData(await fetchCountries2());
    // //   // console.log(Object.keys(dailyData.cases));
    // //   // console.log(Object.values(dailyData.cases));
    // // };
    // // fetchAPI();
    
  }, []);
  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.label !== chipToDelete.label)
    );
    setCountryData((countr)=>countr.filter((count)=> count!==chipToDelete.label)  )
  };
  const handleCountryChange=async(countr) =>{
    // const data=await fetchData(country);
  if (!(country.includes(countr))&& countr!=='')
 { setChipData([...chipData,{label:countr}])
  setCountryData([...country,countr])}

  }
  return (
    <div className={styles.container}>
      <h2>Select Countries to Compare</h2>
      <CountryPicker handleCountryChange={handleCountryChange}/>
      <Paper className={classes.root}>
        {chipData.map((data) => {
          return (
            <Chip
              key={data.key}
              label={data.label}
              color="primary"
              onDelete={data.label === "React" ? undefined : handleDelete(data)}
              className={classes.chip}
            />
          );
        })}
      </Paper>
      
      {chipData.length>0? <ChartCom country={country}/>:  <img className={styles.image} src={world} alt='Covid-19'/>}
      
    </div>
  );
}
