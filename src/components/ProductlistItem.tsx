import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import { Product } from '../constants/types'


type ProductlistItemProps = {
  product: Product;
}

export const defaultPizzaImage =  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.jpg'

const ProductlistItem = ({product} : ProductlistItemProps) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: product.image || defaultPizzaImage }}
      />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  )
}

export default ProductlistItem;

const styles = StyleSheet.create({
   
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    flex: 1,
    maxWidth: '50%',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  title: {
    fontWeight: '600',
    fontSize: 18,
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold',
    marginTop: 'auto',
  },
});