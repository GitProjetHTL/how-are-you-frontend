import React from "react";
import { TouchableOpacity, SafeAreaView, StyleSheet, Text, View, Image, TextInput, Dimensions, ScrollView} from "react-native";
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
  let current = new Date();
  const marked = useMemo(() => ({
    [selected]: {
      customStyles: {
        container: {
          backgroundColor: 'green',
          borderRadius: 0,
        },
        text: {
          color: 'white',
        }
      }
    }
  }), [selected]);

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
        marginTop: '5%'
      }}
      theme={{
        backgroundColor: '#ffffff',
        calendarBackground: '#ffffff',
        textSectionTitleColor: '#C3B6F4',
        selectedDayBackgroundColor: '#C3B6F4',
        selectedDayTextColor: '#ffffff',
        todayTextColor: 'red',
        dayTextColor: '#C3B6F4',
        textDisabledColor: '#C3B6F4',}}
      current={new Date()}
      onDayPress={day => {
      console.log('selected day', day);
      setSelected(day.dateString);
  }}
  markedDates={marked}
  // // {
  //   [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: '#C3B6F4'}
  // }
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
