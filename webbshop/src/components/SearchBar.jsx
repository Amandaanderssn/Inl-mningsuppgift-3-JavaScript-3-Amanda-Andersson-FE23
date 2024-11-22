import React from "react";

class SearchBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            inputValue: " "
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.inputValue)
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder='Search'
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                />
                <button type='submit'>Search</button>
            </form>
        )
    }
}

export default SearchBar;