import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    ImageBackground
} from 'react-native';

const Profile = ({navigation}) => {
    return(
          <ImageBackground 
          source={require('../assets/anime2.gif')} style={{ flex: 1}}>
           <View style={styles.container}>
            <Button title = "About" onPress = {()=>navigation.navigate('About')} />
           </View>
          </ImageBackground>
    );
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});