import React from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import styles from './styleSliders/stylesLfoAmplitudeSlider';

const LfoAmplitudeSlider: React.FC<{ lfoAmplitude: number, setLfoAmplitude: (value: number) => void }> = ({ lfoAmplitude, setLfoAmplitude }) => {
  return (
    <View style={styles.sliderContainer}>
      <Text>LFO Depth</Text>
      <Slider
              style={styles.slider}
        minimumValue={0}
        maximumValue={0.5} // Valor máximo recomendado
        value={lfoAmplitude}
        onValueChange={setLfoAmplitude}
        step={0.01} // Paso recomendado
      />
    </View>
  );
};

export default LfoAmplitudeSlider;
