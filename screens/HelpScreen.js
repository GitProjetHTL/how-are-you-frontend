import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function HelpScreen({ navigation }) {
  const helpInfosData = [
    { iconName: "phone", helpName: "Samu", helpContact: "15" },
    {
      iconName: "link",
      helpName: "MonParcoursPsy",
      helpContact: "https://monparcourspsy.sante.gouv.fr/",
    },
    {
      iconName: "phone",
      helpName: "SOS-Amitié",
      helpContact: "09 72 39 40 50",
    },
    {
      iconName: "link",
      helpName: "Psycologue",
      helpContact: "https://www.psychologue.net",
    },
    { iconName: "phone", helpName: "SOS-suicide", helpContact: "3114" },
    {
      iconName: "phone",
      helpName: "Croix-Rouge-écoute",
      helpContact: "0 800 858 858",
    },
    {
      iconName: "phone",
      helpName: "Ecoute Ados",
      helpContact: "06 12 20 34 71",
    },
  ];

  const helpInfos = helpInfosData.map((data, i) => {
    return (
      <View key={i} style={styles.infosall}>
        <FontAwesome name={data.iconName} size={25} style={styles.like} />
        <View style={styles.infos}>
          <Text style={styles.infosText}>{data.helpName}</Text>
          <Text style={styles.contact}>{data.helpContact}</Text>
        </View>
      </View>
    );
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity
          style={styles.arrow}
          onPress={() => navigation.navigate("TabNavigator")}
        >
          <FontAwesome name="long-arrow-left" size={20} />
        </TouchableOpacity>
        <Text style={styles.textHeader}>Aides / Numéros d'urgence</Text>
      </View>
      <View style={styles.infosContainer}>{helpInfos}</View>
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
    textAlign: "center",
    fontFamily: "DM-Sans-Bold",
  },
  infosall: {
    borderBottomWidth: 0.3,
    borderBottomColor: "#C3B6F4",
    flexDirection: "row",
    alignItems: "center",
    height: 70,
  },
  infosText: {
    fontFamily: "DM-Sans-Bold",
    fontSize: 16,
    marginVertical: 3,
    color: "#252525",
  },
  like: {
    paddingHorizontal: "5%",
    color: "#5B3EAE",
  },
  contact: {
    fontFamily: "DM-Sans-Regular",
  },
});
