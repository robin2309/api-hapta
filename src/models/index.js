import Sequelize from 'sequelize';
import Event from './event';

let sequelize;

export const initConnection = () => {
    sequelize = new Sequelize(__CONFIG__.bdd.database, __CONFIG__.bdd.username, __CONFIG__.bdd.password, {
        host: __CONFIG__.bdd.host,
        dialect: 'mysql',
        pool: {
          max: 5,
          min: 0,
          idle: 10000
        },
        define: {
          timestamps: false
        }
    });

    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        });
}

export const EventModel = () => sequelize.define('events', Event);