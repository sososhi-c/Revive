const express = require('express');
const router = express.Router();
const FuelDetailsModel = require('../Models/FuelModel');

router.post('/fueldetails', async (req, res) => {
    try {
        const { fullName, email, vehicleModel, licensePlateNumber, fuelAmount, fuelType, currentLocation, add_note, status } = req.body;
    
        const fuelDetails = new FuelDetailsModel({
          fullName,
          email,
          vehicleModel,
          licensePlateNumber,
          fuelAmount,
          fuelType,
          currentLocation,
          add_note,
          status
        });
    
        await fuelDetails.save();
        res.status(200).json({ message: "Form data saved successfully." });
      } catch (error) {
        console.error("Error saving form data:", error);
        res.status(500).json({ error: "An error occurred while saving form data." });
      }
});

module.exports = router;
