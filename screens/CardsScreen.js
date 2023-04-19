import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useState, useEffect } from "react";
import Cards from "../components/Cards";
import { useSelector } from "react-redux";
// import { setStatusBarBackgroundColor } from "expo-status-bar";

export default function CardsScreen({ navigation }) {
  const user = useSelector((state) => state.user.value);
  console.log("user => ", user);

  const [cardAll, setCardAll] = useState([]);
  const [search, setSearch] = useState("");
  const [cardFounded, setCardFounded] = useState([]);
  const [cardResult, setCardResult] = useState([]);

  //fetch de toutes cards

  useEffect(() => {
    fetch(`https://howareyouapp-backend.vercel.app/cards/all/${user.token}`)
      .then((response) => response.json())
      .then((data) => {
        //  console.log('data', data)
        data.result && setCardAll(data.data);
        // const cards= allCards.data.map((oneCard, i) => {
        //   return (
        //   <Cards
        //     key={i}
        //     id={oneCard._id}
        //     name={oneCard.name}
        //     content={oneCard.content}
        //     source={oneCard.source}
        //   />)});
      });
  }, []);

  const allCards = cardAll.map((data, i) => {
    return <Cards key={i} {...data} />;
  });

  //afficher les cards rechercher

  let handleClick = () => {
    fetch(`https://howareyouapp-backend.vercel.app/cards/search/${search}`)
      .then((response) => response.json())
      .then((searchCard) => {
        // console.log(searchCard.data)
        const cardsSearch = searchCard.data.map((oneCard, i) => {
          console.log(oneCard);
          return (
            <Cards
              key={i}
              cardsID={oneCard._id}
              name={oneCard.name}
              content={oneCard.content}
              source={oneCard.source}
            />
          );
        });
        setCardFounded(cardsSearch);
      });
  };

  //affichages des cards trouve
  useEffect(() => {
    if (!search) {
      setCardResult(<View>{cardAll}</View>);
      setCardFounded("");
    } else {
      setCardResult(<View>{cardFounded}</View>);
    }
  }, [search, cardAll, cardFounded, Cards.likes]);

  // //affichages des cards trouve
  // useEffect(() => {
  //   if (!search) {
  //     setCardResult(<View>{allCards}</View>);
  //   } else {
  //     setCardResult(<View>{cardFounded}</View>);
  //   }
  // }, [search, cardAll, cardFounded]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTop}>
        <View>
          <View style={styles.searchBar}>
            <TextInput
              style={styles.input}
              placeholder="Recherche"
              onChangeText={(value) => setSearch(value)}
              value={search}
            />
            <TouchableOpacity style={styles.searchButton}>
              <FontAwesome
                name="search"
                size={20}
                style={styles.search}
                onPress={() => handleClick()}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.likes}>
          <TouchableOpacity onPress={() => navigation.navigate("fav")}>
            <FontAwesome name="heart" size={30} style={styles.heart} />
          </TouchableOpacity>
        </View>
      </View>
      {/* <View style={styles.title}>
        <Text style={styles.sujet}>All Cards:</Text>
        <Text style={styles.sujet}>Sujet Aleatoire</Text>
      </View> */}
      <ScrollView style={styles.cardsContainer}>
        {search ? cardFounded : allCards}
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
  searchBar: {
    flexDirection: "row",
    backgroundColor: "white",
    borderColor: "#8C8995",
    width: 270,
    height: 50,
    borderWidth: 1,
    borderRadius: 25,
    paddingLeft: 10,
    marginBottom: 20,
  },
  searchButton: {
    position: "absolute",
    right: "8%",
    top: "25%",
  },
  input: {
    color: "#8C8995",
    fontFamily: "DM-Sans-Regular",
    marginHorizontal: 10,
    width: "100%",
  },
  search: {
    color: "#8C8995",
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
    fontSize: 20,
    fontFamily: "DM-Sans-Bold",
  },
  text: {
    fontSize: 16,
    fontFamily: "DM-Sans-Regular",
  },
  cardsContainer: {
    witdh: "100%",
    height: "80%",
    backgroundColor: "#E9EBFC",
  },
});
