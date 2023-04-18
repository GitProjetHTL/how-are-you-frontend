// Emotion board component 
import React, { useState, useMemo } from "react";
import { StyleSheet, Text, View, Image, Dimensions, } from "react-native";
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { useSelector } from "react-redux";

LocaleConfig.locales['fr'] = {
  monthNames: [ 'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre' ],
  monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
  dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
  dayNamesShort: ['DIM', 'LUN', 'MAR', 'MER', 'JEU', 'VEN', 'SAM'],
  today: "Aujourd'hui"
};

LocaleConfig.defaultLocale = 'fr';

const BACKEND = "https://howareyouapp-backend.vercel.app/";


export default function MonthlyTrack() {
    const user = useSelector((state) => state.user.value);
    const [selected, setSelected] = useState('');
    
    const marked = useMemo(() => ({
      [selected]: {
        selected: true,
        selectedColor: "#E9EBFC",
        selectedTextColor: '#252525',
      }, 
    }), [selected])

    return (

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
      current={new Date().toISOString()}
      onDayPress={day => {
      console.log('selected day', day);
      setSelected(day.dateString);
      }}
      markedDates={marked}
      dayComponent={({date, state})=> {
        const today = new Date().toISOString().split('T')[0];
        const isSelected = selected === date.dateString;
        const isToday = date.dateString === today;
        const imageSource = isToday ? user.emotionImage : null;
      
        console.log(isSelected)
        return (
          <View style={styles.dayContainer}>
            <Text style={{textAlign: 'center', fontSize: 12, color: state === 'disabled' ? '#C3B6F4' : '#252525'}}>{date.day}</Text>
            {imageSource && <Image style={styles.calendarImage} source={{uri: imageSource}} />}
          </View>
        );
      }}
      />

    );
  }

  const styles = StyleSheet.create({
    calendarImage: {
      height: 40,
      width: 30,
      objectFit: "contain",
    },
    dayContainer: {
      height: 50,
    }
})