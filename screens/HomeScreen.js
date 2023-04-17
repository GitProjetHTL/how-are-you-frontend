import React from "react";
import { TouchableOpacity, SafeAreaView, StyleSheet, Text, View, Image, TextInput, Dimensions } from "react-native";
import EmotionBoard from "../components/EmotionBoard";
import { useSelector } from "react-redux";
import { useState, useMemo } from 'react'; 
import {Calendar, CalendarList, Agenda, LocaleConfig, HorizontalCalendar} from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
  monthNames: [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre'
  ],
  monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
  dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
  dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
  today: "Aujourd'hui"
};

LocaleConfig.defaultLocale = 'fr';

export default function HomeScreen({ navigation }) {
  const username = useSelector((state) => state.user.value.username); // affiche le pseudo
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
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>How are you, {username} ?</Text>
      <Text>Comment te sens-tu aujourd'hui ?</Text>
      <EmotionBoard />
      <Calendar
      style={{
        // borderWidth: 1,
        // borderColor: 'gray',
        // height: '50%',
        width: Dimensions.get('window').width, 
        maxHeight: '50%',
        marginTop: '5%'
      }}
      theme={{
        backgroundColor: '#ffffff',
        calendarBackground: '#ffffff',
        textSectionTitleColor: '#5B3EAE',
        selectedDayBackgroundColor: '#C3B6F4',
        selectedDayTextColor: '#252525',
        todayTextColor: '#5B3EAE',
        dayTextColor: '#252525',
        textDisabledColor: '#C3B6F4',}}
      current={new Date()}
      onDayPress={day => {
      console.log('selected day', day);
      setSelected(day.dateString);
  }}
  markedDates={marked}
/>
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
    marginTop: 50,
    marginBottom: 10,
  },
});
