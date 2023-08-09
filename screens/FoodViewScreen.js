import { FOODS, CATEGORIES } from "../data/dummy-data";
import FoodItem from "../componenets/FoodItem";
import FoodList from "../componenets/FoodList";

export default function FoodViewScreen({ route, navigation }) {
  const categoryId = route.params.categoryId;

  const displayedFoods = FOODS.filter((foodItem) => {
    return foodItem.categoryIds.indexOf(categoryId) >= 0;
  });
  //console.log(displayedFoods);
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, categoryId]);

  return <FoodList items={displayedFoods} />;
}

const styles = StyleSheet.create({});
