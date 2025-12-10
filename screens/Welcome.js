import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

function AddNotesPage() {
  const navigation = useNavigation();

  return (
    <LinearGradient colors={["#4A90E2", "#50C9CE"]} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.header}>Press button to start taking notes</Text>

        <Pressable
          style={({ pressed }) => [styles.button, pressed && styles.pressed]}
          onPress={() => navigation.navigate("AddNotesPage")}
        >
          <Text style={styles.buttonText}>Go to Add Notes</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
}

export default AddNotesPage;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 10,
  },
  container: {
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "700",
    color: "#ffffffff",
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#4A90E2",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  pressed: {
    backgroundColor: "#1d4a80",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
