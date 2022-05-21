module.exports = (sequelize, DataTypes)=>{
    const Device = sequelize.define('Device', {
        id:{
            type:DataTypes.INTEGER, 
            autoIncrement: true,
            primaryKey: true,
            allowNull:false
        },
        serial_number:{
            type:DataTypes.STRING, 
            allowNull:false
        },
        phone_number:{
            type:DataTypes.STRING, 
            allowNull:false
        },
        name:{
            type:DataTypes.STRING, 
            allowNull:false
        }
    })
    return Device
 
}