import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Payment = () => {
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack(); // Navigate back to the previous screen
    };

    return (

        <View style={styles.container}>
            <TouchableOpacity onPress={handleGoBack} style={styles.backButton} >
                <Ionicons name="chevron-back-circle" size={40} color="black" />
            </TouchableOpacity>
            <View style={styles.card}>
                <Text style={styles.cardHeading}>
                    Payment Information
                </Text>
                <Text style={styles.cardText}>
                    At REVIVE Vehicle Breakdown Assistance, your convenience and peace of mind are our top priorities. We are diligently working to implement online payment options for our services. In the meantime, we kindly request that all payments be made directly to our mechanics at the time of service.
                </Text>
                <Text style={styles.cardText}>
                    We accept various payment methods, including credit cards, UPI, and cash. Rest assured, our team is available to assist you throughout the payment process and address any questions or concerns you may have. Thank you, hope you have a safe and happy journey!
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#ffe8d6'
    },
    backButton: {
        position: 'absolute',
        top: 80,
        left: 20,
        zIndex: 1, // Ensure the back button appears above other content
    },

    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 25,
        color: 'red',
        textAlign: 'center'
    },
    cardText: {
        fontSize: 17,
        color: '#333',
        marginBottom: 10,
        fontStyle: 'italic'
    },
});

export default Payment;
