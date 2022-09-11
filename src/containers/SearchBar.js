import React, { Component } from 'react';

export default class SearchBar extends Component {
    render() {
        return (
            <form className="input-group">
                <input 
                    className="form-control" />
                <button 
                    className="btn btn-primary" 
                    type="button">Submit</button>
            </form>
        );
    }
}