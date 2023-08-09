import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

export default function CategoryGrid({ color, title, pressFood }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={pressFood}
      >
        <View style={[styles.insideView, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    height: 150,
    elevation: 4,
    margin: 15,
    borderRadius: 20,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: "white",
  },
  button: {
    flex: 1,
  },
  insideView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
