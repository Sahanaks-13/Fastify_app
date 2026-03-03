const userController=require("../controllers/controller");
async function userRoutes(fastify,options){
    fastify.get('/users',userController.getUsers)
}
module.exports=userRoutes