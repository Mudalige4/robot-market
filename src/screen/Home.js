import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState ,Modal} from 'react';
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

            //update shopping list stock number
            let updateRobotList = [...robotsList]

            updateRobotList.map(item=>{
                if(item.name === name && item.stock > 0){
                    item.stock = item.stock - 1
                }
            })

            SetrobotsList(updateRobotList)

        let cartUpdate = [...cart]
        //check maxium material amount 5
        let uniqueRobots = [...new Set((cartUpdate.map(item => item.material)))]
        //if unique materials are more than 5 show alert
        if(uniqueRobots.length > 5){
            alert('Maximum Materials are selected')
            return
        }

        //if same robot then add to existing item
        let cartUpdated = false
        cartUpdate.map(robot =>{
            if(robot.name === name){
                robot['cart'] = robot['cart'] ? robot['cart'] + 1 : 1
                cartUpdated = true;

                if(robot.stock >0){
                    robot.stock = robot.stock - 1
                }
            }
        })
        
        if(!cartUpdated){
            cartUpdate.push({
                name,
                image,
                price,
                stock,
                createdAt,
                material,
                cart:1
            })
        }
        
        SetCart(cartUpdate)
       
    }

    function onPressAddFromCart({name}){
        //update cart
        let updateRobotList = [...robotsList]

        updateRobotList.map(item=>{
            if(item.name === name && item.stock > 0 && item.stock <= item.cart){
                item.stock = item.stock - 1
            }
        })

        SetrobotsList(updateRobotList)

        //update cart
        let updateCartList = [...cart]

        updateCartList.map(item=>{
            if(item.name === name){
                if(item.stock > 0){
                    item.stock = item.stock - 1
                }

                if(item.cart > 0){
                    item.cart = item.cart + 1
                }
                
            }
        })

        SetCart(updateCartList)
    }

    function onPressRemoveFromCart({name}){
        //update robot
        let updateRobotList = [...robotsList]

        updateRobotList.map(item=>{
            if(item.name === name && item.stock > 0){
                item.stock = item.stock + 1
            }
        })

        SetrobotsList(updateRobotList)

        //update cart
        let updateCartList = [...cart]

        updateCartList.map(item=>{
            if(item.name === name){
                if(item.stock > 0){
                    item.stock = item.stock + 1
                }

                if(item.cart > 0){
                    item.cart = item.cart - 1
                }
                
            }
        })

        SetCart(updateCartList)
    }
    

    return (
        <View style={styles.container}>
            <HeaderBar onPressRemoveFromCart={onPressRemoveFromCart} onPressAddFromCart={onPressAddFromCart} robotsInCart={cart} title={"Robot Market"} />
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
        padding: 6,
        backgroundColor: '#eee',
    }
});
