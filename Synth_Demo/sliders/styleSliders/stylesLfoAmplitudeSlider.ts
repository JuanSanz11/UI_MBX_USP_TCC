import { StyleSheet } from 'react-native';

const stylesLFOAmp = StyleSheet.create({
  sliderContainer: {
    position: 'absolute',
    top: '70%', // Ajusta el valor según sea necesario
    left: '-50%',
    transform: [{ translateX: -90 }, { translateY: -10 }, { rotate: '-90deg' } ], // Centra el componente
    margin: 0,
  },
  slider: {
    width: 180, // Ajusta el ancho del slider según sea necesario
    //height: 400, // Ajusta la altura del slider según sea necesario
  },
});

export default stylesLFOAmp;
