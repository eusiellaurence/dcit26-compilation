import React from 'react';
import {
    createStackNavigator
} from '@react-navigation/stack';

import Home from '../screens/Home';
import Profile from '../screens/Profile';

const Stack = createStackNavigator();

import {Image} from 'react-native';

const IconAbout = () => {
  return(
    <Image source={require('../assets/heart.gif')}
      style={{ width: 40, height: 40, marginLeft: 15 }}
    />
  )
}

const HomeStack = () => {
    return(
        <Stack.Navigator>
          <Stack.Screen name = "Home" component = {Home}
          options={{
            headerStyle: {
              backgroundColor: 'gray', 
            },
            headerTintColor: 'black', 
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
            headerLeft: props => <IconAbout />
      
  }}
          />
          <Stack.Screen name = "Profile" component = {Profile}/>
        </Stack.Navigator>
    );
}

export default HomeStack;