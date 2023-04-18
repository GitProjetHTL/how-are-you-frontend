import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
  StatusBar, 
  Modal
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {Calendar, CalendarList, Agenda, LocaleConfig, HorizontalCalendar} from 'react-native-calendars';
import { useState, useEffect } from 'react'
import { Card } from 'react-native-paper';
import { useSelector } from "react-redux";

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
}

export default function SuiviScreen({ navigation }) {
  const user = useSelector(state => state.user.value)
  const [historique, setHistorique] = useState([]); 
  const [emotions, setEmotions] = useState([]); 
  const [items, setItems] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  
  useEffect(() => {
    fetch(`https://howareyouapp-backend.vercel.app/users/historique/${user.token}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('historique' , data)
        data.result && setHistorique(data.historique)
      });

  }, []);


  const loadItems = (day) => {
    setTimeout(() => {
      const newItems = {};
  
      // boucle sur chaque élément de l'historique pour récupérer les émotions correspondantes
      historique.forEach((data) => {
        fetch(`https://howareyouapp-backend.vercel.app/users/emotion/${data.emotion}`)
          .then((response) => response.json())
          .then((emotionData) => {
            console.log('emotionData', emotionData.data)
            if (emotionData.result) {
              const strTime = data.date.substring(0, 10);
              setEmotions(emotionData.data)
              if (!newItems[strTime]) {
                newItems[strTime] = [];
              }
              let name = emotionData.data.emotionName
              // const image = <Image source={require({uri: emotionData.data.imageUrl})}/>; 
              newItems[strTime].push({
                // image: image,
                name: 'Emotion du jour :'+ ' ' + name + ' 🔎',
                day: strTime
              });
            }
          });
      });
  
      // met à jour l'état des articles
      setItems(newItems);
    }, 1000);
  };

console.log('items => ', items)

const renderItem = (items) => {
  // console.log(item)
  return (
      <TouchableOpacity style={styles.item}
      onPress={() => {
          setModalVisible(true)
      }}>
          <Card>
              <Card.Content>
                  <View>
                      <Text>{items.name}</Text>
                  </View>
              </Card.Content>
          </Card>
      </TouchableOpacity>
  );
}
console.log(emotions)
  return (
    <SafeAreaView style={styles.container}>
       <Modal visible={modalVisible} animationType="fade" transparent>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
              <Text style={styles.modalTitle}>{emotions.emotionName}</Text>
              {/* <Image source={require(`../assets/emotion-${emotions.emotionName}.png`)}/> */}
              <Text style={styles.confirmText}>{emotions.description}</Text>
                  <View style={styles.modalFooter}>
                    <TouchableOpacity style={styles.noButton} onPress={() => setModalVisible(false)}>
                        <Text style={styles.saveText}>Fermer</Text>
                    </ TouchableOpacity>
                  </View>
              </View>  
            </View>
        </Modal> 
      <View style={styles.topContainer}>
        <TouchableOpacity
          style={styles.arrow}
          onPress={() => navigation.navigate("TabNavigator")}
        >
          <FontAwesome
            name="long-arrow-left"
            size={20}
            className={styles.like}
          />
        </TouchableOpacity>
        <Text style={styles.textHeader}>Mon suivi</Text>
      </View>

      <Agenda
          items={items}
          loadItemsForMonth={loadItems}
          selected={new Date().toDateString()}
          refreshControl={null}
          showClosingKnob={true}
          refreshing={false}
          renderItem={renderItem}
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
          }}/>

        <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#C3B6F4",
    height: "10%",
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  arrow: {
    padding: "5%",
  },
  textHeader: {
    fontSize: 20,
    fontFamily: "DM-Sans-Bold",
  },
  calendar: {
    flexDirection: "row",
    height: 80,
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
  },
  date: {
    height: 40,
    width: 40,
    backgroundColor: "#E9EBFC",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  jour: {
    color: "#252525",
    textAlign: 'center',
    marginTop: 1,
    fontFamily: "DM-Sans-Regular",
  },
  day: {
    alignItems: "center",
    color: "#252525",
    fontFamily: "DM-Sans-Regular",
  },
  journalContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: "#E9EBFC",
  },
  humeurContainer: {
    width: "90%",
    borderRadius: 20,
    marginTop: 15,
    padding: 10,
    alignItems: "center",
    backgroundColor: "white",
  },
  humeurText: {
    textAlign: "center",
    fontFamily: "Solway-Bold",
    fontSize: 25,
    marginBottom: 15,
  },
  humeurImg: {
    width: 120,
    objectFit: "contain",
    marginBottom: 15,
  },
  inputContainer: {
    position: "relative",
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: "5%",
    width: "90%",
    borderColor: "#5B3EAE",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,

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
  whyText: {
    padding: 10,
    paddingTop: 20,
    fontFamily: "DM-Sans-Regular",
  },
  item: {
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
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

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 50, 0.4)',
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
  }
});
