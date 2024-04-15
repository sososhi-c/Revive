// RegisterPage.js

import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const navigation = useNavigation(); 

  const navigateToLogin = () => {
    // Navigate to the login page
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.startText} >Connect With Us Now!</Text>
      <Text style={styles.createText} >Create an account</Text>
      <View style={styles.outerBoxContainer}>
        <Text style={styles.registerText} >Register</Text>

        <View style={styles.innerBoxContainer}>

          <View style={styles.inputContainer}>
            
            <Text style={styles.label}>Full Name</Text>
            <View style={styles.inputFields}>
              <TextInput
                style={styles.inputs}
                placeholder="Full Name"
                placeholderTextColor="#A0AEC0"
              />
            </View>

            <Text style={styles.label}>Email Address</Text>
            <View style={styles.inputFields}>
              <TextInput
                style={styles.inputs}
                placeholder="Email Address"
                placeholderTextColor="#A0AEC0"
              />
            </View>

            <Text style={styles.label}>Mobile Number</Text>
            <View style={styles.inputFields}>
              <TextInput
                style={styles.inputs}
                placeholder="Mobile Number"
                placeholderTextColor="#A0AEC0"
              />
            </View>

            <Text style={styles.label}>Password</Text>
            <View style={styles.inputFields}>
              <TextInput
                style={styles.inputs}
                placeholder="Password"
                placeholderTextColor="#A0AEC0"
              />
            </View>

            <TouchableOpacity style={styles.buttonContainer}>
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
  );
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#010a30', // dark blue color
  },
  startText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: '18%',
    marginBottom: '2%'
  },
  createText: {
    color: 'white'
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

  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
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
