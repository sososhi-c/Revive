// HomePage.js

import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ServiceCard from './ServiceCard';
import Menu from './Menu';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Menu Button */}
        <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
          <MaterialCommunityIcons name="menu" size={24} color="black" />
        </TouchableOpacity>

        {/* Menu */}
        <Menu isOpen={menuOpen} toggleMenu={toggleMenu} />

        {/* Service Cards */}
        <View style={styles.serviceContainer}>
          <ServiceCard title="Battery Change" description="Get your car battery replaced quickly." />
          <ServiceCard title="Fuel Delivery" description="Get fuel delivered to your location." />
          <ServiceCard title="Tire Change" description="Assistance with changing flat tires." />
          <ServiceCard title="Towing" description="Get your car towed to a repair shop." />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#007bff',
  },
  menuButton: {
    position: 'absolute',
    top: windowHeight * 0.05,
    left: windowWidth * 0.05,
    zIndex: 1,
  },
  serviceContainer: {
    marginTop: windowHeight * 0.15, // Adjust as needed
    width: '100%',
  },
});

export default HomePage;
