import * as React from 'react';
import { Button, View, Text, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
     

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <TouchableHighlight onPress={() => navigation.navigate('Details')}>
      <Text>Home Screen</Text>
      </TouchableHighlight>

    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Details" component={DetailsScreen} />
    </Tab.Navigator>
   
      
        
    </NavigationContainer>
  );
}

export default App;