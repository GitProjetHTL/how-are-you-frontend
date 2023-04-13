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

export default function SuiviScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity
          style={styles.arrow}
          onPress={() => navigation.navigate("TabNavigator")}
        >
          <FontAwesome
            name="long-arrow-left"
            size={20}
            className={styles.like}
          />
        </TouchableOpacity>
        <Text style={styles.textHeader}>Mon suivi</Text>
      </View>
      <View style={styles.calendar}>
        <TouchableOpacity style={styles.months}>
          <View style={styles.date}>
            <Text style={styles.day}>1</Text>
          </View>
          <Text style={styles.jour}>Lun</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.months}>
          <View style={styles.date}>
            <Text style={styles.day}>2</Text>
          </View>
          <Text style={styles.jour}>Mar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.months}>
          <View style={styles.date}>
            <Text style={styles.day}>3</Text>
          </View>
          <Text style={styles.jour}>Mer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.months}>
          <View style={styles.date}>
            <Text style={styles.day}>4</Text>
          </View>
          <Text style={styles.jour}>Jeu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.months}>
          <View style={styles.date}>
            <Text style={styles.day}>5</Text>
          </View>
          <Text style={styles.jour}>Ven</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.months}>
          <View style={styles.date}>
            <Text style={styles.day}>6</Text>
          </View>
          <Text style={styles.jour}>Sam</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.months}>
          <View style={styles.date}>
            <Text style={styles.day}>7</Text>
          </View>
          <Text style={styles.jour}>Dim</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.humeurContainer}>
        <Text style={styles.humeurText}>Mon Humeur</Text>
        <Image
          source={require("../assets/emotion-joie.png")}
          style={styles.humeurImg}
          resizeMode="cover"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Pourquoi ?</Text>
        <Text style={styles.whyText}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
          corporis voluptatum nesciunt error esse, id praesentium sapiente?
          Eveniet repellat, dolor maiores architecto nisi rem eius quasi error
          necessitatibus fuga quos recusandae
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "white",
  },
  topContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#C3B6F4",
    height: "10%",
    marginTop: 30,
    flexDirection: "row",

    alignItems: "center",
  },
  arrow: {
    padding: "5%",
  },
  like: {},
  textHeader: {
    fontSize: 24,
  },
  calendar: {
    // borderWidth: 1,
    flexDirection: "row",
    height: 80,
    alignItems: "center",
    justifyContent: "space-around",
  },
  date: {
    height: 40,
    width: 40,
    borderWidth: 1,
    borderColor: "#5B3EAE",
    backgroundColor: "#C3B6F4",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  jour: {
    color: "#5B3EAE",
  },

  day: {
    alignItems: "center",
    color: "white",
  },
  humeurContainer: {
    alignItems: "center",
    height: "25%",
  },
  humeurText: {
    textAlign: "center",
    marginVertical: 20,
    fontFamily: "Solway-Bold",
    fontSize: 25,
  },
  humeurImg: {
    height: 102,
    width: 105,
  },
  inputContainer: {
    position: "relative",
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: "5%",
    width: "90%",
    height: 200,
    borderColor: "#5B3EAE",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
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
  whyText: {
    padding: 10,
    paddingTop: 20,
  },
});
