import React from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import styles from './styleSliders/stylesReverbSlider';


const ReverbSlider: React.FC<{ reverb: number, setReverb: (value: number) => void }> = ({ reverb, setReverb }) => {
  return (
    <View style={styles.sliderContainer}>
      <Text>Reverb</Text>
      <Slider
        style={[styles.slider]}
        minimumValue={0}
        maximumValue={1}
        value={reverb}
        onValueChange={setReverbValue => setReverb(setReverbValue)}
        step={0.1}
      />
    </View>
  );
};

export default ReverbSlider;
