import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';


var PLAYERS = [
    {
        name: "Agne Klimaite",
        score: 22,
        id: 1,
    },
    {
        name: "Hector Davis",
        score: 12,
        id: 2,
    }
];

function Header(props) {
    return (
        <div className="header">
            <h1>{props.title}</h1>
        </div>
    );
}

Header.propTypes = {
    title: React.PropTypes.string.isRequired,
};

var Counter = React.createClass({
    PropTypes: {
        initialScore: React.PropTypes.number.isRequired,
    },

    getInitialState: function() {
        return {
            score: this.props.initialScore,
        };
    },

    incrementScore: function() {
        this.setState({
            score: (this.state.score + 1),
        });
    },

    decrementScore: function() {
        this.setState({
            score: (this.state.score - 1),
        });
    },

    render: function() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
                <div className="counter-score">{this.state.score}</div>
                <button className="counter-action increment" onClick={this.incrementScore}> + </button>
            </div>
        );
    }
});


function Player(props) {
    return (
        <div className="player">
            <div className="player-name">{ props.name }</div>
            <div className="player-score">
                <Counter initialScore={props.score}/>
            </div>
        </div>
    );
}

Player.propTypes = {
    name: React.PropTypes.string.isRequired,
};

function Application(props) {
    return (
        <div className="scoreboard">
            <Header title={props.title} />

            <div className="players">
                {props.players.map(function(player) {
                    return <Player name={player.name} score={player.score} key={player.id} />
                })}
            </div>
        </div>
    );
}

Application.propTypes = {
    title: React.PropTypes.string,
    players: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

Application.defaultProps = {
    title: "Scoreboard",
}

ReactDOM.render(<Application players={PLAYERS} />, 
                document.getElementById('container'));
