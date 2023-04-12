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
import { useState, useEffect } from "react";
import Cards from "../components/Cards";
import { useSelector } from "react-redux";

export default function DiscoverScreen() {
  const [search, setSearch] = useState("");

  // //récupère le token
  // // const user = useSelector((state) => state.user.value)

  // const user = "LJduScVJOSgMuGBAxujt9Jk11dttUVz2";

  // const cardFilltered = "";

  // useEffect(() => {
  //   fetch(`https://howareyouapp-backend.vercel.app/cards/all/${user}`)
  //     .then((response) => response.json())
  //     .then((allCards) => {
  //       // console.log(allCards)
  //       cardFilltered = allCards.data.map((oneCard, i) => {
  //         <Cards
  //           key={i}
  //           name={oneCard.name}
  //           content={oneCard.content}
  //           source={oneCard.source}
  //         />;
  //       });
  //     });
  // }, []);
  // console.log(cardFilltered);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTop}>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Recherches de cards"
            onChange={(e) => setSearch(e.target.valueOf)}
            value={search}
          ></TextInput>
        </View>
        <View style={styles.likes}>
          <TouchableOpacity>
            <FontAwesome name="heart" size={30} style={styles.heart} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.title}>
        {/* <Text style={styles.text}>à la une</Text> */}
        <Text style={styles.sujet}>Sujet Aleatoire</Text>
      </View>
      <View style={styles.cardsContainer}>
        <Cards
          name="Nom de la carte"
          content="Contenu de la carte"
          source="Source de la carte"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  containerTop: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "white",
  },

  input: {
    width: 270,
    height: 50,
    borderColor: "#5B3EAE",
    borderWidth: 1,
    borderRadius: 25,
    paddingLeft: 10,
  },
  likes: {
    height: 50,
    justifyContent: "center",
    color: "#5B3EAE",
  },
  heart: {
    color: "#5B3EAE",
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  sujet: {
    fontSize: 25,
    fontFamily: "Solway-Bold",
  },
  text: {
    fontSize: 16,
    //fontFamily: "dm-sans-regular",
  },
  cardsContainer: {
    alignItems: "center",
    // borderWidth: 1,
    witdh: "100%",
    height: "80%",
    backgroundColor: "#E9EBFC",
  },
});
