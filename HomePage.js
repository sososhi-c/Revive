import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native'; // Added ScrollView import
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ServiceCard from './ServiceCard';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* App Logo/Name */}
        <Text style={styles.logo}>ReviveApp</Text>

        {/* Menu Items */}
        <View style={styles.menu}>
          {menuOpen && (
            <>
              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuItemText}>Services</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuItemText}>Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuItemText}>History</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuItemText}>About Us</Text>
              </TouchableOpacity>
            </>
          )}
        </View>

        {/* Hamburger Menu */}
        <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
          <MaterialCommunityIcons name="menu" size={24} color="black" />
        </TouchableOpacity>

        {/* Service Cards */}
        <View style={styles.serviceContainer}>
          <ServiceCard title="Battery Change" description="Get your car battery replaced quickly." />
          <ServiceCard title="Fuel Delivery" description="Get fuel delivered to your location." />
          <ServiceCard title="Tire Change" description="Assistance with changing flat tires." />
          <ServiceCard title="Towing" description="Get your car towed to a repair shop." />
        </View>

        {/* Call to Action (CTA) Button */}
        <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaButtonText}>Book Now</Text>
        </TouchableOpacity>
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
  menu: {
    marginTop: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    position: 'absolute',
    top: windowHeight * 0.1,
    left: windowWidth * 0.1,
  },
  menuItem: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ced4da',
  },
  menuItemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  serviceContainer: {
    marginTop: 20,
    width: '100%',
  },
  ctaButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: windowHeight * 0.05,
  },
  ctaButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default HomePage;
