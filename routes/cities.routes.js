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

  router.get("/:cityId", (req, res, next) => {
    const cityId = req.params.cityId;
  City.findById(cityId)
    .then((targetCity) => {
      console.log(targetCity);
      res.status(200).json(targetCity);
    })
    .catch((error) => {
      next(error)
    });
});

  module.exports = router;