const express = require("express");
const router = express.Router();
const BatteryDetailsModel = require("../Models/BatteryModel");

router.post("/submitBatteryForm", async (req, res) => {
    try {
        const {fullName, email, currBatteryType, prefBatteryType, vehicleModel, licensePlateNumber, currentLocation, add_note, status} = req.body;

        const batteryDetails = new BatteryDetailsModel({
            fullName,
            email,
            currBatteryType,
            prefBatteryType,
            vehicleModel,
            licensePlateNumber,
            currentLocation,
            add_note,
            status
        });

        await batteryDetails.save();
        res.status(200).json({ message: "Form data saved successfully." });
    } catch (error) {
        console.error("Error saving form data:", error);
        res.status(500).json({ error: "An error occurred while saving form data." });
    }
});

module.exports = router;
