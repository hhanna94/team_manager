import axios from 'axios';
import React, {useState} from 'react';
import {Link, useParams} from 'react-router-dom'

const GameStatus = (props) => {
    const {players, updateDom} = props;
    const {id} = useParams()

    const changeStatus = (e, status, player, i) => {
        e.preventDefault();
        const gamesCopy = [...player.games]
        gamesCopy[id-1] = {status: status}
        let newPlayer = {...player, games: gamesCopy}
        axios.put(`http://localhost:8000/api/players/${player._id}`, newPlayer)
            .then(res => updateDom(i, newPlayer))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h3>Player Status - Game {id}</h3>
            <h5 className="text-center mt-3">
                <Link to="/status/game/1">Game 1</Link> | <Link to="/status/game/2">Game 2</Link> | <Link to="/status/game/3">Game 3</Link>
            </h5>
            <table className="mt-4 border border-dark border-2 w-100 table table-striped align-center">
                <thead className="bg-secondary text-white">
                    <tr>
                        <td className="col-5">Player Name</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {players.map( (player, i) => { return (
                        <tr key={i}>
                            <td>{player.name}</td>
                            <td>
                                <button onClick={(e) => {changeStatus(e,"playing", player, i)}} className={`btn py-0 me-5 ${player.games[id-1].status==="playing" ? "btn-success" : "btn-secondary"}`}>Playing</button>
                                <button onClick={(e) => {changeStatus(e,"sitting", player, i)}} className={`btn py-0 me-5 ${player.games[id-1].status==="sitting" ? "btn-danger" : "btn-secondary"}`}>Not Playing</button>
                                <button onClick={(e) => {changeStatus(e, "undecided", player, i)}} className={`btn py-0 me-5 ${player.games[id-1].status==="undecided" ? "btn-warning" : "btn-secondary"}`}>Undecided</button>
                            </td>
                        </tr>
                    )})}
                </tbody>
            </table>
        </div>
    );
};


export default GameStatus;