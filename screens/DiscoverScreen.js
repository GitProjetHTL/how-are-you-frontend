import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView
} from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useState, useEffect } from "react";
import Cards from "../components/Cards";
import { useSelector } from "react-redux";

export default function DiscoverScreen() {
  const [search, setSearch] = useState("");

  //récupère le token
  const user = useSelector((state) => state.user.value)

  const [cardFiltered, setCardFiltered] = useState([]);
  const [cardRandom, setCardRandom] = useState([])



  useEffect(() => {
    fetch(`https://howareyouapp-backend.vercel.app/cards/all/${user.token}`)
      .then((response) => response.json())
      .then((allCards) => {
        //  console.log(allCards.data)
        const cards= allCards.data.map((oneCard, i) => {
         return <Cards
            key={i}
            name={oneCard.name}
            content={oneCard.content}
            source={oneCard.source}
          />;
        });
        setCardFiltered(cards);
        setCardRandom(cards[ Math.floor(Math.random() * cardFiltered.length)])
      });
  }, []);
  // console.log(cardRandom)


  function randomCardName() {
    const randomNumber = Math.floor(Math.random() * cardFiltered.length);
    const randomCard = cardFiltered.filter(e => e.key == randomNumber)
    return setCardRandom(randomCard) ;
  }


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
      <View style={styles.likes}>
          <TouchableOpacity>
            <FontAwesome name="refresh" size={30} style={styles.heart} onPress={()=>randomCardName()} />
          </TouchableOpacity>
        </View>
      <View style={styles.title}>
        <Text style={styles.sujet}>Le sujet du jour:</Text>
        {/* <Text style={styles.sujet}>{randomCardTitle}</Text> */}
      </View>
      <ScrollView style={styles.cardsContainer}>
      {cardRandom}
      </ScrollView>
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
    // alignItems: "center",
    // borderWidth: 1,
    
    witdh: "100%",
    height: "80%",
    backgroundColor: "#E9EBFC",
    overflow: "scroll",
  },
});
