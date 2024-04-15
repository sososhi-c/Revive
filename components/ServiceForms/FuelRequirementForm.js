import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import BatteryPicker from '../BatteryPicker'; 

const FuelRequirementForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [licensePlate, setLicensePlate] = useState('');
  const [fuelAmount, setFuelAmount] = useState('');
  const [fuelType, setFuelType] = useState(null);

  const handleFormSubmit = () => {
    // Handle form submission logic here
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Fuel Service Form</Text>
      <View style={styles.formContainer}>
        <View style={styles.formRow}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your full name"
            value={fullName}
            onChangeText={setFullName}
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.label}>Model of Vehicle</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter the model of your vehicle"
            value={vehicleModel}
            onChangeText={setVehicleModel}
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.label}>License Plate Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your license plate number"
            value={licensePlate}
            onChangeText={setLicensePlate}
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.label}>Amount of Fuel Needed (in litres)</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter the amount of fuel needed"
            value={fuelAmount}
            onChangeText={setFuelAmount}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.label}>Fuel Type</Text>
          <BatteryPicker
            label="Fuel Type"
            value={fuelType}
            onValueChange={setFuelType}
            items={[
              { label: 'Petrol', value: 'petrol' },
              { label: 'Diesel', value: 'diesel' },
              { label: 'CNG', value: 'cng' },
            ]}
          />
        </View>
      </View>
      <TouchableOpacity onPress={handleFormSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  formContainer: {
    backgroundColor: '#fff', // White background color for the form container
    borderRadius: 10,
    padding: 20,
  },
  formRow: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default FuelRequirementForm;
