import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView, Alert } from 'react-native';
import axios from 'axios';

const TyreReplacementForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [numTyreReq, setNumTyreReq] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [licensePlateNumber, setLicensePlateNumber] = useState('');
  const [currentLocation, setCurrentLocation] = useState('');

  const handleFormSubmit = async () => {
    try {
      if (!fullName || !email || !numTyreReq || !vehicleModel || !licensePlateNumber || !currentLocation) {
        // Validation failed
        Alert.alert('Error', 'Please fill in all fields.', [{ text: 'Okay' }]);
        return;
      }

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        Alert.alert('Error', 'Please enter a valid email address.', [{ text: 'Okay' }]);
        return;
      }

      const response = await axios.post('http://10.24.88.110:5000/tyre/submitTyreForm', {
        fullName,
        email,
        numTyreReq: parseInt(numTyreReq),
        vehicleModel,
        licensePlateNumber,
        currentLocation,
      });
      console.log(response.data);
      // Reset form fields after successful submission
      setFullName('');
      setEmail('');
      setNumTyreReq('');
      setVehicleModel('');
      setLicensePlateNumber('');
      setCurrentLocation('');
      // Show alert box
      Alert.alert('Success', 'Form submitted successfully', [{ text: 'Okay' }]);
    } catch (error) {
      console.error('Error submitting form:', error);
      // Show alert box for error
      Alert.alert('Error', 'Failed to submit form. Please try again later.', [{ text: 'Okay' }]);
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Tyre Replacement Form</Text>
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
            <Text style={styles.label}>Number of Tyres to be Replaced</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter the number of tyres to be replaced"
              value={numTyreReq}
              onChangeText={setNumTyreReq}
              keyboardType="numeric"
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
            <Text style={styles.label}>Current Location</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your current location"
              value={currentLocation}
              onChangeText={setCurrentLocation}
            />
          </View>
        </View>
        <TouchableOpacity onPress={handleFormSubmit} style={styles.button}>
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
    backgroundColor: 'linear-gradient(to right, #d1defb, rgb(239, 232, 255))',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
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
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#5e60ce',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  },
});

export default TyreReplacementForm;
