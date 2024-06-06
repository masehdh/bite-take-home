import dotenv from "dotenv";
dotenv.config();

export const auth = {
  validateBearerToken: async (req, res, next) => {
    if (
      !req.headers.authorization ||
      !req.headers.authorization.startsWith("Bearer ")
    ) {
      console.error(
        "No Bearer token was passed in the Authorization header.",
        "Make sure you authorize your request by providing the following HTTP header:",
        "Authorization: Bearer <Token>"
      );
      res.status(403).send("Unauthorized");
      return;
    }

    let idToken;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer ")
    ) {
      // Read the ID Token from the Authorization header.
      idToken = req.headers.authorization.split("Bearer ")[1];
    } else {
      res.status(403).send("Unauthorized");
      return;
    }

    try {
      if (idToken === process.env.API_KEY) {
        console.log("Authorized user detected");
        next();
        return;
      } else {
        throw new Error("Unauthorized token.");
      }
    } catch (error) {
      console.error("Error while verifying token:", error);
      res.status(403).send("Unauthorized");
      return;
    }
  },
};
