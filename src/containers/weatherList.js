import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import './WeatherList.css';

class WeatherList extends Component {
    constructor(props) {
        super(props);

        this.convertCalvinToCelcius = this.convertCalvinToCelcius.bind(this);
    }

    convertCalvinToCelcius(degrees) {
        let temp = degrees - 273.15; // Calvins to Celcius
        temp = Math.round(temp * 100) / 100; // round a number to 2 decimal places
        return temp;
    }

    renderWeather(cityData) {
        const name = cityData.city.name;
        const country = cityData.city.country;
        const id = cityData.city.id;
        const temps = cityData.list.map(weather => this.convertCalvinToCelcius(weather.main.temp));
        const pressures = cityData.list.map(weather => this.convertCalvinToCelcius(weather.main.pressure));
        const humidities = cityData.list.map(weather => this.convertCalvinToCelcius(weather.main.humidity));
        console.log('temps', temps);
        return (
            <tr key={id}>
                <td>{name}, {country}</td>
                <td>
                    <Chart data={temps} color="#dc3545" />
                </td>
                <td>
                    <Chart data={pressures} color="#fd7e14" />
                </td>
                <td>
                    <Chart data={humidities} color="#0d6efd" />
                </td>
            </tr>
        );
    }

    render() {
        return (
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
        );
    }
}

function mapStateToProps(state) {
    return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);
