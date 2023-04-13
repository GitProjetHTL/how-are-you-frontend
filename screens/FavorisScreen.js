import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Cards from "../components/Cards";

export default function FavorisScreen({ navigation }) {
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
        <Text style={styles.textHeader}>Mes favoris</Text>
      </View>
      <View style={styles.favContainer}>
        <Cards
          name="Nom de la carte"
          content="Contenu de la carte"
          source="Source de la carte"
        />
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
  like: {},
  textHeader: {
    fontSize: 30,
  },
  favContainer: {
    alignItems: "center",
    // borderWidth: 1,
    witdh: "100%",
    height: "80%",
    backgroundColor: "#E9EBFC",
  },
});
