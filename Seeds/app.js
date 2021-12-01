const mongoose = require('mongoose');
const BestPlayers = require('../Schema/BestPlayers.js');
const AlternativeFDR = require('../Schema/AlternativeFDR.js');
const OptimalCaptain = require('../Schema/OptimalCaptain.js');
mongoose.connect('mongodb://localhost:27017/fpl', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected!');
});
const bestPlayers = [
    {
        "playerName": "Salah",
        "cost": 13.6,
        "goals": 16,
        "assists": 8,
        "totalContributions": 24
    },
    {
        "playerName": "Hazard",
        "cost": 11.0,
        "goals": 10,
        "assists": 10,
        "totalContributions": 20
    },
    {
        "playerName": "Sterling",
        "cost": 11.3,
        "goals": 10,
        "assists": 10,
        "totalContributions": 20
    },
    {
        "playerName": "Kane",
        "cost": 12.4,
        "goals": 14,
        "assists": 6,
        "totalContributions": 20
    },
    {
        "playerName": "Aubameyang",
        "cost": 11.3,
        "goals": 14,
        "assists": 5,
        "totalContributions": 19
    },
    {
        "playerName": "Sané",
        "cost": 9.7,
        "goals": 8,
        "assists": 11,
        "totalContributions": 19
    },
    {
        "playerName": "Wilson",
        "cost": 6.5,
        "goals": 10,
        "assists": 8,
        "totalContributions": 18
    },
    {
        "playerName": "Agüero",
        "cost": 11.3,
        "goals": 10,
        "assists": 8,
        "totalContributions": 18
    },
    {
        "playerName": "Lacazette",
        "cost": 9.3,
        "goals": 8,
        "assists": 8,
        "totalContributions": 16
    },
    {
        "playerName": "Pogba",
        "cost": 8.7,
        "goals": 8,
        "assists": 8,
        "totalContributions": 16
    }
];

