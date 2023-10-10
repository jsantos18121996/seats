const axios = require('axios');
const CircularJSON = require('circular-json');
const Service = require('./Service');
const {
  reportOne, reportTwo, reportThree
} = require('../../config/env').variables.servicesEndpoint;
const seatsResponse = require('../services/data/seatsRS2.json');
const seatsByPlantByIdResponse = require('../services/data/seatsByPlantId.json');
const terrainsByPeriodResponse = require('../services/data/terrainsByPeriod.json');


class SeatsService extends Service {

  async getSeats(request) {

    let mockeado = false

    if (mockeado) {
      try {
        return seatsResponse;
      } catch (error) {
        console.log('ocurrio un error en el service ', seatsResponse);
        return error;
      }
    } else {
      let URI = `${reportOne}`;
      console.log('request ', request, URI);
      try {
        const response = await axios.post(URI, request);
        console.log('response ', CircularJSON.stringify(response.data));
        return JSON.parse(CircularJSON.stringify(response.data));
      } catch (error) {
        return {
          error: { message: error.message },
          transactionStatusCode: 1003,
          pricedOffer: null
        }
      }
    }
  }

  async getSeatsByPlantId(id) {
    let mockeado = false;
    console.log('plantById -> ', id);
    if (mockeado) {
      try {
        console.log('request mock ', id);
        return seatsByPlantByIdResponse;
        /*return {//para probar lo que muestra la tabla visual cuando no encuentra resultados
          data : []
        }*/
      } catch (error) {
        console.log('ocurrio un error en el service ', error);
        return {
          error: { message: error.message },
          transactionStatusCode: 1003,
          data: []
        };
      }
    } else {
      console.log("joder que no sale ");
      let URI = `${reportTwo}/${id}`;
      console.log('request ', URI);
      try {
        const response = await axios.get(URI);
        console.log('response ', CircularJSON.stringify(response.data));
        return JSON.parse(CircularJSON.stringify(response.data));
      } catch (error) {
        return {
          error: { message: error.message },
          transactionStatusCode: 1003,
          data: []
        }
      }
    }
  }

  async getTerrainsByPeriod(request) {

    let mockeado = false

    if (mockeado) {
      try {
        return terrainsByPeriodResponse;
      } catch (error) {
        console.log('ocurrio un error en el service ', error);
        return error;
      }
    } else {
      const URI = `${reportThree}`;
      console.log('request ', request, URI);
      try {
        const response = await axios.post(URI, request);
        console.log('response ', CircularJSON.stringify(response.data));
        return JSON.parse(CircularJSON.stringify(response.data));
      } catch (error) {
        return {
          error: { message: error.message },
          transactionStatusCode: 1003,
          terrains: []
        }
      }
    }
  }

}

module.exports = SeatsService;