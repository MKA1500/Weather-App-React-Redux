import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import MyGoogleMap from '../components/MyGoogleMap';
import './WeatherList.css';

class WeatherList extends Component {
    constructor(props) {
        super(props);

        this.convertKelvinToCelcius = this.convertKelvinToCelcius.bind(this);
    }

    convertKelvinToCelcius(degrees) {
        let temp = degrees - 273.15; // Kalvins to Celcius
        return temp;
    }

    renderWeather(cityData) {
        if (cityData && cityData.city && cityData.list) {
            const name = cityData.city.name;
            const country = cityData.city.country;
            const id = cityData.city.id;
            const temps = cityData.list.map(weather => this.convertKelvinToCelcius(weather.main.temp));
            const pressures = cityData.list.map(weather => weather.main.pressure);
            const humidities = cityData.list.map(weather => weather.main.humidity);
            console.log('temps', temps);
            return (
                <tr key={id}>
                    <td><strong>{name}, {country}</strong></td>
                    <td>
                        <Chart data={temps} units="°C" color="#dc3545" />
                    </td>
                    <td>
                        <Chart data={pressures} units="hPa" color="#fd7e14" />
                    </td>
                    <td>
                        <Chart data={humidities} units="%" color="#0d6efd" />
                    </td>
                </tr>
            );
        }
    }

    render() {
        return (
            <div>
                <h4 className="py-2">5 days forecast</h4>
                <table className="table table-hover weather-table">
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Temperature</th>
                            <th>Pressure</th>
                            <th>Humidity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.weather.map((cityData) => this.renderWeather(cityData))}
                    </tbody>
                </table>
                <MyGoogleMap />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);
