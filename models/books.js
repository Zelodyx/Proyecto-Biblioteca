const modelbooks = {
    queryGetBooks: "SELECT * FROM Books",
    queryGetBookByID: `SELECT * FROM Books WHERE ID = ?`,
    queryDeleteBookByID: `UPDATE Books SET Stock = 'N' WHERE ID = ?`,
    queryBookExist: `SELECT Title FROM Books WHERE Title = ? `,
    queryAddBooks: `INSERT INTO Books(
        Title, 
        Author,
        Editorial,
        Category,
        Pages,
        Stock) 
    VALUES(
        ?,?,?,?,?,?)`,
}

module.exports = modelbooks