import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FoodViewScreen from "./screens/FoodViewScreen";
import FoodDetailScreen from "./screens/FoodDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoriteScreen from "./screens/FavoriteScreen";
import { Ionicons } from "@expo/vector-icons";
import FavoriteContextProvider from "./store/favoritecontext";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "blue" },
        headerTintColor: "white",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "Tum Kategoriler",
          drawerIcon: () => <Ionicons name="list" size={24} color="black" />,
        }}
      />
      <Drawer.Screen
        options={{
          title: "Favoriler",
          drawerIcon: () => (
            <Ionicons name="ios-star-half" size={24} color="black" />
          ),
        }}
        name="Favorite"
        component={FavoriteScreen}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      {/* <FavoriteContextProvider> */}
      <Provider store={store}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "blue" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "lightblue" },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="FoodView" component={FoodViewScreen} />
          <Stack.Screen
            options={{
              title: "Icerik",
            }}
            name="FoodDetail"
            component={FoodDetailScreen}
          />
        </Stack.Navigator>
        {/* </FavoriteContextProvider> */}
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
