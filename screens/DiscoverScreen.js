import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
} from "react-native";

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useState , useEffect} from 'react'; 
import Cards from "../components/Cards"
import { useSelector } from 'react-redux';

export default function DiscoverScreen() {

  const [search,setSearch] = useState("");

  //récupère le token
  // const user = useSelector((state) => state.user.value)

  const user="LJduScVJOSgMuGBAxujt9Jk11dttUVz2"

  let cardFilltered; 

  useEffect(() => {
    fetch(`https://howareyouapp-backend.vercel.app/cards/all/${user}`)
      .then(response => response.json())
      .then(allCards => {
         console.log(allCards.data)
      cardFilltered =  allCards.data.map((oneCard,i) => {
         return(
           <Cards key={i} name={oneCard.name} content={oneCard.content} source={oneCard.source} />
           // console.log(cardFilltered)
         ) 
        })
      });
  }, []);




  return (
    <>
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTop}>
        <View>
          <TextInput 
              style={styles.input} 
              placeholder="Recherches de cards" 
              onChange={(e) => setSearch(e.target.value)} value={search}>
          </TextInput>
        </View>  
        <View style={styles.likes}  >
          <TouchableOpacity>
            <FontAwesome name='heart' size={30}  />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.title}>
        <Text style={styles.text}>à la une</Text>
        <Text style={styles.sujet}>Sujet Aleatoire</Text>
      </View>
      <View style={styles.cards}>
        {cardFilltered}
      </View>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white",
  },

  containerTop: {
    marginTop:50,
    flexDirection:'row',
    justifyContent: "space-evenly",
    backgroundColor:"white",
  },
  
  
  input: {
    width: 270,
    height: 50,
    borderColor: "#5B3EAE",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft:10
  },
  likes:{
    height:50,
    justifyContent:"center",
  },
  title:{
    justifyContent:"center",
    alignItems:"center",
    marginTop:50,
    marginBottom:50,
  },
  sujet: {
    fontSize:25,
    fontFamily: "Solway-Bold",  
  },
  text:{
    fontSize:16,
    //fontFamily: "dm-sans-regular", 
  },
  cards:{
    alignItems:"center",
    justifyContent:"center",
  }
});
