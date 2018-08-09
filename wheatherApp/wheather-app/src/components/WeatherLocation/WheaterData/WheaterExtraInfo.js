import React from 'react';
import Proptypes from 'prop-types';
import './styles.css';
const WheaterExtraInfo = ({humidity,wind}) =>(
<div className= 'weatherExtraInfo'>
    <span className='extraInfoText'>{`Humedad: ${humidity}% -`}</span>
    <span className='extraInfoText'>{`Vientos: ${wind}`}</span>
</div>
);

WheaterExtraInfo.propTypes ={
  humidity: Proptypes.number.isRequired,
  wind: Proptypes.string.isRequired, 
};
export default WheaterExtraInfo;