import slide1 from '../assets/slide1.png'
import slide2 from '../assets/slide2.png'
import slide3 from '../assets/slide3.png'
import slide4 from '../assets/slide4.png'
import slide5 from '../assets/slide5.png'
import slide6 from '../assets/slide6.png'
import slide7 from '../assets/slide7.png'
import slide8 from '../assets/slide8.png'
import slide9 from '../assets/slide9.png'
import slide10 from '../assets/slide10.png'
import slide11 from '../assets/slide11.png'
import slide12 from '../assets/slide12.png'

import player1 from '../assets/player1.png'
import player2 from '../assets/player2.png'
import player3 from '../assets/player3.png'
import player4 from '../assets/player4.png'
import player5 from '../assets/player5.png'
import player6 from '../assets/player6.png'
import player7 from '../assets/player7.png'
import player8 from '../assets/player8.png'
import player9 from '../assets/player9.png'
import player10 from '../assets/player10.png'
import player11 from '../assets/player11.png'
import player12 from '../assets/player12.png'

export const slider = [
    {id: 1, image: slide1},
    {id: 2, image: slide2},
    {id: 3, image: slide3},
    {id: 4, image: slide4},
    {id: 5, image: slide5},
    {id: 6, image: slide6},
    {id: 7, image: slide7},
    {id: 8, image: slide8},
    {id: 9, image: slide9},
    {id: 10, image: slide10},
    {id: 11, image: slide11},
    {id: 12, image: slide12},
    {id: 13, image: slide1},
    {id: 14, image: slide2},
    {id: 15, image: slide3},
    {id: 16, image: slide4},
    {id: 17, image: slide5},
    {id: 18, image: slide6},
    {id: 19, image: slide7},
    {id: 20, image: slide8},
    {id: 21, image: slide9},
    {id: 22, image: slide10},
    {id: 23, image: slide11},
    {id: 24, image: slide12},

];


export const links = [
    {id: 1, section: '/homepage/players', text: 'PLAYERS'},
    {id: 2, section: '/homepage/teams', text: 'TEAMS'},
    {id: 3, section: '/homepage/favorites', text: 'FAVORITES'}
];


export const players = [
    {id: 1, image: player1},
    {id: 2, image: player2},
    {id: 3, image: player3},
    {id: 4, image: player4},
    {id: 5, image: player5},
    {id: 6, image: player6},
    {id: 7, image: player7},
    {id: 8, image: player8},
    {id: 9, image: player9},
    {id: 10, image: player10},
    {id: 11, image: player11},
    {id: 12, image: player12},
];


export const leagues = [
    {id: 39, name: 'Premier League', country: 'England'},
    {id: 140, name: 'La Liga', country: 'Spain'},
    {id: 78, name: 'Bundesliga', country: 'Germany'},
    {id: 135, name: 'Serie A', country: 'Italy'},
    {id: 61, name: 'Ligue 1', country: 'France'},
    {id: 71, name: 'Brasileirão', country: 'Brazil'},
    {id: 262, name: 'Liga MX', country: 'Mexico'},
    {id: 866, name: 'MLS', country: 'USA'},
    {id: 94, name: 'Primeira Liga', country: 'Portugal'},
    {id: 88, name: 'Eredivisie', country: 'Netherlands'},
    {id: 307, name: 'Saudi Pro League', country: 'Saudi Arabia'},
    {id: 144, name: 'Pro League', country: 'Belgium '},
    {id: 207, name: 'Super League', country: 'Switzerland '},
]

export const seasons = [
    {id: 1, year:'2024-25', value: '2024'},
    {id: 2, year:'2023-24', value: '2023'},
    {id: 3, year:'2022-23', value: '2022'},
    {id: 4, year:'2021-22', value: '2021'},
    {id: 5, year:'2020-21', value: '2020'},
    {id: 6, year:'2019-20', value: '2019'},
    {id: 7, year:'2018-19', value: '2018'},
    {id: 8, year:'2017-18', value: '2017'},
    {id: 9, year:'2016-17', value: '2016'},
]


export const clickLeague = [
    {id: 140, name: 'LA LIGA', country: 'Spain'},
    {id: 78, name: 'BUNDESLIGA', country: 'Germany'},
    {id: 39, name: 'PREMIER LEAGUE', country: 'England'},
    {id: 135, name: 'SERIE A', country: 'Italy'},
    {id: 61, name: 'LIGUE 1', country: 'France'}
]


export const boardDefault = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
];

const wordBank = [
    'PITCH', 'DUELS', 'FIELD', 'MESSI', 'SCORE', 'CLEAT', 'MATCH', 'SHOOT',
    'DRILL', 'TEAMS', 'CROSS', 'BLOCK', 'PRESS', 'COACH', 'TRAIN', 'CATCH',
    'RAMOS', 'DAVIS', 'KROOS', 'PIQUE', 'INTER', 'MILAN', 'UNION', 'MIAMI',
    'THROW', 'TRACK', 'GOALS', 'FODEN', 'CLEAR', 'SPORT', 'EXTRA', 'FINAL',
    'ASTON', 'VILLA', 'BETIS', 'CADIZ', 'LAZIO'
]

export const generateWord = async () => {
    const wordSet = new Set(wordBank);
    const todaysWord = wordBank[Math.floor(Math.random() * wordBank.length)];

    return { wordSet, todaysWord };
}