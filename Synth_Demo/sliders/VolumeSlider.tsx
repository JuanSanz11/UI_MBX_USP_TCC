import React from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import styles from './styleSliders/stylesVolumeSlider';

const VolumeSlider: React.FC<{ volume: number, setVolume: (value: number) => void }> = ({ volume, setVolume }) => {
  return (
    <View style={styles.sliderContainer}>
      <Text>Volume</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={1}
        value={volume}
        onValueChange={setVolume}
        step={0.1}
      />
    </View>
  );
};

export default VolumeSlider;
