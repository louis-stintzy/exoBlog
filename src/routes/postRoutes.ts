import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("get all posts");
});

router.get("/:id", (req, res) => {
  res.send("get post by id");
});

router.post("/", (req, res) => {
  res.send("create post");
});

router.put("/:id", (req, res) => {
  res.send("update post");
});

router.delete("/:id", (req, res) => {
  res.send("delete post");
});

export default router;
