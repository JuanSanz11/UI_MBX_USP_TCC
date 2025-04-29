import { StyleSheet } from 'react-native';

const stylesTempo = StyleSheet.create({
  sliderContainer: {
    position: 'absolute',
    top: '-50%', // Ajusta el valor según sea necesario
    left: '50%',
    transform: [{ translateX: -90 }, { translateY: -10 }, { rotate: '180deg' } ], // Centra el componente
    margin: 0,
  },
  slider: {
    width: 180,
  },
});

export default stylesTempo;
