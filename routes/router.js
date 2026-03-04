const userController=require("../controllers/controller");
async function userRoutes(fastify,options){
    fastify.get('/users',userController.getUsers);
    fastify.get('/users/:id',userController.getUserById);
    fastify.post('/users',userController.createUser);
    fastify.put('/users/:id',userController.updateUser);
    fastify.patch('/users/:id',userController.updateUserPartially);
    fastify.delete('/users/:id',userController.deleteUser);
}

module.exports=userRoutes