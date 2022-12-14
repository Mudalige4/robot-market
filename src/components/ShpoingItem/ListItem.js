import { Image, StyleSheet, Text, View } from 'react-native';
import { CartButton } from '../CartButton';
import Ionicons from '@expo/vector-icons/Ionicons';

export const ListItem = ({ name,
  image,
  price,
  stock,
  createdAt,
  material, onPressAddToCart, isCart, cart ,onPressAddFromCart,onPressRemoveFromCart}) => {

  function oPress() {
    onPressAddToCart({
      name,
      image,
      price,
      stock,
      createdAt,
      material
    });
  }

  function onPressUP(){
    onPressAddFromCart({name})
  }

  function onPressDown(){
    onPressRemoveFromCart({name})
  }

  

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image resizeMode='contain' style={styles.image} source={{ uri: image }} />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.nameStyle}>{name}</Text>

        </View>
        <Text style={styles.stockStyle}>Material - {material}</Text>
        <Text style={styles.stockStyle}>Stock - {stock}</Text>
        <Text style={styles.stockStyle}>Created At - {new Date(createdAt).toLocaleString().split(',')[0]}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>LKR {price}</Text>
          {
            isCart ?
              <View style={styles.cartButtonContainer}>
                <Ionicons name="arrow-up" onPress={onPressUP} />
                <Text>{cart}</Text>
                <Ionicons name="arrow-down" onPress={onPressDown}/>
              </View> : <CartButton disabled={stock <= 0} onPress={oPress} />
          }


        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  cartButtonContainer: {
    flexDirection: 'row'
  },
  price: {
    fontSize: 8,
    fontWeight: 'bold'

  },
  image: {
    width: 100, height: 80
  },
  stockStyle: {
    fontSize: 10,
  },
  container: {
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 4, marginHorizontal: 6, padding: 2,
  },
  topContainer: { flex: 1 },
  bottomContainer: { flex: 1 },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', alignItems: 'center'
  }
});

