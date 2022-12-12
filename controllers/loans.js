const { request, response } = require("express");
const { title } = require("process");
const pool = require("../db/connection");
const modelloans = require("../models/loans");

const addLoans = async (req = request, res = response) =>{
    const {
        Book_Title,
        Customer_Name,
        Customer_Last_name,
        Customer_Mail,
        Active = 'S',

    } = req.body
    
    if( !Book_Title||
        !Customer_Name||
        !Customer_Last_name||
        !Customer_Mail
        )
    {
        res.status(400).json({msg:"Hacen falta datos!"})
        return
    }

    let conn;
    
    try{
        conn = await pool.getConnection() //Realizamons la conexion

        const [bookExist] = await conn.query(modelloans.queryBookExist,[Book_Title])
    
            if(!bookExist){
            res.status(400).json({msg: `El Libro ${Book_Title} no se encuentra registrado en la base de datos.`})
            return
            }
 
        const [customerExist] = await conn.query(modelloans.queryCustomerExist,[Customer_Mail])
    
            if(!customerExist){
                res.status(400).json({msg:"El cliente ingresado no se encuentra en la base de datos"})
                return
            }

        const result = await conn.query(modelloans.queryAddLoan,[
            Book_Title,
            Customer_Name,
            Customer_Last_name,
            Customer_Mail,
            Active], (error) => {if (error) throw error})
    
            

            //const result = await conn.query(modelloans.queryReturn, [Returned, id], (error) => {if (error) throw error})

        res.json({msg:`Se realizo exitosamente el registro en la base de datos`}) //Se manda la lista de usuarios
    }
    catch(error){
        console.log(error)
        res.status(500).json({msg: error}) //Informamos el error
    }
    
    finally{
        if(conn) conn.end() //Termina la conexion
    }
    }

const returnedBook = async (req = request, res = response) =>{
    const {id} = req.params

    const {Returned} = req.body
    
        let conn;
        
        try{
            conn = await pool.getConnection() //Realizamons la conexion
    
            //Generamos la consulta
           const result = await conn.query(modelloans.queryReturn, [Returned, id], (error) => {if (error) throw error})
    
            if (result.affectedRows ===0){ //En caso de no haber registros lo informamos
                res.status(404).json({msg: `No existe prestamos registrado con el ID ${id}`})
                return
            }

            const result2 = await conn.query(modelloans.queryReturn2, [id], (error) => {if (error) throw error})
    
             res.json({msg:`Se actualizo satisfactoriamente el registro`}) //Se manda la lista de usuarios
        }
        catch(error){
           console.log(error)
            res.status(500).json({msg: error}) //Informamos el error
        }
        
       finally{
            if(conn) conn.end() //Termina la conexion
        }
    
    }

const getLoans = async (req = request, res = response) =>{
    let conn;
    
    try{
        conn = await pool.getConnection() //Realizamons la conexion

        //Generamos la consulta
        const Loans = await conn.query(modelloans.queryGetLoans, (error) => {if (error) throw error})

        if (Loans.length===0){ //En caso de no haber registros lo informamos
            res.status(404).json({msg: "No existen prestamos registrados"})
            return
        }

        res.json({Loans}) //Se manda la lista de usuarios
    }
    catch(error){
        console.log(error)
        res.status(500).json({msg: error}) //Informamos el error
    }
    
    finally{
        if(conn) conn.end() //Termina la conexion
    }
    }   

const getCustomerLoans = async (req = request, res = response) =>{
    const {Customer_Mail} = req.body

    let conn;
    
    try{
        conn = await pool.getConnection() //Realizamons la conexion

        //Generamos la consulta
        const Loans = await conn.query(modelloans.queryGetCustomerLoans,[Customer_Mail], (error) => {if (error) throw error})

        if (Loans.length===0){ //En caso de no haber registros lo informamos
            res.status(404).json({msg: "No existen prestamos registrados a este usuario"})
            return
        }

        res.json({Loans}) //Se manda la lista de usuarios
    }
    catch(error){
        console.log(error)
        res.status(500).json({msg: error}) //Informamos el error
    }
    
    finally{
        if(conn) conn.end() //Termina la conexion
    }
    }     

module.exports = {addLoans, returnedBook, getLoans, getCustomerLoans}