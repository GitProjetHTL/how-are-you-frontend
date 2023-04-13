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

  console.log(props)
  
  return (
    <>
      <View style={styles.cards}>
        <Text style={styles.titleCard}>{props.name}</Text>

        <Text style={styles.contentCard}>
          {" "}
          {props.content}
        </Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.moreButton}>
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
    container: {
      flex: 1,
      backgroundColor:"red",
    },
})