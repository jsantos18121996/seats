const parser = require('xml-parser');

module.exports = (stringXML) => {
    let object = {};
    if (typeof stringXML === "string") {
        const xmlObject = parser(stringXML);
        const rows = xmlObject.root.children;
        const spaces = xmlObject.root.attributes.spaces;
        const rowsAndColumns = rows.map( row => {
            const columns = [];
            const offerItems = [];
            
            row.children.map( children => {
                if(children.name === "seat") {
                    columns.push({
                        status : children.attributes.status,
                        value : children.attributes.value
                    }) 
                } else if(children.name === "offerItem"){
                    offerItems.push({
                       id: children.attributes.id,
                       paxID : children.attributes.pax,
                       price : children.attributes.price,
                       segment : children.attributes.seg 
                    })
                }
            })
            if(spaces) {
                const col = {
                    status : "S",
                    value : row.attributes.number
                }
                columns.splice(parseInt(spaces), 0, col);
            } else {
            }
            return {
                rowNumber : row.attributes.number,
                columns: columns,
                offerItems: offerItems
            }
        })
        return rowsAndColumns;
    }
}