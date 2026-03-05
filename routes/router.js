const userController=require("../controllers/controller");
const authenticate=require("../middleware/authenticate");
async function userRoutes(fastify,options){
    fastify.get('/users',{preHandler:[authenticate]},userController.getUsers);
    fastify.get('/users/:id',{preHandler:[authenticate]},userController.getUserById);
    fastify.post('/users',{preHandler:[authenticate]},userController.createUser);
    fastify.post('/register',userController.register);
    fastify.post('/login',userController.login);
    fastify.post('/refreshToken',userController.refreshToken);
    fastify.put('/users/:id',{preHandler:[authenticate]},userController.updateUser);
    fastify.patch('/users/:id',{preHandler:[authenticate]},userController.updateUser);
    fastify.delete('/users/:id',{preHandler:[authenticate]},userController.deleteUser);
}

module.exports=userRoutes