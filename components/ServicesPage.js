import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ServiceCard from './ServiceCard';
import { useNavigation } from '@react-navigation/native';

import batteryChangeImage from '../assets/battery.webp';
import fuelDeliveryImage from '../assets/fuel.webp';
import tireChangeImage from '../assets/Tyre.webp';
import towingImage from '../assets/tow.webp';

const ServicesPage = () => {
  const navigation = useNavigation();

  // Define service card data
  const services = [
    {
      title: 'Battery Change',
      description: 'Get your car battery replaced quickly.',
      imageSource: batteryChangeImage, // Corrected
      formName: 'BatteryRequirementForm',
    },
    {
      title: 'Fuel Delivery',
      description: 'Get fuel delivered to your location.',
      imageSource: fuelDeliveryImage, // Corrected
      formName: 'FuelRequirementForm',
    },
    {
      title: 'Tyre Change',
      description: 'Assistance with changing flat tires.',
      imageSource: tireChangeImage, // Corrected
      formName: 'TyreReplacementForm',
    },
    {
      title: 'Towing',
      description: 'Get your car towed to a repair shop.',
      imageSource: towingImage, // Corrected
      formName: 'TowRequirementForm',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {services.map((service, index) => (
        <View key={index} style={styles.serviceCardContainer}>
          <ServiceCard
            title={service.title}
            description={service.description}
            imageSource={service.imageSource}
            formName={service.formName}
            navigation={navigation}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#D6EAF8',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  serviceCardContainer: {
    width: '90%', // Set the width to 90% of the screen width
    marginBottom: 20, // Add marginBottom to create space between service cards
  },
});

export default ServicesPage;
