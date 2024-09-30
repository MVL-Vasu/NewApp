import './App.css';
import React, { Component } from 'react';
import Navbar from './component/Navbar';
import News from './component/News';

export default class App extends Component {

    constructor(props) {
        super(props);
        // Initialize the state
        this.state = {
            mode: 'dark'
        };
    }

    // Function to toggle the mode between light and dark
    toggleMode = () => {
        if (this.state.mode === "light") {
            this.setState({ mode: "dark" });
            document.body.style.background = "rgb(27, 27, 27)";
            document.body.style.color = "white";
        } else {
            this.setState({ mode: "light" });
            document.body.style.color = "black";
            document.body.style.background = "rgb(241, 241, 241)";
        }
    }

    render() {
        return (
            <>
                <Navbar mode={this.state.mode} toggleMode={this.toggleMode} />
                <News />
            </>
        );
    }
}
