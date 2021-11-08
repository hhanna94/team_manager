import React, {useState} from 'react';
import axios from 'axios'
import {useHistory} from "react-router-dom"


const AddPlayer = (props) => {
    const {addToDom} = props
    const blankPlayerInfo = {
        name: "",
        position: ""
    }
    const [formInfo, setFormInfo] = useState(blankPlayerInfo)
    const [errors, setErrors] = useState([])
    const history = useHistory()

    const updateForm = e => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        });
    };

    const createPlayer = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/players', formInfo)
            .then( res => addToDom(res.data))
            .then( () => history.push("/players/list"))
            .catch(err => {
                console.log(err)
                const errorResponse = err.response.data.errors
                const errorArr = []
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr)
            })
    
    }

    return (
        <div className="border border-dark border-2 p-3">
            {errors.map( (error, i) => {
                return (
                    <p key={i} className="text-danger">*{error}</p>
                )
            })}
            <h3>Add Player</h3>
            <form onSubmit={createPlayer} className="ps-5 w-50 mt-3">
                <div>
                    <label className="col-5 fw-bold" htmlFor="name">Player Name: </label>
                    <input onChange={updateForm} type="text" name="name" id="name" value={formInfo.name}/>
                </div>
                <div>
                    <label className="col-5 mt-3 fw-bold" htmlFor="position">Preferred Position: </label>
                    <input onChange={updateForm} type="text" name="position" id="position" value={formInfo.position}/>
                </div>
                { errors.length>0 && formInfo.name.length<2?
                    ""
                    : <input className="btn btn-success mt-3 py-0 w-25" type="submit" value="Add" />
                }
            </form>
        </div>
    );
};


export default AddPlayer;