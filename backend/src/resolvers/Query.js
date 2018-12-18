const fetch = require('node-fetch');

const baseURL = `https://api.themoviedb.org/3/movie`;

const Query = {
    nowPlaying: () => {
        return fetch(`${baseURL}/now_playing?api_key=${process.env.API_KEY}&region=US`)
            .then(res => res.json());
    },
    popular: () => {
        return fetch(`${baseURL}/popular?api_key=${process.env.API_KEY}&region=US`)
            .then(res => res.json());
    }
};

module.exports = Query;
