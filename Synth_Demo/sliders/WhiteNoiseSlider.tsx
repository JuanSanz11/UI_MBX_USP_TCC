import React from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import styles from './styleSliders/stylesWhiteNoiseSlider';

const WhiteNoiseSlider: React.FC<{ whiteNoiseLevel: number, setWhiteNoiseLevel: (value: number) => void }> = ({ whiteNoiseLevel, setWhiteNoiseLevel }) => {
  return (
    <View style={styles.sliderContainer}>
      <Text>White Noise: {Math.round(whiteNoiseLevel * 10)}%</Text>
      <Slider
        style={[styles.slider]}
        minimumValue={0}
        maximumValue={0.00001}
        value={whiteNoiseLevel}
        onValueChange={setWhiteNoiseLevel}
        step={0.00000001}
      />
    </View>
  );
};

export default WhiteNoiseSlider;
