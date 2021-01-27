import jwt from "jsonwebtoken";

/** generate jwt signed with [userId] */
export const createToken = async (userId, secret, expiresIn) => {
  return jwt.sign({ userId }, secret, {
    expiresIn,
  });
};
