import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    ImageBackground
} from 'react-native';

const About = ({navigation}) => {
    return(
      <ImageBackground 
          source={require('../assets/anime1.gif')} style={{ flex: 1}}>
           <View style={styles.container}>
            <Button title = "Back" onPress = {()=>navigation.goBack()} />
           </View>
           </ImageBackground>

    );
}

export default About;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});