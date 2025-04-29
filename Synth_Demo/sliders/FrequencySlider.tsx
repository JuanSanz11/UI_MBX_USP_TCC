import React from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import styles from './styleSliders/stylesFrequencySlider';

const FrequencySlider: React.FC<{ frequency: number, setFrequency: (value: number) => void }> = ({ frequency, setFrequency }) => {
  return (
    <View style={styles.sliderContainer}>
      <Text>Frequency</Text>
      <Slider
        style={styles.slider} //tamano slider
        minimumValue={0.5}
        maximumValue={5}
        value={frequency}
        onValueChange={setFrequency}
        step={0.1}
      />
    </View>
  );
};

export default FrequencySlider;
