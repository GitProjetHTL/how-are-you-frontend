import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useState, useEffect } from "react";
import Audios from "../components/Audio";
import { useSelector } from "react-redux";

export default function CardsScreen({navigation}) {


  const supportedURL = 'https://open.spotify.com/episode/6rVxPssrnk6fRlN1uVwJAw';

  const user = useSelector((state) => state.user.value)
  
  const [audiosAll, setAudiosAll] = useState([]);
  const [search, setSearch] = useState("");
  const [audiosFounded, setAudiosFounded] = useState([]);
  const [audiosResult, setAudiosResult] = useState([]);
  

  //affichage de tous les audios

  useEffect(() => {
    fetch(`https://howareyouapp-backend.vercel.app/audios/all/${user.token}`)
      .then(response => response.json())
      .then(allAudios => {
         //console.log(allCards.data)
        const audios= allAudios.data.map((oneAudio, i) => {
          return (
          <Audios
            key={i}
            name={oneAudio.name}
            content={oneAudio.content}
            source={oneAudio.source}
            image={oneAudio.image}
            
          />)});
        setAudiosAll(audios);
      });
    }, []);
    
    //afficher les cards rechercher
    
    let handleClick = () => {
      fetch(`https://howareyouapp-backend.vercel.app/audios/search/${user.token}/${search}`,)
      .then(response => response.json())
      .then(searchAudios => {
        // console.log(searchCard.data)
        const audiosSearch= searchAudios.data.map((oneAudio, i) => {
        return <Audios
          key={i}
          name={oneAudio.name}
          content={oneAudio.content}
          source={oneAudio.source}
          image={oneAudio.image}
          
            />;
        });
        setAudiosFounded(audiosSearch)
      })
 }


//affichages des cards trouve
useEffect(() => {
  if (!search) {
    setAudiosResult(<View>{audiosAll}</View>);
    setAudiosFounded("");
  } else {
    setAudiosResult(<View>{audiosFounded}</View>);
  }
}, [search, audiosAll, audiosFounded]);


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
              placeholder="Recherches d'audios"
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
        <Text style={styles.sujet}>All Audio:</Text> 
        {/* <Text style={styles.sujet}>Sujet Aleatoire</Text> */}
      </View>
      <ScrollView style={styles.cardsContainer}> 
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
