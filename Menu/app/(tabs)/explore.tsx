import { StyleSheet, Image, Platform, Linking, Button, View, TouchableOpacity } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useState } from 'react';
import WebView from 'react-native-webview';

export default function TabTwoScreen() {
  const [showWebView, setShowWebView] = useState(false);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo1.png')}
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">SynthChain</ThemedText>
      </ThemedView>
      <ThemedText>
        A tokenização de presets musicais como Non-Fungível Token (NFTs) na bloackchain Polygon viabiliza um modelo inovador com certificados digitais de propiedade e royalties embutidos via Samrt Contracts. Essa abordage, não só vaida a autenticidade das criações, mas também cria um ecossistema sustentável para artistas digitais unindo tecnologia, arte e novos fluxos de renda no mercado de ativos musicais virtuias.
      </ThemedText>



      <Collapsible title="Control Slider e Knob - Controle deslizante">
      <ThemedText>
        Imagine um Knob como botão de volume do rádio: girar ppara a dereita aumenta a intensidade, para a esquerda diminui. No sintetizador, ele controla 'ingredientes' do som.
      </ThemedText>
        <Image
          source={require('@/assets/images/Knob.png')}
          style={styles.centeredImage}
        />

        <ThemedText>
          Pense em um fader como um controle de luz de um dimmer: deslizar para acima aumenta o brilho, para abaixo escurece. No sintetizador, ele controla a 'intensidade' de um efeito ou parâmetro.
        </ThemedText>
        <Image
          source={require('@/assets/images/Fader.png')}
          style={styles.centeredImage}
        />

      </Collapsible>



      
      <Collapsible title="Rec and Play">
        <ThemedText>
          Nosso app Rec and Play funciona como um grabador musical inteligente: você toca e ouve o som instantaneamente, sem atrasos. É como um espelho sonor, tudo o que você cria é capturado e reproduzido ao mesmo tempo.{' '}
        </ThemedText>

        <ThemedText>
          App em fase de testes.
        </ThemedText>


        <View style={{ flex: 1 }}>
    {/* Botão para abrir o WebView */}
    <TouchableOpacity 
      onPress={() => setShowWebView(true)}
      style={{ padding: 10 }}
    >
      <ThemedText type="link">Abrir Projeto</ThemedText>
    </TouchableOpacity>

    {/* WebView (aparece quando showWebView = true) */}
    {showWebView && (
      <WebView
        source={{ uri: "http://localhost:8082" }}
        style={{ flex: 1 }}
        onError={() => alert("Não foi possível conectar ao servidor. Verifique a porta 8082.")}
        startInLoadingState={true}
      />
    )}
  </View>
);
        
      </Collapsible>

      <Collapsible title="Prototipos">

        <ThemedText>
          Sintetizador baseado em suma de osciladores de ondas simples para a formação de ondas complexas como triangulais e quadrada.  {' '}
        </ThemedText>
        <Image
          source={require('@/assets/images/SynthOne.png')}
          style={styles.centeredImage}
        />

        <ThemedText>
          Sinetizador composto por envolventee suma de sociladores naturais, com controle de forma de onda preciso. {' '}
        </ThemedText>
        <Image
          source={require('@/assets/images/Synth.png')}
          style={styles.centeredImage}
        />
       

       

      </Collapsible>



      <Collapsible title="Contatos">
      <ThemedText>
           🌐 Feedbacks? Colab? Bora bater um papo! 📌 {' '}
           <ExternalLink href="https://cv-2025-three.vercel.app/">
          <ThemedText type="link">Sintonize comigo!</ThemedText>
        </ExternalLink>
        </ThemedText>
        
      </Collapsible>
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    height: 100,
    width: 190,
    alignSelf: 'center',
    marginTop: 100,
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  centeredImage: {
    height: 100,
    width: 120,
    alignSelf: 'center',
    marginBottom: 30,
  },
});
