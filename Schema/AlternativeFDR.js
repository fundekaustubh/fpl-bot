const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AlternativeFDRSchema = new Schema({
    "name": String,
    "ALLHome": Number,
    "ALLAway": Number,
    "GKHome": Number,
    "GKAway": Number,
    "DEFHome": Number,
    "DEFAway": Number,
    "MIDHome": Number,
    "MIDAway": Number,
    "FWDHome": Number,
    "FWDAway": Number
});

module.exports = mongoose.model('AlternativeFDR', AlternativeFDRSchema);