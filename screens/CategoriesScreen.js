import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGrid from "../componenets/CategoryGrid";

export default function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("FoodView", {
        categoryId: itemData.item.id,
      });
    }

    //console.log(itemData.item.title);
    return (
      <CategoryGrid
        title={itemData.item.title}
        color={itemData.item.color}
        pressFood={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({});
