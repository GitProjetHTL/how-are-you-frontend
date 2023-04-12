import React, { useState } from "react";
import { Checkbox, Provider } from "react-native-paper";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

export default function ExpectationsScreen({ navigation }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Provider>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/register3.png")}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <Text style={styles.text1}>Que cherches-tu ici ? ?</Text>
        <Text style={styles.text2}>
          Quelles sont tes attentes de How are You ?
        </Text>
        <View style={styles.checkContainer}>
          <Checkbox.Item
            label="Des ressources pour gerer mes émotions"
            status={isChecked ? "checked" : "unchecked"}
            onPress={() => setIsChecked(!isChecked)}
            style={styles.checkbox}
          />
          <Checkbox.Item
            label="Avoir un suivi de mes émotions"
            status={isChecked ? "checked" : "unchecked"}
            onPress={() => setIsChecked(!isChecked)}
            style={styles.checkbox}
          />
          <Checkbox.Item
            label="Mieux comprendre mes émotions"
            status={isChecked ? "checked" : "unchecked"}
            onPress={() => setIsChecked(!isChecked)}
            style={styles.checkbox}
          />
          <Checkbox.Item
            label="En apprendre plus sur moi-même"
            status={isChecked ? "checked" : "unchecked"}
            onPress={() => setIsChecked(!isChecked)}
            style={styles.checkbox}
          />
        </View>
        <TouchableOpacity
          style={styles.NextButton}
          onPress={() => navigation.navigate("CGU")}
        >
          <Text style={styles.NextText}>Suivant </Text>
        </TouchableOpacity>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    alignItems: "center",
    backgroundColor: "white",
  },
  imageContainer: {
    marginTop: 20,
    height: "25%",
    width: "100%",
    borderRadius: 25,
  },

  image: {
    height: "100%",
  },
  text1: {
    fontFamily: "Solway-Bold",
    fontSize: 24,
    textAlign: "center",
    width: "100%",
    marginBottom: 5,
  },
  text2: {
    fontSize: 18,
    textAlign: "center",
    width: "80%",
    marginBottom: 20,
  },
  checkContainer: {
    flexDirection: "column",
    justifyContent: "center",
    borderColor: "#5B3EAE",
    borderRadius: 25,
    padding: 10,
    paddingHorizontal: 5,
    borderWidth: 1,
    height: "45%",
    width: "90%",
    // marginVertical: 20,
  },

  checkbox: {
    // height: 40,
  },
  NextButton: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#5B3EAE",
    borderRadius: 25,
    height: 40,
    width: "60%",
    paddingTop: 5,
    marginTop: 35,
  },
  NextText: {
    color: "#5B3EAE",
    fontSize: 16,
    fontWeight: 500,
    textAlign: "center",
  },
});
