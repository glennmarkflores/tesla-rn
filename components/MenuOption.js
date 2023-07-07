import { View, Text, StyleSheet, Pressable } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";

const MenuOption = ({ item }) => {
  return (
    <Link href={item.href} asChild>
      <Pressable style={styles.optionMenu}>
        <MaterialCommunityIcons name={item.iconName} size={26} color="gray" />

        <Text href={item.href} style={styles.optionText}>
          {item.name}
        </Text>

        <MaterialIcons
          name="keyboard-arrow-right"
          size={24}
          color="gray"
          style={{ marginLeft: "auto" }}
        />
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  optionMenu: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  optionText: {
    color: "#eee",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default MenuOption;
