import React from 'react';
import WheaterExtraInfo from './WheaterExtraInfo';
import WheaterTemperature from './WheaterTemperature';
import PropTypes from 'prop-types';
import './styles.css';
const WheaterData = ({data}) => {
    const {temperatura, weatherState,humidity, wind}= data;
 return (
 <div className = 'weatherDataCont'> 
        <WheaterTemperature temperatura={temperatura} weatherState={weatherState}> </WheaterTemperature>
        <WheaterExtraInfo humidity={humidity} wind={wind}></WheaterExtraInfo>
     </div>);
};
WheaterData.protoTypes={
    data: PropTypes.shape({
        temperatura: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}
export default WheaterData;