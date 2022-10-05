import { Router } from "express";

const router = Router();

router.use("/", (req, res) => {
  return res.status(200).json({
    message: "hello world",
  });
});

export { router };
