import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { CartButton } from '../CartButton'
import { ListItem } from '../ShpoingItem/ListItem'

export const ShoppingList = () => {
    return (
        <FlatList
        keyExtractor={item=>item.name}
            data={[{
                
                name: "test",
                image: 'image',
                price: 1230,
                stock: 2,
                createdAt: Date.now(),
                material: 'fab'
            },
            {
                name: "test1",
                image: 'image',
                price: 1230,
                stock: 2,
                createdAt: Date.now(),
                material: 'fab'
            },
            {
                name: "test2",
                image: 'image',
                price: 1230,
                stock: 2,
                createdAt: Date.now(),
                material: 'fab'
            }]}
            renderItem={()=><Text>sssssss</Text>}//ListItem}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        height: 50, width: '100%', flexDirection: 'row',
        justifyContent: 'space-between'
    },
});

