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

router.get("/getTowHistory", async (req, res) => {
  try {
      const history = await TowDetailsModel.find({ status: { $ne: '' } });
      res.json(history);
  } catch (error) {
      console.error("Error fetching Tow history:", error);
      res.status(500).json({ error: "An error occurred while fetching Tow history." });
  }
});

module.exports = router;
