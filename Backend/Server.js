// Server.jsx
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const authRoutes = require('./Routes/authRoute');
const fuelRoute = require('./Routes/FuelRoute');
const batteryRoute = require('./Routes/BatteryRoute');
const towRoute = require('./Routes/TowRoute');
const tyreRoute = require('./Routes/TyreRoute');
const contactRoute = require('./Routes/ContactRoute');

app.use(express.json());
app.use(cors());

async function connectToDB() {
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://rirathore:mongo123@cluster0.3lbispc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    );
    console.log(`DB connected`);
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

connectToDB();

// Routes
app.use('/auth', authRoutes);
app.use('/fuel', fuelRoute);
app.use('/battery', batteryRoute);
app.use('/tow', towRoute);
app.use('/tyre', tyreRoute);
app.use('/contact', contactRoute);


app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
