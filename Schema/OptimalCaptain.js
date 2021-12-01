const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const OptimalCaptainSchema = new Schema({
    "gameweek": Number,
    "captainName": String,
    "captainPoints": Number,
    "captainOpposition": String,
    "topScorerName": String,
    "topScorerPoints": Number,
    "topScorerOpposition": String
});

module.exports = mongoose.model('OptimalCaptain', OptimalCaptainSchema);