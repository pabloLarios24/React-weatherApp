import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './styles.css';
import {CLOUD, 
        CLOUDY,
        SUN,
        RAIN,
        SNOW,
        WINDY,
        THUNDER,
        DRIZZLE} from './../../../constants/weather';
const stateToIconName= weatherState =>{
    switch (weatherState) {
        case CLOUD:
            return "cloud";
        case CLOUDY:
            return "cloudy";
        case SUN:
            return "day-sunny";
        case RAIN:
            return "rain";
        case SNOW:
            return "snow";
        case WINDY:
            return "windy";
        case THUNDER:
            return "day-thunderstorm";
        case DRIZZLE:
            return "day-showers";
        default:
        return "day-sunny";
            
    }
};
const getWeatherIcon = weatherState => {
    return (<WeatherIcons className='wicon' name={stateToIconName(weatherState)} size="4x" />);
};
const WheaterTemperature = ({temperatura,weatherState}) => (
    <div className='weatherTemperature'>
        {getWeatherIcon(weatherState)}
         
        <span className='temperature'>{` ${temperatura}`}</span>
        <span className='temperaturetype'>C°</span>
    </div>
);
WheaterTemperature.propTypes={
    temperatura: PropTypes.number.isRequired,
    weatherState: PropTypes.string,
}
export default WheaterTemperature;