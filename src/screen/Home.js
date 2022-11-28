import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderBar } from '../components/HeaderBar';
import { ShoppingList } from '../components/ShoppingList/List'
import { apiRobots, MainUrl } from '../utils/constants';

export default function Home() {
    //set loading state
    const [isLoading, SetIsLoading] = useState(false);
    //set robots list
    const [robotsList, SetrobotsList] = useState([]);
    //set cart item
    const [cart, SetCart] = useState([]);

    //retrive robots
    async function retriveRobots() {
        SetIsLoading(true);
        try {
            let result = await axios.get(`${MainUrl}${apiRobots}`)

            if (result?.data?.data?.length > 0) {
                SetrobotsList(result.data.data)
            }

            SetIsLoading(false);
        } catch (error) {
            alert(error);
            SetIsLoading(false);
        }

    }

    useEffect(() => {
        retriveRobots();
    }, [])


    function onPressAddToCart({ name,
        image,
        price,
        stock,
        createdAt,
        material }) {
        let cartUpdate = [...cart]
        //check maxium material amount 5
        let uniqueRobots = [...new Set((cartUpdate.map(item => item.material)))]
        //if unique materials are more than 5 show alert
        if(uniqueRobots.length > 5){
            alert('Maximum Materials are selected')
            return
        }
     

        cartUpdate.push({
            name,
            image,
            price,
            stock,
            createdAt,
            material
        })
        SetCart(cartUpdate)
       
    }

    return (
        <View style={styles.container}>
            <HeaderBar title={"Robot Market"} />
            <View style={styles.body}>
                <ShoppingList isLoading={isLoading} robotsList={robotsList} onPressAddToCart={onPressAddToCart} />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    body: {
        padding: 6
    }
});
