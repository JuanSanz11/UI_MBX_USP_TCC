import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

const PinkNoiseButton = () => {
  const [isActive, setIsActive] = useState(false);
  const soundRef = useRef<Audio.Sound | null>(null);

  useEffect(() => {
    // Inicializar el sonido sin reproducirlo automáticamente
    const initAudio = async () => {
      try {
        soundRef.current = new Audio.Sound();
        await soundRef.current.loadAsync(require("./sounds/pinkNoise.mp3"));
        await soundRef.current.setVolumeAsync(1.0);
      } catch (error) {
        console.error("Error al cargar el sonido:", error);
      }
    };

    initAudio();

    return () => {
      // Liberar recursos cuando el componente se desmonta
      if (soundRef.current) {
        soundRef.current.unloadAsync();
      }
    };
  }, []);

  const toggleNoise = async () => {
    if (!soundRef.current) return;

    if (!isActive) {
      await soundRef.current.replayAsync(); // Iniciar el sonido
    } else {
      await soundRef.current.stopAsync(); // Detener el sonido
    }

    setIsActive(!isActive);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, isActive ? styles.active : styles.inactive]}
        onPress={toggleNoise}
      >
        <Text style={styles.text}>
          {isActive ? "DETENER RUIDO ROSA" : "INICIAR RUIDO ROSA"}
        </Text>
      </TouchableOpacity>
      <Text style={styles.statusText}>
        Estado: {isActive ? "ACTIVO" : "INACTIVO"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 20,
  },
  button: {
    padding: 15,
    borderRadius: 8,
    width: 200,
    alignItems: "center",
    transform: [{ translateX: -90 }, { translateY: -10 }, { rotate: '-90deg' } ], // Centra el componente

  },
  active: {
    backgroundColor: "#ff4444",
  },
  inactive: {
    backgroundColor: "#44ff44",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
  statusText: {
    marginTop: 10,
    color: "#666",
    transform: [{ translateX: -50 }, { translateY: -10 }, { rotate: '-90deg' } ], // Centra el componente

  },
});

export default PinkNoiseButton;
