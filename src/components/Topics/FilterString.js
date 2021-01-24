import React, { Component } from 'react'

export default class FilterString extends Component {

    constructor() {
        super()

        this.state = {
            sodas: ['Sprite', 'Dr. Pepper', 'Mtn. Dew', 'Coca Cola', 'Ginger Ale', 'Squirt'],
            userInput: '',
            filteredSodas: [],
        }
    }

    handleChange(value) {
        this.setState({ userInput: value })
    }

    filteredSodas(userInput) {
        let sodas = this.state.sodas
        let filteredSodas = []

        for (let i = 0; i < sodas.length; i += 1) {
            if (sodas[i].includes(userInput)) {
                filteredSodas.push(sodas[i])
            }
        }

        this.setState({ filteredSodas: filteredSodas })
    }

    render() {
        return (
            <div className='puzzleBox filterString'>
                <h4> Filter String </h4>
                <span className='puzzleText' > Sodas: {JSON.stringify(this.state.sodas, null, 10)}</span>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)} />
                <button className='confirmationButton' onClick={() => this.filteredSodas(this.state.userInput)}> Filter </button>
                <span className='resultsBox filterStringRB'> Filtered Sodas: {JSON.stringify(this.state.filteredSodas, null, 10)}</span>
            </div>
        )
    }

}