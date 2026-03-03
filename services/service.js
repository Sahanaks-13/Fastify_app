async function getAllUsers(db) {
   const result = await db.query('SELECT * FROM users');
   return result.rows;
}
module.exports={getAllUsers};