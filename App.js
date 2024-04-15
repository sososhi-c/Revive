import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './components/HomePage.js';
import Menu from './components/Menu.js';
import RegisterScreen from './components/LoginRegister/RegisterPage.js';
import BatteryRequirementForm from './components/BatteryRequirementForm.js';
import FuelRequirementForm from './components/FuelRequirementForm.js';
import TowRequirementForm from './components/TowRequirementForm.js';
import TyreReplacementForm from './components/TyreReplacementForm.js';
import LoginScreen from './components/LoginRegister/LoginPage.js';

const Stack = createStackNavigator();

const LogoLoadingScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
    </View>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? (
        <LogoLoadingScreen />
      ) : (
        <Stack.Navigator initialRouteName="HomePage">
          <Stack.Screen
            name="HomePage"
            component={HomePage}
            options={{ headerShown: false }} // hide the header for HomePage
          />
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />

          <Stack.Screen name="BatteryRequirementForm" component={BatteryRequirementForm} />
          <Stack.Screen name="FuelRequirementForm" component={FuelRequirementForm} />
          <Stack.Screen name="TowRequirementForm" component={TowRequirementForm} />
          <Stack.Screen name="TyreReplacementForm" component={TyreReplacementForm} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
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
