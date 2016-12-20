import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


function Header(props) {
    return (
        <div className="header">
            <h1>{ props.title }</h1>
        </div>
    );
}

Header.propTypes = {
    title: React.PropTypes.string.isRequired,
};

function Player(props) {
    return (
        <div className="players">
            <div className="player">
                <div className="player-name">{ props.name }</div>
                <div className="player-score">
                    <div className="counter">
                        <button className="counter-action decrement">-</button>
                        <div className="counter-score">{ props.score }</div>
                        <button className="counter-action increment">+</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

Player.propTypes = {
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.string,
};

function Application(props) {
    return (
        <div className="scoreboard">

            <Header title={props.title} />
            <Player name="Agne" score="31" />

        </div>
    );
}

Application.propTypes = {
    title: React.PropTypes.string,
};

Application.defaultProps = {
    title: "Scoreboard",
}

ReactDOM.render(<Application />, 
                document.getElementById('container'));
