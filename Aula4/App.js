import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.viewPrincipal}>
      <View style={styles.view2}>
        <View style={styles.view2Circulos}/>
        <View style={styles.view2Caixa}> 
          <Text style={styles.view2CaixaTexto}> "asd" </Text>
        </View>

      </View>

      <View style={styles.view3}>
        <View style={styles.view3Caixa1}></View>
        <View style={styles.view3Caixa2}></View>
        <View style={styles.view3Caixa3}></View>

      </View>

      <View style={styles.view4}>

      </View>

      <View style={styles.view5}>
        <View styles={styles.view5Caixa}/>
        <Text styles={styles.view5Texto}> "ASD" </Text>
      </View>

      <View style={styles.view6}>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  viewPrincipal: {
    flexDirection: "column",
    padding: 30,
    gap: 30,
  },

  view2: {
    flexDirection: "row",
    width: '100%',
    height: 130,
    borderWidth: 2,
    borderColor: "black",
    padding: 15,
    gap:50,

  },

  view2Circulos: {
    width: 90,
    height: 90,
    borderWidth: 2,
    borderColor: "yellow",
  
  },

  view2Caixa:{
    width: 150,
    height: 90,
    borderWidth: 2,
    borderColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },

  view2CaixaTexto:{
    fontWeight: "bold",
    fontSize: 15,
  },

  view3: {
    flexDirection: "row",
    width: '100%',
    height: 90,
    borderWidth: 2,
    borderColor: "black",

    gap: 10,
    justifyContent: "space-around",
    alignItems: "center",

    
  },

  view3Caixa1: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "blue",
  },

    view3Caixa2: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "red",
  },

    view3Caixa3: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "green",
  },

  view4: {
    flexDirection: "column",
        width: '100%',
    height: 130,
    borderWidth: 2,
    borderColor: "black",
  },

  view5: {
    flexDirection: "row",
        width: '100%',
    height: 90,
    borderWidth: 2,
    borderColor: "black",
  },

  view5Caixa:{
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "purple",

  },

  view5Texto:{
    fontWeight: "bold",
    fontSize: 15,
  },

  view6: {
    flexDirection: "row",
        width: '100%',
    height: 90,
    borderWidth: 2,
    borderColor: "black",
  },
});
