import { StyleSheet, Text, View } from 'react-native';
import {CartButton} from '../CartButton'

const Price=({price})=>{
    const convertedPrice = price // convert to lkr
    return (
        <Text>{convertedPrice}</Text>
    )
}

export const ListItem=({name,
  image,
  price,
  stock,
  createdAt,
  material,}, index)=>{
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text>name</Text>
      </View>
      {/* <View style={styles.bottomContainer}>
        <Text>Title  Cetegory  others</Text>
        <View style={styles.priceContainer}>
        <Price price={1000}/>
        <CartButton onPress={()=>{}}/>
        </View>
        
      </View> */}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  topContainer:{flex:3},
  bottomContainer:{flex:1},
  priceContainer:{
    flexDirection:'row',
    justifyContent:'space-between'
  }
});

