import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import  { useDispatch } from 'react-redux'; 
import { newUser } from "../reducers/user";

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const DATE_REGEX = /^([1-9]|0[1-9]|[12][0-9]|3[0-1])\/([1-9]|0[1-9]|1[0-2])\/\d{4}$/;


const BACKEND = 'https://howareyouapp-backend.vercel.app/'

export default function SignUpScreen({ navigation }) {
  const dispatch = useDispatch(); 

  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [date, setDate] = useState('');
  // const [showDatePicker, setShowDatePicker] = useState(false);

  // console.log(date, password)

  const handleSubmit = () => {
    const emailHasError = !EMAIL_REGEX.test(email);
    // console.log(emailHasError)
    const passwordHasError = !PASSWORD_REGEX.test(password);
    const usernameHasError = !username.length;
    const dateHasError = !DATE_REGEX.test(date);

    setEmailError(emailHasError);
    setPasswordError(passwordHasError);
    setUsernameError(usernameHasError);
    setDateError(dateHasError);

    if (!(emailHasError || passwordHasError || usernameHasError || dateHasError)) {
      dispatch(newUser({username: username, email: email, password: password, date: date }))
      navigation.navigate("Survey");
    }
  };

  // const onDatePickerPress = () => {
  //   setShowDatePicker(true);
  // };
  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate || date;
  //   setShowDatePicker(false);
  //   setDate(currentDate);
  //   setDateError(false);
  // };

  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/register2.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.textContainer}>
      <Text style={styles.title1}>Hello, how are you ?</Text>
        <Text style={styles.title2}>
          Bienvenue sur How are You, l'application qui t'aide à comprendre tes
          émotions et à gerer ta santé mentale.
        </Text>
        </View>
      <ScrollView style={styles.signupContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Comment tu t'appelles ?</Text>
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
          <Text style={styles.label}>Ta date de naissance</Text>
          {/* {showDatePicker && (
            <DateTimePicker
            value={value => setDate(value)}
            mode="date"
            display="spinner"
            onChange={onChange}
          />
          )} */}
          <TextInput
            style={styles.input}
            placeholder="Entrez votre date de naissance"
            onChangeText={(date) => setDate(date)}
            value={date}
          />
          {/* <TouchableOpacity onPress={onDatePickerPress}>
            <TextInput
              style={styles.input}
              value={date}
              onPress={() => onChange()}
              editable={false}
              pointerEvents="none"
              placeholder="Sélectionnez une date"
            />
          </TouchableOpacity> */}
          {dateError && (
            <Text style={styles.error}>
              Veuillez choisir une date de naissance
            </Text>
          )}
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Quel est ton email ?</Text>
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
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Crée ton mot de passe</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez votre mot de passe"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          {passwordError && (
            <Text style={styles.error}>
              8 caractères, une lettre et un chiffre
            </Text>
          )}
        </View>
      <View style={styles.buttonContainer}>
        {/* <Button title="S'inscrire" onPress={handleSubmit} /> */}
        <TouchableOpacity style={styles.NextButton} onPress={handleSubmit}>
          <Text style={styles.NextText}>Suivant </Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </KeyboardAvoidingView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    // marginTop: 25,
    height: "27%",
    width: "100%",
    // borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  signupContainer: {
    marginTop: 10,
  },
  title1: {
    fontSize: 20,
    fontFamily: "Solway-ExtraBold",
    marginBottom: 10,
    textAlign: "center",
  },
  title2: {
    fontSize: 16,
    marginBottom: 10,
    width: "100%",
    paddingHorizontal: 5,
    textAlign: "center",
    fontFamily: "DM-Sans-Regular",
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
    top: -10,
    left: 20,
    backgroundColor: "white",
    color: "#5B3EAE",
    zIndex: 10,
    paddingHorizontal: 5,
    fontFamily: "DM-Sans-Bold",
  },

   input: {
    width: "90%",
    height: 50,
    borderColor: "#5B3EAE",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily: "DM-Sans-Regular",
  },

  error: {
    color: "#F94A56",
    // backgroundColor: "white",
    width: "80%",
    fontSize: 14,
    // marginTop: 5,
    fontFamily: "DM-Sans-Regular",
    top: 10,
    left: 20,
    margin: -10,
    marginBottom: 1, 
    padding: 0,
  },
  buttonContainer: {
    alignItems: "center",
  },
  NextButton: {
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
  NextText: {
    color: "#5B3EAE",
    fontSize: 16,
    fontWeight: 500,
    textAlign: "center",
    fontFamily: "DM-Sans-Bold",
  },
  textContainer: {
    padding: '2%'
  }
});
