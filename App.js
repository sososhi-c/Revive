import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './components/HomePage.js';
import Menu from './components/Menu.js';
import RegisterScreen from './components/LoginRegister/RegisterPage.js';
import BatteryRequirementForm from './components/ServiceForms/BatteryRequirementForm.js';
import FuelRequirementForm from './components/ServiceForms/FuelRequirementForm.js';
import TowRequirementForm from './components/ServiceForms/TowRequirementForm.js';
import TyreReplacementForm from './components/ServiceForms/TyreReplacementForm.js';
import LoginScreen from './components/LoginRegister/LoginPage.js';
import FrontPage from './components/LoginRegister/FrontPage.js';

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
        <Stack.Navigator initialRouteName="FrontScreen">
          <Stack.Screen
            name="HomePage"
            component={HomePage}
            options={{ headerShown: false }} // hide the header for HomePage
          />
          <Stack.Screen name="Menu" component={Menu} options={{ headerTitle: '' }} />
          <Stack.Screen name="FrontScreen" component={FrontPage} options={{ headerTitle: '' }} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerTitle: '' }} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerTitle: '' }} />

          <Stack.Screen name="BatteryRequirementForm" component={BatteryRequirementForm} options={{ headerTitle: '' }} />
          <Stack.Screen name="FuelRequirementForm" component={FuelRequirementForm} options={{ headerTitle: '' }} />
          <Stack.Screen name="TowRequirementForm" component={TowRequirementForm} options={{ headerTitle: '' }} />
          <Stack.Screen name="TyreReplacementForm" component={TyreReplacementForm} options={{ headerTitle: '' }} />
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
