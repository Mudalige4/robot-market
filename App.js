import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CartScreen from './src/screen/CartScreen';
import Home from './src/screen/Home'

export default function App() {
  return (
    <><Home /><CartScreen /></>
  );
}
