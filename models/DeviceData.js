module.exports = (sequelize, DataTypes)=>{
    const DeviceData = sequelize.define('DeviceData', {
        id:{
            type:DataTypes.INTEGER, 
            autoIncrement: true,
            primaryKey: true,
            allowNull:false
        },
        data:{
            type:DataTypes.STRING, 
            allowNull:false
        }
    })
    return DeviceData
 
}