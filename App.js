import { StatusBar } from "expo-status-bar";
import { Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AddNotesPage from "./screens/AddNotesPage";
import NotesPage from "./screens/NotesPage";
import Welcome from "./screens/Welcome";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen
            name="Home"
            component={Welcome}
            options={{
              title: "Home",
              drawerLabel: "Home",
              headerShown: true,
              drawerIcon: ({ color, size }) => (
                <MaterialIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Drawer.Screen
            name="AddNotesPage"
            component={AddNotesPage}
            options={{
              title: "Add Notes",
              drawerLabel: "Add Notes",
              headerShown: true,
              drawerIcon: ({ color, size }) => (
                <MaterialIcons name="note-add" color={color} size={size} />
              ),
            }}
          />
          <Drawer.Screen
            name="NotesPage"
            component={NotesPage}
            options={({ navigation }) => ({
              title: "Notes",
              drawerLabel: "Notes",
              headerShown: true,
              drawerIcon: ({ color, size }) => (
                <MaterialIcons name="notes" color={color} size={size} />
              ),
              headerRight: () => (
                <Pressable
                  style={{ marginRight: 15 }}
                  onPress={() => navigation.navigate("AddNotesPage")}
                >
                  <MaterialIcons name="note-add" size={28} color="#2561a6" />
                </Pressable>
              ),
            })}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}
