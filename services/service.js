async function getAllUsers(db) {
   const result = await db.query('SELECT * FROM users');
   return result.rows;
}
async function getUserById(db,id){
   const result=await db.query('select * from users where id=$1',[id]);
   return result.rows[0];
}
module.exports={getAllUsers,getUserById};