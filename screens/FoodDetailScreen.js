import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import React, { useLayoutEffect, useContext } from "react";
import { FOODS } from "../data/dummy-data";
import FoodIngredients from "../componenets/FoodIngredients";
import { Ionicons } from "@expo/vector-icons";
import { FavoriteContext } from "../store/favoritecontext";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorite";

export default function FoodDetailScreen({ route, navigation }) {
  const dispatch = useDispatch();
  const favoriteFoodsIds = useSelector((state) => state.favoriteFoods.ids);
  //const favoriteFoodContext = useContext(FavoriteContext);
  //console.log(favoriteFoodContext);
  const foodId = route.params.foodId;

  const selectedFood = FOODS.find((food) => food.id === foodId);
  //console.log(selectedFood);

  //const foodIsFavorite = favoriteFoodContext.ids.includes(foodId);
  const foodIsFavorite = favoriteFoodsIds.ids.includes(foodId);

  const pressHandler = () => {
    //console.log("Tiklandi");
  };

  function changeFavorite() {
    if (foodIsFavorite) {
      dispatch(removeFavorite({ id: foodId }));
      //favoriteFoodContext.removeFavorite(foodId);
    } else {
      dispatch(addFavorite({ id: foodId }));

      //favoriteFoodContext.addFavorite(foodId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Pressable>
            <Text>
              <Ionicons
                onPress={pressHandler}
                style={({ pressed }) => (pressed ? styles.pressed : null)}
                name={foodIsFavorite ? "star" : "star-outline"}
                size={24}
                color="white"
                onPressIn={changeFavorite}
              />
            </Text>
          </Pressable>
        );
      },
    });
  }, [navigation, changeFavorite]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedFood.imageUrl }} />
      <Text style={styles.title}>{selectedFood.title}</Text>

      <View style={styles.details}>
        <Text style={styles.detailItem}>{selectedFood.complexity}</Text>
        <Text style={styles.detailItem}>{selectedFood.affordability}</Text>
      </View>
      <View style={styles.listContainer}>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>Icindekiler</Text>
        </View>
        <FoodIngredients data={selectedFood.ingredients} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {},

  image: {
    height: 300,
    width: "100%",
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 5,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
    color: "red",
  },
  listContainer: {
    width: "100%",
    paddingHorizontal: 10,
  },
  subTitleContainer: {
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "orange",
    marginVertical: 5,
  },
  subTitle: {
    color: "orange",
    fontSize: 24,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.5,
  },
});
