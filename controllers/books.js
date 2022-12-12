const { request, response } = require("express");
const pool = require("../db/connection");
const modelbooks = require ("../models/books");

const addBook = async (req = request, res = response) =>{
    const {
        Title, 
        Author,
        Editorial,
        Category,
        Pages,
        Stock = "S",
    } = req.body
    
    if(!Title|| 
        !Author||
        !Editorial||
        !Category|| 
        !Pages)
    {
        res.status(400).json({msg:"Hacen falta datos!"})
        return
    }

    let conn;
    
    try{
        conn = await pool.getConnection() //Realizamons la conexion

        const [bookExist] = await conn.query(modelbooks.queryBookExist,[Title])

        if(bookExist){
            res.status(400).json({msg: `El Libro ${Title} ya se encuntra registrado en la base de datos.`})
            return
        }
        //Generamos la consulta
        const result = await conn.query(modelbooks.queryAddBooks,[
            Title, 
            Author,
            Editorial,
            Category,
            Pages,
            Stock], (error) => {if (error) throw error})

        if (result.affectedRows ===0){ //En caso de no haber registros lo informamos
            res.status(400).json({msg: `No se pudo agregar el Libro a la base de datos`})
            return
        }

        res.json({msg:`Se agrego satisfactoriamente el Libro a la base de datos`}) //Se manda la lista de usuarios
    }
    catch(error){
        console.log(error)
        res.status(500).json({msg: error}) //Informamos el error
    }
    
    finally{
        if(conn) conn.end() //Termina la conexion
    }
    }

const getBook = async (req = request, res = response) =>{
    let conn;
    
    try{
        conn = await pool.getConnection() //Realizamons la conexion

        //Generamos la consulta
        const Books = await conn.query(modelbooks.queryGetBooks, (error) => {if (error) throw error})

        if (Books.length===0){ //En caso de no haber registros lo informamos
            res.status(404).json({msg: "No existen libros registrados"})
            return
        }

        res.json({Books}) //Se manda la lista de usuarios
    }
    catch(error){
        console.log(error)
        res.status(500).json({msg: error}) //Informamos el error
    }
    
    finally{
        if(conn) conn.end() //Termina la conexion
    }
    }   

const deleteBookById = async (req = request, res = response) =>{
    const {id} = req.params
        let conn;
        
        try{
            conn = await pool.getConnection() //Realizamons la conexion
    
            //Generamos la consulta
           const result = await conn.query(modelbooks.queryDeleteBookByID, [id], (error) => {if (error) throw error})
    
            if (result.affectedRows ===0){ //En caso de no haber registros lo informamos
                res.status(404).json({msg: `No existe libro registrado con el ID ${id}`})
                return
            }
    
             res.json({msg:`Se elimino satisfactoriamente el libro`}) //Se manda la lista de usuarios
        }
        catch(error){
           console.log(error)
            res.status(500).json({msg: error}) //Informamos el error
        }
        
       finally{
            if(conn) conn.end() //Termina la conexion
        }
    
    }    

const getBookByID = async (req = request, res = response) =>{
    const {id} = req.params
   let conn;
    
    try{
        conn = await pool.getConnection() //Realizamons la conexion

        //Generamos la consulta
        const [book] = await conn.query(modelbooks.queryGetBookByID, [id], (error) => {if (error) throw error})

        if (!book){ //En caso de no haber registros lo informamos
            res.status(404).json({msg: `No existe libro registrado con el ID ${id}`})
            return
        }

        res.json({book}) //Se manda la lista de usuarios
   }
   catch(error){
        console.log(error)
        res.status(500).json({msg: error}) //Informamos el error
    }
    
    finally{
        if(conn) conn.end() //Termina la conexion
    }
    } 

const updateBookByID = async (req = request, res = response) =>{
    const {id} = req.params
            const {
                Title, 
                Author,
                Editorial,
                Category,
                Pages,
                Stock
                   } = req.body
            
            if(
                !Title|| 
                !Author||
                !Editorial||
                !Category||
                !Pages||
                !Stock
               )
            {
                res.status(400).json({msg:"Faltan Datos"})
                return
            }

            let conn;
            
            try{
                conn = await pool.getConnection() //Realizamons la conexion
        
                //Generamos la consulta
                const result = await conn.query(`UPDATE Books SET 
                Title = '${Title}', 
                Author = '${Author}',
                Editorial = '${Editorial}',
                Category = '${Category}',
                Pages = '${Pages}',
                Stock = '${Stock}'
                WHERE ID = ${id}`, (error) => {if (error) throw error})
        
                if (result.affectedRows ===0){ //En caso de no haber registros lo informamos
                    res.status(400).json({msg: `No se pudo modificar el libro`})
                    return
                }
        
                res.json({msg:`Se modifico satisfactoriamente el libro`}) //Se manda la lista de usuarios
            }
            catch(error){
                console.log(error)
                res.status(500).json({msg: error}) //Informamos el error
            }
            
            finally{
                if(conn) conn.end() //Termina la conexion
           }
    }     
module.exports = {addBook, getBook, deleteBookById, getBookByID, updateBookByID}