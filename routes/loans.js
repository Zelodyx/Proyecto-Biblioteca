const {Router} = require("express")
const { addLoans, returnedBook, getLoans, getCustomerLoans } = require("../controllers/loans")
const router = Router()

///POST///
router.post("/", addLoans)
router.post("/id/:id", returnedBook)

///GET///
router.get("/", getLoans)
router.get("/customer", getCustomerLoans)

module.exports = router