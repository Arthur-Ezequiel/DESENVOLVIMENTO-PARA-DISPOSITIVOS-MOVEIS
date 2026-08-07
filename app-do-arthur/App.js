import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>0-0-1 é a formação da sexta-feira</Text> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hsla(0, 100%, 100%, 0.99)',
    alignItems: 'center', //alignItems: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'
    justifyContent: 'center', //justifyContent: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'
  },

  texto: {
    fontSize: 50,
    fontWeight: '500',
    fontStyle: 'normal',
    textDecorationLine: 'underline', 
    textAlign: 'center',
    color: 'blue',

    //Estilos de texto
      //fontWeight: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
      //fontStyle: 'normal' | 'italic'
      //textAlign: 'auto' | 'left' | 'right' | 'center' | 'justify'
      //textDecorationLine: 'none' | 'underline' | 'line-through' | 'underline line-through'
      //textTransform: 'none' | 'uppercase' | 'lowercase' | 'capitalize'
  },
});
