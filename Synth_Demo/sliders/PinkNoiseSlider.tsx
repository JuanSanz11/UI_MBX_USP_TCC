import React from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import styles from './styleSliders/stylesPinkNoiseSlider';

const PinkNoiseSlider: React.FC<{ pinkNoiseLevel: number, setPinkNoiseLevel: (value: number) => void }> = ({ pinkNoiseLevel, setPinkNoiseLevel }) => {
  return (
    <View style={styles.sliderContainer}>
      <Text>Pink Noise: {Math.round(pinkNoiseLevel * 100)}%</Text>
      <Slider
              style={styles.slider}
        minimumValue={0}
        maximumValue={0.01}
        value={pinkNoiseLevel}
        onValueChange={setPinkNoiseLevel}
        step={0.001}
      />
    </View>
  );
};

export default PinkNoiseSlider;
