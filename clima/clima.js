const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=5f9cf5b6eef1a5194291948bbafe1234&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}