// Emotion board component 
import React, { useState, useEffect } from "react";
import { TouchableOpacity, StyleSheet, Text, View, Image, Modal } from "react-native";
import { useSelector,useDispatch } from "react-redux";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { saveEmotionImage ,saveEmotionName } from "../reducers/user";

export default function EmotionBoard() {
    const BACKEND = "https://howareyouapp-backend.vercel.app/";

    const user = useSelector((state) => state.user.value);
    const dispatch = useDispatch()

    const [modalVisible, setModalVisible] = useState(false); // Track the selected emotion index
    const [selected, setSelected] = useState({}) // récupère données sur émotion sélectionnée
    console.log(selected)
    const [emotionAll, setEmotionAll] = useState([]); // pour afficher toutes les émotions à choisir
    const [emotionRegistered, setEmotionRegistered] = useState(false); // Affichage de l'émotion sélectionnée

  // affichage de toutes émotions à l'ouverture de la page
  useEffect(() => {
    fetch(`${BACKEND}/users/allEmotions`)
      .then(response => response.json())
      .then((emotion) => {
        emotion.result && setEmotionAll([...emotion.data])
      })

    }, []);
    
    // Affichage modal pour sélection émotion
    const handleEmotionModal = (data) => {
        setModalVisible(true)
        setSelected(data)
    }

    // Affichage du board emotions
    let emotionSelection= emotionAll.map((data, i) => {
      return (
        <View key={i}>
          <TouchableOpacity onPress={() => handleEmotionModal(data)} >
              <Image source={{uri: data.imageUrl}} style={styles.emotion} />
          </TouchableOpacity>
        </View>
      );})

    // Envoi de l'emotion sélectionnée en BDD
    const saveEmotion = () => {
      fetch(`${BACKEND}/users/historique`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: user.token, _id: selected._id})
       })
    .then(response => response.json())
    .then(data => {
     console.log('result add emotion => ', data)
    if(data.result){
      setModalVisible(false)
      dispatch(saveEmotionImage(selected.imageUrl))
      dispatch(saveEmotionName(selected.emotionName))
      alert('Votre emotion du jour a bien été enregistrée 💖')
      setEmotionRegistered(true)
    } else {
      alert('Aïe, ça ne marche pas 😣')
    }
   });


}

  // Affichage de l'émotion qui a été sélectionnée (après avoir appuyé sur "Oui")
  if (emotionRegistered) {
    emotionSelection = (
      <View style={styles.emotionOfTheDay}>
        <Text style={styles.label}>Ton émotion du jour</Text>
        <Image source={{uri: selected.imageUrl}} style={styles.emotionDayImage} />
        <Text style={styles.emotionTitle}>{selected.emotionName}</Text>
      </View>
        )
  }

  // Retour à l'écran de sélection d'une émotion (délai initialisé à 1 heure)
  useEffect(() => {
    let timer;

    if (emotionRegistered) {
      timer = setTimeout(() => {
        setEmotionRegistered(false);
      }, 3600000); // 1 heure en millisecondes
    }

    return () => {
      clearTimeout(timer);
    };
  }, [emotionRegistered]);

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
                        <Text style={styles.saveText}>Non </Text>
                        <FontAwesome name="remove" style={styles.saveIcon} size={18} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.noButton} onPress={() => saveEmotion()}>
                        <Text style={styles.saveText}>Oui </Text>
                        <FontAwesome name="check" style={styles.saveIcon} size={18} />
                    </TouchableOpacity>
                  </View>
              </View>  
            </View>
        </Modal> 

        <View style={styles.container}>
            <View style={styles.emotionBoard}>
                {emotionSelection}
                {/* <TouchableOpacity style={styles.moreEmotions}>
                    <FontAwesome name="plus" size={20} color="#252525" />
                </TouchableOpacity> */}
            </View>
        </View>
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
        marginTop: 25,
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
        fontFamily: "DM-Sans-Regular",
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
        fontFamily: "DM-Sans-Bold",
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
        fontFamily: "DM-Sans-Bold",
      },
      emotionOfTheDay: {
        width: "85%",
        padding: 5,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "#C3B6F4",
        borderRadius: 10,
      },
      emotionDayImage: {
        marginTop: 15,
        height: 50,
        width: 70,
        objectFit: "contain",
      },
      emotionTitle: {
        fontFamily: "DM-Sans-Bold",
        fontSize: 16,
        marginTop: 5,
      },
      label: {
        position: "absolute",
        top: -10,
        textAlign: 'center',
        backgroundColor: "white",
        color: "#C3B6F4",
        zIndex: 10,
        paddingHorizontal: 5,
        fontFamily: "DM-Sans-Regular",
      },
})