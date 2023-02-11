require('dotenv').config();
const mongoose = require('mongoose');

module.exports = class MongooseLoader {
    static load(){
        mongoose.set('strictQuery', false);
        mongoose.connect(process.env.mongoUri)

        mongoose.connection.on('connected', () => {
            console.log(`Mongoose connected on ${process.env.mongoUri}`);
        });
          
        mongoose.connection.on('error', err => {
            console.log('Mongoose connection error: ', err)
        });
        
        mongoose.connection.on('disconnected', () => {
            console.log('Mongoose disconnected');
        });
    }
}