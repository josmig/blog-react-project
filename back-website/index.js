//conexion a la BD
const mongoose = require('mongoose');
const app = require('./app');
const port = process.env.PORT || 3977;
const port_db = 27017;
const { API_VERSION, IP_SERVER } = require('./config');


mongoose.connect(`mongodb://${IP_SERVER}:${port_db}`)