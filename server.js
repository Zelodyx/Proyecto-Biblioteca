const express = require('express') 
const bookRouter = require('./routes/books')
const customerRouter = require('./routes/customers')
const loansRouter = require('./routes/loans')
const cors = require('cors')

class Server {
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.paths = {
            book:"/api/v1/book",
            customer:"/api/v1/customer",
            loans:"/api/v1/loans"
        }

        this.middlewares()
        this.routes()
    }

    routes(){

        this.app.use(this.paths.book, bookRouter)
        this.app.use(this.paths.customer, customerRouter)
        this.app.use(this.paths.loans, loansRouter)
  }

  middlewares(){
    this.app.use(cors()) //habilita origen crusado
    this.app.use(express.json())
  }

    listen(){
        this.app.listen(this.port, () =>{
            console.log('Servidor corriendo en el puerto 4000', this.port)
        })
    }
}

module.exports = Server