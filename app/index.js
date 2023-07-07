import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import car from "../assets/images/car.png";
import menuOptions from "../assets/menuOptions";
import MenuOption from "../components/MenuOption";
import Controls from "../components/Controls";

export default function Page() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>My Model S</Text>
          <Text style={styles.subtitle}>Park</Text>
        </View>
        <FontAwesome name="user-circle" size={30} color="gray" />
      </View>

      <Image source={car} style={styles.carImage} resizeMode="contain" />

      <FlatList
        data={menuOptions}
        showsVerticalScrollIndicator={false}
        renderItem={MenuOption}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={Controls}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#161818",
  },
  header: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    color: "#eee",
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    color: "gray",
    fontWeight: 500,
  },
  carImage: {
    width: "100%",
    height: 300,
  },
});
