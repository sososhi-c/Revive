// Feedback.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import email from 'react-native-email';
import { Ionicons } from '@expo/vector-icons';


const Feedback = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [message, setMessage] = useState('');

    const handleEmailSend = () => {
        const to = ['rishitarathore14@gmail.com']; // Replace with your recipient email address
        email(to, {
            subject: 'Feedback', // Subject of the email
            body: `Name: ${name}\nEmail: ${emailAddress}\nMessage: ${message}`, // Email body
        }).catch(console.error);
    };

    const handleGoBack = () => {
        navigation.goBack(); // Navigate back to the previous screen
    };

    return (
        <View style={styles.endContainer}>
            <TouchableOpacity onPress={handleGoBack} style={styles.backButton} >
                <Ionicons name="chevron-back-circle" size={40} color="black" />
            </TouchableOpacity>
            
            <Text style={styles.registerText} >Share Your Feedback ! </Text>

            <View style={styles.container}>
                <Image source={require('../assets/feedback.png')} style={styles.logo} resizeMode="contain" />
            </View>
            <View style={styles.BoxContainer}>

                <View style={styles.outerBoxContainer}>
                    <Text style={styles.createText} >Bringing Your Journey Back to track !</Text>

                    <View style={styles.innerBoxContainer}>
                        <Text style={styles.label}>Full Name</Text>

                        <View style={styles.inputFields}>
                            <TextInput
                                style={styles.inputs}
                                placeholder="Full Name"
                                placeholderTextColor="#fff"
                                value={name}
                                onChangeText={setName}
                            />
                        </View>

                        <Text style={styles.label}>Email Address</Text>
                        <View style={styles.inputFields}>
                            <TextInput
                                style={styles.inputs}
                                placeholder="Email Address"
                                placeholderTextColor="#fff"
                                value={emailAddress}
                                onChangeText={setEmailAddress}
                                keyboardType="email-address"
                            />
                        </View>

                        <Text style={styles.label}>Feel free to add any other comments or suggestions:</Text>
                        <View style={styles.inputFields}>
                            <TextInput
                                style={styles.input}
                                placeholder="Message"
                                placeholderTextColor="#fff"
                                value={message}
                                onChangeText={setMessage}

                            />
                        </View>
                        <TouchableOpacity style={styles.buttonRegister} onPress={handleEmailSend}>
                            <Text style={styles.buttonTextRegister}>Send Feedback</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    endContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#bde0fe',
    },
    container: {
        width: '100%',
        height: '45%',
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#bde0fe',
    },
    backButton: {
        position: 'absolute',
        top: 60,
        left: 20,
        zIndex: 1, // Ensure the back button appears above other content
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#fff',
        textAlign: 'left',
        marginTop: 5,
        marginLeft: 34,
        marginBottom: 14
    },
    inputs: {
        fontSize: 16,
        color: '#fff',
        width: 330,
        height: 45,
        borderWidth: 1,
        borderColor: '#dddddd',
        borderRadius: 13,
        paddingHorizontal: 10,
        marginBottom: 14,
        marginLeft: 34

    },
    input: {
        fontSize: 16,
        color: '#fff',
        width: 330,
        height: 85,
        borderWidth: 1,
        borderColor: '#dddddd',
        borderRadius: 13,
        paddingHorizontal: 10,
        marginBottom: 14,
        marginLeft: 34

    },

    logo: {
        flex: 1,
        width: '80%',
        height: '100%',
    },
    BoxContainer: {
        width: '100%',
        height: '65%',
        borderBottomRightRadius: 0,

    },
    outerBoxContainer: {
        width: '100%',
        height: '100%',
        borderColor: 'black', // Black border
        borderRadius: 90,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        backgroundColor: '#0077b6', //  blue color
    },
    registerText: {
        marginTop: '20%',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        color: '#010a30'
    },
    createText: {
        color: 'white',
        fontSize: 17,
        textAlign: 'center',
        marginTop: '6%',
        marginBottom: 24,
    },
    buttonRegister: {
        width: '85%',
        backgroundColor: 'orange',
        padding: 18,
        marginTop: '2%',
        borderRadius: 12,
        marginLeft: 34,
        alignItems: 'center',
    },
    buttonTextRegister: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    }
});

export default Feedback;
