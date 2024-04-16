// Menu.js
import React, { useRef, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, Modal, Animated } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

const Menu = ({ isOpen, toggleMenu }) => {
  const menuAnimation = useRef(new Animated.Value(-windowWidth)).current;
  const navigation = useNavigation();

  useEffect(() => {
    Animated.timing(menuAnimation, {
      toValue: isOpen ? 0 : -windowWidth,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isOpen]);

  const closeMenu = () => {
    toggleMenu();
  };

  const navigateToFront = () => {
    closeMenu(); // Close menu before navigating
    navigation.navigate('FrontScreen');
  };

  const navigateToHistory = () => {
    closeMenu(); // Close menu before navigating
    navigation.navigate('HistoryPage');
  };

  const navigateToFeedback = () => {
    closeMenu(); // Close menu before navigating
    navigation.navigate('Feedback'); // Navigate to the About Us page
  };

  const navigateToAboutUs = () => {
    closeMenu(); // Close menu before navigating
    navigation.navigate('AboutUsPage'); // Navigate to the About Us page
  };

  const navigateToContactUs = () => {
    closeMenu(); // Close menu before navigating
    navigation.navigate('ContactPage');
  };

  const navigateToServices = () => {
    closeMenu(); // Close menu before navigating
    navigation.navigate('ServicesPage'); // Navigate to the ServicesPage
  };

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={isOpen}
      onRequestClose={closeMenu}
    >
      <TouchableOpacity style={styles.modalBackground} onPress={closeMenu}>
        <Animated.View style={[styles.menuContent, { transform: [{ translateX: menuAnimation }] }]}>
          <TouchableOpacity style={styles.closeButton} onPress={closeMenu}>
            <MaterialCommunityIcons name="close" size={24} color="black" />
          </TouchableOpacity>
          <View style={styles.menuItemsContainer}>

            <TouchableOpacity style={styles.menuItem} onPress={navigateToServices}>
              <MaterialIcons name="miscellaneous-services" size={24} color="black" />
              <Text style={styles.menuItemText}>Services</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={navigateToHistory}>
              <FontAwesome name="history" size={24} color="black" />
              <Text style={styles.menuItemText}>History</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={navigateToFeedback}>
              <MaterialIcons name="reviews" size={24} color="black" />
              <Text style={styles.menuItemText}>Feedback</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={navigateToAboutUs}>
              <AntDesign name="infocirlce" size={24} color="black" />
              <Text style={styles.menuItemText}>About Us</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={navigateToContactUs}>
            <MaterialIcons name="contact-mail" size={24} color="black" />
              <Text style={styles.menuItemText}>Contact Us</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.logoutButton} onPress={navigateToFront}>
              <View style={styles.btn}>
                <View style={styles.sign}>
                  <AntDesign name="logout" size={24} color="white" />
                </View>
                <Text style={styles.buttonText}>Logout</Text>
              </View>
            </TouchableOpacity>

          </View>
        </Animated.View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  menuContent: {
    backgroundColor: '#ffffff',
    width: windowWidth * 0.8,
    height: '100%',
    paddingTop: 50, // Adjust as needed
    paddingLeft: 20, // Adjust as needed
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  menuItemsContainer: {
    marginTop: 40,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ced4da',
  },
  menuItemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginLeft: 20, // Adjust as needed
  },
  logoutButton: {
    marginTop: '50%',
    alignItems: 'center'
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 125,
    height: 45,
    borderRadius: 40,
    backgroundColor: 'rgb(255, 65, 65)',
    overflow: 'hidden',
    boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.199)',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  sign: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
    width: '70%',
    opacity: 1,
  },
});

export default Menu;
