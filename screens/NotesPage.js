import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NoteItem from "../components/NoteItem";
import { useIsFocused } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

function NotesPage() {
  const [notes, setNotes] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    const loadNotes = async () => {
      const existingNotes = await AsyncStorage.getItem("notes");
      setNotes(existingNotes ? JSON.parse(existingNotes) : []);
    };
    loadNotes();
  }, [isFocused]);

  const deleteNote = async (id) => {
    const existingNotes = await AsyncStorage.getItem("notes");
    const notes = existingNotes ? JSON.parse(existingNotes) : [];
    const filtered = notes.filter((note) => note.id !== id);
    await AsyncStorage.setItem("notes", JSON.stringify(filtered));
    setNotes(filtered);
  };

  return (
    <LinearGradient colors={["#4A90E2", "#50C9CE"]} style={styles.background}>
      <View style={{ flex: 1, padding: 20 }}>
        <FlatList
          data={notes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <NoteItem
              id={item.id}
              title={item.title}
              body={item.body}
              onDelete={deleteNote}
            />
          )}
        />
      </View>
    </LinearGradient>
  );
}

export default NotesPage;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});
