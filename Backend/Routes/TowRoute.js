const express = require("express");
const router = express.Router();
const TowDetailsModel = require("../Models/TowModel");

router.post("/submitForm", async (req, res) => {
  try {
    const { fullName, email, vehicleModel, licensePlateNumber, towReason, currentLocation, destination, add_note, status } = req.body;

    const towDetails = new TowDetailsModel({
      fullName, 
      email,
      vehicleModel,
      licensePlateNumber,
      towReason,
      currentLocation,
      destination,
      status
    });

    await towDetails.save();
    res.status(200).json({ message: "Form data saved successfully." });
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({ error: "An error occurred while saving form data." });
  }
});


module.exports = router;
