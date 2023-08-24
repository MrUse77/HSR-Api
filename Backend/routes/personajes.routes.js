import express from "express";
import expressAsyncHandler from "express-async-handler";
import personajes from "../models/personajes.js";
const pjRouter = express.Router();

pjRouter.get("/get", async (req, res) => {
  try {
    const result = await personajes.find({});
    res.json({ data: result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
pjRouter.post(
  "/create",
  expressAsyncHandler(async (req, res) => {
    const pj = new personajes({
      name: req.body.name,
      via: req.body.via,
      type: req.body.type,
      info: req.body.info,
      details: req.body.details,
      img: req.body.img,
      faction: req.body.faction,
    });
    const result = await pj.save();
    res.json({ result });
  })
);

export default pjRouter;
