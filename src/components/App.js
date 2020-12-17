import React, { Component } from 'react';
import Jobs from './Jobs';
import { createGlobalStyle }  from 'styled-components';
import waves from '../assets/waves.png';

const GlobalStyle = createGlobalStyle`
    body {
        min-height: 100vh;
        background-image:  url(${waves}),linear-gradient(180deg, rgba(139,240,252,1) 0%, #6999D2 25%);;
        background-size: contain , cover;
        background-position: center 200px, top left;
        background-repeat: no-repeat, no-repeat;
    }
`


class App extends Component {

    render() {
        return (
            <>
                <GlobalStyle />
                <Jobs />
            </>
        )
    }
}

export default App;
