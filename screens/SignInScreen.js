import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
} from "react-native";

export default function SignInScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/home.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.signinContainer}>
        <Text style={styles.title1}>Hey,</Text>
        <Text style={styles.title2}>How are you?</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Surnom</Text>
          <TextInput style={styles.input} placeholder="Entrez votre surnom" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Mot de passe</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez votre mot de passe"
            secureTextEntry
          />
        </View>

        <TouchableOpacity
          style={styles.SignInButton}
          onPress={() => navigation.navigate("TabNavigator")}
        >
          <Text style={styles.SignInText}>Je me connecte</Text>
        </TouchableOpacity>
        <View style={styles.ligne}></View>
        <Text style={styles.newTxt}>Nouveau ici? </Text>
        <TouchableOpacity
          style={styles.SignUpButton}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.SignUpText}>Je m'inscris</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  imageContainer: {
    // marginTop: 50,
    height: "45%",
    // width: "100%",
    width: Dimensions.get("window").width,
    borderRadius: 25,
    // borderWidth: 2,
  },

  image: {
    height: "100%",
    width: Dimensions.get("window").width,
  },

  signinContainer: {
    height: "65%",
    width: "100%",
    alignItems: "center",
    borderWidth: 0,
  },
  title1: {
    textAlign: "center",
    marginTop: 15,
    fontFamily: "Solway-Regular",
  },
  title2: {
    textAlign: "center",
    fontSize: 36,
    marginBottom: 20,
    fontFamily: "Solway-ExtraBold",
  },
  inputContainer: {
    alignItems: "center",
    position: "relative",
    marginTop: 10,
    marginBottom: 20,
    width: "100%",
  },
  label: {
    position: "absolute",
    top: -10,
    left: 50,
    backgroundColor: "white",
    color: "#C3B6F4",
    zIndex: 10,
    paddingHorizontal: 5,
  },
  input: {
    width: "80%",
    height: 50,
    borderColor: "#5B3EAE",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  SignInButton: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#5B3EAE",
    borderRadius: 25,
    height: 40,
    width: "60%",
    paddingTop: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  SignInText: {
    color: "#5B3EAE",
    fontSize: 16,
    fontWeight: 500,
    textAlign: "center",
  },

  ligne: {
    width: "80%",
    height: 1,
    backgroundColor: "#5B3EAE",
    marginVertical: 15,
  },
  newTxt: {
    color: "#5B3EAE",
    marginBottom: 15,
  },
  SignUpButton: {
    backgroundColor: "#5B3EAE",
    borderWidth: 0,
    borderRadius: 25,
    height: 40,
    width: "60%",
    paddingTop: 5,
  },
  SignUpText: {
    color: "white",
    fontSize: 16,
    fontWeight: 500,
    textAlign: "center",
  },
});
