// Emotion board component 
import React, { useState, useMemo } from "react";
import { TouchableOpacity, StyleSheet, Text, View, Image, Dimensions, } from "react-native";
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

export default function MonthlyTrack() {
    const BACKEND = "https://howareyouapp-backend.vercel.app/";

    const [selected, setSelected] = useState('');
    
    const marked = useMemo(() => ({
      [selected]: {
        selected: true,
        selectedColor: "#E9EBFC",
        selectedTextColor: '#252525',
      }, 
    }), [selected])


    return (
        <>
        <Calendar
      style={{
        width: Dimensions.get('window').width, 
      }}
      theme={{
        calendarBackground: '#ffffff',
        arrowColor: '#252525',
        textSectionTitleColor: '#5B3EAE',
        selectedDayBackgroundColor: '#C3B6F4',
        selectedDayTextColor: '#252525',
        todayTextColor: '#5B3EAE',
        dayTextColor: '#252525',
        todayBackgroundColor: "#C3B6F4",
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
        </>
    );
  }

  const styles = StyleSheet.create({
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
})