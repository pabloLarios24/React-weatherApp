import React, { Component } from 'react';

import LocationListContainers from './containers/LocationListContainers';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import './App.css';
import ForecastExtended from './components/ForecastExtended';
const cities=[
  'Guadalajara,Mx',
  'Monterrey,MX',
  'Puerto Vallarta,MX'
];


class App extends Component {
  constructor() {
    super();
    this.state = {city: 'Holi'};
  }
  
  render() {
    const {city}= this.state;
    return (
      <MuiThemeProvider>
        <Grid fluid>
          <Row>
           <Col xs={12}>
              <AppBar title="Wheather App" color="greey"/>
           </Col>
          </Row>
            <Row>
              <Col xs={12} md={6}>
              <LocationListContainers cities={cities} ></LocationListContainers>
              </Col>
              <Col xs={12} md={6}>
                <Paper zDepth={4}>
                  <div className='detail'>
                  {city && <ForecastExtended city={city}></ForecastExtended>  }
                    
                  </div>
                </Paper>
              </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}


export default App;