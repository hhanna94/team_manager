const {Player} = require("../models/player.model")

module.exports.createPlayer = (req, res) => {
    Player.create(req.body)
        .then(newPlayer => {
            console.log(newPlayer)
            res.json(newPlayer)
        })
        .catch(err => res.status(400).json(err))
}

module.exports.getAllPlayers = (req, res) => {
    Player.find({})
        .then(players => res.json(players))
        .catch(err => console.log(err))
}

module.exports.deletePlayer = (req, res) => {
    Player.deleteOne({_id: req.params.id})
        .then(deletedPlayer => res.json(deletedPlayer))
        .catch(err => console.log(err))
}

module.exports.updatePlayer = (req, res) => {
    console.log(req.body)
    Player.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(updatedPlayer => res.json(updatedPlayer))
        .catch(err => console.log(err))
}