import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import List from './views/List';
import Nav from './components/Nav';
import AddPlayer from './views/AddPlayer';
import GameStatus from './views/GameStatus';
import SecondaryNav from './components/SecondaryNav';
import axios from 'axios';
import React, {useState, useEffect} from 'react';

function App() {
  const [players, setPlayers] = useState([])
  useEffect( () => {
    axios.get("http://localhost:8000/api/players")
        .then(res => setPlayers(res.data))
        .catch(err => console.log(err))

  }, [])

  const addToDom = player => {
    setPlayers([...players, player])
  }

  const removeFromDom = playerID => {
    setPlayers(players.filter(player => player._id !== playerID))
  }

  const updateDom = (i=players.length-1,status) => {
    setPlayers([...players.slice(0, i), {...players[i], status: status}, ...players.slice(i+1)])
  }

  return (
    <BrowserRouter>
      <Nav />
      <div className="border border-dark border-3 container w-50 p-4 mt-3">
        <Switch>
          <Route path="/players/list">
            <SecondaryNav />
            <List players={players} successCallback={removeFromDom}/>
          </Route>
          <Route path="/players/addplayer">
            <SecondaryNav />
            <AddPlayer addToDom={addToDom} updateDom={updateDom}/>
          </Route>
          <Route path="/status/game/:id">
            <GameStatus players={players} updateDom={updateDom}/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
