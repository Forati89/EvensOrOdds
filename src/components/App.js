import React, { Component } from 'react';
import { connect } from 'react-redux';
import Instructions from './Instructions';
import {startGame, cancelGame } from '../actions/settings';
import {Container, Col} from 'reactstrap';
import {fetchDeckResult} from '../actions/deck';



class App extends Component {
    startGame = () =>{
        this.props.startGame();

        fetch('https://deck-of-cards-api-wrapper.appspot.com/deck/new/shuffle')
        .then(response => response.json())
        .then(json => this.props.fetchDeckResult(json))
    }

    render() {
        return (
        <div>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
            <h2> <span role="img" aria-label="Card game icons">♥️ ♠️ Evens or Odds ♦️ ♣</span></h2>
            {
                this.props.gameStarted ? (
                    <div>
                     <h3>The game is on!</h3>
                     <br />
                     <button onClick={this.props.cancelGame}>Cancel Game</button>
                    </div>
                ): (
                    <div>
                        <h3>A new game awaits</h3>
                        <br/>
                        <button onClick={this.startGame}>Start Game</button>
                        <hr />
                        <Instructions />
                    </div>
                )
            }
            </Col>
        </div>

        )
    }
}

const mapStateToProps = state => {
    return {gameStarted: state.gameStarted}
}

const mapDispatchToProps = dispatch => {
    return {
        startGame: ()=> dispatch(startGame()),
        cancelGame: ()=> dispatch(cancelGame()),
        fetchDeckResult: deckJson => dispatch(fetchDeckResult(deckJson))
    };
}

const componentConnector = connect(mapStateToProps, mapDispatchToProps);


export default componentConnector(App);
