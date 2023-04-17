import React, { useState } from "react";
import { TouchableOpacity, SafeAreaView, StyleSheet, Text, View, Image, ScrollView } from "react-native";
import EmotionBoard from "../components/EmotionBoard";
import Notepad from "../components/Notepad";
import { useSelector } from "react-redux"; 
import MonthlyTrack from "../components/MonthlyTrack";
import Suggestions from "../components/Suggestions";

export default function HomeScreen({ navigation }) {
  const username = useSelector((state) => state.user.value.username); // affiche le pseudo
  const [showSuggestions, setShowSuggestions] = useState(false);

  let componentSelected = <MonthlyTrack />
  let ongletSuggestionsText = { fontFamily: "DM-Sans-Regular", }
  let ongletCalendrierText = { fontFamily: "DM-Sans-Bold", }


  if (showSuggestions) {
    componentSelected = <Suggestions />
    ongletSuggestionsText = { fontFamily: "DM-Sans-Bold", }
    ongletCalendrierText = { fontFamily: "DM-Sans-Regular"}
  } else {
    componentSelected = <MonthlyTrack />
  }


  console.log(username)

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
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: "DM-Sans-Regular",
  },
  onglets: {
    flexDirection: "row",
    marginTop: 5,
    borderBottomColor: "#A8A3BB",
    borderBottomWidth: 1,
  },
  onglet: {
    width: "50%",
    alignItems: "center",
    padding: 15,
  },
});
