

const { fetchTaxes, addTax, deleteTax, editTax, singleFetchTax } = require("../controllers/taxController")

const router = require("express").Router()

router.route("/taxes").get(fetchTaxes).post(addTax)
router.route("/taxes/:id").delete(deleteTax).get(singleFetchTax).patch(editTax)



module.exports = router