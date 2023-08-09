import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { FOODS } from "../data/dummy-data";
import Food from "../models/food";
import { FavoriteContext } from "../store/favoritecontext";
import FoodList from "../componenets/FoodList";
import { useSelector, useDispatch } from "react-redux";

export default function FavoriteScreen() {
  //const favoriteFoodContext = useContext(FavoriteContext);
  const favoriteFoodsIds = useSelector((state) => state.favoriteFoods.ids);

  //   const favoriteFoods = FOODS.filter((food) =>
  //     favoriteFoodContext.ids.includes(food.id)
  //   );
  const favoriteFoods = FOODS.filter((food) =>
    favoriteFoodsIds.ids.includes(food.id)
  );
  if (favoriteFoods.length === 0) {
    return (
      <View style={styles.container}>
        <Text>Favorilere herhangi birsey eklemediniz</Text>
      </View>
    );
  }
  return <FoodList items={favoriteFoods} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
