import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { CartButton } from '../CartButton'
import { ListItem } from '../ShpoingItem/ListItem'

export const ShoppingList = ({
    isLoading,robotList
}) => {
    return (
        <FlatList
        ListEmptyComponent={isLoading ? <ActivityIndicator/> : null}
        keyExtractor={item=>item.name}
            data={robotList}
            renderItem={ListItem}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        height: 50, width: '100%', flexDirection: 'row',
        justifyContent: 'space-between'
    },
});

