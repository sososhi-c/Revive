import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  const handleSend = async () => {
    try {
      const response = await fetch('http://10.24.88.110:5000/contact/contactdetails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          text,
        }),
      });
      const data = await response.json();
      Alert.alert('Success', 'Message submitted successfully', [{ text: 'Okay' }]);
      // clear the fields
      setEmail(''),
      setName(''),
      setText('')

      console.log(data);
    } catch (error) {
      console.error("Error sending text:", error.text);
    }
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setText('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Get in touch</Text>
      <TextInput
        placeholder="Name"
        placeholderTextColor="#A0AEC0"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        placeholderTextColor="#A0AEC0"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.input}
      />
      <TextInput
        placeholder="Say Hello"
        placeholderTextColor="#A0AEC0"
        value={text}
        onChangeText={setText}
        multiline
        numberOfLines={5}
        style={[styles.input, styles.textarea]}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleReset} style={styles.resetButton}>
          <Text style={styles.buttonResetText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#021e2b',
    borderWidth: 8,
    borderBottomColor: '#001925',
    borderRightColor: '#001925',
    borderTopColor: '#001925',
    borderColor: '#ff7a01'
  },
  heading: {
    color: '#ff7a01',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    marginTop: 70,

  },
  input: {
    backgroundColor: '#013747', // Add this line
    color: '#fff',
    padding: 10,
    marginBottom: 30,
    borderRadius: 5,
    borderColor: 'transparent',
  },
  textarea: {
    height: 150,
    textAlignVertical: 'top',
    backgroundColor: '#013747', // Add this line
  borderColor: 'transparent', 
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sendButton: {
    flex: 1,
    backgroundColor: '#ff7a01',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginRight: 10,
    marginTop: 20,
  },
  resetButton: {
    flex: 1,
    backgroundColor: '#001925',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ff7a01',
    marginTop: 20,

  },
  buttonText: {
    color: '#001925',
    fontWeight: 'bold',
  },
  buttonResetText:{
    color: '#ff7a01',
    fontWeight: 'bold',
  }
});

export default ContactPage;
