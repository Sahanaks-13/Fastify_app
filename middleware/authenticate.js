async function authenticate(request, reply) {
  try {
    // verify JWT token from Authorization header
    await request.jwtVerify();
  } catch (err) {
    return reply.code(401).send({
      message: "Unauthorized: Invalid or missing token"
    });
  }
}

module.exports = authenticate;