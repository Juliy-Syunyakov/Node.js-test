const { Sequelize, DataTypes }=require('sequelize')
const sequelize = new Sequelize('base', 'postgres', 'postgres', {
    dialect: 'postgres', 
    host: 'localhost',
    port: '5432',
    define:{
        freezeTableName: true
    }
   // logging: false
})
require('../models')(sequelize, DataTypes)
try {
    sequelize.authenticate()
    sequelize.sync()
    console.log('Connection, sync has been established successfully.');
    
}catch(error){
    console.error('Unable to connect or sync to the database:', error);
}