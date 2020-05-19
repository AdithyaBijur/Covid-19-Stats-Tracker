import React from 'react';

// import {Cards,Chart,CountryPicker} from './components';
// import {fetchData} from './api';
// import styles from  './App.module.css'
// import logo from './images/image.png'
import {AppBar,Tabs,Tab} from '@material-ui/core'
import {HashRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Home from './Home'
import States from './components/States/States'
import Footer from './components/Footer/Footer'
import Compare from './components/Compare/Compare'
class App extends React.Component
{
  

  render()
  {
      const NavStyle={
          color: 'white'
      }
    return(
<Router>
    <div>
    <Route path='/compare' exavt component={Compare}></Route> 
    <Route path='/states' exact component={States}></Route> 
    <Route path='/' exact component={Home}></Route> 
   
        <AppBar title="My App">
        <Tabs>
           <Link to='/' style={NavStyle}> <Tab label="Home" /></Link>
           <Link to='/compare' style={NavStyle}> <Tab label="Compare Countries" /></Link>
           <Link to='/states' style={NavStyle}> <Tab label="States" /></Link>
        
        </Tabs>
      </AppBar>
      </div>
   
      </Router>
    )
  }
}

export default App;
