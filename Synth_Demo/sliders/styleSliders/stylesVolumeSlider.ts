import { StyleSheet } from 'react-native';

const stylesVolume = StyleSheet.create({
  sliderContainer: {
    position: 'absolute', // Permite posicionar el componente individualmente
    top: '-20%', // Ajusta el valor según sea necesario
    left: '-10%', // Ajusta el valor según sea necesario
    transform: [{ translateX: -90 }, { translateY: -10 }, { rotate: '180deg' } ], // Centra el componente
    margin: 0,
  },
  slider: {
    width: 300,
  },
});

export default stylesVolume;
