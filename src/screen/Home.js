import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderBar } from '../components/HeaderBar';
import {ShoppingList} from '../components/ShoppingList/List'
import { apiRobots, MainUrl } from '../utils/constants';

export default function Home() {
    //set loading state
    const [isLoading, SetIsLoading] = useState(false);
    //set robots list
    const [robotsList, SetrobotsList] = useState([]);

    //retrive robots
    async function retriveRobots(){
        SetIsLoading(true);
        try {
            let result = await axios.get(`${MainUrl}${apiRobots}`)
            if(result?.data){
                SetrobotsList(result.data)
            }
            
            SetIsLoading(false);
        } catch (error) {
            alert(error);
            SetIsLoading(false);
        }
        
    }

    useEffect(()=>{
retriveRobots();
    },[])

  return (
    <View style={styles.container}>
        <HeaderBar title={"Robot Market"}/>
        <View style={styles.body}>
        <ShoppingList isLoading={isLoading} robotsList={robotsList}/>
        </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  body:{
    padding:6
  }
});
