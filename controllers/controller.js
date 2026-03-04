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
module.exports={getUsers,getUserById}