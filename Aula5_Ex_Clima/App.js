import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.viewPrincipal}>

      <View style={styles.viewPrincipalTexto}>
        <Text> Lajeado RS </Text>
        <Text> Sex, 28/08 </Text>
      </View>

      <View style={styles.viewTemperatura}>
        <Text style={styles.TextoTemperaturaNumero}> 18° </Text>
        <Text> Chuva </Text>
        <Text> Max 40° Min-2° </Text>
      </View>

      <Text> Proximos Dias </Text>

      <View style={styles.viewDias}>

        <View style={styles.viewProxDia1}>
          <Text> Sab</Text>
          <View style={styles.viewProxDia1Box}></View>
          <Text> 24°</Text>
        </View>

        <View style={styles.viewProxDia1}>
          <Text> Dom</Text>
          <View style={styles.viewProxDia1Box}></View>
          <Text> 21°</Text>
        </View>

        <View style={styles.viewProxDia1}>
          <Text> Seg </Text>
          <View style={styles.viewProxDia1Box}></View>
          <Text> 28°</Text>
        </View>

        <View style={styles.viewProxDia1}>
          <Text> Ter</Text>
          <View style={styles.viewProxDia1Box}></View>
          <Text> 28°</Text>
        </View>

        <View style={styles.viewProxDia1}>
          <Text> Qua</Text>
          <View style={styles.viewProxDia1Box}></View>
          <Text> 28°</Text>
        </View>

      </View>

      <View style={styles.viewAlerta}>
        <Text style={styles.viewAlertaTexto}> Alerta </Text>
        <Text style={styles.viewAlertaTexto2}> Vai chover mais </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  viewPrincipal: {
    flex: 1,
    padding: 30,
    paddingTop: 65,
    gap: 5,
  },

  viewPrincipalTexto: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  viewTemperatura: {
    flexDirection: "collumn",
    width: '100%',
    height: 130,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 25,
    backgroundColor: "#0695a82d",
    borderRadius: 20,
  },

  TextoTemperaturaNumero: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#0b18cc8c",
  },

  viewDias: {
    flexDirection: "row",
    width: '100%',
    height: 130,
    justifyContent: "space-around",
    alignItems: "center",
  },

  viewProxDia1: {
    flexDirection: "collumn",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0bcccc4d",
    width: 50,
    height: 120,
    gap: 5,
    borderRadius: 10,
  },

  viewProxDia1Box: {
    backgroundColor: "#0b18cc52",
    width: 25,
    height: 25,
  },

  viewAlerta: {
    flexDirection: "collumn",
    width: '100%',
    height: 70,
    backgroundColor: "#cc990b7a",
    borderRadius: 10,
    padding: 5,
  },

  viewAlertaTexto: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#cc320b7a",

  },

  viewAlertaTexto2: {
    color: "#cc320b7a",
  },
});