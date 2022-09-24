import React, { Component } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            city: '',
            countryCode: ''
        };

        this.onCityInputChange = this.onCityInputChange.bind(this);
        this.onCountryCodeInputChange = this.onCountryCodeInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onCityInputChange(event) {
        this.setState(
            { city: event.target.value },
            () => console.log(this.state)
        );
    }

    onCountryCodeInputChange(event) {
        this.setState(
            { countryCode: event.target.value },
            () => console.log(this.state)
        );
    }

    onFormSubmit(event) {
        console.log('submit');
        event.preventDefault();
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
                    <option value="br">Brazil</option>
                    <option value="cz">Czechia</option>
                    <option value="de">Germany</option>
                    <option value="in">India</option>
                    <option value="il">Israel</option>
                    <option value="nl">Netherlands</option>
                    <option value="pl">Poland</option>
                    <option value="ua">Ukraine</option>
                    <option value="uk">United Kingdom</option>
                    <option value="us">United States</option>
                </select>
                <button 
                    className="btn btn-primary" 
                    type="submit">Submit</button>
            </form>
        );
    }
}