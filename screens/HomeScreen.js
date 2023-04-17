import React, { useState, useMemo } from "react";
import { TouchableOpacity, SafeAreaView, StyleSheet, Text, View, Image, TextInput, Dimensions, ScrollView } from "react-native";
import EmotionBoard from "../components/EmotionBoard";
import Notepad from "../components/Notepad";
import { useSelector } from "react-redux"; 
import {Calendar, CalendarList, Agenda, LocaleConfig, HorizontalCalendar} from 'react-native-calendars';
import FontAwesome from "react-native-vector-icons/FontAwesome";

LocaleConfig.locales['fr'] = {
  monthNames: [ 'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre' ],
  monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
  dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
  dayNamesShort: ['DIM', 'LUN', 'MAR', 'MER', 'JEU', 'VEN', 'SAM'],
  today: "Aujourd'hui"
};

LocaleConfig.defaultLocale = 'fr';

export default function HomeScreen({ navigation }) {
  const username = useSelector((state) => state.user.value.username); // affiche le pseudo
  console.log(username)
  const [selected, setSelected] = useState('');
  let current = new Date()
  
  const marked = useMemo(() => ({
    [selected]: {
      selected: true,
      selectedColor: "#E9EBFC",
      selectedTextColor: '#252525',
    }
  }), [selected])


  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>How are you, {username} ?</Text>
      <Text style={styles.subtitle}>Comment te sens-tu aujourd'hui ?</Text>
      <EmotionBoard />
      <Notepad />
      <Calendar
      style={{
        width: Dimensions.get('window').width, 
        borderTopColor: "#A8A3BB",
        borderTopWidth: 0.7,
        marginTop: 15,
      }}
      theme={{
        backgroundColor: '#ffffff',
        calendarBackground: '#ffffff',
        arrowColor: '#252525',
        textSectionTitleColor: '#5B3EAE',
        selectedDayBackgroundColor: '#C3B6F4',
        selectedDayTextColor: '#252525',
        todayTextColor: '#5B3EAE',
        dayTextColor: '#252525',
        textDisabledColor: '#C3B6F4',
        textDayFontFamily: 'DM-Sans-Regular',
        textMonthFontFamily: 'DM-Sans-Bold',
        textDayHeaderFontFamily: 'DM-Sans-Bold',
      }}
      current={new Date()}
      onDayPress={day => {
      console.log('selected day', day);
      setSelected(day.dateString);
      }}
      markedDates={marked}
      dayComponent={({date, state})=> {
        return (
          <View style={styles.dayContainer}>
            <Text style={{textAlign: 'center', fontSize: 12, color: state === 'disabled' ? '#C3B6F4' : '#252525'}}>{date.day}</Text>
            <Image style={styles.calendarImage} source={require('../assets/emotion-joie.png')} />
          </View>
        );
      }}
/>
        <TouchableOpacity style={styles.suiviButton} onPress={() => navigation.navigate("suivi")}>
          <Text style={styles.suiviText}>Mon suivi</Text>
          <FontAwesome name="calendar" style={styles.suiviIcon} size={18} />
        </TouchableOpacity>
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
  calendarImage: {
    height: 30,
    objectFit: "contain",
  },
  dayContainer: {
    height: 50,
  }
});
