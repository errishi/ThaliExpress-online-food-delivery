import jwt from "jsonwebtoken";

const authOrdersMiddleware = (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized, token missing!",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id; // ✅ attach userId safely here (not in req.body)
    next();
  } catch (error) {
    console.error("JWT verification failed:", error);
    return res.status(403).json({
      success: false,
      message: "Invalid or expired token!",
    });
  }
};

export default authOrdersMiddleware;
