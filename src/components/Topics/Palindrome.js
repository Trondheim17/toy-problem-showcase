import React, { Component } from 'react'

export default class Palindrome extends Component {
    constructor() {
        super()

        this.state = {
            userInput: '',
            palindrome: '',
        }
    }

    handleChange(value) {
        this.setState({ userInput: value })
    }

    isPalindrome(userInput) {
        let backwards = userInput;
        let forwards = userInput;
        backwards = backwards.split('');
        backwards = backwards.reverse('');
        backwards = backwards.join('')

        if (forwards === backwards) {
            this.setState({ palindrome: 'True' })
        } else {
            this.setState({ palindrome: 'False' })
        }
    }

    render() {
        return (
            <div className='puzzleBox palindromePB'>
                <h4> Palindrome </h4>
                <input className='inputline' onChange={(e) => this.handleChange(e.target.value)} />
                <button className='confirmationButton' onClick={() => this.isPalindrome(this.state.userInput)}> Check </button>
                <span className='resultsBox'> Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}