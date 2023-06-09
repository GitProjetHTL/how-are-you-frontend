// Cards component
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Modal,
  ScrollView,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useSelector } from "react-redux";
import { useState } from "react";

const BACKEND = "https://howareyouapp-backend.vercel.app";

export default function Cards(props) {
  const user = useSelector((state) => state.user.value);
  const [isLiked, setIsLiked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleLike = () => {
    fetch(`${BACKEND}/cards/like`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: user.token, cardsID: props._id }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.like) {
          setIsLiked(true);
        } else {
          setIsLiked(false);
        }
      });
  };
  let content = props.content.substr(0, 100) + "...";

  const handleMoreModal = () => {
    setModalVisible(true);
  };

  return (
    <>
      <View style={styles.cards}>
        <Text style={styles.titleCard}>{props.name}</Text>
        <Text style={styles.contentCard}> {content}</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.moreButton}
            onPress={() => handleMoreModal()}
          >
            <Text style={styles.moreText}>Voir plus</Text>
          </TouchableOpacity>
          <View style={styles.heartContainer}>
            <FontAwesome
              onPress={() => handleLike()}
              name="heart"
              size={20}
              style={[isLiked ? { color: "#5B3EAE" } : { color: "white" }]}
            />
          </View>
        </View>
      </View>
      <Modal visible={modalVisible} animationType="fade" transparent>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>{props.name}</Text>
            <ScrollView>
              <Text style={styles.modalContent}>{props.content}</Text>
            </ScrollView>
            <TouchableOpacity
              style={styles.noButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.confirmText}>Fermer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  cards: {
    backgroundColor: "white",
    borderRadius: 10,
    marginVertical: 15,
    padding: 10,
    width: "90%",
    marginHorizontal: "5%",
  },
  titleCard: {
    fontFamily: "Solway-ExtraBold",
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  contentCard: {
    width: "100%",
    fontSize: 16,
    fontFamily: "DM-Sans-Regular",
    marginBottom: 15,
  },
  btnContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  moreButton: {
    borderColor: "#5B3EAE",
    borderWidth: 1,
    borderRadius: 25,
    height: 40,
    width: "50%",
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  moreText: {
    color: "#5B3EAE",
    fontSize: 16,
    fontWeight: 500,
    textAlign: "center",
    fontFamily: "DM-Sans-Bold",
  },
  heartContainer: {
    // borderWidth: 1,
    backgroundColor: "#C3B6F4",
    marginLeft: 20,
    height: 40,
    width: 40,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  heart: {
    // flex: 1,
    color: "white",
  },
  modalView: {
    backgroundColor: "white",
    width: "80%",
    height: "80%",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 50, 0.4)",
  },
  modalTitle: {
    fontFamily: "Solway-ExtraBold",
    fontSize: 24,
    marginBottom: 10,
  },
  modalContent: {
    fontSize: 16,
    fontFamily: "DM-Sans-Regular",
  },
  confirmText: {
    borderTopWidth: 1,
    borderTopColor: "#E9EBFC",
    fontWeight: 500,
    marginBottom: 10,
    paddingTop: 5,
    color: "#5B3EAE",
  },
  noButton: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#5B3EAE",
    borderRadius: 25,
    height: 40,
    width: 100,
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
