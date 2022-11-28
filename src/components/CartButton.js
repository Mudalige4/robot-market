import { StyleSheet, Text, View,  } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export const CartButton=({onPress, disabled,totalCartRobots,isHeader})=> <View>
    {
        isHeader ? <Text style={{position:'absolute',right:-4, bottom:-4}}>{totalCartRobots}</Text>
        :null
    }
    <Ionicons color={disabled ? 'lightgray' : 'red'} disabled={disabled} onPress={onPress} name="cart" size={20}  />
    </View>


