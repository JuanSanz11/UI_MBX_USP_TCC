import { StyleSheet } from 'react-native';

const stylesLFORate = StyleSheet.create({
  sliderContainer: {
    position: 'absolute',
    top: '70%', // Ajusta el valor según sea necesario
    left: '-20%',
    transform: [{ translateX: -90 }, { translateY: -10 }, { rotate: '-90deg' } ], // Centra el componente
    margin: 0,
  },
  slider: {
    width: 180,
  },
});

export default stylesLFORate;
