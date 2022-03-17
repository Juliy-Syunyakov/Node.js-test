const fs = require('fs')
const path = require('path')
/*
1 Один к одному - существует между a и b, с внешним ключом в b
2 Один ко многим - существует между a и b, с внешним ключом в a
3 Многое ко многим - существует между a и b, с внешним ключом в с(доп таблица)
*/ 
module.exports = (sequelize, DataTypes)=>{

    require('./User')(sequelize, DataTypes)
    require('./Device')(sequelize, DataTypes)
    require('./DeviceData')(sequelize, DataTypes)
    sequelize.models.User.hasMany(sequelize.models.Device)
    sequelize.models.Device.hasMany(sequelize.models.DeviceData)
    return sequelize
}