// const axios = require('axios');
const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js')

const argv = require('yargs').options({
        direccion: {
            alias: 'd',
            desc: 'Direccion de la ciydad para obtener el clima',
            demand: true
        }
    })
    .argv;

// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log)

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);
// console.log(argv.direccion);

const getInfo = async(direccion) => {

    try {
        const cordenada = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(cordenada.lat, cordenada.lng);
        return `El clima de ${cordenada.direccion} es de ${temp}.`;
    } catch {
        return `No se pudo determinar ${direccion}`;
    }


}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);

// const encodedUlr = encodeURI(argv.direccion);
// console.log(encodedUlr);

// const instance = axios.create({
//     baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUlr}`,
//     // timeout: 1000,
//     headers: {
//         'X-RapidAPI-Key': '728ea07b2amshbf679aa800782ddp1df6cdjsnd8650d6dd4a8'
//     }
// });

// instance.get()
//     .then(resp => {

//         // console.log(resp);
//         console.log(resp.data.Results[0]);
//     })
//     .catch(err => {
//         console.log('Error!!', err);
//     })