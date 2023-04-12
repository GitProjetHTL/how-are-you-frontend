// Cards component 
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    SafeAreaView,
  } from "react-native";

export default function Cards(props) {

    return (
    <>
        <View style={styles.container}>
            <Text>{props.name}</Text>
        </View>
      </>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"red",
      width:200,
      height:200
    },
})