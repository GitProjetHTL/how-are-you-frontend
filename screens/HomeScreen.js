import React from "react";
import { TouchableOpacity, SafeAreaView, StyleSheet, Text, View, Image, TextInput } from "react-native";
import EmotionBoard from "../components/EmotionBoard";
import { useSelector } from "react-redux";

export default function HomeScreen({ navigation }) {
  const username = useSelector((state) => state.user.value.username); // affiche le pseudo

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>How are you, {username} ?</Text>
      <Text>Comment te sens-tu aujourd'hui ?</Text>
      <EmotionBoard />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    fontFamily: "Solway-ExtraBold",
    textAlign: "center",
    fontSize: 22,
    marginTop: 50,
    marginBottom: 10,
  },
});
