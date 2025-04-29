import React from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import styles from './styleSliders/stylesTempo';

const TempoSlider: React.FC<{ tempo: number, setTempo: (value: number) => void }> = ({ tempo, setTempo }) => {
  return (
    <View style={styles.sliderContainer}>
      <Text>Tempo</Text>
      <Slider
        style={styles.slider}
        minimumValue={0.5}
        maximumValue={50000}
        value={tempo}
        onValueChange={setTempo}
        step={1}
      />
    </View>
  );
};

export default TempoSlider;
