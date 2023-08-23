const Restaurant = require("../models/Restaurant.model")
const mongoose = require("mongoose");

const router = require("express").Router()

router.get("/", async (req, res, next) => {
    try {
		const allRestaurants = await Restaurant.find()
      /*  console.log('check')*/
		res.json(allRestaurants)
	} catch (error) {
		console.log(error)
	}
  });

  module.exports = router;