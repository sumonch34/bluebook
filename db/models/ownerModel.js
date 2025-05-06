

const ownerModel = (sequelize, DataTypes) =>{
    const Owner = sequelize.define("owner",{
        name : {
            type : DataTypes.STRING, 
            allowNull : false
        }, 
        email : {
            type : DataTypes.STRING,
            allowNull : false
        }, 
        phone : {
            type : DataTypes.FLOAT,
            allowNull : false
        }, 
        phone2 : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        nin : {
            type : DataTypes.FLOAT,
            allowNull : false
        },
        address : {
            type : DataTypes.FLOAT,
            allowNull : false
        },

     })
    
     return Owner
}

module.exports = ownerModel