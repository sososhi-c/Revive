// RegisterPage.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')

  const handleRegister = async () => {
    // Validation
    if (!fullName || !email || !mobileNo || !password) {
      setError('Please fill in all fields.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Invalid email address.');
      return;
    }
    if (/\d/.test(fullName)) {
      setError('Name should not contain numbers.');
      return;
    }
    if (mobileNo.length !== 10 || !/^\d+$/.test(mobileNo)) {
      setError('Mobile number should be exactly 10 digits long and contain only numbers.');
      return;
    }
    if (password.length < 6 || !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
      setError('Password should be at least 6 characters long and contain at least one letter and one number.');
      return;
    }

    try {
      const response = await fetch('http://10.24.88.110:5000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          email,
          mobileNo,
          password,
        }),
      });
      const data = await response.json();

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.msg || 'Something went wrong!');
      }

      // clear all fields before navigating
      setFullName(''),
        setEmail(''),
        setMobileNo(''),
        setPassword(''),
        setError('')

      Alert.alert('Success', 'Account created successfully!', [
        { text: 'OK', onPress: () => navigation.navigate('LoginScreen') }
      ]);
    } catch (error) {
      console.error('Registration Error:', error.message);
      Alert.alert('Error', error.message || 'Something went wrong!');
    }
  };

  const navigateToLogin = () => {
    navigation.navigate('LoginScreen');
  };

  const handleGoBack = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <ScrollView>

        <View style={styles.container}>
          <TouchableOpacity onPress={handleGoBack} style={styles.backButton} >
            <Ionicons name="chevron-back-circle" size={40} color="white" />
          </TouchableOpacity>
          <Text style={styles.startText}>Connect With Us Now!</Text>
          <Text style={styles.createText}>Create an account</Text>
          {error ? <Text style={styles.error}>{error}</Text> : null}

          <View style={styles.outerBoxContainer}>
            <Text style={styles.registerText}>Register</Text>

            <View style={styles.innerBoxContainer}>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Full Name</Text>
                <View style={styles.inputFields}>
                  <TextInput
                    style={styles.inputs}
                    placeholder="Full Name"
                    placeholderTextColor="#A0AEC0"
                    value={fullName}
                    onChangeText={setFullName}
                  />
                </View>

                <Text style={styles.label}>Email Address</Text>
                <View style={styles.inputFields}>
                  <TextInput
                    style={styles.inputs}
                    placeholder="Email Address"
                    placeholderTextColor="#A0AEC0"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"

                  />
                </View>

                <Text style={styles.label}>Mobile Number</Text>
                <View style={styles.inputFields}>
                  <TextInput
                    style={styles.inputs}
                    placeholder="Mobile Number"
                    placeholderTextColor="#A0AEC0"
                    value={mobileNo}
                    onChangeText={setMobileNo}
                    keyboardType="numeric"

                  />
                </View>

                <Text style={styles.label}>Password</Text>
                <View style={styles.inputFields}>
                  <TextInput
                    style={styles.inputs}
                    placeholder="Password"
                    placeholderTextColor="#A0AEC0"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                  />
                </View>

                <TouchableOpacity style={styles.buttonContainer} onPress={handleRegister}>
                  <Text style={styles.buttonText}>Create Account</Text>
                </TouchableOpacity>

                <View style={styles.loginContainer}>
                  <Text style={styles.loginText}>Already have an Account?</Text>
                  <TouchableOpacity onPress={navigateToLogin}>
                    <Text style={styles.loginButton}>Login</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

          </View>

        </View>
      </ScrollView>

    </KeyboardAvoidingView>
  );
};


const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#010a30', // dark blue color
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 1, // Ensure the back button appears above other content
  },
  startText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: '34%',
    marginBottom: '2%'
  },
  createText: {
    color: 'white'
  },
  error: {
    color: 'red',
    marginTop: 15,
    fontSize: 16
  },
  outerBoxContainer: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderColor: 'black', // Black border
    borderRadius: 50,
    marginTop: '15%',
    backgroundColor: 'white', // White color inside the container
  },
  registerText: {
    marginLeft: '9%',
    marginTop: '7%',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#010a30'
  },
  innerBoxContainer: {
    alignItems: 'center',
  },
  inputContainer: {
    marginTop: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2D3748',
    marginTop: 5,
  },
  inputFields: {
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 13,
  },
  inputs: {
    fontSize: 16,
    color: '#4A5568',
    width: 330,
    height: 45,
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 13,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: '#010a30',
    padding: 18,
    marginTop: '4%',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    justifyContent: 'center'
  },
  loginText: {
    marginRight: 5,
  },
  loginButton: {
    fontSize: 14,
    fontWeight: '800',
  },
});

export default RegisterScreen;
