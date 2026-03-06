require('dotenv').config();
const fastify=require('fastify')({logger:true})
const userRouter=require("./routes/router")

fastify.register(require("./plugins/db"));
fastify.register(require('@fastify/jwt'), {
  secret: process.env.JWT_SECRET
});
fastify.register(userRouter);
fastify.get("/",async(request,reply)=>{
    // return `Click on it to fetch users details:${`http://127.0.0.1:3000/users`}`
    // reply.redirect('/users');
    return {
        message: "Click to fetch users",
        url: "http://127.0.0.1:3000/users"
    };
})
const start=async()=>{
    try{
        await fastify.listen({port: process.env.PORT || 3000,host: "0.0.0.0"});
        fastify.log.info("Server is running");
    }catch(err){
        fastify.log.error(err);
        process.exit(1);
    }
}
start();