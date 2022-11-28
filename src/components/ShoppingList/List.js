import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { CartButton } from '../CartButton'
import FilterDropdown from '../FilterDropdown';
import { ListItem } from '../ShpoingItem/ListItem'

export const ShoppingList = ({
    isLoading,robotsList,
    onPressAddToCart,isCart,onPressAddFromCart,onPressRemoveFromCart,onValueChangeValue,selectedMaterial,materialList
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
        ListHeaderComponent={isCart ? null :<FilterDropdown onValueChangeValue={onValueChangeValue} selectedMaterial={selectedMaterial} data={materialList}/>}
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

