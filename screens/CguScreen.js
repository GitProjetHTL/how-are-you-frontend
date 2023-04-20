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
import { acceptConditions } from "../reducers/survey";
import { useDispatch, useSelector } from "react-redux";
import { newUser } from "../reducers/user";

const BACKEND = "https://howareyouapp-backend.vercel.app";

export default function CguScreen({ navigation }) {
  const survey = useSelector((state) => state.survey.value);
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  // console.log('user =>', user)
  // console.log('user',user)
  // console.log(survey.subjects)
  // console.log(survey.expectations)

  const [CGU, setCGU] = useState(false);

  const handleSubmit = () => {
    fetch(`${BACKEND}/users/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // console.log(username, password)
      body: JSON.stringify({
        username: user.username,
        password: user.password,
        email: user.email,
        dateOfBirth: user.date,
        subjects: survey.subjects,
        expectations: survey.expectations,
        condition: CGU,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log('newuser', data)
        if (data.result && CGU) {
          dispatch(acceptConditions(CGU));
          dispatch(
            newUser({
              username: user.username,
              password: user.password,
              email: user.email,
              date: user.dateOfBirth,
              token: data.token,
            })
          );
          navigation.navigate("TabNavigator");
        } else {
          alert("Acceptez les CGU svp et/ou rééssayer de vous inscrire");
        }
      });
  };

  const handleCheck = () => {
    setCGU(!CGU);
    // console.log('checked')
  };
  // console.log('status CGU', CGU)
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
    fontSize: 10,
    height: 50,
    alignSelf: "center",
    marginLeft: 2,
    marginRight: 4,
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
