import jwt from "jsonwebtoken";
import config from "../config/config";

const generateToken = (userId: string) => {
  return jwt.sign({ id: userId }, config.jwtSecret, { expiresIn: "1h" });
};

export default generateToken;
