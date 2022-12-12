const modelcustomers = {
    queryGetCustomers: "SELECT * FROM Customers",
    queryGetCustomersByID: `SELECT * FROM Customers WHERE ID = ?`,
    queryDeleteCustomersByID: `UPDATE Customers SET Active = 'N' WHERE ID = ?`,
    queryCustomerExist: `SELECT Mail FROM Customers WHERE Mail = ? `,
    queryAddCustomers: `INSERT INTO Customers(
        Name, 
        Last_name,
        Gender,
        Age,
        Mail,
        Telephone,
        Address,
        Active) 
    VALUES(
        ?,?,?,?,?,?,?,?)`,
}

module.exports = modelcustomers