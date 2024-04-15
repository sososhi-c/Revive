// FrontPage.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FrontPage = () => {
    const navigation = useNavigation();

    const handleRegisterPress = () => {
        // Navigate to the login page
        navigation.navigate('RegisterScreen');
    };
    const handleLoginPress = () => {
        // Navigate to the login page
        navigation.navigate('LoginScreen');
    };

    return (
        <View style={styles.endContainer}>

            <View style={styles.container}>
                <Image source={require('../../assets/assistance.jpg')} style={styles.logo} resizeMode="contain" />


            </View>
            <View style={styles.BoxContainer}>

                <View style={styles.outerBoxContainer}>
                    <Text style={styles.registerText} >Revive: Vehicle Breakdown Assistance</Text>
                    <Text style={styles.createText} >Bringing Your Journey Back to track !</Text>

                    <View style={styles.innerBoxContainer}>

                        <TouchableOpacity style={styles.buttonLogin} onPress={handleLoginPress}>
                            <Text style={styles.buttonTextLogin}>Login</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonRegister} onPress={handleRegisterPress} >
                            <Text style={styles.buttonTextRegister}>Register</Text>
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
        backgroundColor: '#010a30', // White color inside the container

    },
    container: {
        width: '100%',
        height: '45%',
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white', // White color inside the container
        borderRadius: 90,
        borderTopLeftRadius: 0, // Apply bottom border radius
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
    logo: {
        flex: 1,
        width: '80%',
        height: '100%',
    },
    BoxContainer: {
        width: '100%',
        height: '55%',
        backgroundColor: 'white'
    },
    outerBoxContainer: {
        width: '100%',
        height: '100%',
        borderWidth: 1,
        borderColor: 'black', // Black border
        borderRadius: 90,
        borderTopLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        marginTop: '0%',
        backgroundColor: '#010a30', // dark blue color
    },
    registerText: {
        marginTop: '10%',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        color: 'white'
    },
    createText: {
        color: 'white',
        fontSize: 17,
        textAlign: 'center',
        marginTop: '6%',

    },
    innerBoxContainer: {
        alignItems: 'center',
    },

    buttonLogin: {
        width: '85%',
        backgroundColor: 'white',
        padding: 16,
        marginTop: '14%',
        borderRadius: 12,
        alignItems: 'center',
    },
    buttonRegister: {
        width: '85%',
        backgroundColor: '#010a30',
        padding: 16,
        marginTop: '6%',
        borderRadius: 12,
        borderColor: 'white',
        borderWidth: 2, // Add border width
        alignItems: 'center',
    },
    buttonTextLogin: {
        color: '#010a30',
        fontWeight: 'bold',
        fontSize: 20
    },
    buttonTextRegister: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    }
});

export default FrontPage;
