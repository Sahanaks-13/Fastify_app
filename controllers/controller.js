const userService=require('../services/service');
async function getUsers(request,reply){
   const users=await userService.getAllUsers(request.server.db)
   return users
}
async function getUserById(request,reply){
   const {id}=request.params;
   const user=await userService.getUserById(request.server.db,id)
   return user;
}
async function createUser(request,reply){
   const {name}=request.body;
   const user=await userService.createUser(request.server.db,name);
   return user;
}
async function updateUser(request,reply){
   const {id}=request.params
   const {name}=request.body;
   const user=await userService.updateUser(request.server.db,id,name);
   return user;
}
async function deleteUser(request,reply){
   const {id}=request.params
   const user=await userService.deleteUser(request.server.db,id);
   return user;
}
module.exports={getUsers,getUserById,createUser,updateUser,deleteUser}