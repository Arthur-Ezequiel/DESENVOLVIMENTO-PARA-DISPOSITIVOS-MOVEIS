import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

export default function App() {
  return (
<View style={styles.grandeView}>
  <View style={styles.cabeca}>
    <View style={styles.circulo}></View>

    <View>
      <Text style={styles.tituloCabeca}>Olá, Estudante</Text>
      <Text>Bem-vindo ao seu painel</Text>
    </View>
  </View>

  <View style={styles.menu}>
    <Text style={styles.tituloMenu}>Menu</Text>

    <View style={styles.botaoMenu}>
      <Button
        title="Clique aqui1"
        onPress={() => alert('Este botão não faz nada')}
      />

      <Button
        title="Clique aqui2"
        onPress={() => alert('Este botão não faz nada')}
      />

      <Button
        title="Clique aqui3"
        onPress={() => alert('Este botão não faz nada')}
      />
    </View>
  </View>

  <View style={styles.areaScroll}>
    <Text style={styles.tituloProxAtividade}>Próximas atividades</Text>

    <ScrollView style={styles.proxAtividade}>
      <View style={styles.card}>
        <Text style={styles.txtTituloScroll}>Aula4</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.txtTituloScroll}>Aula5</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.txtTituloScroll}>Aula6</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.txtTituloScroll}>Aula7</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.txtTituloScroll}>Aula8</Text>
      </View>
    </ScrollView>
  </View>

  <View style={styles.chamada}>
    <Text style={styles.tituloChamada}> Chamada para ação</Text>

    <View style={styles.chamdaCaixa}>
      <Text style={styles.txtChamada}> Compre meu curso e ative o seu Mega Brain  </Text>
      <Button
        title="Faz o pix ai"
        onPress={() => alert('Este botão não faz nada')}
      />

    </View>
  </View>

</View> //fecha view principal

);
}

const styles = StyleSheet.create({
  grandeView: {
    flex: 1,
    paddingTop: 25,
    margin: 15
  },

  cabeca: {
    flexDirection: "row",
    gap: 10,
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

  menu: {
    marginTop: 45,
  },

  tituloMenu: {
    fontWeight: "bold",
    fontSize: 18,
  },

  botaoMenu: {
    flexDirection: "row",
    gap: 10,
  },

  areaScroll: {
    height: 305,
  },

  proxAtividade: {
    height: 230,
  },

  tituloProxAtividade: {
    marginTop: 45,
    fontWeight: "bold",
    fontSize: 18,

  },

  card: {
    height: 70,
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingTop: 5,
    backgroundColor: "#a7252528",
    borderRadius: 20,
  },

  txtTituloScroll: {
    fontWeight: "bold",
    fontSize: 15,
  },

  txtScroll: {
    fontSize: 29,
  },

  chamada: {
    marginTop: 45,

  },

  tituloChamada: {
    fontWeight: "bold",
    fontSize: 18,
  },

  chamdaCaixa: {
  width: '100%',
  height: 170,
  borderWidth: 2,
  borderColor: "black",
  borderRadius: 10,
  alignItems: "center",
  justifyContent: "center",
},
  txtChamada:{  
    fontWeight: "italic",
    fontSize: 13,
  },

});
