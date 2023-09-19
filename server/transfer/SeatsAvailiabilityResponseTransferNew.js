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

    return {
        periodSelected: data.periodCode,
        terrainSelected: data.terrainCode,
        rows: data.rows
    }
}