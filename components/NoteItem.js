import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function NoteItem({ id, title, body, onDelete }) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.body}>{body}</Text>
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.iconContainer,
          pressed && { opacity: 0.6 },
        ]}
        onPress={() => onDelete(id)}
      >
        <MaterialIcons name="delete" size={30} color="#2561a6" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 3,
  },
  body: {
    fontSize: 14,
    color: "#333",
  },
  iconContainer: {
    padding: 6,
    borderRadius: 6,
  },
});
