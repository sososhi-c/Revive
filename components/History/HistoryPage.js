import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Card = ({ title, subtitle, screen }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(screen);
  };

  const handlePressIn = () => {
    setIsHovered(true);
  };

  const handlePressOut = () => {
    setIsHovered(false);
  };



  return (
    <TouchableOpacity
      style={[styles.cardContainer, isHovered && styles.cardHovered]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={handlePress}
    >
      <LinearGradient
        colors={['#892b64', '#5c4d7d']}
        style={styles.cardGradient}
      >
        <View style={styles.card}>
          <View style={styles.content}>
            <FontAwesome name="history" size={24} color="white" style={styles.icon} />
            <View>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const HistoryPage = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };
  return (

    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton} >
        <Ionicons name="chevron-back-circle" size={40} color="black" />
      </TouchableOpacity>
      <Card title="View Fuel History" subtitle="All fuel requests" screen="FuelHistory" />
      <Card title="View Battery History" subtitle="All battery requests" screen="BatteryHistory" />
      <Card title="View Tow History" subtitle="All tow requests" screen="TowHistory" />
      <Card title="View Tyre History" subtitle="All tyre requests" screen="TyreHistory" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#ffd6ff',
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 10,
    zIndex: 1, // Ensure the back button appears above other content
  },
  cardContainer: {
    marginBottom: 30,
    overflow: 'hidden', // Ensure the overflow is hidden for the border radius clipping
  },
  cardGradient: {
    width: 350,
    height: 130,
    borderRadius: 15,
  },
  card: {
    flex: 1,
    borderRadius: 15,
    padding: 15,
  },
  cardHovered: {
    transform: [{ scale: 1.1 }], // Scale up the card on hover
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
    marginLeft: 50,
    marginTop: 15,

  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 30,
    justifyContent: 'center'
  },
  subtitle: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
    marginTop: 5,
  },
});

export default HistoryPage;
