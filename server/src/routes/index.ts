import { Router } from "express";

const router = Router();

router.use("/", (req, res) => {
  throw new Error("Erro proposital!");

  return res.status(200).json({
    message: "hello world",
  });
});

export { router };
