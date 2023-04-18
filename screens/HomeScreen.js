import React, { useState } from "react";
import { TouchableOpacity, SafeAreaView, StyleSheet, Text, View, Image, ScrollView, Dimensions } from "react-native";
import EmotionBoard from "../components/EmotionBoard";
import Notepad from "../components/Notepad";
import { useSelector } from "react-redux"; 
import MonthlyTrack from "../components/MonthlyTrack";
import Suggestions from "../components/Suggestions";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function HomeScreen({ navigation }) {
  const username = useSelector((state) => state.user.value.username); // affiche le pseudo
  const [showSuggestions, setShowSuggestions] = useState(false); // affichage des tabs "Suggestions" et "Calendrier"

  // Gestion affichage composants et styles des tabs "Suggestions" et "Calendrier"
  let componentSelected = <MonthlyTrack />
  let selectedTab = { fontFamily: "DM-Sans-Bold", textAlign: "center", width: "100%", paddingBottom: 15, color: "#252525", borderBottomColor: "#252525", borderBottomWidth: 2, }
  let initialTab = { fontFamily: "DM-Sans-Regular", textAlign: "center", width: "100%", paddingBottom: 15, color: "#A8A3BB" }
  let ongletSuggestionsText = initialTab
  let ongletCalendrierText = selectedTab

  // Switch entre les tabs "Suggestions" et "Calendrier"
  if (showSuggestions) {
    componentSelected = <Suggestions />
    ongletSuggestionsText = selectedTab
    ongletCalendrierText = initialTab
  } else {
    componentSelected = (
      <>
        <MonthlyTrack />
        <TouchableOpacity style={styles.suiviButton} onPress={() => navigation.navigate("suivi")}>
          <Text style={styles.suiviText}>Mon suivi</Text>
          <FontAwesome name="calendar" style={styles.suiviIcon} size={18} />
        </TouchableOpacity>
      </>
        )

  }

  console.log(username)

  // Le return
  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>How are you, {username} ?</Text>
      <Text style={styles.subtitle}>Comment te sens-tu aujourd'hui ?</Text>
      <EmotionBoard />
      <Notepad />      
      
      <View style={styles.onglets}>

          <TouchableOpacity style={styles.onglet} value={showSuggestions} onPress={() => setShowSuggestions(true)}>
              <Text style={ongletSuggestionsText}>Suggestions</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.onglet} onPress={() => setShowSuggestions(false)}>
            <Text style={ongletCalendrierText}>Calendrier</Text>
          </TouchableOpacity>

      </View>
      {componentSelected}
      
    </SafeAreaView>
    </ScrollView>
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
    marginTop: 50,
  },
  subtitle: {
    fontFamily: "DM-Sans-Regular",
  },
  onglets: {
    flexDirection: "row",
    marginTop: 20,
    width: Dimensions.get('window').width, 
  },
  onglet: {
    width: "50%", 
    alignItems: "center", 
    borderBottomColor: "#A8A3BB", 
    borderBottomWidth: 1,
  },
  suiviButton: {
    backgroundColor: "#5B3EAE",
    borderWidth: 1,
    borderColor: "#5B3EAE",
    borderRadius: 25,
    height: 40,
    width: "60%",
    paddingTop: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "DM-Sans-Regular",
    marginTop: 15,
    marginBottom: 15,
  },
  suiviText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: 500,
    textAlign: "center",
    fontFamily: "DM-Sans-Bold",
  },
  suiviIcon: {
    color: "#FFFFFF",
    marginLeft: 10,
    marginTop: 2,
  },
  
});
