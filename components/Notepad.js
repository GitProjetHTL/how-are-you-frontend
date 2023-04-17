// Emotion board component 
import React, { useState, useEffect } from "react";
import { TouchableOpacity, StyleSheet, Text, View, Image, TextInput, Modal } from "react-native";
import { useSelector } from "react-redux";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function Notepad() {
    const BACKEND = "https://howareyouapp-backend.vercel.app/";

    const user = useSelector((state) => state.user.value);
    const [comment, setComment] = useState('') // Champ input de rédaction du commentaire

    // Enregistrer le commentaire en BDD
    const saveComment = () => {
      fetch(`${BACKEND}/comments/new`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: user.token, content: comment }),
      }).then(response => response.json())
        .then(data => {
          if (data.result) {
            setComment('');
          }
        });
    };

    return (
    <>
      <View style={styles.inputContainer}>
          <Text style={styles.label}>Pourquoi ?</Text>
          <TextInput style={styles.input} multiline={true} numberOfLines={3} placeholder="Explique-nous ^^..." value={comment} onChangeText={(value) => setComment(value)}/>
        </View>
        <TouchableOpacity style={styles.saveComment} onPress={() => saveComment()}>
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
        fontFamily: "DM-Sans-Regular",
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
        fontFamily: "DM-Sans-Regular",
      },
      saveText: {
        color: "#5B3EAE",
        fontSize: 16,
        fontWeight: 500,
        textAlign: "center",
        fontFamily: "DM-Sans-Bold",
      },
      saveIcon: {
        color: "#5B3EAE",
        marginLeft: 10,
        marginTop: 2,
      },
      background: {
        backgroundColor: "transparent",
      },
      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 50, 0.4)',
      },
      modalView: {
        backgroundColor: 'white',
        width: '80%',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
})