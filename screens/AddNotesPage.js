import { StyleSheet, Text, View, Button } from "react-native";
import AddNote from "../components/AddNote";
import { LinearGradient } from "expo-linear-gradient";

function AddNotesPage() {
  return (
    <LinearGradient colors={["#4A90E2", "#50C9CE"]} style={styles.background}>
      <View>
        <AddNote />
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
});
