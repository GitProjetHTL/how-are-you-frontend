import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  RefreshControl,
  ScrollView,
  SafeAreaView,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Cards from "../components/Cards";
import { useEffect, useState, useCallback} from "react";
import { useSelector } from 'react-redux'

export default function FavorisScreen({ navigation }) {

  const [allFavCard, setAllFavCard] = useState([]);
  const user = useSelector(state => state.user.value)
  console.log(user.userId)

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  useEffect(() => {
    fetch(`https://howareyouapp-backend.vercel.app/cards/all/${user.token}/liked-by/${user.userId}`)
      .then(response => response.json())
      .then(data => {
         console.log('data', data)
         data.result && setAllFavCard(data.data)
        // const cards= allCards.data.map((oneCard, i) => {
        //   return (
        //   <Cards
        //     key={i}
        //     id={oneCard._id}
        //     name={oneCard.name}
        //     content={oneCard.content}
        //     source={oneCard.source}
        //   />)});
      });
    }, [refreshing]);

    const favCards = allFavCard.map((data, i) => {
      return (
      <Cards key={i} {...data}/>)});



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity
          style={styles.arrow}
          onPress={() => navigation.navigate("TabNavigator")}
        >
          <FontAwesome name="long-arrow-left" size={20}/>
        </TouchableOpacity>
        <Text style={styles.textHeader}>Mes favoris</Text>
      </View>
      <ScrollView style={styles.favContainer}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
        {favCards}
      </ScrollView>
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
  like: { color: "#5B3EAE" },
  textHeader: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "DM-Sans-Bold",
  },
  favContainer: {
    // alignItems: "center",
    // borderWidth: 1,
    witdh: "100%",
    height: "80%",
    backgroundColor: "#E9EBFC",
  },
});
