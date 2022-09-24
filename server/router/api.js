const express = require("express");
const router = express.Router();
const Entry = require("../model/entrySchema");
router.post("/upload", (req, res) => {
  console.log(req.body);
  const {
    date,
    name,
    departure,
    destination,
    aircraft,
    duration,
    secondP,
    thirdP,
    remarks,
  } = req.body;
  Entry.create(
    {
      date,
      name,
      departure,
      destination,
      aircraft,
      duration,
      secondP,
      thirdP,
      remarks,
    },
    (err, entry) => {
      if (err) {
        return res.status(500).json({ message: `${err}` });
      }
      if (entry) {
        return res.status(201).json({
          entry,
        });
      } else {
        return res.status(400).json({ message: "Invalid data" });
      }
    }
  );
});

router.get("/posts", async (req, res) => {
  try {
    const posts = await Entry.find({}).sort({ createdAt: -1 }).lean();
    return res.status(201).send(posts);
  } catch (err) {
    return res.status(404).json({ message: "No Post Found" });
  }
});
module.exports = router;
