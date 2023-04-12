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
  return (
    <>
      <View style={styles.cards}>
        <Text style={styles.titleCard}>Anxieté</Text>

        <Text style={styles.contentCard}>
          {" "}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, et
          animi repudiandae magni neque voluptatem. ... Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Laboriosam sequi sed tempore, porro
          neque qui nulla modi obcaecati vero ipsum doloremque, aliquam
          explicabo necessitatibus, expedita harum ipsa. Sed, eum nesciunt alias
          error dolorem exercitationem vitae enim sapiente, praesentium, beatae
          ipsam numquam dignissimos accusamus ratione sunt laboriosam at
          adipisci! Consequuntur voluptatum, recusandae quod aspernatur, totam,
          libero dolorem nostrum nam quisquam nulla nihil. Consectetur quod
          reprehenderit rem quisquam non quis saepe ad repellat, architecto eius
          cumque illum totam consequuntur. Aperiam consectetur accusantium,
          voluptas quod libero animi? Neque tempora libero eaque fuga quod
          molestiae adipisci obcaecati reiciendis, dolore, natus animi cum. Quia
          sit dolores eius minima tempora sunt repellendus necessitatibus
          nostrum, rerum in. Sed ea totam, itaque ipsum earum eligendi tenetur
          quam! Laboriosam et ab doloremque obcaecati, autem enim facere ea quas
          reiciendis inventore explicabo exercitationem maiores alias saepe
          eveniet odio velit nostrum qui ullam molestiae iure aliquam vitae
          quibusdam architecto. Iste, corrupti!
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
  cards: {
    backgroundColor: "white",
    borderRadius: 25,
    marginVertical: 15,
    padding: 10,
    width: "90%",
    height: 200,
  },
  titleCard: {
    fontFamily: "Solway-Bold",
    fontSize: 24,
  },
  contentCard: {
    // borderWidth: 1,
    paddingTop: 2,
    width: "100%",
    height: 95,
    fontSize: 16,
  },
  btnContainer: {
    // borderWidth: 1,
    height: 55,
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
