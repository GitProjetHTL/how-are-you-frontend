import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
} from "react-native";

export default function SignUpScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/register2.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.signinContainer}>
        <Text style={styles.title1}>Hello,how are you ?</Text>
        <Text style={styles.title2}>
          Bienvenue sur How are You ?, l'application qui t'aide à comprendre tes
          émotions et à gerer ta santé mentale.
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Comment tu t'appelles ?</Text>
          <TextInput style={styles.input} placeholder="Entrez votre surnom" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Ta date de naissance</Text>
          <TextInput style={styles.input} placeholder="DD/MM/YYYY" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Mot de passe</Text>
          <TextInput
            style={styles.input}
            placeholder="********"
            secureTextEntry
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Adresse e-mail</Text>
          <TextInput style={styles.input} placeholder="howyoufeel@gmail.com" />
        </View>

        <TouchableOpacity
          style={styles.NextButton}
          onPress={() => navigation.navigate("Survey")}
        >
          <Text style={styles.NextText}>Suivant </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
    marginTop: 50,
    height: "25%",
    borderRadius: 25,
    // borderWidth: 2,
  },

  image: {
    height: "100%",
  },
  signinContainer: {
    height: "75%",
    width: "100%",
    alignItems: "center",
    borderWidth: 0,
  },
  title1: {
    textAlign: "center",
    marginTop: 15,
    marginBottom: 10,
    fontFamily: "Solway-Bold",
    fontSize: 24,
  },
  title2: {
    textAlign: "center",
    fontSize: 14,
    marginBottom: 20,
    fontFamily: "Solway-Regular",
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
    top: -12,
    left: 50,
    backgroundColor: "white",
    color: "#C3B6F4",
    zIndex: 10,
    paddingHorizontal: 5,
    // fontWeight: "bold",
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
  NextButton: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#5B3EAE",
    borderRadius: 25,
    height: 40,
    width: "60%",
    // paddingLeft: 30,
    paddingTop: 5,
  },
  NextText: {
    color: "#5B3EAE",
    fontSize: 16,
    fontWeight: 500,
    textAlign: "center",
  },
});