const alternativeFDR = [
    {
        "name": "Man City",
        "AllHome": 4.45,
        "AllAway": 5.0,
        "GKHome": 3.62,
        "GKAway": 5.0,
        "DEFHome": 3.75,
        "DEFAway": 5.0,
        "MIDHome": 4.61,
        "MIDAway": 5.0,
        "FWDHome": 5.0,
        "FWDAway": 3.94
    },
    {
        "name": "Chelsea",
        "AllHome": 3.99,
        "AllAway": 3.47,
        "GKHome": 3.72,
        "GKAway": 3.01,
        "DEHome": 3.62,
        "DEFAway": 3.35,
        "MIDHome": 4.01,
        "MIDAway": 3.93,
        "FWDHome": 4.09,
        "FWDAway": 4.42
    },
    {
        "name": "West Ham",
        "AllHome": 2.87,
        "AllAway": 1.83,
        "GKHome": 2.45,
        "GKAway": 2.70,
        "DEHome": 2.89,
        "DEFAway": 2.34,
        "MIDHome": 3.08,
        "MIDAway": 1.19,
        "FWDHome": 2.95,
        "FWDAway": 4.17
    },
    {
        "name": "Cardiff",
        "AllHome": 1.0,
        "AllAway": 1.62,
        "GKHome": 1.09,
        "GKAway": 3.24,
        "DEHome": 1.0,
        "DEFAway": 2.53,
        "MIDHome": 1.0,
        "MIDAway": 1.0,
        "FWDHome": 3.37,
        "FWDAway": 2.57
    },
    {
        "name": "Newcastle",
        "AllHome": 2.54,
        "AllAway": 1.66,
        "GKHome": 1.56,
        "GKAway": 2.62,
        "DEHome": 2.05,
        "DEFAway": 1.54,
        "MIDHome": 2.80,
        "MIDAway": 2.66,
        "FWDHome": 4.43,
        "FWDAway": 3.22
    },
    {
        "name": "Everton",
        "AllHome": 2.85,
        "AllAway": 3.41,
        "GKHome": 1.96,
        "GKAway": 4.16,
        "DEHome": 2.92,
        "DEFAway": 3.88,
        "MIDHome": 3.49,
        "MIDAway": 3.20,
        "FWDHome": 2.26,
        "FWDAway": 2.93
    },
    {
        "name": "Watford",
        "AllHome": 3.59,
        "AllAway": 2.52,
        "GKHome": 4.09,
        "GKAway": 3.70,
        "DEHome": 3.34,
        "DEFAway": 3.14,
        "MIDHome": 3.79,
        "MIDAway": 2.85,
        "FWDHome": 3.09,
        "FWDAway": 1.0
    },
    {
        "name": "Fulham",
        "AllHome": 1.09,
        "AllAway": 1.48,
        "GKHome": 1.81,
        "GKAway": 2.17,
        "DEHome": 1.16,
        "DEFAway": 2.32,
        "MIDHome": 1.77,
        "MIDAway": 1.26,
        "FWDHome": 1.26,
        "FWDAway": 2.78
    },
    {
        "name": "Leicester",
        "AllHome": 3.57,
        "AllAway": 2.74,
        "GKHome": 3.87,
        "GKAway": 2.34,
        "DEHome": 3.68,
        "DEFAway": 3.07,
        "MIDHome": 3.38,
        "MIDAway": 2.95,
        "FWDHome": 3.09,
        "FWDAway": 3.81
    },
    {
        "name": "Crystal Palace",
        "AllHome": 3.08,
        "AllAway": 1.41,
        "GKHome": 3.16,
        "GKAway": 1.0,
        "DEHome": 3.22,
        "DEFAway": 1.0,
        "MIDHome": 3.18,
        "MIDAway": 2.87,
        "FWDHome": 2.55,
        "FWDAway": 4.37
    },
    {
        "name": "Liverpool",
        "AllHome": 4.91,
        "AllAway": 4.66,
        "GKHome": 4.32,
        "GKAway": 4.76,
        "DEHome": 5.0,
        "DEFAway": 4.63,
        "MIDHome": 4.10,
        "MIDAway": 4.08,
        "FWDHome": 4.53,
        "FWDAway": 5.0
    },
    {
        "name": "Wolves",
        "AllHome": 3.20,
        "AllAway": 2.34,
        "GKHome": 2.15,
        "GKAway": 3.62,
        "DEHome": 3.06,
        "DEFAway": 2.82,
        "MIDHome": 3.74,
        "MIDAway": 1.42,
        "FWDHome": 2.82,
        "FWDAway": 4.14
    },
    {
        "name": "Bournemouth",
        "AllHome": 1.75,
        "AllAway": 3.30,
        "GKHome": 1.86,
        "GKAway": 3.93,
        "DEHome": 2.29,
        "DEFAway": 3.40,
        "MIDHome": 2.00,
        "MIDAway": 3.69,
        "FWDHome": 1.34,
        "FWDAway": 3.23
    },
    {
        "name": "Spurs",
        "AllHome": 5.0,
        "AllAway": 3.17,
        "GKHome": 5.0,
        "GKAway": 3.10,
        "DEHome": 4.85,
        "DEFAway": 3.21,
        "MIDHome": 5.0,
        "MIDAway": 3.85,
        "FWDHome": 3.09,
        "FWDAway": 3.40
    },
    {
        "name": "Man Utd",
        "AllHome": 3.94,
        "AllAway": 3.21,
        "GKHome": 3.78,
        "GKAway": 2.84,
        "DEHome": 4.49,
        "DEFAway": 3.63,
        "MIDHome": 3.25,
        "MIDAway": 3.06,
        "FWDHome": 3.44,
        "FWDAway": 3.79
    },
    {
        "name": "Huddersfield",
        "AllHome": 2.19,
        "AllAway": 1.0,
        "GKHome": 1.37,
        "GKAway": 2.16,
        "DEHome": 2.60,
        "DEFAway": 1.34,
        "MIDHome": 3.05,
        "MIDAway": 2.04,
        "FWDHome": 1.0,
        "FWDAway": 2.08
    },
    {
        "name": "Southampon",
        "AllHome": 2.11,
        "AllAway": 2.03,
        "GKHome": 1.0,
        "GKAway": 3.01,
        "DEHome": 2.30,
        "DEFAway": 2.37,
        "MIDHome": 2.56,
        "MIDAway": 1.80,
        "FWDHome": 2.42,
        "FWDAway": 3.70
    },
    {
        "name": "Burnley",
        "AllHome": 1.57,
        "AllAway": 2.41,
        "GKHome": 1.63,
        "GKAway": 4.18,
        "DEHome": 1.86,
        "DEFAway": 2.61,
        "MIDHome": 2.04,
        "MIDAway": 2.02,
        "FWDHome": 1.65,
        "FWDAway": 3.71
    },
    {
        "name": "Brighton",
        "AllHome": 2.24,
        "AllAway": 3.39,
        "GKHome": 2.53,
        "GKAway": 4.18,
        "DEHome": 1.97,
        "DEFAway": 3.61,
        "MIDHome": 2.34,
        "MIDAway": 3.61,
        "FWDHome": 3.53,
        "FWDAway": 2.96
    },
    {
        "name": "Arsenal",
        "AllHome": 3.44,
        "AllAway": 4.29,
        "GKHome": 4.11,
        "GKAway": 4.39,
        "DEHome": 3.67,
        "DEFAway": 4.34,
        "MIDHome": 3.35,
        "MIDAway": 4.07,
        "FWDHome": 2.51,
        "FWDAway": 4.21
    }
];

