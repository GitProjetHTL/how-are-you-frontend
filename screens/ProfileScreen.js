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

export default function ProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        {/* <TouchableOpacity style={styles.arrow}>
          <FontAwesome
            name="long-arrow-left"
            size={20}
            className={styles.like}
          />
        </TouchableOpacity> */}
        <Text style={styles.textHeader}>Hi, name !</Text>
      </View>

      <TouchableOpacity
        style={styles.categorie}
        onPress={() => navigation.navigate("suivi")}
      >
        <View style={styles.iconView}>
          <FontAwesome name="calendar" size={20} style={styles.like} />
          <Text style={styles.text}>Mon suivi</Text>
        </View>
        <View>
          <FontAwesome name="angle-right" size={20} style={styles.like} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.categorie}
        onPress={() => navigation.navigate("fav")}
      >
        <View style={styles.iconView}>
          <FontAwesome name="heart" size={20} style={styles.like} />
          <Text style={styles.text}>Favoris</Text>
        </View>
        <View>
          <FontAwesome name="angle-right" size={20} style={styles.like} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.categorie}
        onPress={() => navigation.navigate("infos")}
      >
        <View style={styles.iconView}>
          <FontAwesome name="user-circle" size={20} style={styles.like} />
          <Text style={styles.text}>Informations personnelles</Text>
        </View>
        <View>
          <FontAwesome name="angle-right" size={20} style={styles.like} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.categorie}
        onPress={() => navigation.navigate("help")}
      >
        <View style={styles.iconView}>
          <FontAwesome name="question-circle-o" size={20} style={styles.like} />
          <Text style={styles.text}>Aide/ Numéros d'urgence</Text>
        </View>
        <View>
          <FontAwesome name="angle-right" size={20} style={styles.like} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.categorie}>
        <View style={styles.iconView}>
          <FontAwesome name="sign-out" size={20} style={styles.like} />
          <Text style={styles.text}>Deconnexion</Text>
        </View>
        <View>
          <FontAwesome name="angle-right" size={20} style={styles.like} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.categorie}>
        <View style={styles.iconView}>
          <FontAwesome name="eraser" size={20} style={styles.like} />
          <Text style={styles.text}>Supprimer mon compte</Text>
        </View>
        <View styles={styles.arrow}>
          <FontAwesome name="angle-right" size={20} style={styles.like} />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "column",
    backgroundColor: "white",
  },
  topContainer: {
    flexDirection: "row",
    // borderWidth: 1,
    height: "15%",
    marginTop: 50,
  },
  textHeader: {
    fontSize: 30,
    // borderWidth: 1,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "10%",
    marginLeft: 20,
  },
  arrow: {
    // borderWidth: 1,
    width: "20%",
    padding: "5%",
    paddingTop: "15%",
  },
  categorie: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    borderColor: "#C3B6F4",
    borderBottomWidth: 0.3,
    width: "100%",
    height: "11%",
    padding: "5%",
  },
  iconView: {
    flexDirection: "row",
    alignItems: "center",
    // borderWidth: 1,
  },
  like: {
    color: "#5B3EAE",
  },
  text: {
    paddingLeft: "5%",
    marginRight: "50%",
  },
});
