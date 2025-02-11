import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("get all users");
});

router.get("/:id", (req, res) => {
  res.send("get user by id");
});

router.post("/", (req, res) => {
  res.send("create user");
});

router.put("/:id", (req, res) => {
  res.send("update user");
});

router.delete("/:id", (req, res) => {
  res.send("delete user");
});

export default router;
