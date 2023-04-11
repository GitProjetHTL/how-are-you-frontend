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

export default function SurveyScreen({ navigation }) {
  const [bienEtre, setBienEtre] = useState(false);

  return (
    <Provider>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/register1.png")}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <Text style={styles.text1}>De quoi veux-tu parler ?</Text>
        <Text style={styles.text2}>
          Sélectionne les sujets qui t'intéressent le plus.
        </Text>
        <View style={styles.checkContainer}>
          <View style={styles.checkContainerLeft}>
            <Checkbox.Item
              label="Bien-être"
              status={bienEtre ? "checked" : "unchecked"}
              onPress={() => setBienEtre(!bienEtre)}
              style={styles.checkbox}
            />
            <Checkbox.Item
              label="Stress"
              status={bienEtre ? "checked" : "unchecked"}
              onPress={() => setBienEtre(!bienEtre)}
              style={styles.checkbox}
            />
            <Checkbox.Item
              label="Enfant intérieur"
              status={bienEtre ? "checked" : "unchecked"}
              onPress={() => setBienEtre(!bienEtre)}
              style={styles.checkbox}
            />
            <Checkbox.Item
              label="Gestion de la colère"
              status={bienEtre ? "checked" : "unchecked"}
              onPress={() => setBienEtre(!bienEtre)}
              style={styles.checkbox}
            />
            <Checkbox.Item
              label="Hypersensibilité"
              status={bienEtre ? "checked" : "unchecked"}
              onPress={() => setBienEtre(!bienEtre)}
              style={styles.checkbox}
            />
          </View>
          <View style={styles.checkContainerRight}>
            <Checkbox.Item
              label="Emotions"
              status={bienEtre ? "checked" : "unchecked"}
              onPress={() => setBienEtre(!bienEtre)}
              style={styles.checkbox}
            />
            <Checkbox.Item
              label="Confiance en soi"
              status={bienEtre ? "checked" : "unchecked"}
              onPress={() => setBienEtre(!bienEtre)}
              style={styles.checkbox}
            />
            <Checkbox.Item
              label="Communication"
              status={bienEtre ? "checked" : "unchecked"}
              onPress={() => setBienEtre(!bienEtre)}
              style={styles.checkbox}
            />
            <Checkbox.Item
              status={bienEtre ? "checked" : "unchecked"}
              label="Autres"
              onPress={() => setBienEtre(!bienEtre)}
              style={styles.checkbox}
            />
          </View>
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
    marginBottom: 5,
  },
  checkContainer: {
    flexDirection: "column",
    alignItems: "center",
    // borderWidth: 1,
    height: "45%",
    width: "100%",
    // marginVertical: 20,
  },
  checkContainerLeft: {
    height: "50%",
    width: "90%",
    // borderWidth: 1,
    marginBottom: 30,
  },
  checkContainerRight: {
    height: "50%",
    width: "90%",
    // borderWidth: 1,
    marginBottom: 20,
  },
  checkbox: {
    fontSize: 25,
    height: 40,
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
