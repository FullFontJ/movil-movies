import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//compones
import ListMovies from './Componet/ListMovies';
import Searapp from './Componet/SearchMovie';

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

<Stack.Screen name="Details" component={DetailsScreen} />

    </Tab.Navigator>
  );
}
function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}



export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
      {/* <Stack.Navigator >
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator> */}
    </NavigationContainer>
  );
}
