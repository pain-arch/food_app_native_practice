import products from "@/assets/data/products";
import ProductlistItem from "@/src/components/ProductlistItem";
import { View } from "react-native";

 

export default function MenuScreen() {


  return (
    <View>
      <ProductlistItem product={products[0]} />
      <ProductlistItem product={products[2]} />
      <ProductlistItem product={products[3]} />
      <ProductlistItem product={products[4]} />
      <ProductlistItem product={products[5]} />
    </View>
  );
}
