import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const TowRequirementForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [licensePlate, setLicensePlate] = useState('');
  const [reasonForTow, setReasonForTow] = useState('');
  const [currentLocation, setCurrentLocation] = useState('');
  const [destination, setDestination] = useState('');

  const handleSubmit = () => {
    // Handle form submission logic here
    // You can use the form data as needed
    console.log('Form submitted:', {
      fullName,
      email,
      vehicleModel,
      licensePlate,
      reasonForTow,
      currentLocation,
      destination,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Tow Requirement Form</Text>
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
          <Text style={styles.label}>Reason for Tow</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter reason for tow"
            value={reasonForTow}
            onChangeText={setReasonForTow}
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.label}>Current Location</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your current location"
            value={currentLocation}
            onChangeText={setCurrentLocation}
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.label}>Destination</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your destination"
            value={destination}
            onChangeText={setDestination}
          />
        </View>
      </View>
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
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
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formContainer: {
    backgroundColor: '#fff', // White background color for the form container
    borderRadius: 10,
    padding: 20,
    width: '100%',
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
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TowRequirementForm;
