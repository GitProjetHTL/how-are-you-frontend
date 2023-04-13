// Emotion board component 
import React, { useState, useEffect } from "react";
import { TouchableOpacity, SafeAreaView, StyleSheet, Text, View, Image, TextInput } from "react-native";
import Popover from "react-native-popover-view";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function EmotionBoard() {
    const BACKEND = "https://howareyouapp-backend.vercel.app/";

    const [showPopover, setShowPopover] = useState(null); // Track the selected emotion index
    const [comment, setComment] = useState('') // Champ input de rédaction du commentaire

    const emotionData = [
      { emotionName: "Joie", imageUrl: require("../assets/emotion-joie.png"), score: 100, description: "Sentiment de bonheur intense et profond, de plaisir, de gaité et de satisfaction", emotionRemede: ['Tristesse'] },
      { emotionName: "Confusion", imageUrl: require("../assets/emotion-confusion.png"), score: 50, description: "Mélange d’autres émotions, peut-être suite à une maladresse ou à une faute.", emotionRemede: ['Sérénité'] },
      { emotionName: "Honte", imageUrl: require("../assets/emotion-honte.png"), score: 30, description: "Peur du rejet, du regard et du jugement des autres.", emotionRemede: ['Colère', 'Fierté'] },
      { emotionName: "Colère", imageUrl: require("../assets/emotion-colere.png"), score: 25, description: "Vif mécontentement, accès d’énervement extrême, qui s’exprime par une grande agressivité", emotionRemede: ['Sérénité', 'Anxiété'] },
      { emotionName: "Fierté", imageUrl: require("../assets/emotion-fierte.png"), score: 80, description: "Emotion agréable qui surgit quand on se sent à la hauteur, souvent suite à un succès", emotionRemede: ['Honte'] },
      { emotionName: "Peur", imageUrl: require("../assets/emotion-peur.png"), score: 45, description: "Sentiment d’insécurité. Appréhension qui peut nous figer. Elle peut se manifester lors d’un danger réel ou supposé.", emotionRemede: ['Colère', 'Surprise'] },
      { emotionName: "Anxiété", imageUrl: require("../assets/emotion-anxiete.png"), score: 20, description: "Trouble qui porte l’inquiétude à un niveau supérieur, peur de l’avenir, de ce qui va se passer.", emotionRemede: ['Sérénité', 'Colère'] },
      { emotionName: "Dégoût", imageUrl: require("../assets/emotion-degout.png"), score: 40, description: "Sensation d’aversion, de répugnance, d’écœurement. Elle va plus loin que le manque d’intérêt ou d’estime.", emotionRemede: ['Fierté', 'Ennui', 'Suprise'] },
      { emotionName: "Sérénité", imageUrl: require("../assets/emotion-serenite.png"), score: 90, description: "Absence de sentiments violents, comme la colère, l’anxiété ou l’euphorie. Sensation de tranquillité, de paix intérieure.", emotionRemede: ['Peur', 'Anxiété'] },
      { emotionName: "Surprise", imageUrl: require("../assets/emotion-surprise.png"), score: 70, description: "Réaction spontanée à des événements dans l’environnement imprévu, comme la perception d’un bruit ou d’un mouvement.", emotionRemede: ['Sérénité', 'Anxiété'] },   
      { emotionName: "Ennui", imageUrl: require("../assets/emotion-ennui.png"), score: 55, description: "Sensation de lassitude, de vide ou d’inutilité. L’expérience vécue manque de sens à nos yeux et peut provoquer fatigue et découragement.", emotionRemede: ['Dégoût', 'Joie', 'Sérénité'] },
      { emotionName: "Tristesse", imageUrl: require("../assets/emotion-triste.png"), score: 10, description: "Etat provoqué par un mal ou un manque, et qui englobe une impression pénible, une sensation de mélancolie.", emotionRemede: ['Joie', 'Surprise'] },
    ];  

    useEffect(() => {
      setTimeout(() => setShowPopover(null), 10000); // affichage de popover réglé sur 10 secondes
    }, [showPopover]);
  
    const selectEmotion = (data) => {
        console.log(data)
        // fetch la route add emotion
    }

    const handleSave = () => {
      console.log("sauvé !");
      // fetch la route new comment en post
    };
  
    let emotionsSelect = emotionData.map((data, i) => {
      return (
        <Popover backgroundStyle={styles.background} key={i} isVisible={showPopover === i} // Only show the selected popover
          onRequestClose={() => setShowPopover(null)} // Reset the selected emotion index
          popoverStyle={styles.popoverContent} arrowColor={"#E9EBFC"}
          from={
            <TouchableOpacity onLongPress={() => setShowPopover(i)} onPress={() => selectEmotion(data)} >
              <Image source={data.imageUrl} style={styles.emotion} />
            </TouchableOpacity>
          }
        >
          <View>
            <Text style={styles.popoverTitle}>{data.emotionName}</Text>
            <Text style={styles.popoverText}>{data.description}</Text>
          </View>
        </Popover>
      );
    });

    return (
    <>
        <View style={styles.container}>
            <View style={styles.emotionBoard}>
                {emotionsSelect}
                <TouchableOpacity style={styles.moreEmotions}>
                    <FontAwesome name="plus" size={20} color="#252525" />
                </TouchableOpacity>
            </View>
        </View>
      <View style={styles.inputContainer}>
          <Text style={styles.label}>Pourquoi ?</Text>
          <TextInput style={styles.input} multiline={true} numberOfLines={3} placeholder="Explique-nous ^^..." value={comment} onChangeText={(value) => setComment(value)}/>
        </View>
        <TouchableOpacity style={styles.saveComment} onPress={() => handleSave()}>
          <Text style={styles.saveText}>Enregistrer</Text>
          <FontAwesome name="pencil" style={styles.saveIcon} size={18} />
        </TouchableOpacity>
      </>
    );
  }

  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
    },
    emotionBoard: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "flex-start",
        marginTop: 10,
        width: "95%",
      },
      emotion: {
        margin: 5,
        height: 40,
        width: 50,
        objectFit: "contain",
      },
      moreEmotions: {
        borderRadius: 20,
        width: 40,
        height: 40,
        backgroundColor: "#E9EBFC",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
      },
      inputContainer: {
        position: "relative",
        marginTop: 20,
        marginBottom: 20,
        width: "100%",
        alignItems: 'center',
      },
      label: {
        position: "absolute",
        top: -10,
        left: 50,
        backgroundColor: "white",
        color: "#5B3EAE",
        zIndex: 10,
        paddingHorizontal: 5,
      },
      input: {
        width: "80%",
        height: 70,
        borderColor: "#5B3EAE",
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 10,
      },
      saveComment: {
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "#5B3EAE",
        borderRadius: 25,
        height: 40,
        width: "60%",
        paddingTop: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      },
      saveText: {
        color: "#5B3EAE",
        fontSize: 16,
        fontWeight: 500,
        textAlign: "center",
      },
      saveIcon: {
        color: "#5B3EAE",
        marginLeft: 10,
        marginTop: 2,
      },
      background: {
        backgroundColor: "transparent",
      },
      popoverContent: {
        width: 200,
        padding: 10,
        backgroundColor: "#E9EBFC",
      },
      popoverTitle: {
        fontFamily: "Solway-ExtraBold",
      }
})