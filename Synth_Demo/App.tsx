import React, { useState } from 'react';
import { View } from 'react-native';
import PianoKeyboard from './PianoKeyboard';
import styles from './styles';
import VolumeSlider from './sliders/VolumeSlider';
import LfoAmplitudeSlider from './sliders/LfoAmplitudeSlider';
import LfoRateSlider from './sliders/LfoRateSlider';
import WhiteNoiseSlider from './sliders/WhiteNoiseSlider';
import PinkNoiseSlider from './sliders/PinkNoiseSlider';


  const App: React.FC = () => { 
  const [volume, setVolume] = useState<number>(0.7); // Valor inicial del volumen (0-1)
  const [frequency, setFrequency] = useState<number>(440); // Frecuencia base en Hz
  const [lfoAmplitude, setLfoAmplitude] = useState<number>(0.5); // Amplitud del LFO (0-1)
  const [lfoRate, setLfoRate] = useState<number>(1); // Tasa del LFO en Hz
  const [tempo, setTempo] = useState<number>(120); // Tempo en BPM
  const [whiteNoiseLevel, setWhiteNoiseLevel] = useState<number>(0.5); // Nivel de ruido blanco (0-1)
  const [pinkNoiseLevel, setPinkNoiseLevel] = useState<number>(0.5); // Nivel de ruido rosa (0-1)


  
  return (
    <View style={styles.container}>
      <PianoKeyboard 
        volume={volume} 
        frequency={frequency} 
        lfoAmplitude={lfoAmplitude} 
        lfoRate={lfoRate}
        tempo={tempo}
        initialTempo={tempo}
      />
      
      <VolumeSlider volume={volume} setVolume={setVolume} />
      <LfoAmplitudeSlider lfoAmplitude={lfoAmplitude} setLfoAmplitude={setLfoAmplitude} />
      <LfoRateSlider lfoRate={lfoRate} setLfoRate={setLfoRate} />
      {/* Sliders de ruido blanco y rosa */}
    <WhiteNoiseSlider whiteNoiseLevel={whiteNoiseLevel} setWhiteNoiseLevel={setWhiteNoiseLevel} />
    <PinkNoiseSlider pinkNoiseLevel={pinkNoiseLevel} setPinkNoiseLevel={setPinkNoiseLevel} />
      
    </View>
  );
};

export default App;