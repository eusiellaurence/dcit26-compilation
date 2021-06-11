import React, { useState } from 'react';
import {
  Button,
  Modal,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';

const SampleModal = (props) => {
  return (
    <View>
      <Modal visible={props.visible} animationType="slide">
        <Button title="Close" onPress={props.onClose} />
        <ScrollView>
          <Image style = {styles.jojo} source = {require('./Jojo-icon.png')}/>
          <Text style={styles.text}>
            JoJo's Bizarre Adventure Japanese: ジョジョの奇妙な冒険, Hepburn:
            JoJo no Kimyō na Bōken is a Japanese manga series written and
            illustrated by Hirohiko Araki. It was originally serialized in
            Shueisha's Weekly Shōnen Jump magazine from 1987 to 2004, and was
            transferred to the monthly seinen magazine Ultra Jump in 2005. The
            series is divided into eight story arcs, each following a new
            protagonist bearing the "JoJo" nickname; the eighth part, JoJolion,
            began its ongoing serialization in May 2011. JoJo's Bizarre
            Adventure is Shueisha's largest ongoing manga series by volume
            count, with its chapters collected in 129 tankōbon volumes as of
            December 2020. {'\n\n'}A 13-episode original video animation series
            adapting the manga's third part, Stardust Crusaders, was produced by
            A.P.P.P. and released from 1993 to 2002. The studio later produced
            an anime film adapting the first part, Phantom Blood, which was
            released in theaters in Japan in 2007. In October 2012, an anime
            television series produced by David Production adapting Phantom
            Blood and Battle Tendency began broadcast on Tokyo MX. As of July
            2019, the studio has produced four seasons adapting through the
            manga's fifth part, Golden Wind. A live-action film based on the
            fourth part, Diamond Is Unbreakable, was released in Japan in 2017.{' '}
            {'\n\n'}
            JoJo's Bizarre Adventure is well-known for its iconic art style and
            poses, frequent references to Western popular music and fashion, and
            creative battles centered around Stands, psycho-spiritual
            manifestations with unique supernatural abilities. The series has
            sold over 100 million copies in print to date, making it one of the
            best-selling manga series in history, and it has spawned a media
            franchise including one-shot manga, light novels, and video games.
            The manga, TV anime, and live-action film are licensed in North
            America by Viz Media, which has produced various English-language
            releases of the series since 2005.
          </Text>
        </ScrollView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'justify',
    fontSize: 15
  },
  jojo: {
    alignSelf: 'center',
    width: 250,
    height: 100,
  },
});

export default SampleModal;
