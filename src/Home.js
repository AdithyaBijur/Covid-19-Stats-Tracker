import React from 'react';

import {Cards,Chart,CountryPicker} from './components';
import {fetchData} from './api';
import styles from  './Home.module.css'
import logo from './images/image.png'
import {AppBar,Tabs,Tab} from '@material-ui/core'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
class Home extends React.Component
{
  constructor(props){
    super(props);
    this.state={
      data:{},
      country:''
    }
  }

  async componentDidMount()
  {
    const data=await fetchData(this.state.country);
    this.setState({data:data})
  }
  handleCountryChange=async(country) =>{
    const data=await fetchData(country);
    this.setState({data:data ,country:country})
  
  }
  render()
  {
    return(

      <div className={styles.container}>
       
      <img className={styles.image} src={logo} alt='Covid-19'/>
      <Cards data={this.state.data}/>
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
      <h1>{this.state.country}</h1>
      <Chart country={this.state.country}/>
  
      </div>
     
    )
  }
}

export default Home;
