const City = require("../models/City.model");
const Place = require("../models/Place.model");
const mangoose = require('mongoose');
const ObjectId = mangoose.Types.ObjectId;

const router = require("express").Router()

//router.use("/:cityId/places", require("./places.routes"))


router.get("/", async (req, res, next) => {
    try {
		const allcities = await City.find()
		res.json(allcities)
	} catch (error) {
		console.log(error)
	}
  });

  router.get("/:cityId", async (req, res, next) => {
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

router.get("/:cityId/places", async (req, res, next) => {
  const cityId = req.params.cityId;
	const option1 = req.query.option1;
  const option2 = req.query.option2;
  
  console.log(req.query)
  const cityIndf = new ObjectId(cityId)
  try {
    const place1 = await Place.find({ //findOne
      services: option1, 
      city: cityIndf
    })
    const place2 = await Place.find({ //findOne
      services: option2, 
      city: cityIndf
    })  
    console.log(option2)
    return res.status(200).json([place1, place2]);
  }
  catch(error) {
    next(error)
  }
    
})



  module.exports = router;