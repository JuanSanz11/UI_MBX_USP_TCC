import { StyleSheet } from 'react-native';

const stylesFrequency = StyleSheet.create({
  sliderContainer: {
    position: 'absolute',
    top: '-40%', // Ajusta el valor según sea necesario
    left: '-10%',
    transform: [{ translateX: -90 }, { translateY: -10 }, { rotate: '180deg' } ], // Centra el componente
    margin: 0,
  },
  slider: {
    width: 300,
  },
});

export default stylesFrequency;
