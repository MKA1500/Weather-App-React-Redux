import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' }

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        console.log(event.target.value);
        this.setState({ term: event.target.value });
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
                    value={this.state.term} 
                    onChange={this.onInputChange} />
                <button 
                    className="btn btn-primary" 
                    type="submit">Submit</button>
            </form>
        );
    }
}