const City = require("../models/City.model");
const Note = require("../models/Note.model");
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

  router.post("/savedplans/notes", isAuthenticated,  (req, res, next) => {
    const {
      plan,
      note,
      user,
    } = req.body;
    const noteToCreate = {
      plan,
      note,
      user: req.payload._id,
    };
  console.log(req.body)
    Note.create(noteToCreate)
      .then((createdNote) => {
        console.log(createdNote);
        res.status(200).json(createdNote);
      })
      .catch((error) => {
        next(error)
      });
  });

  router.get('/savedplans/notes/:planId', isAuthenticated, async (req, res, next) => {
    const planId = req.params.planId;
    console.log(req.payload._id)
    try {
      const oneNote = await Note.find(
        {user: req.payload._id, 
        plan: planId})
      res.json( oneNote)
    } catch (error) {
      next(error)
    }
  })

  router.put('/savedplans/notes/:notesId', isAuthenticated, async (req, res, next) => {
    const notesId = req.params.notesId;
    if (!notesId) {
      return res.status(400).json({ error: "Missing notesId parameter" });
    }

    try {
      await Note.findByIdAndUpdate(notesId, req.body, { new: true })
      .then((resp) => {
        console.log("Note successfully updated");
        res.status(204).json(); //Send back only status code 204 indicating that resource is deleted
      })
      .catch((error) => {
        console.error("Error while updating note", error);
        res.status(500).json({ error: "Updating note failed" });
      });
    } catch {
      next(error)
    }
});

  router.delete('/savedplans/notes/:notesId', isAuthenticated, async (req, res, next) => {
    
    const notesId = req.params.notesId;
    if (!notesId) {
      return res.status(400).json({ error: "Missing notesId parameter" });
    }

    try {
      await Note.findByIdAndDelete(notesId)
      .then((resp) => {
        console.log("Note successfully deleted");
        res.status(204).json(); //Send back only status code 204 indicating that resource is deleted
      })
      .catch((error) => {
        console.error("Error while deleting note", error);
        res.status(500).json({ error: "Deleting note failed" });
      });
    } catch {
      next(error)
    }
    
  });
  


  
  
  module.exports = router;

