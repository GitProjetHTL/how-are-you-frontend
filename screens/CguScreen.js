import React, { useState } from "react";
import { Checkbox, Provider } from "react-native-paper";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { acceptConditions } from '../reducers/survey'
import { useDispatch, useSelector } from 'react-redux'
import { newUser } from "../reducers/user";

const BACKEND = 'https://howareyouapp-backend.vercel.app'; 

export default function CguScreen({ navigation }) {

  const survey = useSelector((state) => state.survey.value)
  const user = useSelector((state) => state.user.value)
  console.log('user =>', user)
  const dispatch = useDispatch(); 

  console.log('user',user)

  console.log(survey.subjects)
  console.log(survey.expectations)

  const [CGU, setCGU] = useState(false);

  const handleSubmit = () => {
    if (CGU){
    // console.log(username, password)
    fetch(`${BACKEND}/users/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: user.username, 
        password: user.password, 
        email: user.email, 
        dateOfBirth: user.date, 
        subjects: survey.subjects, 
        expectations: survey.expectations, 
        condition: CGU}),
    }).then(response => response.json())
      .then(data => {
        if (data.result) {
          console.log('newuser', data)
          dispatch(acceptConditions(CGU)); 
          dispatch(newUser({ username: user.username, password: user.password, email: user.email, date: user.dateOfBirth, token: data.token }));
          navigation.navigate("TabNavigator");
        } 
      })
  } else {
     alert('Acceptez les CGU svp et/ou rééssayer de vous inscrire')
   }
  };

  const handleCheck = () => {
    setCGU(!CGU)
    console.log('checked')
  }
  console.log('status CGU', CGU)
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/register4.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.text1}>Super, on y est presque !</Text>
      <Text style={styles.text2}>
        Parce que la confidentialité est importante, nous t'invitons à lire
        attentivement nos conditions.
      </Text>
      <ScrollView style={styles.cguContainer}>
        <Text style={styles.cgutext}>
           Cette application ne doit pas être utilisée comme substitut à un traitement médical professionnel. Avant d'utiliser l'application pour traiter des problèmes de santé mentale, veuillez consulter votre professionnel de la santé mentale.
         {"\n\n"}
          Cette application ne doit pas être utilisée pour des situations d'urgence ou de crise. Veuillez appeler immédiatement un professionnel de la santé mentale ou composer le numéro d'urgence approprié si une situation d'urgence ou de crise se présente.
        {"\n\n"}
          Vous devez fournir des informations précises et complètes lors de l'inscription à l'application et tenir à jour ces informations au fur et à mesure que des changements se produisent.
        {"\n\n"}
          Vous ne devez pas partager votre compte avec d'autres personnes et devez protéger votre mot de passe et votre identifiant de connexion.
        {"\n\n"}
          Cette application ne doit pas être utilisée pour harceler, menacer ou intimider d'autres utilisateurs. Respectez les droits et la vie privée des autres.
        {"\n\n"}
          Cette application ne doit pas être utilisée pour diffuser du contenu illégal, offensant ou inapproprié. Respectez les lois et les normes de la communauté.
        {"\n\n"}
          Cette application peut collecter des informations personnelles sur vous, et ces informations seront traitées conformément aux lois sur la protection des données en vigueur.
        {"\n\n"}
          Cette application peut utiliser des cookies et des technologies similaires pour améliorer l'expérience utilisateur. Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela peut affecter certaines fonctionnalités de l'application.
        {"\n\n"}
          Cette application peut être modifiée ou interrompue à tout moment, sans préavis ni responsabilité envers les utilisateurs.
        {"\n\n"}
          En utilisant cette application, vous acceptez ces conditions d'utilisation et toute autre politique ou modalité présentée dans l'application.
        </Text>
      </ScrollView>
      <Checkbox.Item
        label="J'ai lu et j'accepte ces conditions"
        status={CGU ? "checked" : "unchecked"}
        onPress={() => handleCheck()}
        style={styles.checkbox}
      />
      <TouchableOpacity
        style={styles.SignUpButton}
        onPress={() => handleSubmit()}
      >
        <Text style={styles.SignUpText}>Je m'inscris</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: "center",
    backgroundColor: "white",
    height: "100%",
  },
  imageContainer: {
    height: "30%",
    width: "100%",
    // marginTop: 20,
    // borderWidth: 1,
  },
  cgutext: {
    fontSize: 16,
  }, 

  image: {
    height: "100%",
    width: "100%",
  },
  text1: {
    marginTop: 2,
    fontFamily: "Solway-Bold",
    textAlign: "center",
    fontSize: 24,
  },
  text2: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: 400,
    marginVertical: 8,
  },

  cguContainer: {
    marginTop: 25,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 25,
    padding: 10,
    paddingHorizontal: 25,
    width: "90%",
    height: "10%",
    overflow: "scroll",
  },

  checkbox: {
    // marginTop: 10,
    // width: "100%",
    fontSize: 10,
    height: 50,
    alignSelf: 'center',
    marginLeft: 2, 
    marginRight: 4, 
    // borderColor: "#5B3EAE",
    // borderWidth: 1, 
    // borderBottomColor: "#5B3EAE", 
    // borderBottomWidth: 1, 
  },
  SignUpButton: {
    backgroundColor: "#5B3EAE",
    borderWidth: 0,
    borderRadius: 25,
    height: 40,
    width: "60%",
    marginTop: 10,
    marginBottom: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  SignUpText: {
    color: "white",
    fontSize: 16,
    fontWeight: 500,
    textAlign: "center",
  },
});
