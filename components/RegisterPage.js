// Register.js

import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.outerBoxContainer}>
        <View style={styles.innerBoxContainer}>
          <Image source={require('../assets/login.png')} style={styles.logo} />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="#aaaaaa"
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#aaaaaa"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#aaaaaa"
              secureTextEntry={true}
            />
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F5FF', // Light blue color
  },
  outerBoxContainer: {
    borderWidth: 1,
    borderColor: 'black', // Black border
    borderRadius: 20,
    padding: 10,
    backgroundColor: 'white', // White color inside the container
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
  input: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    backgroundColor: '#4c669f',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default RegisterScreen;
