import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import { useState, useRef } from 'react'; 
import DatePicker from 'react-native-datepicker';
import { Animated } from "react-native";

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; 

export default function SignUpScreen({ navigation }) {

  const [username, setUsername ] = useState(''); 
  const [usernameError, setUsernameError] = useState(false);
  const [email, setEmail ] = useState('');
  const [emailError, setEmailError] = useState(false);
  // const [birthday, setBirthday] = useState('');
  const [dateError, setDateError] = useState(false); 
  const [password, setPassword ] = useState('');
  const [passwordError, setPasswordError] = useState(false); 
  const [date, setDate] = useState(new Date());
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const handleSubmit = () => {
    if (EMAIL_REGEX.test(email) 
    && PASSWORD_REGEX.test(password)
    && username.length > 0 && date.length > 0) {
      
      setEmail(email); // à modifier avec reducer
      setPassword(password); // à modifier avec reducer
      navigation.navigate('TabNavigator', { screen: 'Survey' });
    } else {
      setEmailError(true);
      setPasswordError(true);
      setDateError(true);
      setUsernameError(true); 
    }
  };

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
    setDate(date)
  };

  return (

    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/register2.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.signupContainer}>
        <Text style={styles.title1}>Hello,how are you ?</Text>
        <Text style={styles.title2}>
          Bienvenue sur How are You ?, l'application qui t'aide à comprendre tes
          émotions et à gerer ta santé mentale.
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Comment tu t'appelles ?</Text>
          <TextInput 
          style={styles.input} 
          placeholder="Entrez votre surnom" 
          onChange={(e) => setUsername(e.target.value)} value={username}/>
          {usernameError && <Text style={styles.error}>Entrez un username</Text>}
        </View>
        {/* <View style={styles.inputContainer}>
          <Text style={styles.label}>Ta date de naissance</Text>
          <TextInput 
          style={styles.input} 
          placeholder="DD/MM/YYYY" 
          onChange={(e) => setBirthday(e.target.value)} value={birthday}/>
          {birthdayError && <Text style={styles.error}>Entrez un birthday</Text>}
        </View> */}
        <View style={styles.inputContainer}>
        <Text style={styles.label}>Ta date de naissance</Text>
        <DatePicker
          style={styles.datePickerStyle}
          date={date}
          mode="date"
          placeholder="select date"
          format="DD/MM/YYYY"
          minDate="01-01-1900"
          maxDate="01-01-2000"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              right: -5,
              top: 6,
              marginLeft: 0,
            },
            dateInput: {
              alignItems: "flex-start",
              borderWidth: 0,
              justifyContent: 'center'
            },
            placeholderText: {
              fontSize: 17,
              color: "gray", 
            },
            dateText: {
              fontSize: 17,
              color: 'gray'
            }
          }}
          onDateChange={() => {
            fadeIn();
          }}/>
          {dateError && <Text style={styles.error}>Entrez un birthday</Text>}
          </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Mot de passe</Text>
          <TextInput
            style={styles.input}
            placeholder="********"
            secureTextEntry
            onChange={(e) => setPassword(e.target.value)} value={password}/>
             {passwordError && <Text style={styles.error}>Invalid password</Text>}
        </View>
       
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Adresse e-mail</Text>
          <TextInput 
          style={styles.input} 
          placeholder="howyoufeel@gmail.com" 
          onChange={(e) => setEmail(e.target.value)} value={email}/>
          {emailError && <Text style={styles.error}>Invalid email address</Text>}        
          </View>

        <TouchableOpacity
          style={styles.NextButton}
          onPress={() => handleSubmit()}
        >
          <Text style={styles.NextText}>Suivant </Text>
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
    borderColor: 'red', 
    borderWidth: 2,
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
  signupContainer: {
    height: "75%",
    width: "100%",
    alignItems: "center",
    borderWidth: 0,
    // borderColor: 'red', 
    // borderWidth: 2,
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
    padding: 10,
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
    paddingTop: 5,
  },
  NextText: {
    color: "#5B3EAE",
    fontSize: 16,
    fontWeight: 500,
    textAlign: "center",
  },
  error: {
    marginTop: 10,
    color: 'red',
  },
  datePickerStyle: {
    width: "80%",
    height: 50,
    borderColor: "#5B3EAE",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
