import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropType from 'prop-types';
import './styles.css';

const LocationList = ({cities , onSelectedLocation}) =>{
    const handleWeatherLocationClick = city =>{
        onSelectedLocation(city);
    };
    const strToComponent =cities =>(
        cities.map(city =>(
        <WeatherLocation 
        key ={city} 
        city={city}
        onWeatherLocationClick={() => handleWeatherLocationClick(city)} />))
    );
 return(
 <div className='locationList'>
       {strToComponent(cities)}
    </div>);
};
LocationList.propTypes={
    cities: PropType.array.isRequired,
    onSelectedLocation: PropType.func,
}
export default LocationList;