import React, { useState } from 'react';
import { Image, StyleSheet, Button, View } from 'react-native';
import { WebView } from 'react-native-webview';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      {/* Fondo de la foto */}
      <Image
        source={require('@/assets/images/partial-react-logo.png')}
        style={[StyleSheet.absoluteFill, { opacity: 1 }]} // Ajusta opacidad según necesites
      />
      
      {!showDemo ? (
        <ParallaxScrollView
          headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
          headerImage={
            <Image
              source={require('@/assets/images/partial-react-logo1.png')}
              style={styles.headerImage}
            />
          }>
          
          <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">Toggle .SynthDemo</ThemedText>
          </ThemedView>

          <ThemedView>
            <Button 
              title="DEMO" 
              onPress={() => setShowDemo(true)} 
            />
          </ThemedView>
        </ParallaxScrollView>
      ) : (
        <View style={{ flex: 1 }}>
          <WebView 
            source={{ uri: 'http://localhost:8081' }}
            style={{ flex: 1 }}
            scalesPageToFit={true}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            startInLoadingState={true}
          />
          
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    height: 100,
    width: 180,
    alignSelf: 'center',
    marginTop: 100,
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  centeredImage: {
    height: 100,
    width: 160,
    alignSelf: 'center',
    marginBottom: 10,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  backButton: {
    position: 'absolute',
    bottom: 70,
    alignSelf: 'center',
    zIndex: 999,
  },
});