async function getAllUsers(db) {
   // const result = await db.query('SELECT * FROM users');
   const result = await db`SELECT * FROM users`;
   return result;
}
async function getUserById(db, id) {
   const result = await db`select * from users where id=${id}`;
   return result[0];
}
async function createUser(db, name) {
   const result = await db`Insert into users(name) values(${name}) returning *`
   return result[0];
}
async function updateUser(db, id, data) {
   const result = await db`Update users set ${db(data)} where id=(${id}) returning *`
   return result[0];
}
async function deleteUser(db, id) {
   const result = await db`Delete from users where id=${id}`
   return { message: "User deleted succesfully" };
}
async function findUserByEmail(db, email) {
   const result = await db`
      SELECT * FROM users WHERE email = ${email}
   `;
   return result[0];
}
async function registerUser(db, name, age, email, password) {
   const result = await db`
      INSERT INTO users (name, age, email, password)
      VALUES (${name}, ${age}, ${email}, ${password})
      RETURNING id, name, email
   `;
   return result[0];
}
module.exports = {
   getAllUsers,
   getUserById,
   createUser,
   updateUser, deleteUser, findUserByEmail, registerUser
};