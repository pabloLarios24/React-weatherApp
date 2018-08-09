import React, {Component } from 'react';
import PropTypes from 'prop-types';
import tranformWeather from './../../services/transformWeather'
import Location from './Location';
import WheaterData from './WheaterData';
import CircularProgress from 'material-ui/CircularProgress';



const api_kye="d8118b9cdbafaafdb21a112c92697d95";





class WeatherLocation  extends Component{
    
    constructor({city}){
        super();
        this.state={
            data: null,
            city
        };
    }
   
    componentWillMount () {
        const {city} = this.state;
        const api_weather= `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_kye}`;
        fetch(api_weather).then(data => {
            return data.json();
        }).then( weather_data =>{
            const data= tranformWeather(weather_data);
            this.setState({data});
        });
    }

     render = () => {
         const {OnWeatherLocationClick} = this.props;
         const {city,data} = this.state;
         return(
    <div className='weatherLocationCont' onClick ={ OnWeatherLocationClick }> 
        <Location city={city}></Location> 
        {data ? <WheaterData data={data}/> : 
        <CircularProgress size={60} thickness={7} />}

    </div>);
     };
}
WeatherLocation.propTypes = {
    city: PropTypes.string,
    OnWeatherLocationClick: PropTypes.func,
}
export default WeatherLocation;