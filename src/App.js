import React from 'react';
import Console from './components/Console.js'
import Header from './components/Header'

import 'fomantic-ui-css/semantic.css';

function App() {
    return (
        <div className="container">
            <Header/>
            <Console/>
        </div>
    );
}

export default App;
