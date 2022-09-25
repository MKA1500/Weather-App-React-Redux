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

        this.props.fetchWeather(this.state.term, this.state.countryCode);
        this.setState({ city: '' });
    }

    convertCalvinToCelcius(degrees) {
        return degrees - 273.15;
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder="Get a forecast in your city"
                    className="form-control"
                    value={this.state.city} 
                    onChange={this.onCityInputChange} />
                <select 
                    placeholder="Country code"
                    className="form-control country-code-field"
                    value={this.state.countryCode} 
                    onChange={this.onCountryCodeInputChange}>
                    <option value="be">Belgium</option>
                    <option value="cz">Czechia</option>
                    <option value="de">Germany</option>
                    <option value="in">India</option>
                    <option value="nl">Netherlands</option>
                    <option value="pl">Poland</option>
                    <option value="ua">Ukraine</option>
                    <option value="uk">United Kingdom</option>
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
