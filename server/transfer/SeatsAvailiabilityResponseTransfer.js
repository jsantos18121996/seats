const seatsRowsAndColumnsFormatter = require("../util/seatsRowsAndColumnsFormatter");
const seatInfoFormatter = require("../util/seatInfoFormatter");

module.exports = (data) => {
    if (data.error) {
        return {
            error: data.error
        }
    }
    if (data.errors) {
        return {
            error: {
                message: data.errors.error[0].value
            }
        }
    }
    const segments = data.pricedOffer[0].originDestination.map( option => {
        const seatsColumnsAndRows = option.tpaextensions && option.tpaextensions.any.length > 0 ? seatsRowsAndColumnsFormatter(option.tpaextensions.any[0]) : null;
        return {
                origin : option.originLocation.locationCode,
                destination : option.destinationLocation.locationCode,
                rows : seatsColumnsAndRows ? seatsColumnsAndRows : []
        }
    } );
    const seatInfo = data.pricedOffer[0].seatInfo.tpaextensions && 
        data.pricedOffer[0].seatInfo.tpaextensions.any.length > 0 ? 
        seatInfoFormatter(data.pricedOffer[0].seatInfo.tpaextensions.any[0]) : null;

    const passengers = data.traveler.airTraveler.map( airTraveler => {
        return {
            id : airTraveler.rph,
            passengerTypeCode : airTraveler.passengerTypeCode,
            firstName : airTraveler.personName.givenName[0],
            lastName: airTraveler.personName.surname
        }
    } )
    return {
        segments,
        passengers,
        seatInfo
    }
}