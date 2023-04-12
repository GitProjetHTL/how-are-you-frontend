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
    container: {
      flex: 1,
      backgroundColor:"red",
    },
})