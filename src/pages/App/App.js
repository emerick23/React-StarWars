import React, { Component } from 'react';
import './App.css';
import { getAllShips } from '../../services/sw-api'
import { Route } from 'react-router-dom'
import Main from '../Main/Main'
import StarShipPage from '../Starship/StarshipPage'

class App extends Component {

  state = {
    ships: []
  }

  async componentDidMount() {
    const { results } = await getAllShips();
    this.setState({
      ships: results
    })
  }

  getShip = (shipId) => {
    const ship = this.state.ships[shipId]
    return ship
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">Star Wars Starships</header>
        <Route
          exact path='/'
          render={() =>
            <Main
              ships={this.state.ships}
            />
          } />
        <Route
          exact path='/starship/:id'
          render={(props) =>
            <StarShipPage
              {...props}
              getShip={this.getShip}
            />
          }
        />
      </div>
    );
  }
}

export default App;
