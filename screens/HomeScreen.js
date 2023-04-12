import { TouchableOpacity, SafeAreaView, StyleSheet, Text, View, Image, TextInput } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
// import { useSelector } from "react-redux";

export default function HomeScreen({ navigation }) {
  // let emotionData = [ "../assets/emotion-joie.png", "../assets/emotion-confusion.png", "../assets/emotion-colere.png", "../assets/emotion-tristesse.png" ]
  // let emotions = emotionData.map((data, i) => {
  //   return <Image source={require(data)} key={i} style={styles.emotion} />
  // });
  // const username = useSelector((state) => state.user.value.username)
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>How are you, prénom ?</Text>
      <View style={styles.emotionBoard}>
        <View style={styles.emotions}>
          <Image source={require("../assets/emotion-joie.png")} style={styles.emotion} />
          <Image source={require("../assets/emotion-colere.png")} style={styles.emotion} />
          <Image source={require("../assets/emotion-honte.png")} style={styles.emotion} />
          <Image source={require("../assets/emotion-confusion.png")} style={styles.emotion} />
          {/* {emotions} */}
        </View>

        <View style={styles.moreEmotions}>
            <FontAwesome name="plus" size={20} color="#252525" />
        </View>
      </View>
      <View style={styles.inputContainer}>
          <Text style={styles.label}>Pourquoi ?</Text>
          <TextInput style={styles.input} multiline={true} numberOfLines={3} placeholder="Explique-nous ^^..." />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    fontFamily: "Solway-ExtraBold",
    textAlign: "center",
    fontSize: 22,
    marginTop: 35,
  },
  emotions: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "70%",
  },
  emotion: {
    margin: 5,
    width: "18%",
    objectFit: "contain",
  },
  emotionBoard: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  moreEmotions: {
    borderRadius: 30,
    width: 50,
    height: 50,
    backgroundColor: "#E9EBFC",
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    position: "relative",
    marginTop: 10,
    marginBottom: 20,
    width: "100%",
    alignItems: 'center',
  },
  label: {
    position: "absolute",
    top: -10,
    left: 50,
    backgroundColor: "white",
    color: "#C3B6F4",
    zIndex: 10,
    paddingHorizontal: 5,
  },
  input: {
    width: "80%",
    height: 70,
    borderColor: "#5B3EAE",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,


  },
});
