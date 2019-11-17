// Detect whether we are in a production or development enviroment
const baseUrl = 
    process.env.NODE_ENV === "production" 
        ? 'https://deployment-url.now.sh'
        : 'http://localhost:3000'

export default baseUrl      