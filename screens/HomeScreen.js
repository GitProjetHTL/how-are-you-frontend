import React from "react";
import { TouchableOpacity, SafeAreaView, StyleSheet, Text, View, Image, TextInput } from "react-native";
import EmotionBoard from "../components/EmotionBoard";
import { useSelector } from "react-redux";
import {useState} from 'react'; 
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

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>How are you, {username} ?</Text>
      <Text>Comment te sens-tu aujourd'hui ?</Text>
      <EmotionBoard />
      <CalendarList
      style={{
        // borderWidth: 1,
        // borderColor: 'gray',
        // height: '50%',
        width: '100%', 
        marginTop: '5%'
      }}
      theme={{
        backgroundColor: '#ffffff',
        calendarBackground: '#ffffff',
        textSectionTitleColor: '#C3B6F4',
        selectedDayBackgroundColor: '#C3B6F4',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#C3B6F4',
        dayTextColor: '#ffffff',
        textDisabledColor: '#C3B6F4',}}
      current={current}
      onDayPress={day => {
      console.log('selected day', day);
      setSelected(day.dateString);
  }}
  markedDates={{
    [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: '#C3B6F4'}
  }}
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
