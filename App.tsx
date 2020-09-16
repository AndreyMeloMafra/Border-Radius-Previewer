import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Slider from '@react-native-community/slider';
import { ItemToEdit } from './src/styles';

export default function App() {

  const [topL, setTopL] = useState<number>(0);
  const [topR, setTopR] = useState<number>(0);
  const [botL, setBotL] = useState<number>(0);
  const [botR, setBotR] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Slider
        style={{ width: 150, height: 40 }}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#202020"
        maximumTrackTintColor="#000000"
        value={topR}
        inverted
        onValueChange={(value: any) => setTopR(value)}
      />
      <View style={styles.adjusts}>
        <Slider
          style={{ width: 150, height: 40, transform: [{ rotate: '90deg' }] }}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="#202020"
          maximumTrackTintColor="#000000"
          value={topL}
          onValueChange={(value: any) => setTopL(value)}
        />
        <ItemToEdit
          topLeft={topL}
          topRight={topR}
          bottomLeft={botL}
          bottomRight={botR}

          width={150}
          height={150}
        />
        <Slider
          style={{ width: 150, height: 40, transform: [{ rotate: '270deg' }] }}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="#202020"
          maximumTrackTintColor="#000000"
          value={botR}
          onValueChange={(value: any) => setBotR(value)}
        />
      </View>
      <Slider
        style={{ width: 150, height: 40 }}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#202020"
        maximumTrackTintColor="#000000"
        value={botL}
        onValueChange={(value: any) => setBotL(value)}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  adjusts: {
    width: '100%',
    justifyContent: "center",
    alignItems: 'center',
    flexDirection: 'row',

  },
  input: {
    width: 150,
    height: 30,
    borderWidth: 1
  }
});
