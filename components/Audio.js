// Audio component
// Cards component
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    SafeAreaView,
    ScrollView,
  } from "react-native";
  import FontAwesome from "react-native-vector-icons/FontAwesome";
  
  export default function Cards(props) {
    
    // console.log(props)

    let videoLink =()=> {
      props.source
    }
     
    return (
      <>
        <View style={styles.cards}>
          <Image
                style={styles.image}
                source={{uri: props.image}}
            />
          <Text style={styles.titleCard}>{props.name}</Text>
  
          <Text style={styles.contentCard}>
            {" "}
            {props.content}
          </Text>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.moreButton} onPress={()=>videoLink()}>
              <Text style={styles.moreText}>Voir plus</Text>
            </TouchableOpacity>
            <View style={styles.heartContainer}>
              <FontAwesome name="heart" size={20} style={styles.heart} />
            </View>
          </View>
        </View>
      </>
    );
  }
  
   const styles = StyleSheet.create({
    cards: {
      backgroundColor: "white",
      borderRadius: 25,
      marginVertical: 15,
      padding: 10,
      width: "90%",
      height: 550,
      marginHorizontal:'5%',
    },
    titleCard: {
      fontFamily: "Solway-Bold",
      fontSize: 24,
      width: "100%",
      height: "20%",
      justifyContent:"center",
    },

    image: {
        width: "100%",
        height: "50%",
        borderRadius:10
    },
    contentCard: {
      // borderWidth: 1,
      
      paddingTop: 2,
      width: "100%",
      height: "14%",
      fontSize: 16,
    },
    btnContainer: {
      // borderWidth: 1,
      height: "15%",
      alignItems: "center",
      flexDirection: "row",
    },
    moreButton: {
      // backgroundColor: "#5B3EAE",
      borderColor: "#5B3EAE",
      borderWidth: 1,
      borderRadius: 25,
      height: 40,
      width: "50%",
      marginBottom: 5,
  
      // paddingTop: 5,
      alignItems: "center",
      justifyContent: "center",
    },
    moreText: {
      color: "#5B3EAE",
      fontSize: 16,
      fontWeight: 500,
      textAlign: "center",
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
  });
  