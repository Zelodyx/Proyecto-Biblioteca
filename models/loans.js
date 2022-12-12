const modelloans = {
    queryGetLoans: "SELECT * FROM Loans",
    queryGetCustomerLoans: "SELECT * FROM Loans WHERE Customer_Mail = ?",
    queryBookExist: `SELECT Title FROM Books WHERE Title = ? `,
    queryCustomerExist: `SELECT Mail FROM Customers WHERE Mail = ? `,
    queryReturn: `UPDATE Loans SET Returned = ? WHERE id = ?`,
    queryReturn2: `UPDATE Loans SET Active = 'N' WHERE id = ?`,
    queryAddLoan: `INSERT INTO Loans(
        Book_Title,
        Customer_Name,
        Customer_Last_name,
        Customer_Mail,
        Active)
        VALUES(?,?,?,?,?)`
}

module.exports = modelloans