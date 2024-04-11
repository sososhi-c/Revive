import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, ScrollView, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Carousel from 'react-native-snap-carousel'; // Import Carousel component
import ServiceCard from './ServiceCard';
import Menu from './Menu';

// Import images
import batteryChangeImage from '../assets/battery.webp';
import fuelDeliveryImage from '../assets/fuel.webp';
import tireChangeImage from '../assets/Tyre.webp';
import towingImage from '../assets/tow.webp';

import Corousel1 from '../assets/1.webp'
import Corousel2 from '../assets/2.avif'
import Corousel3 from '../assets/3.jpeg'
import Corousel4 from '../assets/4.jpeg'



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Ensure useState is properly imported

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  // Sample data for the carousel
  const carouselItems = [
    { title: 'Excellent Service', text: 'One of the best in India', image: Corousel1 },
    { title: 'More than 20+ services', text: 'Various services available', image: Corousel2 },
    { title: 'Customer Service', text: 'Good after service', image: Corousel3 },
    { title: 'Experienced Mechanics', text: '10+ years experience', image: Corousel4 },
  ];

  // Render item for the carousel
  const renderCarouselItem = ({ item, index }) => {
    return (
      <View style={styles.carouselItem}>
        <Image source={item.image} style={styles.carouselImage} />
        <Text style={styles.carouselTitle}>{item.title}</Text>
        <Text style={styles.carouselText}>{item.text}</Text>
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Menu Button */}
        <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
          <MaterialCommunityIcons name="menu" size={24} color="black" />
        </TouchableOpacity>

        {/* Carousel */}
        <View style={styles.carouselContainer}>
          <Carousel
            data={carouselItems}
            renderItem={renderCarouselItem}
            sliderWidth={windowWidth}
            itemWidth={windowWidth * 0.8} // Adjust the width of each carousel item as needed
            layout="default"
            autoplay={true} // Enable autoplay
            autoplayInterval={5000} // Set autoplay interval to 5 seconds
            loop={true}
            keyExtractor={(item, index) => index.toString()}
            layoutCardOffset={18} // Adjust the space between carousel items
          />
        </View>
        

        {/* Menu */}
        <Menu isOpen={menuOpen} toggleMenu={toggleMenu} />

        {/* Service Cards */}
        <View style={styles.serviceContainer}>
        <Text style={styles.topServicesText}>Top Services</Text>
          <ServiceCard 
            title="Battery Change" 
            description="Get your car battery replaced quickly." 
            imageSource={batteryChangeImage} 
          />
          <ServiceCard 
            title="Fuel Delivery" 
            description="Get fuel delivered to your location." 
            imageSource={fuelDeliveryImage} 
          />
          <ServiceCard 
            title="Tire Change" 
            description="Assistance with changing flat tires." 
            imageSource={tireChangeImage} 
          />
          <ServiceCard 
            title="Towing" 
            description="Get your car towed to a repair shop." 
            imageSource={towingImage} 
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6EAF8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  menuButton: {
    position: 'absolute',
    top: windowHeight * 0.05,
    left: windowWidth * 0.05,
    zIndex: 1,
  },
  carouselContainer: {
    marginTop: windowHeight * 0.1, // Adjust margin to create space between menu icon and carousel
    width: '100%',
    alignItems: 'center', // Center the carousel horizontally
  },
  carouselItem: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth * 0.8,
    elevation: 5, // Add shadow
  },
  carouselImage: {
    width: '100%',
    height: 200, // Adjust image height as needed
    borderRadius: 10,
    marginBottom: 10,
  },
  carouselTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  carouselText: {
    fontSize: 16,
    color: '#666',
  },
  serviceContainer: {
    marginTop: windowHeight * 0.05, // Adjust as needed
    width: '100%',
  },
  topServicesText: {
    fontSize: 28, // Adjust the font size as desired
    fontWeight: 'bold', // Use a bold font weight
    marginBottom: 10, // Add some space after the text
  },
});

export default HomePage;
