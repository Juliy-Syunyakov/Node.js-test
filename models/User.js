module.exports = (sequelize, DataTypes)=>{
    const User = sequelize.define('User', {
        id:{
            type:DataTypes.INTEGER, 
            autoIncrement: true,
            primaryKey: true,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING, 
            allowNull:false
        },
        password:{
            type:DataTypes.STRING, 
            allowNull:false
        },
        name:{
            type:DataTypes.STRING, 
            allowNull:false
        }
    })
    return User
 
}