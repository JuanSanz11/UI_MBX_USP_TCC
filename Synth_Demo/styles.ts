import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a7ea4',
    flexDirection: 'column-reverse',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pianoContainer: {
    position: 'absolute',
    left: 160,  // Puedes ajustar esta posición en el eje X
    top: 280,  // Puedes ajustar esta posición en el eje Y
  },  
  
  Button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#007BFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },  
  active: {
    backgroundColor: '#28a742',
  },
  inactive: {
    backgroundColor: '#dc3545',
  },

  key: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  naturalKey: {
    backgroundColor: '#fff',
    width: 200,
    height: 60,
    borderColor: '#000',
    borderWidth: 2,
    marginVertical: 1,
    zIndex: 0,
  },
  sharpKey: {
    backgroundColor: '#000',
    width: 100,
    height: 40,
    zIndex: 1,
    position: 'absolute',
    marginLeft: 0,
    marginTop: 10,  

  },

  keyText: {
    color: '#444',
    fontSize: 18,
    position: 'absolute',
    left: 9,
  },
  
  pressedKeyText: {
    marginTop: 200,
    marginRight: 200,
    fontSize: 20,
    color: '#333',
  },
  text: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },

});

export default styles;
