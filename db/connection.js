
const {Sequelize, DataTypes} = require("sequelize");

const sequelize = new Sequelize("postgresql://postgres.pomwnafocdhtrujqljjh:dA53MV6pIYQzT4fG@aws-0-ap-south-1.pooler.supabase.com:6543/postgres");

sequelize.authenticate()
.then(()=>{
    console.log("Authenticated !!")
})
.catch((err)=>{
    console.log("Error occured" +err)
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize


db.taxes =  require("./models/taxModel")(sequelize,DataTypes)
db.owners =  require("./models/ownerModel")(sequelize,DataTypes)




// migrate code ho yo chai hai 
sequelize.sync({force : true}).then(()=>{
    console.log("Migration Successful 🚀")
})








module.exports = db