module.exports = {
    variables: {
        servicesEndpoint: {
            search: 'http://ec2-18-118-150-199.us-east-2.compute.amazonaws.com:8080/pests-service/reportOne',
            reportOne: 'http://ec2-3-136-154-5.us-east-2.compute.amazonaws.com:8080/pests-service/reportOne',
            reportTwo: 'http://ec2-3-136-154-5.us-east-2.compute.amazonaws.com:8080/pests-service/reportTwo',
            reportThree: 'http://ec2-3-136-154-5.us-east-2.compute.amazonaws.com:8080/pests-service/reportThree'
        }
    },
    allowedOrigins: ['https://seats-frontend.netlify.app', 'http://localhost:3000']
}