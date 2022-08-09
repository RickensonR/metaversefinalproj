import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons';

import Personal from './screens/Personal';
import News from './screens/News';
import World from './screens/World';

import DATA from './data/PostData';

export default function App() {

  const BottomTab = createBottomTabNavigator();

  return (
    
    <SafeAreaProvider> 
      <NavigationContainer>
        <BottomTab.Navigator // component with props below
          initialRouteName='Account' 

          screenOptions={({ route }) => ({

            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Account') { //
              return <MaterialCommunityIcons name="account-circle" size={30} color={color} />
            } else if (route.name === 'Worlds') {
              return <MaterialCommunityIcons name="earth" size={30} color={color} />
            }else if (route.name === "Messages") {
              return <MaterialCommunityIcons name = "note-edit" size = {30} color = {color} />
            }else if (route.name === "News") {
              return <MaterialCommunityIcons name = "newspaper-check" size = {30} color = {color} />
            }

          },
            tabBarActiveTintColor: "#aa7bb3",
            tabBarInactiveTintColor: 'black',
            headerShown: false
        })}
      >
          {/* component with props listed inline */}
          <BottomTab.Screen name="Account" component={Personal}  />
          <BottomTab.Screen  name="News"  children={()=><News data={DATA.froshData}/>}/> 
          <BottomTab.Screen name="Worlds"  children={()=><World data={DATA.testData}/>} />
          {/* <BottomTab.Screen name="Messages" component={Personal} />
          */}
        </BottomTab.Navigator>
        

      </NavigationContainer>
    </SafeAreaProvider>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
