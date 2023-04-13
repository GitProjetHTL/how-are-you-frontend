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
import { addExpectations } from '../reducers/survey'
import { useDispatch } from 'react-redux'

export default function ExpectationsScreen({ navigation }) {
  const dispatch = useDispatch();

  const [checkboxes, setCheckboxes] = useState([
    { label: "Des ressources pour gerer mes émotions", checked: false },
    { label: "Avoir un suivi de mes émotions", checked: false },
    { label: "Mieux comprendre mes émotions", checked: false },
    { label: "En apprendre plus sur moi-même", checked: false },
  ]);

  const handleCheck = (index) => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index].checked = !newCheckboxes[index].checked;
    setCheckboxes(newCheckboxes);
  };

  const handleNext = () => {
    const checkedLabels = checkboxes
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.label);
      console.log('expect', [...checkedLabels])
    dispatch(addExpectations([...checkedLabels]));
    navigation.navigate("CGU");
  };

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
          {checkboxes.map((checkbox, index) => (
            <Checkbox.Item
              key={index}
              label={checkbox.label}
              status={checkbox.checked ? "checked" : "unchecked"}
              onPress={() => handleCheck(index)}
              style={styles.checkbox}
            />
          ))}
        </View>
        <TouchableOpacity
          style={styles.NextButton}
          onPress={() => handleNext()}>
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
    // marginTop: 20,
    height: "25%",
    width: "100%",
    borderRadius: 25,
  },

  image: {
    height: "100%",
    width: '100%', 
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
    // justifyContent: "center",
    // borderColor: "#5B3EAE",
    // borderRadius: 25,
    padding: 10,
    paddingHorizontal: 5,
    // borderWidth: 1,
    height: "45%",
    width: "90%",
    margin: '5%',
    // marginVertical: 20,
  },

  checkbox: {
    fontSize: 10,
    height: 50,
    alignSelf: 'center',
    // borderColor: "#5B3EAE",
    // borderWidth: 1, 
    borderBottomColor: "#5B3EAE", 
    borderBottomWidth: 1, 
    margin: 1,
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
  },
});
