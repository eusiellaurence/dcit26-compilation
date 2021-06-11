//Vidallon, Eusiel Laurence F.     BSCS3-2


import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Button,
  ImageBackground
} from 'react-native';
import SampleModal from './components/SampleModal';

export default function App() {
  const [IsModalOpen, setIsModalOpen] = useState(false);
  return (
    <View style={styles.design}>
      <Button title="Click Here" onPress={() => setIsModalOpen(true)} />
      <SampleModal visible = {IsModalOpen} onClose = {() => setIsModalOpen(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  design: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
