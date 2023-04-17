// Audio component
// Cards component
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
  Linking,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useSelector } from 'react-redux';
import { useState } from 'react'

const BACKEND = 'https://howareyouapp-backend.vercel.app'; 

export default function Audios(props) {
  
    const handlePress = () => {
      Linking.openURL(props.source);
    };
  
    // console.log(props)
     const user = useSelector((state) => state.user.value);
    const [isLiked, setIsLiked] = useState(false); 
  
    // console.log(props)
    const handleLike = () => {
      fetch(`${BACKEND}/audios/like`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: user.token, audioID: props._id})
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data.like);
        if (data.like) {
          setIsLiked(true);
        } else {
          setIsLiked(false);
        }
      });
  };
  let content = props.content.substr(0, 100) + "...";

  return (
    <>
      <View style={styles.cards}>
        <Image style={styles.image} source={{ uri: props.image }} />
        <Text style={styles.titleCard}>{props.name}</Text>

        <Text style={styles.contentCard}> {content}</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.moreButton}
            onPress={() => handlePress()}
          >
            <Text style={styles.moreText}>Voir plus</Text>
          </TouchableOpacity>
          <View style={styles.heartContainer}>
            <FontAwesome
              name="heart"
              size={20}
              style={[
                styles.heart,
                isLiked ? { color: "#5B3EAE" } : { color: "white" },
              ]}
              onPress={() => handleLike()}
            />
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
    height: 550,
    marginHorizontal: "5%",
  },
  titleCard: {
    fontFamily: "Solway-Bold",
    fontSize: 24,
    width: "100%",
    height: "20%",
    justifyContent: "center",
  },

  image: {
    width: "100%",
    height: "50%",
    borderRadius: 10,
  },
  contentCard: {
    // borderWidth: 1,

    paddingTop: 2,
    width: "100%",
    height: "14%",
    fontSize: 16,
  },
  btnContainer: {
    // borderWidth: 1,
    height: "15%",
    alignItems: "center",
    flexDirection: "row",
  },
  moreButton: {
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
    color: "white",
  },
});
