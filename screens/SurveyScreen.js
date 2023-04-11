import { Button, StyleSheet, Text, View } from "react-native";

export default function SurveyScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Survey Screen</Text>
      <Button title="suivant" onPress={() => navigation.navigate("CGU")} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
