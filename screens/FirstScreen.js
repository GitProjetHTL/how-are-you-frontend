import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function FirstScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("SignIn")}
      >
        <View style={styles.background}>
          <Image
            source={require("../assets/splash-screen-img.png")}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.textContainer}>
          <View>
            <Text style={[styles.text, { fontFamily: "Solway-ExtraBold" }]}>
              How
            </Text>
            <Text style={[styles.text, { fontFamily: "Solway-ExtraBold" }]}>
              are you ?
            </Text>
          </View>
        </View>
        <View style={styles.background}>
          <Image
            source={require("../assets/splash-screen-img-bottom.png")}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
  },
  background: {
    height: "35%",
    width: "100%",
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "99%",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    height: "30%",
    width: "90%",
    // borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 54,
    textAlign: "center",
  },
  devButton: {
    marginTop: 10,
    backgroundColor: "red",
    height: 40,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  devText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
