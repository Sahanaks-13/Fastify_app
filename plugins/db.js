const fp=require("fastify-plugin")
const postgres=require("postgres")

async function dbConnector(fastify,options){
    const sql=postgres({
        host:process.env.DB_HOST,
        user:process.env.DB_USER,
        password:process.env.DB_PASSWORD,
        database:process.env.DB_NAME,
        port:process.env.DB_PORT
    });
    fastify.decorate('db',sql);
}
module.exports=fp(dbConnector);