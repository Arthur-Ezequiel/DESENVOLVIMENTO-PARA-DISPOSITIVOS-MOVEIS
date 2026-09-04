import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.viewTitulo}>
      <View style={styles.cabeca}>
        <View style={styles.circulo}></View>

        <View>
          <Text style={styles.tituloCabeca}>React Native</Text>
          <Text>Avaliação dia 04/09</Text>
        </View>
      </View>
      <View style={styles.viewParaAlerta}>
        <View style={styles.viewAlerta}>
          <Text style={styles.viewAlertaTexto}> Batatas são macias. </Text>
        </View>
        <Button
        title="Enviar"
        onPress={() => alert('Este botão não faz nada')}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewTitulo: {
    flex: 1,

    gap: 250,
    backgroundColor: "#90e0eb7a",
  },

  cabeca: {
    flexDirection: "row",
    gap: 10,
    paddingTop: 25,
    margin: 15,
  },

  circulo: {
    backgroundColor: "#0328f7b4",
    width: "80",
    height: 80,
    borderRadius: 50,

  },
  tituloCabeca: {
    fontWeight: "bold",
    fontSize: 25,
  },

  viewParaAlerta: {
    paddingTop: 25,
    margin: 15,
    gap: 30,
  },

  viewAlerta: {
    width: 350,
    height: 70,
    backgroundColor: "#5485ee7a",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  viewAlertaTexto: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000000",

  },
});
