const userController=require("../controllers/controller");
async function userRoutes(fastify,options){
    fastify.get('/users',userController.getUsers);
    fastify.get('/users/:id',userController.getUserById);
    fastify.post('/users',userController.createUser);
}
module.exports=userRoutes