const optimalCaptains = [
    {
        "gameweek": 1,
        "captainName": "Sánchez",
        "captainPoints": 5,
        "captainOpposition": "Leicester",
        "topScorerName": "Mané",
        "topScorerPoints": 16,
        "topScorerOpposition": "West Ham"
    },
    {
        "gameweek": 2,
        "captainName": "Agüero",
        "captainPoints": 20,
        "captainOpposition": "Huddersfield",
        "topScorerName": "Agüero",
        "topScorerPoints": 20,
        "topScorerOpposition": "Huddersfield"
    },

    {
        "gameweek": 3,
        "captainName": "Agüero",
        "captainPoints": 2,
        "captainOpposition": "Wolves",
        "topScorerName": "Robertson",
        "topScorerPoints": 9,
        "topScorerOpposition": "Brighton"
    },

    {
        "gameweek": 4,
        "captainName": "Agüero",
        "captainPoints": 6,
        "captainOpposition": "Newscastle",
        "topScorerName": "Hazard",
        "topScorerPoints": 11,
        "topScorerOpposition": "Bournemouth"
    },
    {
        "gameweek": 5,
        "captainName": "Agüero",
        "captainPoints": 7,
        "captainOpposition": "Fulham",
        "topScorerName": "Hazard",
        "topScorerPoints": 20,
        "topScorerOpposition": "Cardiff"
    },

    {
        "gameweek": 6,
        "captainName": "Agüero",
        "captainPoints": 6,
        "captainOpposition": "Cardiff",
        "topScorerName": "Wan-Bissaka",
        "topScorerPoints": 9,
        "topScorerOpposition": "Newscastle"
    },

    {
        "gameweek": 7,
        "captainName": "Agüero",
        "captainPoints": 8,
        "captainOpposition": "Brighton",
        "topScorerName": "Hazard",
        "topScorerPoints": 10,
        "topScorerOpposition": "Liverpool"
    },

    {
        "gameweek": 8,
        "captainName": "Kane",
        "captainPoints": 1,
        "captainOpposition": "Cardiff",
        "topScorerName": "Hazard",
        "topScorerPoints": 14,
        "topScorerOpposition": "Southampton"
    },
    {
        "gameweek": 9,
        "captainName": "Sterling",
        "captainPoints": 0,
        "captainpposition": "Cardiff",
        "topScorerName": "Mané",
        "topScorerPoints": 15,
        "topScorerOpposition": "Cardiff"
    },
    {
        "gameweek": 10,
        "captainName": "Robertson",
        "captainPoints": 0,
        "captainpposition": "Cardiff",
        "topScorerName": "Mané",
        "topScorerPoints": 15,
        "topScorerOpposition": "Cardiff"
    },
    {
        "gameweek": 11,
        "captainName": "Sterling",
        "captainPoints": 21,
        "captainpposition": "Southampton",
        "topScorerName": "Sterling",
        "topScorerPoints": 21,
        "topScorerOpposition": "Southampton"
    },
    {
        "gameweek": 12,
        "captainName": "Mané",
        "captainPoints": 3,
        "captainpposition": "Fulham",
        "topScorerName": "Robertson",
        "topScorerPoints": 12,
        "topScorerOpposition": "Fulham"
    },
    {
        "gameweek": 13,
        "captainName": "Sterling",
        "captainPoints": 16,
        "captainpposition": "West Ham",
        "topScorerName": "Sterling",
        "topScorerPoints": 16,
        "topScorerOpposition": "West Ham"
    },
    {
        "gameweek": 14,
        "captainName": "Sterling",
        "captainPoints": 9,
        "captainpposition": "Bournemouth",
        "topScorerName": "Sterling",
        "topScorerPoints": 9,
        "topScorerOpposition": "Bournemouth"
    },
    {
        "gameweek": 15,
        "captainName": "Sané",
        "captainPoints": 7,
        "captainOpposition": "Watford",
        "topScorerName": "Fraser",
        "topScorerPoints": 12,
        "topScorerOpposition": "Huddersfield"
    },
    {
        "gameweek": 16,
        "captainName": "Kane",
        "captainPoints": 1,
        "captainOpposition": "Leicester",
        "topScorerName": "Robertson",
        "topScorerPoints": 11,
        "topScorerOpposition": "Bournemouth"
    },
    {
        "gameweek": 17,
        "captainName": "Kane",
        "captainPoints": 5,
        "captainOpposition": "Burnley",
        "topScorerName": "Hazard",
        "topScorerPoints": 13,
        "topScorerOpposition": "Brighton"
    },
    {
        "gameweek": 18,
        "captainName": "Sané",
        "captainPoints": 2,
        "captainOpposition": "Crystal Palace",
        "topScorerName": "Kane",
        "topScorerPoints": 15,
        "topScorerOpposition": "Everton"
    },
    {
        "gameweek": 19,
        "captainName": "Kane",
        "captainPoints": 6,
        "captainOpposition": "Bournemouth",
        "topScorerName": "Hazard",
        "topScorerPoints": 15,
        "topScorerOpposition": "Watford"
    },
    {
        "gameweek": 20,
        "captainName": "Kane",
        "captainPoints": 6,
        "captainOpposition": "Wolves",
        "topScorerName": "Pogba",
        "topScorerPoints": 18,
        "topScorerOpposition": "Bournemouth"
    },
    {
        "gameweek": 21,
        "captainName": "Hazard",
        "captainPoints": 3,
        "captainOpposition": "Southampton",
        "topScorerName": "Fraser",
        "topScorerPoints": 12,
        "topScorerOpposition": "Watford"
    },
    {
        "gameweek": 22,
        "captainName": "Salah",
        "captainPoints": 11,
        "captainOpposition": "Brighton",
        "topScorerName": "Digne",
        "topScorerPoints": 12,
        "topScorerOpposition": "Bournemouth"
    },
    {
        "gameweek": 23,
        "captainName": "Salah",
        "captainPoints": 15,
        "captainOpposition": "Crystal Palace",
        "topScorerName": "Salah",
        "topScorerPoints": 115,
        "topScorerOpposition": "Crystal Palace"
    }
];
//console.log(bestPlayers, alternativeFDR, optimalCaptains);
const save = async () => {
    for (let bestPlayer of bestPlayers) {
        const newPlayer = new BestPlayers(bestPlayer);
        await newPlayer.save();
    }

    for (let FDR of alternativeFDR) {
        const newFDR = new AlternativeFDR(FDR);
        await newFDR.save();
    }

    for (let optimalCaptain of optimalCaptains) {
        const newOptimalCaptain = new OptimalCaptain(optimalCaptain);
        await newOptimalCaptain.save();
    }
}

save().then(() => {
    console.log('Database filled, connection closing...');
    mongoose.connection.close();
});