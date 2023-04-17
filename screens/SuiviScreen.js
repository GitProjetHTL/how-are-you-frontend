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
      <View style={styles.journalContainer}>
        <View style={styles.humeurContainer}>
          <Text style={styles.humeurText}>Joie</Text>
          <Image
            source={require("../assets/emotion-joie.png")}
            style={styles.humeurImg}
            resizeMode="cover"
          />
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Pourquoi ?</Text>
          <Text style={styles.whyText}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
            corporis voluptatum nesciunt error esse, id praesentium sapiente?
            Eveniet repellat, dolor maiores architecto nisi rem eius quasi error
            necessitatibus fuga quos recusandae
          </Text>
        </View>
      </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  textHeader: {
    fontSize: 20,
    fontFamily: "DM-Sans-Bold",
  },
  calendar: {
    flexDirection: "row",
    height: 80,
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
  },
  date: {
    height: 40,
    width: 40,
    backgroundColor: "#E9EBFC",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  jour: {
    color: "#252525",
    textAlign: 'center',
    marginTop: 1,
    fontFamily: "DM-Sans-Regular",
  },
  day: {
    alignItems: "center",
    color: "#252525",
    fontFamily: "DM-Sans-Regular",
  },
  journalContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: "#E9EBFC",
  },
  humeurContainer: {
    width: "90%",
    borderRadius: 20,
    marginTop: 15,
    padding: 10,
    alignItems: "center",
    backgroundColor: "white",
  },
  humeurText: {
    textAlign: "center",
    fontFamily: "Solway-Bold",
    fontSize: 25,
    marginBottom: 15,
  },
  humeurImg: {
    width: 120,
    objectFit: "contain",
    marginBottom: 15,
  },
  inputContainer: {
    position: "relative",
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: "5%",
    width: "90%",
    borderColor: "#5B3EAE",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,

  },
  label: {
    position: "absolute",
    top: -10,
    left: 50,
    backgroundColor: "white",
    color: "#5B3EAE",
    zIndex: 10,
    paddingHorizontal: 5,
  },
  whyText: {
    padding: 10,
    paddingTop: 20,
    fontFamily: "DM-Sans-Regular",
  },
});
