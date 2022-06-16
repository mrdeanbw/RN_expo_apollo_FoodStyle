import React, { useState } from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, LogBox } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CardsList from "./src/screens/CardsList";
import store from "./store";
import { ApolloProvider } from "@apollo/client";

LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
const Stack = createNativeStackNavigator();

import { client } from "./src/graphql/client";
export default function App() {
  const [loadingCache, setLoadingCache] = useState(true);
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name={"CardsList"}
              component={CardsList}
              options={{}}
            />
          </Stack.Navigator>
          <StatusBar style="dark" />
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  );
}
