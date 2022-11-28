import { Modal, Pressable, StyleSheet } from "react-native";
import { View,Text } from "react-native";
import { ShoppingList } from "../ShoppingList/List";

export default function CartModal({ robotsList, modalVisible, closeModal,onPressRemoveFromCart,onPressAddFromCart }) {
   
    function getTotalPrice(){
        let totalAmount = 0
        robotsList.map(m=>{
            totalAmount = totalAmount + (m.price * m.cart)
        })
        return Math.round(totalAmount,2)
    }

    return (
        <Modal animationType="slide"
            transparent={true}
            visible={modalVisible}>
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <Text style={{alignSelf:'center', fontSize:20,fontWeight:'bold'}}>Cart</Text>
                    <ShoppingList isCart robotsList={robotsList} onPressAddFromCart={onPressAddFromCart} onPressRemoveFromCart={onPressRemoveFromCart} />
                    <Text>Total Price : LKR {getTotalPrice()} </Text>
                    <Pressable style={styles.closeButton} onPress={closeModal}><Text>CLOSE</Text></Pressable>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center', justifyContent: 'center', flex: 1,padding:2
    },
    subContainer: {
        width: 300, height: 400, backgroundColor: 'white',alignSelf:'center'
    },
    closeButton:{
        alignItems:'center',
        justifyContent:'center',
        width:150,
        height:30,
        alignSelf:'center'
    }
})

