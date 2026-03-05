const userService = require('../services/service');
const bcrypt = require('bcrypt');
async function getUsers(request, reply) {
   const users = await userService.getAllUsers(request.server.db)
   return users
}
async function getUserById(request, reply) {
   const { id } = request.params;
   const user = await userService.getUserById(request.server.db, id)
   if (!user) {
      return { message: "Invalid userId" }
   }
   return user;
}
async function createUser(request, reply) {
   const { name } = request.body;
   const user = await userService.createUser(request.server.db, name);
   return user;
}
async function updateUser(request, reply) {
   const { id } = request.params;
   const data = request.body;
   if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
   }
   const user = await userService.updateUser(request.server.db, id, data);
   return user;
}
async function deleteUser(request, reply) {
   const { id } = request.params
   const user = await userService.deleteUser(request.server.db, id);
   return user;
}

async function register(request, reply) {
   const { name, age, email, password } = request.body;
   const hashedPassword = await bcrypt.hash(password, 10);
   const user = await userService.registerUser(
      request.server.db,
      name,
      age,
      email,
      hashedPassword
   );
   return user;
}
async function login(request, reply) {
   const { email, password } = request.body;
   const user = await userService.findUserByEmail(
      request.server.db,
      email
   );
   if (!user) {
      return reply.code(401).send({ message: "Invalid email" });
   }
   const validPassword = await bcrypt.compare(password, user.password);
   if (!validPassword) {
      return reply.code(401).send({ message: "Invalid password" });
   }
   const token = request.server.jwt.sign({
      id: user.id,
      email: user.email
   },{
      expiresIn: process.env.JWT_EXPIRES
   });
   return { token };
}
module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser, register, login }