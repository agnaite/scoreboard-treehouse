import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function Application() {
    return (
        <div className="application">
            <div className="header">
                <h1>Scoreboard</h1>
            </div>
        </div>
    );
}

ReactDOM.render(<Application />, 
                document.getElementById('container'));
