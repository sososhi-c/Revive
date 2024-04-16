import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const TyreHistory = () => {
  const navigation = useNavigation();
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const handleGoBack = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  const fetchHistory = async () => {
    try {
      const response = await axios.get('http://10.24.88.110:5000/tyre/getTyreHistory');

      if (response.status === 200) {
        setHistory(response.data);
      } else {
        console.error('Failed to fetch Tyre history');
        alert('Failed to fetch Tyre history');
      }
    } catch (error) {
      console.error('Error fetching Tyre history:', error);
      alert('Error fetching Tyre history');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton} >
                <Ionicons name="chevron-back-circle" size={40} color="black" />
            </TouchableOpacity>

      <Text style={styles.title}>Tyre History</Text>
      {history.map((item) => (
        <View style={styles.card} key={item._id}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>Customer Name: {item.fullName}</Text>
            <Text style={styles.cardHeaderText}>Email: {item.email}</Text>
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.text}>Model of Vehicle: {item.vehicleModel}</Text>
            <Text style={styles.text}>License Plate: {item.licensePlateNumber}</Text>
            <Text style={styles.text}>Current Location: {item.currentLocation}</Text>
            <Text style={styles.text}>Required Battery Type: {item.prefBatteryType}</Text>
            <Text style={styles.text}>Additional Note: {item.add_note}</Text>
            <Text style={styles.text}>Request Status: {item.status || 'Pending'}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'linear-gradient(to right, #d1defb, rgb(219, 242, 255))',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 10,
    zIndex: 1, // Ensure the back button appears above other content
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
    textAlign: 'center',
    marginTop: 75,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardHeader: {
    backgroundColor: '#0077b6',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
  },
  cardHeaderText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
  },
  cardBody: {
    padding: 10,
    backgroundColor: '#90e0ef'
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default TyreHistory;
