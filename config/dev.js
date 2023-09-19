module.exports = {
    variables: {
        servicesEndpoint: {
            //search: 'http://localhost:8086/reportOne',
            search: 'http://ec2-18-118-150-199.us-east-2.compute.amazonaws.com:8080/pests-service/reportOne'
        }
    },
    allowedOrigins: ['http://localhost:3000']
}
