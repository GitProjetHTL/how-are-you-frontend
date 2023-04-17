// Emotion board component 
import React, { useState, useEffect } from "react";
import { TouchableOpacity, StyleSheet, Text, View, Image, TextInput, Modal } from "react-native";
import { useSelector } from "react-redux";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function EmotionBoard() {
    const BACKEND = "https://howareyouapp-backend.vercel.app/";

    const user = useSelector((state) => state.user.value);

    const [modalVisible, setModalVisible] = useState(false); // Track the selected emotion index
    const [selected, setSelected] = useState({})
    const [comment, setComment] = useState('') // Champ input de rédaction du commentaire
    const [emotionAll, setEmotionAll] = useState([]);

    const handleEmotionModal = (data) => {
        setModalVisible(true)
        setSelected(data)
    }

  // affichage de toutes émotions
  useEffect(() => {
    fetch(`${BACKEND}/users/allEmotions`)
      .then(response => response.json())
      .then((emotion) => {
        emotion.result && setEmotionAll([...emotion.data])
      })

    }, []);

    // Affichage du board emotions
    const emotions= emotionAll.map((data, i) => {
      return (
        <View key={i}>
          <TouchableOpacity onPress={() => handleEmotionModal(data)} >
              <Image source={{uri: data.imageUrl}} style={styles.emotion} />
          </TouchableOpacity>
        </View>
      );})

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

    // Envoi de l'emotion sélectionnée en BDD
    const saveEmotion = () => {
      console.log("prêt pour l'envoi en BDD ??? => ", selected)
    }

    return (
    <>
        <Modal visible={modalVisible} animationType="fade" transparent>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                  <Image source={{uri: selected.imageUrl}} style={styles.emotionModal} />
                  <Text style={styles.modalTitle}>{selected.emotionName}</Text>
                  <Text style={styles.modalText}>{selected.description}</Text>

                  <Text style={styles.confirmText}>Est-ce que c'est ce que tu ressens ?</Text>
                  <View style={styles.modalFooter}>
                    <TouchableOpacity style={styles.noButton} onPress={() => setModalVisible(false)}>
                        <Text style={styles.saveText}>Non</Text>
                        <FontAwesome name="remove" style={styles.saveIcon} size={18} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.noButton} onPress={() => saveEmotion()}>
                        <Text style={styles.saveText}>Oui</Text>
                        <FontAwesome name="check" style={styles.saveIcon} size={18} />
                    </TouchableOpacity>
                  </View>
              </View>  
            </View>
        </Modal> 

        <View style={styles.container}>
            <View style={styles.emotionBoard}>
                {emotions}
                {/* <TouchableOpacity style={styles.moreEmotions}>
                    <FontAwesome name="plus" size={20} color="#252525" />
                </TouchableOpacity> */}
            </View>
        </View>
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
      emotionModal: {
        margin: 5,
        height: 70,
        width: 70,
        objectFit: "contain",
        marginBottom: 20,       
      },
      modalText: {

        padding: 0,
        marginBottom: 20,
        textAlign: "center",
      },
      modalTitle: {
        fontFamily: "Solway-ExtraBold",
        fontSize: 20,
        marginBottom: 20,
      },
      modalFooter: {
        flexDirection: "row",
      },
      confirmText: {
        borderTopWidth: 1,
        borderTopColor: "#E9EBFC",
        fontWeight: 500,
        marginBottom: 10,
        paddingTop: 10,
      },
      noButton: {
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "#5B3EAE",
        borderRadius: 25,
        height: 40,
        width: 100,
        paddingTop: 1,
        margin: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }
})