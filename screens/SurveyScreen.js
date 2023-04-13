import React, { useState } from "react";
import { Checkbox, Provider } from "react-native-paper";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { useDispatch } from 'react-redux'; 
import { addSubjects } from '../reducers/survey'

export default function SurveyScreen({ navigation }) {

  const dispatch = useDispatch();

  const [checkboxes, setCheckboxes] = useState([
    { label: "Bien-être", checked: false },
    { label: "Stress", checked: false },
    { label: "Enfant intérieur", checked: false },
    { label: "Gestion de la colère", checked: false },
    { label: "Hypersensibilité", checked: false },
    { label: "Emotions", checked: false },
    { label: "Confiance en soi", checked: false },
    { label: "Communication", checked: false },
    { label: 'TCA', checked: false}, 
    { label: 'Gestions des émotions', checked: false}, 
    { label: "Autres", checked: false }
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
      console.log('subjects', checkedLabels)
    dispatch(addSubjects([...checkedLabels]));
    navigation.navigate("expect");
  };

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
        <ScrollView style={styles.checkContainer}>
        <View style={styles.checkContainerLeft}>
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
        </ScrollView>
        <TouchableOpacity
          style={styles.NextButton}
          onPress={() => handleNext()}
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
    // marginTop: 20,
    height: "25%",
    width: "100%",
    borderRadius: 25,
  },

  image: {
    height: "90%",
    width: '100%', 
  },

  text1: {
    fontFamily: "Solway-ExtraBold",
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
  
  // checkContainerLeft: {
  //   height: "50%",
  //   width: "90%",
  //   // borderWidth: 1,
  //   marginBottom: 30,
  // },
  // checkContainerRight: {
  //   height: "50%",
  //   width: "90%",
  //   // borderWidth: 1,
  //   marginBottom: 20,
  // },

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
    marginBottom: '6%',
    // paddingTop: 2,
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
