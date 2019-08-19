import React, { Component } from 'react'

import './style.css';

export default class Filter extends Component {
    render() {
        return (
            <div className="filter-container">
                    <form onSubmit="">
                    <input placeholder="filter"/>
                    <button type="submit">Filtrar</button>
                    </form>
            </div>
        )
    }
}
