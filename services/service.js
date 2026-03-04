async function getAllUsers(db) {
   const result = await db.query('SELECT * FROM users');
   return result.rows;
}
async function getUserById(db,id){
   const result=await db.query('select * from users where id=$1',[id]);
   return result.rows[0];
}
async function createUser(db,name){
   const result=await db.query(
      'Insert into users(name) values($1) returning *',[name]
   );
   return result.rows[0];
}
async function updateUser(db,id,name){
   const result =await db.query("Update users set name=$1 where id=$2 returning *",[name,id]);
   return result.rows[0];
}
async function deleteUser(db,id){
   const result=await db.query("Delete from users where id=$1",[id]);
   return {message:"User deleted succesfully"};
}

module.exports={getAllUsers,getUserById,createUser,updateUser,deleteUser};