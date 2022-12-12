const {Router} = require("express")
const {addCustomers, getCustomers, deleteCustomersById, getCustomerByID, updateCustomerByID} = require("../controllers/customers")
const router = Router()

///POST///
router.post("/", addCustomers)
router.post("/id/:id", updateCustomerByID)

///GET///
router.get("/", getCustomers)
router.get("/id/:id", getCustomerByID)

///DELETE///
router.delete("/id/:id", deleteCustomersById)

module.exports = router