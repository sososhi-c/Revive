import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ServiceCard = ({ title, description, imageSource, formName, navigation }) => {
  const handleRequest = () => {
    switch (formName) {
      case 'BatteryRequirementForm':
        navigation.navigate('BatteryRequirementForm');
        break;
      case 'FuelRequirementForm':
        navigation.navigate('FuelRequirementForm');
        break;
      case 'TowRequirementForm':
        navigation.navigate('TowRequirementForm');
        break;
      case 'TyreReplacementForm':
        navigation.navigate('TyreReplacementForm');
        break;
      default:
        // Default case
        break;
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.content}>
        <MaterialCommunityIcons name="toolbox-outline" size={24} color="#007bff" style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.requestButton} onPress={handleRequest}>
        <Text style={styles.requestButtonText}>Request Service</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center', // Center the image horizontally
    marginBottom: 10,
  },
  image: {
    width: '70%', // Decreased width to 70%
    height: 150, // Keep the height as 150
    borderRadius: 10,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
  requestButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  requestButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ServiceCard;
