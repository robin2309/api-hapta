import Sequelize from 'sequelize';

export default {
	id: {
   		type: Sequelize.INTEGER,
   		primaryKey: true
   	},
  	name: {
    	type: Sequelize.STRING
  	},
  	place: {
    	type: Sequelize.STRING
  	}
};