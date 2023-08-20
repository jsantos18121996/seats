const parser = require('xml-parser');

module.exports = (stringXML) => {
    if (typeof stringXML === "string") {
        const xmlObject = parser(stringXML);
        const info = xmlObject.root.children[0];
        const seatInfo =  {
            offerId : info.attributes.offerId,
            orderId: info.attributes.orderId,
            responseId: info.attributes.responseId
        }
        return seatInfo;
    }
}