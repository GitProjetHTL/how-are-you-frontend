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

    // console.log(user.emotion)


    useEffect ( () => {
        fetch(`https://howareyouapp-backend.vercel.app/cards/search/${user.emotion}`)
          .then((response) => response.json())
          .then((searchCard) => {
            // console.log(searchCard.data)
            const cardsSearch = searchCard.data.map((data, i) => {
              
              return (
                <Cards
                  key={i}
                  {...data}
                //   cardsID={oneCard._id}
                //   name={oneCard.name}
                //   content={oneCard.content}
                //   source={oneCard.source}
                />
              );
            });
            setCardSuggestion(cardsSearch);
          });

          fetch(`https://howareyouapp-backend.vercel.app/audios/search/${user.emotion}`)
          .then((response) => response.json())
          .then((searchAudios) => {
            // console.log(searchCard.data)
            const audiosSearch = searchAudios.data.map((data, i) => {
              return (
                <Audio
                  key={i}
                  {...data}
                //   cardsID={oneCard._id}
                //   name={oneCard.name}
                //   content={oneCard.content}
                //   source={oneCard.source}
                />
              );
            });
            setAudioSuggestion(audiosSearch);
          });


      },[cardSuggestion , audioSuggestion]);

    
    return (
        <View style={styles.container}>
               {!user.emotion ? 
               <View>
                <Text style={styles.title}>
                   Merci de valider une émotion
                    </Text>
               </View> 
               :
                <ScrollView style={styles.scrollView}>
                    <View style={styles.cardSuggestion}>
                        {cardSuggestion}
                    </View>
                    <View style={styles.audioSuggestion}> 
                        {audioSuggestion}
                    </View>
                </ScrollView>
               } 
        </View>
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
        width: "43%",
    },

    audioSuggestion: {
        width: "43%",
    },

    scrollView: {
        backgroundColor: "#E9EBFC"
    },


})