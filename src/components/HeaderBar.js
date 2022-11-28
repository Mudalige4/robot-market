import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {CartButton} from './CartButton'

export const HeaderBar=({title})=>{
  return (
    <View style={styles.container}>
      <Text style={styles.fontStyle}>{title}</Text>
      <CartButton onPress={()=>{}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:50,width:'100%',flexDirection:'row',
    justifyContent:'space-between',alignItems:'center',paddingVertical:2,paddingHorizontal:6
  },
  fontStyle:{fontSize:18, fontWeight:'bold'}
});

