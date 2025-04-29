import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import { Asset } from 'expo-asset';
import styles from './styles';
import VolumeSlider from './sliders/VolumeSlider';
import FrequencySlider from './sliders/FrequencySlider';
import LfoAmplitudeSlider from './sliders/LfoAmplitudeSlider';
import LfoRateSlider from './sliders/LfoRateSlider';
import PinkNoiseSlider from './sliders/PinkNoiseSlider';
import WhiteNoiseSlider from './sliders/WhiteNoiseSlider';

interface Key {
  label: string;
  type: 'natural' | 'sharp';
  sound: any; 
}

interface PianoKeyboardProps {
  volume: number;
  frequency: number;
  lfoAmplitude: number;
  lfoRate: number;
  tempo: number;
  initialTempo: number;
}

const PianoKeyboard: React.FC<PianoKeyboardProps> = ({ 
  volume, 
  frequency: initialFrequency, 
  initialTempo,

}) => {
  const [internalVolume, setInternalVolume] = useState<number>(1.0);
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [frequency, setFrequency] = useState<number>(initialFrequency);
  const [pressedKey, setPressedKey] = useState<string | null>(null);
  const [lfoInterval, setLfoInterval] = useState<NodeJS.Timeout | null>(null);
  const [lfoAmplitude, setLfoAmplitude] = useState<number>(0);
  const [lfoRate, setLfoRate] = useState<number>(0.5);
  const [tempo, setTempo] = useState<number>(initialTempo);
  const [whiteNoiseLevel, setWhiteNoiseLevel] = useState<number>(0); // Nivel de ruido blanco (0-1)
  const [pinkNoiseLevel, setPinkNoiseLevel] = useState<number>(0); // Nivel de ruido rosa (0-1)

  
 // Estados para ruido blanco y rosa
 const [whiteNoise, setWhiteNoise] = useState<Audio.Sound | null>(null);
 const [pinkNoise, setPinkNoise] = useState<Audio.Sound | null>(null);
 const [loadedSounds, setLoadedSounds] = useState<{ [key: string]: Audio.Sound }>({});

 useEffect(() => {
   const loadAllSounds = async () => {
     const soundsMap: { [key: string]: Audio.Sound } = {};
 
     for (const key of keys) {
       const soundAsset = Asset.fromModule(key.sound);
       await soundAsset.downloadAsync();
 
       const { sound } = await Audio.Sound.createAsync({ uri: soundAsset.localUri || soundAsset.uri });
       soundsMap[key.label] = sound;
     }
 
     setLoadedSounds(soundsMap);
   };
 
   loadAllSounds();
 }, []);

  const noiseSounds = {
    white: require('./sounds/noise/white.mp3'),
    pink: require('./sounds/noise/pink.mp3')
  };

  const [reverbSound, setReverbSound] = useState<Audio.Sound | null>(null);
const [reverbVolume, setReverbVolume] = useState<number>(1.0);


  const keys: Key[] = [
    { label: 'B', type: 'natural', sound: require('./sounds/B.mp3') },
    { label: 'A#', type: 'sharp', sound: require('./sounds/Asharp.mp3') },
    { label: 'A', type: 'natural', sound: require('./sounds/A.mp3') },
    { label: 'G#', type: 'sharp', sound: require('./sounds/Gsharp.mp3') },
    { label: 'G', type: 'natural', sound: require('./sounds/G.mp3') },
    { label: 'F', type: 'natural', sound: require('./sounds/F.mp3') },
    { label: 'F#', type: 'sharp', sound: require('./sounds/Fsharp.mp3') },
    { label: 'E', type: 'natural', sound: require('./sounds/E.mp3') },
    { label: 'D#', type: 'sharp', sound: require('./sounds/Dsharp.mp3') },
    { label: 'D', type: 'natural', sound: require('./sounds/D.mp3') },
    { label: 'C#', type: 'sharp', sound: require('./sounds/Csharp.mp3') },
    { label: 'C', type: 'natural', sound: require('./sounds/C.mp3') },
  ];


  useEffect(() => {
    const loadSound = async () => {
      if (pressedKey) {
        const soundKey = keys.find(key => key.label === pressedKey);
        if (soundKey) {
          const soundAsset = Asset.fromModule(soundKey.sound);
          await soundAsset.downloadAsync();
  
          const soundUri = soundAsset.localUri || soundAsset.uri;
          console.log("soundUri: ", soundUri);
  
          try {
            const { sound } = await Audio.Sound.createAsync({ uri: soundUri });
            await sound.setStatusAsync({
              volume: internalVolume * volume,
              rate: frequency,
              shouldCorrectPitch: true,
              isLooping: false,
            });
            setSound(sound);
            console.log("Sound loaded successfully");

            if (lfoRate !== 0 && lfoAmplitude !== 0) {
              if (lfoInterval) {
                clearInterval(lfoInterval);
              }
              const interval = setInterval(() => {
                if (sound) {
                  const lfoValue = lfoAmplitude * Math.sin(lfoRate * Date.now() / 1000);
                  sound.setRateAsync(frequency + lfoValue, true);
                }
              }, 500);
              setLfoInterval(interval);
            }

          } catch (error) {
            console.error("Error loading sound:", error);
          }
        }
      }
    };
  
    loadSound();
  
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
      if (lfoInterval) {
        clearInterval(lfoInterval);
      }
    };
  }, [pressedKey, volume, frequency, lfoAmplitude, lfoRate, internalVolume]);
  
