import { StyleSheet, Text, View,  } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export const CartButton=({onPress, disabled})=> <Ionicons color={disabled ? 'lightgray' : 'red'} disabled={disabled} onPress={onPress} name="cart" size={20}  />


