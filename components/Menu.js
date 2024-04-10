// Menu.js

import React, { useRef, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, Modal, Animated } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;

const Menu = ({ isOpen, toggleMenu }) => {
  const menuAnimation = useRef(new Animated.Value(-windowWidth)).current;

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
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuItemText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuItemText}>Register</Text>
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
    marginTop: 20,
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ced4da',
  },
  menuItemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
});

export default Menu;
