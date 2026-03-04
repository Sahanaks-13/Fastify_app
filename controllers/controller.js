const userService=require('../services/service');
async function getUsers(request,reply){
   const users=await userService.getAllUsers(request.server.db)
   return users
}
module.exports={getUsers}