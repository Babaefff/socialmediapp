import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization");
    console.log(`Token is ${token}`)
    if (!token) {
      return res.status(403).send("Access Denied");
    }
    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    console.log(`BA bu userdi ${req.user}`)
    next();
  } catch (err) {
    console.log("budu eror yetm1")
    res.status(500).json({ error: err.message });
  }
};
