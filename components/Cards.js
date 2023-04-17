// Cards component
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useSelector } from 'react-redux';
import { useState } from 'react'

const BACKEND = 'https://howareyouapp-backend.vercel.app'; 

export default function Cards(props) {
  

  const user = useSelector((state) => state.user.value);
  const [isLiked, setIsLiked] = useState(false); 
  
  // console.log(props)
  const handleLike = () => {
    fetch('https://howareyouapp-backend.vercel.app/cards/like', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: user.token, cardsID: props._id})
  })
  .then(response => response.json())
  .then(data => {
    console.log('user id =>',data.like)
    if(data.like){
      // dispatch(likeTweet({ cardsId: props._id, username: user.username }));
      setIsLiked(true)
      alert('Cards well added to favorite 🌟')
    } else {
      setIsLiked(false)
    }
   });
}
 let content=props.content.substr(0,100)+"..."


// console.log('card reducer', cards)
   
  return (
    <>
      <View style={styles.cards}>
        <Text style={styles.titleCard}>{props.name}</Text>
        <Text style={styles.contentCard}>
          {" "}
          {content}
        </Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.moreButton}>
            <Text style={styles.moreText}>Voir plus</Text>
          </TouchableOpacity>
          <View style={styles.heartContainer}>
            <FontAwesome onPress={() => handleLike()} name="heart" size={20} style={styles.heart} />
          </View>
        </View>
      </View>
    </>
  );
}

 const styles = StyleSheet.create({
  cards: {
    backgroundColor: "white",
    borderRadius: 25,
    marginVertical: 15,
    padding: 10,
    width: "90%",
    height: 220,
    marginHorizontal:'5%',
  },
  titleCard: {
    fontFamily: "Solway-Bold",
    fontSize: 24,
    
    width: "100%",
    height: "35%",
    justifyContent:"center",
  },
  contentCard: {
    // borderWidth: 1,
    paddingTop: 2,
    width: "100%",
    height: "37%",
    fontSize: 16,
  },
  btnContainer: {
    // borderWidth: 1,
    height: 60,
    alignItems: "center",
    flexDirection: "row",
  },
  moreButton: {
    // backgroundColor: "#5B3EAE",
    borderColor: "#5B3EAE",
    borderWidth: 1,
    borderRadius: 25,
    height: 40,
    width: "50%",
    marginBottom: 5,

    // paddingTop: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  moreText: {
    color: "#5B3EAE",
    fontSize: 16,
    fontWeight: 500,
    textAlign: "center",
  },
  heartContainer: {
    // borderWidth: 1,
    backgroundColor: "#C3B6F4",
    marginLeft: 20,
    height: 40,
    width: 40,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  heart: {
    // flex: 1,
    color: "white",
  },
});
