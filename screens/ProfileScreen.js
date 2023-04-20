import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Modal,
  Image,
  Dimensions,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useSelector, useDispatch } from "react-redux";
import { logout } from '../reducers/user'
import { logoutJournal } from '../reducers/journal'
import { useState } from 'react'; 

const BACKEND = "https://howareyouapp-backend.vercel.app/";

export default function ProfileScreen({ navigation }) {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

  const handleSuppress = () => {
    fetch(`${BACKEND}/users`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: user.username, token: user.token }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        navigation.navigate("SignIn");
      });
  };

  const handleDeco = () => {
    dispatch(logout())
    dispatch(logoutJournal())
    navigation.navigate('SignIn')
  }

  const handleSuppressModal = () => {
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/register2.png")}
        style={styles.image}
        resizeMode="cover"
      />
      <Modal visible={modalVisible} animationType="fade" transparent>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Tu nous quittes déjà...</Text>
            <Text style={styles.confirmText}>
              Es-tu sûr de vouloir supprimer ton compte ?
            </Text>
            <View style={styles.modalFooter}>
              <TouchableOpacity
                style={styles.noButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.saveText}>Non</Text>
                <FontAwesome name="remove" style={styles.saveIcon} size={18} />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.noButton}
                onPress={() => handleSuppress()}
              >
                <Text style={styles.saveText}>Oui</Text>
                <FontAwesome name="check" style={styles.saveIcon} size={18} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.topContainer}>
        <Text style={styles.textHeader}>Hi, {user.username} !</Text>
      </View>

      <TouchableOpacity
        style={styles.categorie}
        onPress={() => navigation.navigate("suivi")}
      >
        <View style={styles.iconView}>
          <FontAwesome name="calendar" size={20} style={styles.like} />
          <Text style={styles.text}>Mon suivi</Text>
        </View>
        <View>
          <FontAwesome name="angle-right" size={20} style={styles.like} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.categorie}
        onPress={() => navigation.navigate("fav")}
      >
        <View style={styles.iconView}>
          <FontAwesome name="heart" size={20} style={styles.like} />
          <Text style={styles.text}>Favoris</Text>
        </View>
        <View>
          <FontAwesome name="angle-right" size={20} style={styles.like} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.categorie}
        onPress={() => navigation.navigate("infos")}
      >
        <View style={styles.iconView}>
          <FontAwesome name="user-circle" size={20} style={styles.like} />
          <Text style={styles.text}>Informations personnelles</Text>
        </View>
        <View>
          <FontAwesome name="angle-right" size={20} style={styles.like} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.categorie}
        onPress={() => navigation.navigate("help")}
      >
        <View style={styles.iconView}>
          <FontAwesome name="question-circle-o" size={20} style={styles.like} />
          <Text style={styles.text}>Aide/ Numéros d'urgence</Text>
        </View>
        <View>
          <FontAwesome name="angle-right" size={20} style={styles.like} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.categorie} onPress={() => handleDeco()}>
        <View style={styles.iconView}>
          <FontAwesome name="sign-out" size={20} style={styles.like} />
          <Text style={styles.text}>Deconnexion</Text>
        </View>
        <View>
          <FontAwesome name="angle-right" size={20} style={styles.like} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.categorie}
        onPress={() => handleSuppressModal()}
      >
        <View style={styles.iconView}>
          <FontAwesome name="eraser" size={20} style={styles.like} />
          <Text style={styles.text}>Supprimer mon compte</Text>
        </View>
        <View styles={styles.arrow}>
          <FontAwesome name="angle-right" size={20} style={styles.like} />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "column",
    backgroundColor: "white",
  },
  topContainer: {
    flexDirection: "row",
    // borderWidth: 1,
    height: "15%",
  },
  textHeader: {
    fontSize: 30,
    // borderWidth: 1,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "10%",
    marginLeft: 20,
    fontFamily: "DM-Sans-Bold",
  },
  arrow: {
    // borderWidth: 1,
    width: "20%",
    padding: "5%",
    paddingTop: "15%",
  },
  categorie: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    borderColor: "#C3B6F4",
    borderBottomWidth: 0.3,
    width: "100%",
    height: "11%",
    padding: "5%",
  },
  iconView: {
    flexDirection: "row",
    alignItems: "center",
    // borderWidth: 1,
  },
  like: {
    color: "#5B3EAE",
  },
  text: {
    paddingLeft: "5%",
    width: "80%",
    fontFamily: "DM-Sans-Regular",
  },
  modalView: {
    backgroundColor: "white",
    width: "80%",
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
    fontSize: 20,
    marginBottom: 20,
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
  },
  image: {
    width: Dimensions.get("window").width,
    height: "17%",
  },
});
