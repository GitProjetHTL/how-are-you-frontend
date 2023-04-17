import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FirstScreen from "./screens/FirstScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import SurveyScreen from "./screens/SurveyScreen";
import ExpectationsScreen from "./screens/ExpectationsScreen";
import CguScreen from "./screens/CguScreen";
import HomeScreen from "./screens/HomeScreen";
import DiscoverScreen from "./screens/DiscoverScreen";
import CardsScreen from "./screens/CardsScreen";
import AudioScreen from "./screens/AudioScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SuiviScreen from "./screens/SuiviScreen";
import FavorisScreen from "./screens/FavorisScreen";
import InfosScreen from "./screens/InfosScreen";
import HelpScreen from "./screens/HelpScreen";

import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import user from "./reducers/user";
i78mport survey from "./reducers/survey";

const store = configureStore({
  reducer: { user, survey },
});

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = "";

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Discover") {
            iconName = "compass";
          } else if (route.name === "Cards") {
            iconName = "ticket";
          } else if (route.name === "Audios") {
            iconName = "podcast";
          } else if (route.name === "Profil") {
            iconName = "user";
          }

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#5B3EAE",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Discover" component={DiscoverScreen} />
      <Tab.Screen name="Cards" component={CardsScreen} />
      <Tab.Screen name="Audios" component={AudioScreen} />
      <Tab.Screen name="Profil" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [appIsReady, setAppIsReady] = useState(false);
  //charger les fonts pour eviter le crash
  useEffect(() => {
    async function prepareApp() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await loadFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      }
    }

    prepareApp();
  }, []);

  async function loadFonts() {
    await Font.loadAsync({
      "Solway-Regular": require("./assets/fonts/Solway-Regular.ttf"),
      "Solway-ExtraBold": require("./assets/fonts/Solway-ExtraBold.ttf"),
      "Solway-Bold": require("./assets/fonts/Solway-Bold.ttf"),
      "Solway-Medium": require("./assets/fonts/Solway-Medium.ttf"),
      "Solway-Light": require("./assets/fonts/Solway-Light.ttf"),
      "DM-Sans-Regular": require("./assets/fonts/DMSans-Regular.ttf"),
      "DM-Sans-Bold": require("./assets/fonts/DMSans-Bold.ttf")
    });
    setFontsLoaded(true);
  }

  if (!appIsReady) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="first" component={FirstScreen} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Survey" component={SurveyScreen} />
          <Stack.Screen name="expect" component={ExpectationsScreen} />
          <Stack.Screen name="CGU" component={CguScreen} />
          <Stack.Screen name="fav" component={FavorisScreen} />
          <Stack.Screen name="suivi" component={SuiviScreen} />
          <Stack.Screen name="help" component={HelpScreen} />
          <Stack.Screen name="infos" component={InfosScreen} />
          <Stack.Screen name="profil" component={ProfileScreen} />
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  menu: {
    fontFamily: "DM-Sans-Regular",
  }
});
