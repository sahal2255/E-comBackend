const jwt = require("jsonwebtoken");

const authMiddleware = (roles = []) => {
  return (req, res, next) => {
    console.log('req cookies',req.cookies)
    const token = req.cookies?.accessToken; // ✅ Ensure token is safely accessed

    console.log("Token in the cookie:", token); // ✅ Debugging

    if (!token) {
      return res.status(401).json({ message: "Unauthorized. No token provided." });
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        console.log("Token verification failed:", err); // ✅ Debugging
        return res.status(403).json({ message: "Token expired or invalid" });
      }

      console.log("Authenticated user:", user); // ✅ Debugging
      req.user = user;

      if (roles.length && !roles.includes(user.role)) {
        return res.status(403).json({ message: "Forbidden: Insufficient permissions" });
      }

      next();
    });
  };
};

module.exports = authMiddleware;
