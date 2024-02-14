import React from 'react';
import axios from 'axios';

export default class Palindrome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: '',
            isPalindrome: null
        };
    }

    handleChange = (event) => {
        this.setState({ inputText: event.target.value });
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/checkPalindrome', {
                text: this.state.inputText
            });
            this.setState({ isPalindrome: response.data.isPalindrome });
        } catch (error) {
            console.error('Error:', error);
        }
    };

    render() {
        return (
            <>
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.inputText}
                        onChange={this.handleChange}
                        placeholder="Introduce un texto"
                    />
                    <button type="submit">Comprobar palíndromo</button>
                </form>
                {this.state.isPalindrome !== null && (
                    <div>
                        {this.state.isPalindrome
                            ? <p>El texto introducido es un palíndromo.</p>
                            : <p>El texto introducido NO es un palíndromo.</p>
                        }
                    </div>
                )}
            </div>
            </>
        )
    }
}