import { FlatList, View } from "react-native";
import CarItem from "../CarItem/CarItem";
import styles from "./CarsListStyle";
import cars from "./cars";

const CarsList = () => {
  return (
    <View style={styles.container}>
      <FlatList data={cars} renderItem={({ item }) => <CarItem car={item} />} />
    </View>
  );
};

export default CarsList;
