const express = require("express");
const router = express.Router();
const TyreDetailsModel = require("../Models/TyreModel");

router.post("/submitTyreForm", async (req, res) => {
    try {
      const { fullName, email, numTyreReq, vehicleModel, licensePlateNumber, currentLocation, add_note, status } = req.body;
  
      const tyreDetails = new TyreDetailsModel({
        fullName,
        email,
        numTyreReq,
        vehicleModel,
        licensePlateNumber,
        currentLocation,
        status
      });
  
      await tyreDetails.save();
      res.status(200).json({ message: "Form data saved successfully." });
    } catch (error) {
      console.error("Error saving form data:", error);
      res.status(500).json({ error: "An error occurred while saving form data." });
    }
  });

module.exports = router;
