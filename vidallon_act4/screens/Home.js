//Vidallon, Eusiel Laurence F.     BSCS3-2


import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    ImageBackground
} from 'react-native';

const Home = ({navigation}) => {
    return(
      <ImageBackground 
          source={require('../assets/portal1.gif')} style={{ flex: 1}}>
           <View style={styles.container}>
            <Button title = "Profile" onPress = {()=>navigation.navigate('Profile')} />
           </View>
           </ImageBackground>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});