import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';
import transformForecast from './../services/tranformForecast';
/*const days=[
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'viernes',
];
const data={
    temperatura:10,
    humidity:10,
    weatherState: 'normal',
    wind: '10 m/s'
}*/
const api_kye="d8118b9cdbafaafdb21a112c92697d95";
const url= `http://api.openweathermap.org/data/2.5/forecast`;
class ForecastExtended extends Component{
    constructor(){
        super();
        this.state={
            forecastData:null
        }
    }
    componentDidMount(){
        const url_forecast = `${url}?q=${'Guadalajara,Mx'}&appid=${api_kye}`;
        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data =>{
                console.log(weather_data);
                const forecastData=transformForecast(weather_data);
                this.setState({forecastData });
            }
        )
    }
    renderForecastItemDays(){
        return <h1>Render Items</h1>;
        //return days.map(day => (<ForecastItem weekDay={day} hour={10} data={data}></ForecastItem>) );
        
    }
    renderProgress=() =>{
        return <h3>Cargando Pronostrico Extendido...</h3>;
    }
    render(){
        const {city}=this.props;
        const {forecastData}= this.state;
        return(<div> 
            <h2 className='forecast-title'>Pronóstico Extendido para {city} </h2>
            {forecastData ?
                this.renderForecastItemDays() : this.renderProgress()}
        </div>);
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}
export default ForecastExtended;