const City = require("../models/City.model")

const router = require("express").Router()

router.get("/", async (req, res, next) => {
    try {
		const allcities = await City.find()
		res.json(allcities)
	} catch (error) {
		console.log(error)
	}
  });

  module.exports = router;