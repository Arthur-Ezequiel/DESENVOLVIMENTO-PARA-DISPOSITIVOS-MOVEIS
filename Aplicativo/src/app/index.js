import { Link, Stack } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Este arquivo é a rota "/" — a tela que abre primeiro.
// O nome index é o único com significado especial: index.js de uma pasta é a
// tela daquela pasta.
export default function Inicio() {
  return (
    <SafeAreaView style={styles.tela} edges={["bottom"]}>
      <Stack.Screen options={{ title: "Painel" }} />

      {/* Cabeçalho */}
      <View style={styles.cabecalho}>
        <View style={styles.avatar} />

        <View>
          <Text style={styles.saudacao}>Olá, Estudante</Text>
          <Text style={styles.subtitulo}>Bem-vindo de volta</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.cartao}>
          <Text style={styles.cartaoTitulo}>Aula02</Text>
          <Text style={styles.detalhe}>
            Atividade 1, Escolher 3 componentes.
          </Text>

          <Link href="/Atividade1" style={styles.link}>
            Ver minha atividade →
          </Link>
        </View>

        <View style={styles.cartao}>
          <Text style={styles.cartaoTitulo}>Aula03</Text>
          <Text style={styles.detalhe}>
            Atividade 2, Cabeçalho, Menu, Próximas atividades e Chamada para ação.
          </Text>

          <Link href="/Atividade2" style={styles.link}>
            Ver minha atividade →
          </Link>
        </View>

        <View style={styles.cartao}>
          <Text style={styles.cartaoTitulo}>Aula04</Text>
          <Text style={styles.detalhe}>
            Atividade 3, Escolha: Spotify, iFood, WhatsApp, Instagram.
            Tire um print de uma tela. Desenhe a tela no papel com os quatro
            símbolos, trilhos incluídos. Programe o que você desenhou.
          </Text>

          <Link href="/Atividade3" style={styles.link}>
            Ver minha atividade →
          </Link>
        </View>

        <View style={styles.cartao}>
          <Text style={styles.cartaoTitulo}>Aula05</Text>
          <Text style={styles.detalhe}>
            Atividade 4, Tela para clima e Spotify.
          </Text>

          <Link href="/Atividade4" style={styles.link}>
            Ver minha atividade →
          </Link>
        </View>

        <View style={styles.cartao}>
          <Text style={styles.cartaoTitulo}>Aula06</Text>
          <Text style={styles.detalhe}>
            Prova.
          </Text>

          <Link href="/Prova1" style={styles.link}>
            Ver minha atividade →
          </Link>
        </View>

        <View style={styles.cartao}>
          <Text style={styles.cartaoTitulo}>Aula07</Text>
          <Text style={styles.detalhe}>
            Atividade 5, SafeAreaView, Expo Router e transferência de outras atividades.
          </Text>

        </View>

        <View style={styles.cartao}>
          <Text style={styles.cartaoTitulo}>Aula08</Text>
          <Text style={styles.detalhe}>
            Atividade 5, contador com aumentar e diminuir.
          </Text>

          <Link href="/Atividade5" style={styles.link}>
            Ver minha atividade →
          </Link>
        </View>

        <View style={styles.cartao}>
          <Text style={styles.cartaoTitulo}>Aula09</Text>
          <Text style={styles.detalhe}>
            Atividade 6, Desenvolver um app com TextInput, botão e flatlist.
          </Text>

          <Link href="/Atividade6" style={styles.link}>
            Ver minha atividade →
          </Link>
        </View>

        <View style={styles.cartao}>
          <Text style={styles.cartaoTitulo}>Aula10</Text>
          <Text style={styles.detalhe}>
            Atividade 7, Desenvolver um app com TextInput, botão e flatlist.
          </Text>

          <Link href="/Atividade7" style={styles.link}>
            Ver minha atividade →
          </Link>
        </View>

        <View style={styles.cartao}>
          <Text style={styles.cartaoTitulo}>Aula11</Text>
          <Text style={styles.detalhe}>
            Atividade 8, Desenvolver um app com TextInput, botão e flatlist.
          </Text>

          <Link href="/Atividade8" style={styles.link}>
            Ver minha atividade →
          </Link>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  cabecalho: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    marginBottom: 20,
  },

  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#D9DDE3",
  },

  saudacao: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#111827",
  },

  subtitulo: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 2,
  },

  cartao: {
    backgroundColor: "#F1F3F6",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    gap: 6,
  },

  cartaoTitulo: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },

  detalhe: {
    fontSize: 14,
    color: "#374151",
  },

  link: {
    fontSize: 15,
    fontWeight: "600",
    color: "#2354D6",
    marginTop: 4,
  },
});