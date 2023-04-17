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

export default function HelpScreen({ navigation }) {
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
        <Text style={styles.textHeader}>Aides / Numéros d'urgence</Text>
      </View>
      <View style={styles.infosContainer}>
        <View style={styles.infosall}>
          <Text style={styles.infosText}>SAMU:</Text>

          <View style={styles.infos}>
            <FontAwesome name="phone" size={25} style={styles.like} />
            <Text>15</Text>
          </View>
        </View>
        <View style={styles.infosall}>
          <Text style={styles.infosText}>MonParcoursPsy:</Text>

          <View style={styles.infos}>
            <FontAwesome name="link" size={25} style={styles.like} />
            <Text>https://monparcourspsy.sante.gouv.fr/</Text>
          </View>
        </View>
        <View style={styles.infosall}>
          <Text style={styles.infosText}>SOS-Amitié:</Text>

          <View style={styles.infos}>
            <FontAwesome name="phone" size={25} style={styles.like} />
            <Text>09 72 39 40 50</Text>
          </View>
        </View>
        <View style={styles.infosall}>
          <Text style={styles.infosText}>Psycologue</Text>

          <View style={styles.infos}>
            <FontAwesome name="link" size={25} style={styles.like} />
            <Text>https://www.psychologue.net</Text>
          </View>
        </View>
        <View style={styles.infosall}>
          <Text style={styles.infosText}>SOS-Suicide:</Text>

          <View style={styles.infos}>
            <FontAwesome name="phone" size={25} style={styles.like} />
            <Text>3114</Text>
          </View>
        </View>
        <View style={styles.infosall}>
          <Text style={styles.infosText}>Croix-Rouge écoute:</Text>

          <View style={styles.infos}>
            <FontAwesome name="phone" size={25} style={styles.like} />
            <Text>0 800 858 858</Text>
          </View>
        </View>
        <View style={styles.infosall}>
          <Text style={styles.infosText}>Ecoute Ados:</Text>

          <View style={styles.infos}>
            <FontAwesome name="phone" size={25} style={styles.like} />
            <Text>06 12 20 34 71</Text>
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
  like: {},
  textHeader: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "DM-Sans-Bold",
  },
  infosContainer: {
    // borderWidth: 1,
    height: "85%",
    marginTop: 20,
  },
  infosall: {
    borderBottomWidth: 0.3,
    borderBottomColor: "#C3B6F4",
    // borderColor: "red",
    flexDirection: "column",
    height: 70,
  },
  infosText: {
    paddingHorizontal: "15%",
    fontFamily: "DM-Sans-Bold",
    fontSize: 16,
    marginVertical: 5,
    color: "#252525",
  },
  infos: {
    // borderWidth: 1,
    height: 40,
    // marginVertical: 10,
    flexDirection: "row",
  },
  like: {
    paddingHorizontal: "5%",
    color: "#5B3EAE",
  },
});
