import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import BatteryPicker from '../BatteryPicker'; // Assuming the file is in the same directory
import { Alert } from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BatteryRequirementForm = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [currBatteryType, setCurrBatteryType] = useState(null);
  const [prefBatteryType, setPrefBatteryType] = useState(null);
  const [vehicleModel, setVehicleModel] = useState('');
  const [licensePlateNumber, setLicensePlateNumber] = useState('');
  const [currentLocation, setCurrentLocation] = useState('');

  const handleGoBack = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  const handleFormSubmit = async () => {
    try {
      if (!fullName || !email || !currBatteryType || !prefBatteryType || !vehicleModel || !licensePlateNumber || !currentLocation) {
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

      const response = await axios.post('http://10.24.88.110:5000/battery/submitBatteryForm', {
        fullName,
        email,
        currBatteryType,
        prefBatteryType,
        vehicleModel,
        licensePlateNumber,
        currentLocation,
      });
      console.log(response.data);
      // Reset form fields after successful submission
      setFullName('');
      setEmail('');
      setCurrBatteryType(null);
      setPrefBatteryType(null);
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
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton} >
        <Ionicons name="chevron-back-circle" size={40} color="black" />
      </TouchableOpacity>

        <Text style={styles.heading}>Battery Service Form</Text>
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
            <Text style={styles.label}>Battery Type</Text>
            <BatteryPicker
              label="Battery Type"
              value={currBatteryType}
              onValueChange={setCurrBatteryType}
              items={[
                { label: 'Lead Acid Battery Type', value: 'lead_acid' },
                { label: 'Lithium-ion Battery', value: 'lithium_ion' },
                { label: 'NiMH Battery', value: 'nimh' },
                { label: 'VRLA Batteries', value: 'vrla' },
                { label: 'Sodium-ion Battery', value: 'sodium_ion' },
                { label: 'Solid-State Battery', value: 'solid_state' },
                { label: 'Silver Calcium Battery', value: 'silver_calcium' },
              ]}
            />
          </View>
          <View style={styles.formRow}>
            <Text style={styles.label}>Preferred Battery Brand</Text>
            <BatteryPicker
              label="Preferred Battery Brand"
              value={prefBatteryType}
              onValueChange={setPrefBatteryType}
              items={[
                { label: 'Lead Acid Battery Type', value: 'lead_acid' },
                { label: 'Lithium-ion Battery', value: 'lithium_ion' },
                { label: 'NiMH Battery', value: 'nimh' },
                { label: 'VRLA Batteries', value: 'vrla' },
                { label: 'Sodium-ion Battery', value: 'sodium_ion' },
                { label: 'Solid-State Battery', value: 'solid_state' },
                { label: 'Silver Calcium Battery', value: 'silver_calcium' },
              ]}
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
  backButton: {
    position: 'absolute',
    top: 60,
    left: 10,
    zIndex: 1, // Ensure the back button appears above other content
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 60,
  },
  formContainer: {
    backgroundColor: '#fff', // White background color for the form container
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
    padding: 20,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  },
});

export default BatteryRequirementForm;