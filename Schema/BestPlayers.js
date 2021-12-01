const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BestPlayersSchema = new Schema({
    "playerName": String,
    "cost": Number,
    "goals": Number,
    "assists": Number,
    "totalContributions": Number
});

module.exports = mongoose.model('BestPlayers', BestPlayersSchema);