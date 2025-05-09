

const { taxes } = require("../db/connection")

exports.fetchTaxes = async function(req,res){
    // logic to fetch taxes from database 
    const allTaxes = await taxes.findAll() // select * from books, books.find(), always returns array
    res.json({
        message : "Taxes fetched successfully", 
        allTaxes
    })
}

exports.addTax = async function(req,res){
    
    const {vehicle_id, fiscal_year, current_tax_amount, no_of_years_to_renew, fine, renew_charge, sub_total, service_charge, discount, grand_total} = req.body
    // check if all data is taken 
    await taxes.create({
        vehicle_id : vehicle_id,
        fiscal_year: fiscal_year,
        current_tax_amount: current_tax_amount,
        no_of_years_to_renew: no_of_years_to_renew,
        fine: fine,
        renew_charge: renew_charge,
        sub_total: sub_total,
        service_charge: service_charge,
        discount: discount,
        grand_total: grand_total
         // columName : value
    })
    res.json({
        message : "Tax added successfully"
    })
}

exports.deleteTax = async function(req,res){
    //get id of the record to delete
    const id = req.params.id // const {id} = req.params
//    const id = req.body.id 
    // destroy after getting id
    await taxes.destroy({
        where : {
            id
        }
    }) // delete from books where id = id
    res.json({
      message : "Tax Deleted successfully"
    })
}


exports.editTax = async function(req,res){
   try {
    // get id to update
    const id = req.params.id
    // get column names to update 
    const {vehicle_id, fiscal_year, current_tax_amount, no_of_years_to_renew, fine, renew_charge, sub_total, service_charge, discount, grand_total} = req.body

    await taxes.update({vehicle_id, fiscal_year, current_tax_amount, no_of_years_to_renew, fine, renew_charge, sub_total, service_charge, discount, grand_total },{
        where : {
            id : id
        }
    })

    res.json({
      message : "Tax updated successfully"
    })
   } catch (error) {
    res.json({
        message : "Something went wrong"
    })
   }
}

exports.singleFetchTax = async function(req,res){
    // get id to fetch 
    const id = req.params.id 
    const allTaxes = await taxes.findByPk(id) // always returns object
    // books.findAll({
    //     where : {
    //         bookName : "hello world", 
    //         authorName : "manish"
    //     }
    // })
    // }) // select * from books where bookName="hello world" && authorName = "manish"
    // const datass = await books.findAll({
    //     where : {
    //         id : id
    //     }
    // }) // always returns array
    res.json({
        message : "Single Book fetched successfully", 
        allTaxes, 
    })

}

// module.exports = {fetchBooks,addBook,deleteBook,editBook} yesari pani milxa hai garna chai 
