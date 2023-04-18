// Emotion board component 
import React, { useState, useMemo, useEffect ,} from "react";
import { TouchableOpacity, StyleSheet, Text, View, Image, Dimensions,ScrollView, } from "react-native";
import { useSelector } from "react-redux";

import Cards from "./Cards";
import Audio from "./Audio";


export default function Suggestions() {
    const BACKEND = "https://howareyouapp-backend.vercel.app/";
    const user = useSelector((state) => state.user.value);

    const [cardSuggestion,setCardSuggestion]= useState([])
    const [audioSuggestion,setAudioSuggestion]= useState([])
    const [contentSuggestion,setContentSuggestion]= useState("")

    // console.log(user.emotion)


    useEffect(() => {
      if (!user.emotionName) {
        setContentSuggestion(
          <View>
            <Text style={styles.title}>Merci de valider une émotion</Text>
          </View>
        );
      } else {
        setContentSuggestion(
          <ScrollView style={styles.scrollView}>
            <View style={styles.cardSuggestion}>{cardSuggestion}</View>
            <View style={styles.audioSuggestion}>{audioSuggestion}</View>
          </ScrollView>
        );
      }
    }, [user.emotionName, cardSuggestion, audioSuggestion]);
  
    useEffect(() => {
      fetch(`https://howareyouapp-backend.vercel.app/cards/search/${user.emotionName}`)
        .then((response) => response.json())
        .then((searchCard) => {
          const cardsSearch = searchCard.data.map((data, i) => {
            return (
              <Cards
                key={i}
                {...data}
              />
            );
          });
          setCardSuggestion(cardsSearch);
        });
    }, [user.emotionName]);
  
    useEffect(() => {
      fetch(`https://howareyouapp-backend.vercel.app/audios/search/${user.emotionName}`)
        .then((response) => response.json())
        .then((searchAudios) => {
          const audiosSearch = searchAudios.data.map((data, i) => {
            return (
              <Audio
                key={i}
                {...data}
              />
            );
          });
          setAudioSuggestion(audiosSearch);
        });
    }, [user.emotionName]);
  
    return (
      <View style={styles.container}>{contentSuggestion}</View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "#E9EBFC"
    },
    title: {
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
        fontSize:25,
        fontFamily: "Solway-ExtraBold",
        
        
    },
    cardSuggestion: {
        width: "42%",
    },

    audioSuggestion: {
        width: "42%",
    },

    scrollView: {
        backgroundColor: "#E9EBFC"
    },


})