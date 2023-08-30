const City = require("../models/City.model");
const Place = require("../models/Place.model");
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const {isAuthenticated} = require('./../middleware/jwt.middleware')
const router = require("express").Router()
const Plan = require("../models/plan.model");


router.get('/', isAuthenticated, async (req, res, next) => {
    try {
      const allPlans = await Plan.find({user: req.payload._id}).populate('restaurants places city')
      res.json(allPlans)
    } catch (error) {
      next(error)
    }
  })

  
router.post("/savedplans", isAuthenticated,  (req, res, next) => {
    const {
      places,
      restaurants,
      city,
    } = req.body;
    const planToCreate = {
      places,
      restaurants,
      city,
      user: req.payload._id,
    };
  console.log(req.body)
    Plan.create(planToCreate)
      .then((createdPlan) => {
        console.log(createdPlan);
        res.status(200).json(createdPlan);
      })
      .catch((error) => {
        next(error)
      });
  });

  module.exports = router;

