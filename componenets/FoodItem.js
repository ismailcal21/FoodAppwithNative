import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function FoodItem({
  id,
  title,
  imageUrl,
  affordability,
  complexity,
}) {
  const navigation = useNavigation();
  const FoodItemHandler = () => {
    navigation.navigate("FoodDetail", {
      foodId: id,
    });
  };

  return (
    <View style={styles.FoodItem}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={FoodItemHandler}
      >
        <View style={styles.innerView}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.Image} />
            <Text style={styles.title}>{title}</Text>
            <View style={styles.details}>
              <Text style={styles.detailItem}>{complexity}</Text>
              <Text style={styles.detailItem}>{affordability}</Text>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  FoodItem: {
    flex: 1,
    margin: 15,
    backgroundColor: "white",
    elevation: 4,
    margin: 15,
    borderRadius: 20,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 10,
  },
  innerView: {},
  Image: { width: "100%", height: 200 },
  title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
