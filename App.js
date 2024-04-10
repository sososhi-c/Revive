import { View, Image, StyleSheet } from 'react-native';
import HomePage from './components/HomePage.js'; // Import your home page component
import React, { useState, useEffect } from 'react';

const LogoLoadingScreen = () => {
  return (
    <View style={styles.container}>
      {/* App Logo/Name */}
      <Image source={require('./assets/logo.png')} style={styles.logo} />
    </View>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the duration as needed
  }, []);

  return (
    <>
      {isLoading ? <LogoLoadingScreen /> : <HomePage />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
});

export default App;