import exporess from "express";

const router = exporess.Router();

router.get("/signup", (req, res) => {
  res.send("signup route");
});

router.get("/signup", (req, res) => {
  res.send("login route");
});

router.get("/signup", (req, res) => {
  res.send("logout route");
});

export default router;
