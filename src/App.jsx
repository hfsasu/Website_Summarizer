import React from 'react' //no need to have this import statement
import Hero from './componenets/Hero.jsx';
import Demo from "./componenets/Demo.jsx";

import "./App.css";

const App = () => {
    return (
        <main>
            <div className="main">
                <div className="gradient" />
            </div>

            <div className="app">
                <Hero />
                <Demo />
            </div>
        </main>
    );
};

export default App;

