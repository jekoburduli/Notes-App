import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function AddNote() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigation = useNavigation();

  const saveNote = async () => {
    if (!title.trim() || !body.trim()) {
      Alert.alert("Error", "Please enter both title and note.");
      return;
    }

    try {
      const existingNotes = await AsyncStorage.getItem("notes");
      const notes = existingNotes ? JSON.parse(existingNotes) : [];

      const newNote = {
        id: Date.now().toString(),
        title,
        body,
      };

      notes.push(newNote);
      await AsyncStorage.setItem("notes", JSON.stringify(notes));
      Alert.alert("Success", "Note saved!");

      setTitle("");
      setBody("");
    } catch (error) {
      console.log("Error saving note:", error);
      Alert.alert("Error", "Could not save the note.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add a New Note</Text>

      <TextInput
        style={styles.titleInput}
        placeholder="Note Title..."
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={styles.input}
        placeholder="Type your note..."
        multiline
        value={body}
        onChangeText={setBody}
      />

      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        onPress={saveNote}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed, ,]}
        onPress={() => navigation.navigate("NotesPage")}
      >
        <Text style={styles.buttonText}>View All Notes</Text>
      </Pressable>
    </View>
  );
}

export default AddNote;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    margin: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },

  header: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 20,

    alignItems: "center",
    justifyContent: "center",
  },
  titleInput: {
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 8,
    padding: 12,
    fontSize: 18,
    marginBottom: 15,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    height: 150,
    textAlignVertical: "top",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#4A90E2",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  pressed: {
    backgroundColor: "#1d4a80",
  },
});
