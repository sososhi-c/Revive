// LoginPage.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    const handleLogin = async () => {

        if (!email || !password) {
            setError('Please fill in all fields.');
            return;
        }

        try {
            const response = await fetch('http://10.24.88.110:5000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.msg || 'Login failed');
            }

            // clear all fields before navigating
            setEmail(''),
                setPassword(''),
                setError('')

            // Navigate to home page or any other screen after successful login
            navigation.navigate('HomePage');
        } catch (error) {
            console.error('Login Error:', error.message);
            Alert.alert('Error', error.message || 'Login failed');
        }
    };

    const handleRegisterPress = () => {
        // Navigate to the login page
        navigation.navigate('RegisterScreen');
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

                    <Text style={styles.startText} >Welcome Back!</Text>
                    <Text style={styles.createText} >Login to your account</Text>
                    {error ? <Text style={styles.error}>{error}</Text> : null}

                    <View style={styles.outerBoxContainer}>
                        <Text style={styles.registerText} >Login</Text>

                        <View style={styles.innerBoxContainer}>

                            <View style={styles.inputContainer}>
                                <Text style={styles.label}>Email Address</Text>
                                <View style={styles.inputFields}>
                                    <TextInput
                                        style={styles.inputs}
                                        placeholder="Email Address"
                                        placeholderTextColor="#A0AEC0"
                                        value={email}
                                        onChangeText={setEmail}
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

                                <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
                                    <Text style={styles.buttonText}>Login</Text>
                                </TouchableOpacity>

                                <View style={styles.loginContainer}>
                                    <Text style={styles.loginText}>New to our website?</Text>
                                    <TouchableOpacity onPress={handleRegisterPress}>
                                        <Text style={styles.loginButton}>Register</Text>
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
        top: 30,
        left: 20,
        zIndex: 1, // Ensure the back button appears above other content
    },
    startText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: '22%',
        marginBottom: '2%'
    },
    createText: {
        color: 'white',
        fontSize: 16,
    },
    error: {
        color: 'red',
        marginTop: 25,
        fontSize: 17
    },
    outerBoxContainer: {
        width: '100%',
        height: '100%',
        borderWidth: 1,
        borderColor: 'black', // Black border
        borderRadius: 50,
        marginTop: '11%',
        backgroundColor: 'white', // White color inside the container
    },
    registerText: {
        marginLeft: '9%',
        marginTop: '12%',
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
        marginTop: 10,
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
        marginTop: '6%',
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    loginContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
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

export default LoginScreen;
