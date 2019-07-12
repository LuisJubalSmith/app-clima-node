const axios = require('axios');


const getClima = async(lat, lng) => {



    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=bc1a76b7453f363ea6a36d21c0f569f7&units=metric`)

    return resp.data.main.temp;

}

module.exports = {

    getClima

}