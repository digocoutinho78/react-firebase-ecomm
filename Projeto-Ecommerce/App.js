import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler' 
import Routes from './src/routes/index';
import { NavigationContainer } from '@react-navigation/native';
import AuthContextProvider from './src/context/authContext';

export default function App() {
  return (
    <AuthContextProvider>
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
    </AuthContextProvider>
  );
}



