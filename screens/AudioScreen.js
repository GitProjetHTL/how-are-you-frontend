import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useState, useEffect, useCallback } from "react";
import Audio from "../components/Audio";
import { useSelector } from "react-redux";

const BACKEND = "https://howareyouapp-backend.vercel.app";

export default function CardsScreen({ navigation }) {
  const supportedURL =
    "https://open.spotify.com/episode/6rVxPssrnk6fRlN1uVwJAw";

  const user = useSelector((state) => state.user.value);

  const [audiosAll, setAudiosAll] = useState([]);
  const [search, setSearch] = useState("");
  const [audiosFounded, setAudiosFounded] = useState([]);
  const [audiosResult, setAudiosResult] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);
  //affichage de tous les audios

  useEffect(() => {
    fetch(`https://howareyouapp-backend.vercel.app/audios/all/${user.token}`)
      .then((response) => response.json())
      .then((allAudios) => {
        //console.log(allCards.data)
        const audios = allAudios.data.map((oneAudio, i) => {
          return <Audio key={i} {...oneAudio} />;
        });
        setAudiosAll(audios);
      });
  }, [refreshing, Audio.like]);


  // let handleClick = () => {
  //   fetch(`https://howareyouapp-backend.vercel.app/audios/search/${search}`)
  //     .then((response) => response.json())
  //     .then((searchAudios) => {
  //       // console.log(searchCard.data)
  //       const audiosSearch = searchAudios.data.map((oneAudio, i) => {
  //         return (
  //           <Audio
  //             key={i}
  //             name={oneAudio.name}
  //             content={oneAudio.content}
  //             source={oneAudio.source}
  //             image={oneAudio.image}
  //             id={oneAudio._id}
  //           />
  //         );
  //       });
  //       setAudiosFounded(audiosSearch);
  //     });
  // };

  //afficher les cards rechercher en fonction de ce qui est tapé dans l'input en temps réel
  useEffect(() => {
    if(search){
      fetch(`${BACKEND}/audios/search/${search}`)
      .then((response) => response.json())
      .then((searchAudios) => {
        // console.log(searchCard.data)
        const audiosSearch = searchAudios.data.map((data, i) => {
          return <Audio key={i} {...data} />;
        })
        
        setAudiosFounded(audiosSearch);
      })
      .catch((error) => {
        console.error("Une erreur s'est produite lors de la récupération des données", error);
        // Afficher un message d'erreur à l'utilisateur
      });
    }
  }, [search]);

  //affichages des cards trouve
  useEffect(
    () => {
      if (!search) {
        setAudiosResult(<View>{audiosAll}</View>);
        setAudiosFounded("");
      } else {
        setAudiosResult(<View>{audiosFounded}</View>);
      }
    },
    [search, audiosAll, audiosFounded, Audio.like],
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTop}>
        <View>
          <View style={styles.searchBar}>
            <TextInput
              style={styles.input}
              placeholder="Recherches d'audios"
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

      <ScrollView
        style={styles.cardsContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
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
    marginBottom: 20,
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
    fontSize: 25,
    fontFamily: "Solway-Bold",
  },
  text: {
    fontSize: 16,
    //fontFamily: "dm-sans-regular",
  },
  cardsContainer: {
    // borderWidth: 1,
    witdh: "100%",
    height: "80%",
    backgroundColor: "#E9EBFC",
  },
});
