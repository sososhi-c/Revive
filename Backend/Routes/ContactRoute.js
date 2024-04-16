// routes/contact.js
const express = require('express');
const router = express.Router();
const Contact = require('../Models/ContactModel'); // Assuming you have a Contact model

// POST request to handle contact form submissions
router.post('/contactdetails', async (req, res) => {
  try {
    // Extract data from request body
    const { name, email, text } = req.body;

    // Create a new contact record
    const contact = new Contact({
      name,
      email,
      text,
    });

    // Save the contact record to the database
    await contact.save();

    // Respond with success message
    res.status(201).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error("Error sending message:", error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
