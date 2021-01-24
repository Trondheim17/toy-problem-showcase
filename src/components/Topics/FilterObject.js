import React, { Component } from 'react'

export default class FilterObject extends Component {
    constructor() {
        super()

        this.state = {
            people: [
                {
                    name: 'Dwight',
                    age: 36,
                    height: '6 feet 1 inches'

                }, {
                    name: 'Jim',
                    hairColor: 'Brown'
                }, {
                    name: 'Michael', 
                    title: 'Branch Manager',
                }
            ],
            userInput: '',
            filteredPeople: []
        }
    }

    handleChange(val) {
        this.setState({ userInput: val })
    }

    filterPeople(prop) {
        let people = this.state.people
        let filteredPeople = []

        for (let i = 0; i < people.length; i += 1) {
            if (people[i].hasOwnProperty(prop)) {
                filteredPeople.push(people[i])
            }
        }

        this.setState({ filteredPeople: filteredPeople })
    }



    render() {
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'> Original: {JSON.stringify(this.state.people, null, 10)}</span>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)} />
                <button className='confirmationButton' onClick={() => this.filterPeople(this.state.userInput)}> Filter </button>
                <span className='resultsBox filterObjectPB'>Filtered: {JSON.stringify(this.state.filteredPeople, null, 10)}</span>

            </div>
        )
    }
}