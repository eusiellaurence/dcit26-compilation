import React from 'react';
import {
    createStackNavigator
} from '@react-navigation/stack';

import {Image} from 'react-native';

import About from '../screens/About';

const Stack = createStackNavigator();

const IconAbout = () => {
  return(
    <Image source={require('../assets/heart.gif')}
      style={{ width: 40, height: 40, marginLeft: 15 }}
    />
  )
}

const AboutStack = () => {
    return(
        <Stack.Navigator>
          <Stack.Screen name = "About" component = {About}
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
        </Stack.Navigator>
    );
}

export default AboutStack;