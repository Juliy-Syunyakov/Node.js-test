const fs = require('fs')
const path = require('path')

module.exports = (sequelize, DataTypes)=>{

    require('./User')(sequelize, DataTypes)
   
    return sequelize
}