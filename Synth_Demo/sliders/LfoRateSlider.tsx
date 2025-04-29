import React from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import styles from './styleSliders/stylesLfoRateSlider';

const LfoRateSlider: React.FC<{ lfoRate: number, setLfoRate: (value: number) => void }> = ({ lfoRate, setLfoRate }) => {
  return (
    <View style={styles.sliderContainer}>
      <Text>LFO Rate</Text>
      <Slider
              style={styles.slider}
        minimumValue={0}
        maximumValue={10} // Valor máximo recomendado
        value={lfoRate}
        onValueChange={setLfoRate}
        step={0.1} // Paso recomendado
      />
    </View>
  );
};

export default LfoRateSlider;
