// Emotion board component 
import React, { useState, useMemo, useEffect ,} from "react";
import { TouchableOpacity, StyleSheet, Text, View, Image, Dimensions, ScrollView, } from "react-native";
import { useSelector } from "react-redux";

import Cards from "./Cards";
import Audio from "./Audio";


export default function Suggestions() {
    const BACKEND = "https://howareyouapp-backend.vercel.app/";
    const user = useSelector((state) => state.user.value);

    const [cardSuggestion,setCardSuggestion]= useState([])
    const [audioSuggestion,setAudioSuggestion]= useState([])
    // const [defaultSuggestion, setDefaultSuggestion] = useState("")
    const [contentSuggestion,setContentSuggestion]= useState("")


    useEffect(() => {
      fetch(`https://howareyouapp-backend.vercel.app/cards/all/${user.token}`)
      .then((response) => response.json())
      .then((searchCard) => {
        const cardsSearch = searchCard.data.map((data, i) => {
          return  <Cards key={i} {...data} />
        });
        setCardSuggestion(cardsSearch[Math.floor(Math.random() * cardsSearch.length)]);
      });

      fetch(`https://howareyouapp-backend.vercel.app/audios/all/${user.token}`)
      .then((response) => response.json())
      .then((searchAudios) => {
        const audiosSearch = searchAudios.data.map((data, i) => {
          return  <Audio key={i} {...data} />
        });
        setAudioSuggestion(audiosSearch[Math.floor(Math.random() * audiosSearch.length)]);
      });
      
    }, []);

    useEffect(() => {
  
      if (!user.emotionName) {
        setContentSuggestion(
          <ScrollView style={styles.scrollView}>
            <View style={styles.cardSuggestion}>{cardSuggestion}</View>
            <View style={styles.audioSuggestion}>{audioSuggestion}</View>
          </ScrollView>
        );
  
        fetch(`https://howareyouapp-backend.vercel.app/cards/search/${user.emotionName}`)
        .then((response) => response.json())
        .then((searchCard) => {
          const cardsSearch = searchCard.data.map((data, i) => {
            return  <Cards key={i} {...data} />
          });
          setCardSuggestion(cardsSearch);
        });
    
          fetch(`https://howareyouapp-backend.vercel.app/audios/search/${user.emotionName}`)
          .then((response) => response.json())
          .then((searchAudios) => {
            const audiosSearch = searchAudios.data.map((data, i) => {
              return  <Audio key={i} {...data} />
            });
            setAudioSuggestion(audiosSearch);
          });
   

      } else {
        setContentSuggestion(
          <ScrollView style={styles.scrollView}>
            <View style={styles.cardSuggestion}>{cardSuggestion}</View>
            <View style={styles.audioSuggestion}>{audioSuggestion}</View>
          </ScrollView>
        );}

      }, []);

        
        // useEffect(() => {
        //   fetch(`https://howareyouapp-backend.vercel.app/audios/all/${user.token}`)
        //   .then((response) => response.json())
        //   .then((searchAudios) => {
        //     const audiosSearch = searchAudios.data.map((data, i) => {
        //       return  <Audio key={i} {...data} />
        //     });
        //     setAudioSuggestion(audiosSearch[Math.floor(Math.random() * audiosSearch.length)]);
        //   });
  
        // }, []);
        
  
    return (
      <View style={styles.container}>{contentSuggestion}</View>
    );
  
    }
  const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        width: Dimensions.get('window').width, 
    },
    scrollView: {
        backgroundColor: "#E9EBFC",
        alignContent: "center",
        width: Dimensions.get('window').width, 
    },
})