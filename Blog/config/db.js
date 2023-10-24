const Sequelize = require('sequelize');

module.exports = new Sequelize('APT', 'postgres', 'admin',{
    host: '127.0.0.1',
    port: '5432',
    dialect: 'postgres',
    poll:{
        max:5,
        min:0,
        acquire: 30000,
        idle: 10000
    },
    //logging : false
});


//const mongoose = require('mongoose');
//require('dotenv').config({path: 'variables.env'});

//mongoose.connect(process.env.DATABASE, {useNewUrlParser:true});

//mongoose.connection.on('error', (error) => {
//    console.log(error);
//})