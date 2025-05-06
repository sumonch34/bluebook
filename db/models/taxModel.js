const { sequelize } = require("../connection");

const taxModel = (sequelize, DataTypes) =>{
    const Tax = sequelize.define("tax",{
        vehicle_id : {
            type : DataTypes.STRING, 
            allowNull : false
        }, 
        fiscal_year : {
            type : DataTypes.STRING,
            allowNull : false
        }, 
        current_tax_amount : {
            type : DataTypes.FLOAT,
            allowNull : false
        }, 
        no_of_years_to_reneW : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        fine : {
            type : DataTypes.FLOAT,
            allowNull : false
        },
        renew_charge : {
            type : DataTypes.FLOAT,
            allowNull : false
        },
        sub_total : {
            type : DataTypes.FLOAT,
            allowNull : false
        },
        service_charge : {
            type : DataTypes.FLOAT,
            allowNull : false
        },
        discount : {
            type : DataTypes.FLOAT,
            allowNull : false
        },
        grand_total : {
            type : DataTypes.FLOAT,
            allowNull : false
        }

     })
    
     return Tax
}

module.exports = taxModel