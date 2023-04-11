import { Button, StyleSheet, Text, View } from "react-native";

export default function CguScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>CGU Screen</Text>
      <Button
        title="suivant"
        onPress={() => navigation.navigate("TabNavigator")}
      />
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