// Efecto secundario para actualizar LFO cuando cambian sus parámetros
useEffect(() => {
  if (sound && lfoRate !== 0 && lfoAmplitude !== 0) {
    const interval = setInterval(() => {
      if (sound) {
        const lfoValue = lfoAmplitude * Math.sin(lfoRate * Date.now() / 1000);
        sound.setRateAsync(frequency + lfoValue, true);
      }
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }
}, [lfoRate, lfoAmplitude, frequency, sound]);

 // Cargar sonidos de ruido
  useEffect(() => {
    const loadNoise = async () => {
      try {
        const whiteAsset = Asset.fromModule(noiseSounds.white);
        const pinkAsset = Asset.fromModule(noiseSounds.pink);
        await whiteAsset.downloadAsync();
        await pinkAsset.downloadAsync();

        const { sound: white } = await Audio.Sound.createAsync(
          { uri: whiteAsset.localUri || whiteAsset.uri },
          { isLooping: true, volume: whiteNoiseLevel }
        );

        const { sound: pink } = await Audio.Sound.createAsync(
          { uri: pinkAsset.localUri || pinkAsset.uri },
          { isLooping: true, volume: pinkNoiseLevel }
        );

        setWhiteNoise(white);
        setPinkNoise(pink);
      } catch (error) {
        console.error("Error loading noise:", error);
      }
    };

    loadNoise();

    return () => {
      whiteNoise?.unloadAsync();
      pinkNoise?.unloadAsync();
    };
  }, []);

  // Control de volumen del ruido dinámico con los sliders
  useEffect(() => {
    if (whiteNoise) {
      whiteNoise.setVolumeAsync(whiteNoiseLevel);
    }
    if (pinkNoise) {
      pinkNoise.setVolumeAsync(pinkNoiseLevel);
    }
  }, [whiteNoiseLevel, pinkNoiseLevel]);


  const playSoundStart = async (keyLabel: string) => {
    try {
      const soundKey = keys.find(key => key.label === keyLabel);
      setPressedKey(keyLabel);
  
      if (soundKey && sound) {
        await sound.replayAsync();
      }

      // Disparar ruido cuando se presiona una tecla
      if (whiteNoise && whiteNoiseLevel > 0) {
        await whiteNoise.replayAsync();
      }
      if (pinkNoise && pinkNoiseLevel > 0) {
        await pinkNoise.replayAsync();
      }
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  };
  
  const playSoundStop = async () => {
    try {
      if (sound) {
        await sound.stopAsync();
      }


      // Detener ruido cuando se suelta la tecla
      if (whiteNoise) {
        await whiteNoise.stopAsync();
      }
      if (pinkNoise) {
        await pinkNoise.stopAsync();
      }
      
      setPressedKey(null);
    } catch (error) {
      console.error('Error stopping sound:', error);
    }
  };

  const renderKeys = () => keys.map((key, index) => (
    <TouchableOpacity
      key={index}
      style={[
        styles.key,
        key.type === 'sharp' ? styles.sharpKey : styles.naturalKey,
        key.type === 'sharp' && { top: calculateTop(index) },
      ]}
      onPressIn={() => playSoundStart(key.label)} // Iniciar cada nota de forma independiente
      onPressOut={() => playSoundStop()} // Detener la nota específica al soltar
    >
      <Text style={styles.keyText}>{key.label}</Text>
    </TouchableOpacity>
  ));
    
  const calculateTop = (index: number): number => { 
    const sharpKeyOffsets: Record<number, number> = { 
      1: 40, 
      3: 100, 
      6: 160, 
      8: 280, 
      10: 340, 
    }; 
    return sharpKeyOffsets[index] || 0; 
  };
  
  return (
    <View style={styles.pianoContainer}>

      {renderKeys()}
      
      <VolumeSlider volume={internalVolume} setVolume={setInternalVolume} />
      <FrequencySlider frequency={frequency} setFrequency={setFrequency} />
      <LfoAmplitudeSlider lfoAmplitude={lfoAmplitude} setLfoAmplitude={setLfoAmplitude} />
      <LfoRateSlider lfoRate={lfoRate} setLfoRate={setLfoRate} />
      {/*<TempoSlider tempo={tempo} setTempo={setTempo} />*/}
      {/* Sliders de ruido blanco y rosa */}
      <WhiteNoiseSlider whiteNoiseLevel={whiteNoiseLevel} setWhiteNoiseLevel={setWhiteNoiseLevel} />
      <PinkNoiseSlider pinkNoiseLevel={pinkNoiseLevel} setPinkNoiseLevel={setPinkNoiseLevel} />


    </View>
  );
};

export default PianoKeyboard;