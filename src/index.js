require('dotenv').config();

// Server Config
const app = require('./server');

// Database
require('./database');

// Starting the server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`)
});




