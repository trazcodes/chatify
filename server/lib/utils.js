import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    httpOnly: true,

    // IMPORTANT for cross-domain
    sameSite: "none",

    // Must be true when sameSite = none
    secure: true,
  });

  return token;
};
