import React, { useState, useRef } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export default function InfosScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const user = {}

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity
          style={styles.arrow}
          onPress={() => navigation.navigate("TabNavigator")}
        >
          <FontAwesome name="long-arrow-left" size={20} />
        </TouchableOpacity>
        <View style={styles.headerContainer}>
          <Text style={styles.textHeader}>Informations personnelles</Text>
        </View>
      </View>
      <View style={styles.infosContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nom d'utilisateur</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez votre surnom"
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
          {usernameError && (
            <Text style={styles.error}>Entrez un username</Text>
          )}
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Mot de passe</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez votre mot de passe"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          {passwordError && (
            <Text style={styles.error}>
              8 caractères,une lettre et un chiffre
            </Text>
          )}
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Adresse e-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez votre email"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          {emailError && (
            <Text style={styles.error}>Entrez un email valide</Text>
          )}
        </View>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveText}>Sauvegarder </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "white",
  },
  topContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#C3B6F4",
    height: "10%",
    marginTop: 30,
    flexDirection: "row",

    alignItems: "center",
  },
  arrow: {
    padding: "5%",
  },
  like: { color: "#5B3EAE" },
  textHeader: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "DM-Sans-Bold",
  },
  headerContainer: {
    marginLeft: 20,
  },
  infosContainer: {
    // borderWidth: 1,
    height: "85%",
    marginTop: 50,
  },
  inputContainer: {
    // alignItems: "center",
    position: "relative",
    marginVertical: 20,
    marginHorizontal: "5%",
    width: "100%",
  },
  label: {
    position: "absolute",
    top: -15,
    left: 20,
    backgroundColor: "white",
    color: "#5B3EAE",
    zIndex: 10,
    paddingHorizontal: 5,
  },
  input: {
    width: "90%",
    height: 50,
    borderColor: "#5B3EAE",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },

  error: {
    color: "red",
    // backgroundColor: "white",
    width: "80%",
    fontSize: 14,
    // marginTop: 5,
    // position: "relative",
    top: 10,
    left: 20,
    margin: -10,
    padding: 0,
  },
  saveButton: {
    backgroundColor: "#5B3EAE",
    borderWidth: 0,
    borderColor: "#5B3EAE",
    borderRadius: 25,
    height: 40,
    width: "60%",
    marginHorizontal: "20%",
    marginTop: 25,
    paddingBottom: 5,
    alignContent: 'center',
    justifyContent: 'center',
  },
  saveText: {
    color: "white",
    fontSize: 16,
    fontWeight: 500,
    textAlign: "center",
  },
});
