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
import AboutUsPage from './components/AboutUsPage.js';
import ServicesPage from './components/ServicesPage.js';

import FrontPage from './components/LoginRegister/FrontPage.js';
import HistoryPage from './components/History/HistoryPage.js';
import TyreHistory from './components/History/TyreHistory.js';
import TowHistory from './components/History/TowHistory.js';
import FuelHistory from './components/History/FuelHistory.js';
import BatteryHistory from './components/History/BatteryHistory.js';
import Feedback from './components/Feedback.js';
import ContactPage from './components/ContactPage.js';
import Payment from './components/Payment.js';

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
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerTitle: '', headerShown: false }} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerTitle: '', headerShown: false }} />
          <Stack.Screen name="AboutUsPage" component={AboutUsPage} options={{ headerTitle: '', headerShown: false }} />
          <Stack.Screen name="HistoryPage" component={HistoryPage} options={{ headerTitle: '', headerShown: false }} />
          <Stack.Screen name="Feedback" component={Feedback} options={{ headerTitle: '', headerShown: false }} />
          <Stack.Screen name="ContactPage" component={ContactPage} options={{ headerTitle: '', headerShown: false }} />
          <Stack.Screen name="Payment" component={Payment}  options={{ headerTitle: '', headerShown: false }} />

          <Stack.Screen name="BatteryRequirementForm" component={BatteryRequirementForm} options={{ headerTitle: '', headerShown: false }} />
          <Stack.Screen name="FuelRequirementForm" component={FuelRequirementForm} options={{ headerTitle: '', headerShown: false }} />
          <Stack.Screen name="TowRequirementForm" component={TowRequirementForm} options={{ headerTitle: '', headerShown: false }} />
          <Stack.Screen name="TyreReplacementForm" component={TyreReplacementForm} options={{ headerTitle: '', headerShown: false }} />
          <Stack.Screen name="ServicesPage" component={ServicesPage}  options={{ headerTitle: '', headerShown: false }} />

          <Stack.Screen name="BatteryHistory" component={BatteryHistory} options={{ headerTitle: '', headerShown: false }} />
          <Stack.Screen name="FuelHistory" component={FuelHistory} options={{ headerTitle: '', headerShown: false }} />
          <Stack.Screen name="TowHistory" component={TowHistory} options={{ headerTitle: '', headerShown: false }} />
          <Stack.Screen name="TyreHistory" component={TyreHistory} options={{ headerTitle: '', headerShown: false }} />

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
