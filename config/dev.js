module.exports = {
    variables: {
        servicesEndpoint: {
            reportOne: 'http://ec2-3-136-154-5.us-east-2.compute.amazonaws.com:8080/pests-service/reportOne',
            reportTwo: 'http://ec2-3-136-154-5.us-east-2.compute.amazonaws.com:8080/pests-service/reportTwo',
            reportThree: 'http://ec2-3-136-154-5.us-east-2.compute.amazonaws.com:8080/pests-service/reportThree'
            //search: 'http://ec2-18-118-150-199.us-east-2.compute.amazonaws.com:8080/pests-service/reportOne'
        }
    },
    allowedOrigins: ['http://localhost:3000']
}
