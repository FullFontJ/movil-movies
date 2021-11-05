import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//compones
import ListMovies from './Componet/ListMovies';
import Searapp from './Componet/SearchMovie';

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
      <ListMovies ></ListMovies> 
  );
}

function SettingsScreen() {
  return (
    <Searapp></Searapp>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: "#34495E",
        tabBarInactiveBackgroundColor: "#0C0201",
        tabBarActiveTintColor: "#F2F3F4",
      }}
    >

      <Tab.Screen 
      name="Inicio" 
      component={HomeScreen} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
      />

      <Tab.Screen 
      name="Buscar" 
      component={SettingsScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="movie-search-outline" size={size} color={color} />
        ),
      }}
      />


    </Tab.Navigator>
  );
}




export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
