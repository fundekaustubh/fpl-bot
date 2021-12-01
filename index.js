const express = require('express');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const path = require('path');
const BestPlayers = require('./Schema/BestPlayers.js');
const AlternativeFDR = require('./Schema/AlternativeFDR.js');
const OptimalCaptain = require('./Schema/OptimalCaptain.js');
const app = express();

app.engine('ejs', ejsMate);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/fpl', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected!');
});

app.get('/home', (req, res) => {
    res.render('home');
})
app.get('/', (req, res) => {
    res.render('home');
})
app.get('/best-players', async (req, res) => {
    const bestPlayers = await BestPlayers.find({});
    res.render('best-players', { bestPlayers });
})
app.get('/alternative-fdr', async (req, res) => {
    const allFDRs = await AlternativeFDR.find({});
    const teams = allFDRs.map(team => team.name);
    //console.log(teams);
    res.render('./alternative-fdrs/alternative-fdrs-form', { teams });
})
app.get('/optimal-captain-choice', (req, res) => {
    res.render('./optimal-captains/optimal-captains-form');
})

app.post('/alternative-fdr', async (req, res) => {
    const team = req.body.alternativeFDR.team;
    const allFDRs = await AlternativeFDR.find({});
    let requiredFDRs = [];
    if (!team || team == 'All') {
        requiredFDRs = allFDRs;
    }
    else {
        requiredFDRs = allFDRs.filter(fdr => fdr.name === team);
    }
    //console.log(requiredFDRs);
    res.render('./alternative-fdrs/alternative-fdrs', { teams: requiredFDRs });
})
app.post('/optimal-captain-choice', async (req, res) => {
    //console.log(req.body);
    const gameweek = req.body.optimalCaptain.gameweek;
    const allCaptains = await OptimalCaptain.find({});
    let requiredCaptains = [];
    if (!gameweek || gameweek === 'All') {
        requiredCaptains = allCaptains;
    }
    else {
        requiredCaptains = allCaptains.filter(x => x.gameweek === parseInt(gameweek));
    }
    res.render('./optimal-captains/optimal-captains', { gameweeks: requiredCaptains });
})
app.post('/add-best-player', async (req, res) => {
    //console.log(req.body);
    const player = new BestPlayers(req.body);
    await player.save();
})

app.listen(3000, (req, res) => {
    console.log('App started on port 3000...');
})