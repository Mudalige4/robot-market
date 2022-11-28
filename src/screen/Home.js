import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderBar } from '../components/HeaderBar';
import {ShoppingList} from '../components/ShoppingList/List'

export default function Home() {
  return (
    <View style={styles.container}>
        <HeaderBar title={"Robot Market"}/>
        <View style={styles.body}>
        <ShoppingList/>
        </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  body:{
    padding:6
  }
});
