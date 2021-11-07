import React from 'react';
import axios from 'axios'

const DeletePopup = (props) => {
    const {successCallback, playerID, togglePopup} = props

    const deletePlayer = () => {
        console.log(playerID)
        axios.delete(`http://localhost:8000/api/players/${playerID}`)
            .then( () => {
                successCallback(playerID)
                togglePopup()
            })
            .catch(err => console.log(err))
    }

    return (
        <div style={{position: "fixed", left: "50%", height: "200px", top: "200px"}} className="w-25 alert alert-danger border border-dark">
            <h1>Are you sure you would like to delete this player?</h1>
            <button onClick={deletePlayer}>Yes, Delete</button>
            <button onClick={togglePopup}>Cancel</button>
        </div>

    );
};


export default DeletePopup;