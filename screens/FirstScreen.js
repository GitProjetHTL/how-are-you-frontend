import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";

export default function FirstScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("SignIn")}
      >
        <View style={styles.background}>
          <Image
            source={require("../assets/splash-screen-img.png")}
            style={styles.image}
            resizeMode="cover" // Modifiez cette ligne
          />
        </View>
        <View style={styles.textContainer}>
          <View>
            <Text style={[styles.text, { fontFamily: "Solway-Bold" }]}>
              How
            </Text>
            <Text style={[styles.text, { fontFamily: "Solway-Bold" }]}>
              are you ?
            </Text>
          </View>
        </View>
        <View style={styles.background}>
          <Image
            source={require("../assets/splash-screen-img-bottom.png")}
            style={styles.image}
            resizeMode="cover" // Modifiez cette ligne
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
  },
  background: {
    height: "35%",
    width: "100%",
    // borderColor: "red",
    // borderWidth: 1,
    justifyContent: "center", // Ajoutez cette ligne
    alignItems: "center", // Ajoutez cette ligne
    overflow: "hidden", // Ajoutez cette ligne
  },
  image: {
    position: "absolute", // Ajoutez cette ligne
    width: "100%",
    height: "99%",
    justifyContent: "center", // Ajoutez cette ligne
    alignItems: "center", // Ajoutez cette ligne
  },
  textContainer: {
    height: "30%",
    width: "90%",
    // borderColor: "blue",
    // borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 54,
    textAlign: "center",
  },
});
