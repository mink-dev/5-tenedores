import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TopRestaurants from "../screens/TopRestaurants";

const Stack = createStackNavigator();

export default function TopRestaurantStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="favorites"
                component={TopRestaurants}
                options={{ title: "Los Mejores Restaurantes"}}
            />
        </Stack.Navigator>
    );
}