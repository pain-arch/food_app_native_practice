import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

const ProductlistItem = ({product} : {product: any}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: product.image }}
      />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
    </View>
  )
}

export default ProductlistItem

const styles = StyleSheet.create({
   
    container: {
        marginTop: 20,
        marginHorizontal: 10,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
      },
      title: {
        fontSize: 18,
        fontWeight: "600",
        marginVertical: 10,
      },
      price: {
        color: Colors.light.tint,
      },
      image: {
        width: "40%",
        aspectRatio: 1,
      },
});