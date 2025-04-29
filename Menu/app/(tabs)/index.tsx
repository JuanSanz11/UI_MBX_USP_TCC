import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, View, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';

export default function HomeScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Añade aquí tu lógica de autenticación
    //console.log('Usuario:', username);
    //console.log('Contraseña:', password);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem-vindo ao Toggle 🎵</ThemedText>
      </ThemedView>
      {/*<ThemedView style={styles.stepContainer}>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Iniciar sesión" onPress={handleLogin} />
      </ThemedView>
       Resto del código existente */}

      <ThemedView style={styles.stepContainer}>
  
        <ThemedText>
          Um aplicativo open-source interativo desenvolvido para a criação e experimentação de instrumentos musicais virtuais mobile.
        </ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"> Recursos </ThemedText>
        <ThemedText>
        🎹Instrumentos virtuais (Sintetizador).
        </ThemedText>

        <ThemedText>
        🎤 Gravação e reprodução de áudio.        
        </ThemedText>

        <ThemedText>
        🚀 Código aberto (GitHub!).        
        </ThemedText>
      </ThemedView>


      <ThemedView style={styles.stepContainer}>
        
        <ThemedText type="subtitle">Tecnologias Utilizadas</ThemedText>
        <ThemedText>
        ⚛️ React Native + Expo Go
        </ThemedText>

        <ThemedText>
        🔊 Bibliotecas de áudio (expo-av, tone.js ou react-native-sound).      
        </ThemedText>

        <ThemedText>
        🔥 Firebase (GitHub!).       
        </ThemedText>
      </ThemedView>

      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  centeredImage: {
    height: 100,
    width: 160,
    alignSelf: 'center',
    marginBottom: 10,
  },
  headerImage: {
    height: 200,
    width: '100%',
    resizeMode: 'center',
    marginTop: 50,
  },
  
});
