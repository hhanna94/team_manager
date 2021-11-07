import React, {useState} from 'react';
import DeletePopup from '../components/DeletePopup';


const List = (props) => {
    const {players, successCallback} = props
    const [isOpen, setIsOpen] = useState(false)
    const [currentID, setCurrentID] = useState("")

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const deletePlayer = playerID => {
        togglePopup()
        setCurrentID(playerID)
    }
    
    return (
        <div>
            {isOpen ? <DeletePopup playerID={currentID} togglePopup={togglePopup} successCallback={successCallback}/> : ""}
            <table className="mt-3 border border-dark border-2 w-100 table table-striped align-center">
                <thead className="bg-secondary text-white">
                    <tr>
                        <td>Player Name</td>
                        <td>Preferred Position</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {players.map( (player, i) => { return(
                        <tr key={i}>
                            <td>{player.name}</td>
                            <td>{player.position}</td>
                            <td>
                                <button onClick={e => {deletePlayer(player._id)} } className="btn btn-danger py-0">Delete</button>
                            </td>
                        </tr>
                    )})}
                </tbody>
            </table>
        </div>
    );
};


export default List;