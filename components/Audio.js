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
import { useSelector } from "react-redux";
import { useState } from "react";

const BACKEND = "https://howareyouapp-backend.vercel.app";

export default function Audios(props) {
  //redirection vers spotify
  const handlePress = () => {
    Linking.openURL(props.source);
  };

  const user = useSelector((state) => state.user.value);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    fetch(`${BACKEND}/audios/like`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: user.token, audioID: props._id }),
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
        <View style={styles.imgContainer}>
          <Image style={styles.image} source={{ uri: props.image }} />
        </View>
        <Text style={styles.titleCard}>{props.name}</Text>

        <Text style={styles.contentCard}> {content}</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.moreButton}
            onPress={() => handlePress()}
          >
            <Text style={styles.moreText}>Découvrir</Text>
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
    borderRadius: 10,
    marginVertical: 20,
    width: "90%",
    marginHorizontal: "5%",
    overflow: "hidden",
  },
  titleCard: {
    fontFamily: "Solway-ExtraBold",
    fontSize: 20,
    paddingHorizontal: 15,
    width: "100%",
    justifyContent: "center",
  },
  imgContainer: {
    // borderWidth: 1,
    height: 310,
  },
  image: {
    width: "100%",
    height: "100%",
    marginBottom: 10,
  },
  contentCard: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: "100%",
    fontSize: 16,
    fontFamily: "DM-Sans-Regular",
  },
  btnContainer: {
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 10,
    marginBottom: 10,
  },
  moreButton: {
    borderColor: "#5B3EAE",
    borderWidth: 1,
    borderRadius: 25,
    height: 40,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  moreText: {
    color: "#5B3EAE",
    fontSize: 16,
    fontWeight: 500,
    textAlign: "center",
    fontFamily: "DM-Sans-Bold",
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
