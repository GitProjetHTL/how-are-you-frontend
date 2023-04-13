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

export default function CardsScreen({navigation}) {

  const user = useSelector((state) => state.user.value)
  
  const [cardAll, setCardAll] = useState([]);
  const [search, setSearch] = useState("");
  const [cardFounded, setCardFounded] = useState([]);
  const [cardResult, setCardResult] = useState([]);
  

  //affichage de toutes cards

  useEffect(() => {
    fetch(`https://howareyouapp-backend.vercel.app/cards/all/${user.token}`)
      .then(response => response.json())
      .then(allCards => {
         //console.log(allCards.data)
        const cards= allCards.data.map((oneCard, i) => {
          return (
          <Cards
            key={i}
            name={oneCard.name}
            content={oneCard.content}
            source={oneCard.source}
          />)});
        setCardAll(cards);
      });
    }, []);
    
    //afficher les cards rechercher
    
    let handleClick = () => {
      fetch(`https://howareyouapp-backend.vercel.app/cards/search/${user.token}/${search}`,)
      .then(response => response.json())
      .then(searchCard => {
        // console.log(searchCard.data)
        const cardsSearch= searchCard.data.map((oneCard, i) => {
        return <Cards
          key={i}
          name={oneCard.name}
          content={oneCard.content}
          source={oneCard.source}
          />;
        });
        setCardFounded(cardsSearch)
      })
 }


//affichagedes cards trouve
useEffect(() => {
  if (!search) {
    setCardResult(<View>{cardAll}</View>);
  } else {
    setCardResult(<View>{cardFounded}</View>);
  }
}, [search, cardAll, cardFounded]);


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTop}>
        <View>
          <View style={styles.search}>
              <TouchableOpacity style={styles.searchButton}>
              <FontAwesome name="search" size={30} style={styles.heart} onPress={()=>handleClick()} />
              </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder="Recherches de cards"
              onChangeText={(value) => setSearch(value)}
              value={search}
            />
          </View>
        </View>
        <View style={styles.likes}>
          <TouchableOpacity onPress={() => navigation.navigate("fav")}>
            <FontAwesome name="heart" size={30} style={styles.heart} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.title}>
        <Text style={styles.sujet}>All Card</Text> 
        {/* <Text style={styles.sujet}>Sujet Aleatoire</Text> */}
      </View>
      <ScrollView style={styles.cardsContainer}> 
      {cardResult}
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

  search: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "white",
    borderColor: "#5B3EAE",
    width: 270,
    height: 50,
    borderWidth: 1,
    borderRadius: 25,
    paddingLeft: 10,
  },

  searchButton: {
   justifyContent: "center",
   
  },


  input: {
    // borderColor: "#5B3EAE",
    // width: 270,
    // height: 50,
    // borderWidth: 1,
    // borderRadius: 25,
    // paddingLeft: 10,
    
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
  },
});
