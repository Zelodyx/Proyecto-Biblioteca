const {Router} = require("express")
const {addBook, getBook, deleteBookById, getBookByID, updateBookByID} = require("../controllers/books")
const router = Router()

///POST///
router.post("/", addBook)
router.post("/id/:id", updateBookByID)

///GET///
router.get("/", getBook)
router.get("/id/:id", getBookByID)

///DELETE///
router.delete("/id/:id", deleteBookById)

module.exports = router