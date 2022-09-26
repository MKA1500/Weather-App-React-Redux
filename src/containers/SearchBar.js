import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
import './SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            city: '',
            countryCode: 'be'
        };

        this.onCityInputChange = this.onCityInputChange.bind(this);
        this.onCountryCodeInputChange = this.onCountryCodeInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onCityInputChange(event) {
        this.setState({ city: event.target.value });
    }

    onCountryCodeInputChange(event) {
        this.setState({ countryCode: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.fetchWeather(this.state.city, this.state.countryCode);
        this.setState({ city: '' });
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder="Get a forecast for 5 days in your city"
                    className="form-control"
                    value={this.state.city} 
                    onChange={this.onCityInputChange} />
                <select 
                    placeholder="Country code"
                    className="form-control country-code-field"
                    value={this.state.countryCode} 
                    onChange={this.onCountryCodeInputChange}>
                    <option value="ar">Argentina</option>
                    <option value="be">Belgium</option>
                    <option value="cz">Czechia</option>
                    <option value="ee">Estonia</option>
                    <option value="de">Germany</option>
                    <option value="in">India</option>
                    <option value="it">Italy</option>
                    <option value="nl">Netherlands</option>
                    <option value="ma">Morocco</option>
                    <option value="pl">Poland</option>
                    <option value="za">South Africa</option>
                    <option value="tw">Taiwan</option>
                    <option value="ua">Ukraine</option>
                    <option value="uk">United Kingdom</option>
                    <option value="us">United States</option>
                    <option value="ve">Venezuela</option>
                </select>
                <button 
                    className="btn btn-primary" 
                    type="submit">Submit</button>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
