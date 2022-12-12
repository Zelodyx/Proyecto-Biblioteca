const { request, response } = require("express");
const pool = require("../db/connection");
const modelcustomers = require("../models/customers");
const modelbooks = require ("../models/customers");

const addCustomers = async (req = request, res = response) =>{
    const {
        Name, 
        Last_name,
        Gender = "-",
        Age,
        Mail,
        Telephone,
        Address,
        Active = "S"
    } = req.body
    
    if(!Name|| 
       !Last_name||
       !Age||
       !Mail||
       !Telephone||
       !Address)
    {
        res.status(400).json({msg:"Hacen falta datos!"})
        return
    }

    let conn;
    
    try{
        conn = await pool.getConnection() //Realizamons la conexion

        const [customerExist] = await conn.query(modelcustomers.queryCustomerExist,[Mail])

        if(customerExist){
            res.status(400).json({msg: `El Cliente ${Mail} ya se encuntra registrado en la base de datos.`})
            return
        }
        //Generamos la consulta
        const result = await conn.query(modelcustomers.queryAddCustomers,[
            Name, 
            Last_name,
            Gender,
            Age,
            Mail,
            Telephone,
            Address,
            Active], (error) => {if (error) throw error})

        if (result.affectedRows ===0){ //En caso de no haber registros lo informamos
            res.status(400).json({msg: `No se pudo agregar el Cliente a la base de datos`})
            return
        }

        res.json({msg:`Se agrego satisfactoriamente el Cliente a la base de datos`}) //Se manda la lista de usuarios
    }
    catch(error){
        console.log(error)
        res.status(500).json({msg: error}) //Informamos el error
    }
    
    finally{
        if(conn) conn.end() //Termina la conexion
    }
    }

const getCustomers = async (req = request, res = response) =>{
    let conn;
    
    try{
        conn = await pool.getConnection() //Realizamons la conexion

        //Generamos la consulta
        const Customer = await conn.query(modelcustomers.queryGetCustomers, (error) => {if (error) throw error})

        if (Customer.length===0){ //En caso de no haber registros lo informamos
            res.status(404).json({msg: "No existen Clientes registrados"})
            return
        }

        res.json({Customer}) //Se manda la lista de usuarios
    }
    catch(error){
        console.log(error)
        res.status(500).json({msg: error}) //Informamos el error
    }
    
    finally{
        if(conn) conn.end() //Termina la conexion
    }
    }   

const deleteCustomersById = async (req = request, res = response) =>{
    const {id} = req.params
        let conn;
        
        try{
            conn = await pool.getConnection() //Realizamons la conexion
    
            //Generamos la consulta
           const result = await conn.query(modelcustomers.queryDeleteCustomersByID, [id], (error) => {if (error) throw error})
    
            if (result.affectedRows ===0){ //En caso de no haber registros lo informamos
                res.status(404).json({msg: `No existe Cliente registrado con el ID ${id}`})
                return
            }
    
             res.json({msg:`Se elimino satisfactoriamente el CLiente`}) //Se manda la lista de usuarios
        }
        catch(error){
           console.log(error)
            res.status(500).json({msg: error}) //Informamos el error
        }
        
       finally{
            if(conn) conn.end() //Termina la conexion
        }
    
    }    

const getCustomerByID = async (req = request, res = response) =>{
    const {id} = req.params
   let conn;
    
    try{
        conn = await pool.getConnection() //Realizamons la conexion

        //Generamos la consulta
        const [customer] = await conn.query(modelcustomers.queryGetCustomersByID, [id], (error) => {if (error) throw error})

        if (!customer){ //En caso de no haber registros lo informamos
            res.status(404).json({msg: `No existe cliente registrado con el ID ${id}`})
            return
        }

        res.json({customer}) //Se manda la lista de usuarios
   }
   catch(error){
        console.log(error)
        res.status(500).json({msg: error}) //Informamos el error
    }
    
    finally{
        if(conn) conn.end() //Termina la conexion
    }
    } 

const updateCustomerByID = async (req = request, res = response) =>{
    const {id} = req.params
            const {
                Name, 
                Last_name,
                Gender,
                Age,
                Mail,
                Telephone,
                Address,
                Active} = req.body
            
            if(
                !Name|| 
                !Last_name||
                !Gender||
                !Age||
                !Mail||
                !Telephone||
                !Address||
                !Active
               )
            {
                res.status(400).json({msg:"Faltan Datos"})
                return
            }

            let conn;
            
            try{
                conn = await pool.getConnection() //Realizamons la conexion
        
                //Generamos la consulta
                const result = await conn.query(`UPDATE Customers SET 

                Name = '${Name}', 
                Last_name = '${Last_name}',
                Gender = '${Gender}',
                Age = '${Age}',
                Mail = '${Mail}',
                Telephone = '${Telephone}',
                Address = '${Address}',
                Active = '${Active}'
                WHERE ID = ${id}`, (error) => {if (error) throw error})
        
                if (result.affectedRows ===0){ //En caso de no haber registros lo informamos
                    res.status(400).json({msg: `No se pudo modificar el Cliente`})
                    return
                }
        
                res.json({msg:`Se modifico satisfactoriamente el Cliente`}) //Se manda la lista de usuarios
            }
            catch(error){
                console.log(error)
                res.status(500).json({msg: error}) //Informamos el error
            }
            
            finally{
                if(conn) conn.end() //Termina la conexion
           }
    }     
module.exports = {addCustomers, getCustomers, deleteCustomersById, getCustomerByID, updateCustomerByID}