import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {CartButton} from './CartButton'
import CartModal from './models/CartModel';

export const HeaderBar=({title, robotsInCart,onPressRemoveFromCart,onPressAddFromCart})=>{
  const [cartVisible, setCartVisible] = useState(false)
  return (
    <View style={styles.container}>
      <Text style={styles.fontStyle}>{title}</Text>
      <CartButton onPress={()=>setCartVisible(true)}/>
      <CartModal onPressRemoveFromCart={onPressRemoveFromCart} onPressAddFromCart={onPressAddFromCart} closeModal={()=>setCartVisible(false)} robotsList={robotsInCart} modalVisible={cartVisible}/>
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

