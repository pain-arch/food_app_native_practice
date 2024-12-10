import products from "@/assets/data/products";
import ProductlistItem from "@/src/components/ProductlistItem";
import { FlatList} from "react-native";

export default function MenuScreen() {
  return (
    
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductlistItem product={item} />}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }}
      />

      
    
  );
}
