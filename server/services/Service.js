//const logger = require('../logger.js');

class Service {
    constructor({
      sessionID,
      IPAddress
    }) {
      this.sessionID = sessionID;
      this.ipAddress = IPAddress;
    }
  
  }
  
  module.exports = Service;