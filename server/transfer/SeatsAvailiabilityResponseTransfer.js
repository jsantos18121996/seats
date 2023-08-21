const seatsRowsAndColumnsFormatter = require("../util/seatsRowsAndColumnsFormatter");

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

    const periods = data.periods.map(p => {
        const period = p.period;
        return {
            period
        }
    })

    const terrains = data.periods[0].terrains.map(t => {
        const terrain = t.terrain;
        return {
            terrain
        }
    })

    const trees = data.periods.map(period => {
        const terrains = period.terrains.map(terrain => {
            const rows = terrain.tpaextensions && terrain.tpaextensions.any.length > 0 ? seatsRowsAndColumnsFormatter(terrain.tpaextensions.any[0]) : null;
            return {
                terrain : terrain.terrain,
                rows
            }
        })
        return {
            period: period.period,
            terrains
        }
    });

    return {
        trees,
        periods,
        terrains
    }
}