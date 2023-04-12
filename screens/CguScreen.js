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

const BACKEND = 'https://howareyouapp-backend.vercel.app/'; 

export default function CguScreen({ navigation }) {

  const survey = useSelector(state => state.value.survey)
  const user = useSelector(state => state.value.user)

  console.log(user, survey)
  const [CGU, setCGU] = useState(false);

  const handleSubmit = () => {
    // console.log(username, password)
    fetch(`${BACKEND}/users/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: user.username, password: user.password, email: user.email, dateOfBirth: user.date }),
    }).then(response => response.json())
      .then(data => {
        console.log(data)
        if (data.result && CGU){
          dispatch(newUser({ token: data.token, username: data.username, password: data.password, email: data.email, date: data.dateOfBirth }));
          navigation.navigate("TabNavigator"); 
        } else {
          alert('Acceptez les CGU svp')
        }
      });
  };

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
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse officia
          impedit porro, itaque dolore odio animi et officiis laudantium rerum
          sint corrupti iusto quis consequatur beatae maiores quia distinctio
          eaque voluptatem, corporis aliquid? Repellendus illum laboriosam magni
          culpa quibusdam! Autem, expedita exercitationem! Ratione autem
          voluptate neque assumenda error, laboriosam itaque. sint corrupti
          iusto quis consequatur beatae maiores quia distinctio eaque
          voluptatem, corporis aliquid? Repellendus illum laboriosam magni culpa
          quibusdam! Autem, expedita exercitationem! Ratione autem voluptate
          neque assumenda error, laboriosam itaque.
        </Text>
      </ScrollView>
      <Checkbox.Item
        label="J'ai lu et j'accepte ces conditions"
        status={CGU ? "checked" : "unchecked"}
        onPress={() => setCGU(!CGU)}
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
    height: "25%",
    width: "100%",
    marginTop: 20,
    // borderWidth: 1,
  },
  image: {
    height: "100%",
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
    borderColor: "#5B3EAE",
    borderRadius: 25,
    padding: 10,
    paddingHorizontal: 25,
    width: "90%",
    height: "10%",
    overflow: "scroll",
  },
  checkbox: {
    marginTop: 10,
    width: "100%",
  },
  SignUpButton: {
    backgroundColor: "#5B3EAE",
    borderWidth: 0,
    borderRadius: 25,
    height: 40,
    width: "60%",
    paddingTop: 5,
    marginTop: 10,
    marginBottom: 30,
  },
  SignUpText: {
    color: "white",
    fontSize: 16,
    fontWeight: 500,
    textAlign: "center",
  },
});
