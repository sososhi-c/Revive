import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, StyleSheet, ScrollView, Alert } from 'react-native';
import axios from 'axios';

const TowRequirementForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [licensePlateNumber, setLicensePlateNumber] = useState('');
  const [towReason, setTowReason] = useState('');
  const [currentLocation, setCurrentLocation] = useState('');
  const [destination, setDestination] = useState('');

  const handleSubmit = async () => {
    try {
      // Basic form validation
      if (!fullName || !email || !vehicleModel || !licensePlateNumber || !towReason || !currentLocation || !destination) {
        Alert.alert('Error', 'Please fill in all fields.', [{ text: 'Okay' }]);
        return;
      }

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        Alert.alert('Error', 'Please enter a valid email address.', [{ text: 'Okay' }]);
        return;
      }

      // Submit form data
      const response = await axios.post('http://10.24.88.110:5000/tow/submitForm', {
        fullName,
        email,
        vehicleModel,
        licensePlateNumber,
        towReason: towReason,
        currentLocation,
        destination,
      });
      console.log(response.data);
      // Reset form fields after successful submission
      setFullName('');
      setEmail('');
      setVehicleModel('');
      setLicensePlateNumber('');
      setTowReason('');
      setCurrentLocation('');
      setDestination('');
      // Show success message
      Alert.alert('Success', 'Form submitted successfully', [{ text: 'Okay' }]);
    } catch (error) {
      console.error('Error submitting form:', error);
      // Show error message
      Alert.alert('Error', 'Failed to submit form. Please try again later.', [{ text: 'Okay' }]);
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">

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
              value={licensePlateNumber}
              onChangeText={setLicensePlateNumber}
            />
          </View>
          <View style={styles.formRow}>
            <Text style={styles.label}>Reason for Tow</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter reason for tow"
              value={towReason}
              onChangeText={setTowReason}
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
    </KeyboardAvoidingView>

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
    backgroundColor: 'linear-gradient(to right, #d1defb, rgb(239, 232, 255))'
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
    paddingBottom: 0
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
    backgroundColor: '#5e60ce',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TowRequirementForm;
