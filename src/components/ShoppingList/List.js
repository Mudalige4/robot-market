import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { CartButton } from '../CartButton'
import { ListItem } from '../ShpoingItem/ListItem'

export const ShoppingList = ({
    isLoading,robotsList,
    onPressAddToCart,isCart,onPressAddFromCart,onPressRemoveFromCart
}) => {

    function renderItem({item}, index){
  
        return <ListItem name={item.name}
        image={item.image}
        price={item.price}
        stock={item.stock}
        createdAt={item.createdAt}
        material={item.material}
        onPressAddToCart={onPressAddToCart}
        cart={item.cart}
        isCart={isCart}
        onPressRemoveFromCart={onPressRemoveFromCart}
        onPressAddFromCart={onPressAddFromCart}

        />
    }

    return (
        <FlatList
        contentContainerStyle={{alignItems:'center',justifyContent:'center'}}
        ListEmptyComponent={isLoading ? <ActivityIndicator/> : <Text>No Items found</Text>}
        keyExtractor={item=>item.name}
            data={robotsList}
            renderItem={renderItem}
            numColumns={2}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        height: 50, width: '100%', flexDirection: 'row',
        justifyContent: 'space-between'
    },
});

