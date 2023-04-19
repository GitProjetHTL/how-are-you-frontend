import { TouchableOpacity, StyleSheet, Text, View, TextInput, SafeAreaView, ScrollView, } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useState, useEffect } from "react";
import Cards from "../components/Cards";
import { useSelector } from "react-redux";
import Audio from "../components/Audio";

const BACKEND = 'https://howareyouapp-backend.vercel.app'; 

export default function DiscoverScreen({ navigation }) {
  //récupère le token
  const user = useSelector((state) => state.user.value)
  // console.log('user => ', user)
  
  const [search, setSearch] = useState("");
  const [cardRandom, setCardRandom] = useState([]);
  const [cardAll, setCardAll] = useState([]);
  const [cardFounded, setCardFounded] = useState([]);
  const [cardResult, setCardResult] = useState([]);
  const [titleResult, setTitleResult] = useState("");

  const [audiosAll, setAudiosAll] = useState([]);
  const [audiosFounded, setAudiosFounded] = useState([]);
  const [audiosResult, setAudiosResult] = useState([]);

  const [audiosRandom, setAudiosRandom] = useState([]);

  //console.log(search);

  useEffect(() => {
    //fetch les cards et audios
    fetch(`${BACKEND}/cards/all/${user.token}`)
      .then((response) => response.json())
      .then((allCards) => {
        //  console.log(allCards.data)
        const cards = allCards.data.map((data, i) => {
          return (
            <Cards key={i} {...data}
              // name={oneCard.name}
              // content={oneCard.content}
              // source={oneCard.source}
              // id={oneCard._id}
            />
          );
        });
        
        setCardAll(cards);
        setCardRandom(cards[Math.floor(Math.random() * cards.length)]);
      });
      
    }, []);
    //fetch les audios
    useEffect(() => {
      fetch(`https://howareyouapp-backend.vercel.app/audios/all/${user.token}`)
        .then(response => response.json())
        .then(allAudios => {
           //console.log(allCards.data)
          const audios= allAudios.data.map((data, i) => {
            return (
            <Audio key={i} {...data}
              // name={oneAudio.name}
              // content={oneAudio.content}
              // source={oneAudio.source}
              // image={oneAudio.image}
              // id={oneAudio._id}
            />)});
          setAudiosAll(audios);
          setAudiosRandom(audios[Math.floor(Math.random() * audios.length)])
        });
      }, []);


  function random(cardAll, audiosAll) {
    const randomNumberforCard = Math.floor(Math.random() * cardAll.length);
    const randomCard = cardAll[randomNumberforCard];
    const randomNumberforAudios = Math.floor(Math.random() * audiosAll.length);
    const randomAudio = audiosAll[randomNumberforAudios];
    return setCardRandom(randomCard), setAudiosRandom(randomAudio);
  }

  //afficher les cards rechercher

  let handleClick = () => {
    fetch(`https://howareyouapp-backend.vercel.app/cards/search/${search}`,)
    .then(response => response.json())
    .then(searchCard => {
      // console.log(searchCard.data)
      const cardsSearch= searchCard.data.map((data, i) => {
        return <Cards key={i} {...data}
           // name={oneCard.name}
           // content={oneCard.content}
           // source={oneCard.source}
           // id={oneCard._id}
         />;
       });
      setCardFounded(cardsSearch)
    })

    fetch(`https://howareyouapp-backend.vercel.app/audios/search/${search}`,)
      .then(response => response.json())
      .then(searchAudios => {
        // console.log(searchCard.data)
        const audiosSearch = searchAudios.data.map((data, i) => {
          return (
            <Audio key={i} {...data}
              // name={oneAudio.name}
              // content={oneAudio.content}
              // source={oneAudio.source}
              // image={oneAudio.image}
              // id={oneAudio._id}
            />
          );
        });
        setAudiosFounded(audiosSearch);
      });
  };

  //affichages des cards trouve
  useEffect(() => {
    if (!search) {
      setCardResult(<View>{cardRandom}</View>);
      setAudiosResult(<View>{audiosRandom}</View>);
      setTitleResult(
        <View>
          <Text style={styles.sujet}>Découverte:</Text>
        </View>
      );
      setCardFounded("");
      setAudiosFounded("");
    } else {
      setCardResult(<View>{cardFounded}</View>);
      setAudiosResult(<View>{audiosFounded}</View>);
    }
  }, [search, cardRandom, cardFounded, audiosRandom]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTop}>
        <View>
          <View style={styles.searchBar}>
            <TextInput style={styles.input} placeholder="Recherche" onChangeText={(value) => setSearch(value)} value={search} />
            <TouchableOpacity style={styles.searchButton}>
              <FontAwesome name="search" size={20} style={styles.search} onPress={() => handleClick()} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.likes}>
          <TouchableOpacity>
            <FontAwesome name="refresh" size={30} style={styles.heart} onPress={() => random(cardAll, audiosAll)} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.title}>
        {titleResult}
        {/* <Text style={styles.sujet}>{randomCardTitle}</Text> */}
      </View>
      <ScrollView style={styles.cardsContainer}>
          {cardResult}
          {audiosResult}
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
    borderColor: "#5B3EAE",
    width: 270,
    height: 50,
    borderWidth: 1,
    borderRadius: 25,
    paddingLeft: 10,

  },

  searchButton: {
    position: "absolute",
    right:"8%",
    top:"25%",
  },
  input: {
    margin:10,
    color: "#8C8995",
    fontFamily: "DM-Sans-Regular",
  },
  likes: {
    height: 50,
    justifyContent: "center",
    color: "#5B3EAE",
  },
  heart: {
    color: "#5B3EAE",
  },

  search: { 
    color: "#A8A3BB",
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
