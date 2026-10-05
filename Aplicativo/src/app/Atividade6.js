import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as SQLite from "expo-sqlite";

// Fora do componente: o banco abre uma vez. O arquivo fica no aparelho —
// fechar o app não apaga. A tela /lista continua só na memória.
const db = SQLite.openDatabaseSync("bordel.db");

db.execSync(`
    CREATE TABLE IF NOT EXISTS bordel (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    cor TEXT NOT NULL
  );
`);

function listar() {
  return db.getAllSync("SELECT * FROM bordel ORDER BY id DESC");
}

function adicionar(nome, cor) {
  db.runSync(
    "INSERT INTO bordel (nome, cor) VALUES (?, ?)",
    [nome, cor]
  );
}

function excluir(id) {
  db.runSync("DELETE FROM bordel WHERE id = ?", [id]);
}

export default function ListaDb() {
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [cor, setCor] = useState("");
  const [lista, setLista] = useState([]);

  function carregar() {
    setLista(listar());
  }

  useEffect(() => {
    carregar();
  }, []);

  function salvar() {
    adicionar(nome, cor);
    setCor("");
    setNome("");
    carregar();
  }

  function remover() {
    excluir(id);
    setId("");
    carregar();
  }

  return (
    <SafeAreaView style={styles.tela} edges={["bottom"]}>
      <Stack.Screen options={{ title: "Tarefas no banco" }} />
      <TextInput
        style={styles.campo}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite o nome do Bordel"
      />

      <TextInput
        style={styles.campo}
        value={cor}
        onChangeText={setCor}
        placeholder="Digite a cor do Bordel"
      />

      <Button title="Adicionar" onPress={salvar} />

      <FlatList
        style={styles.lista}
        data={lista}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Text style={styles.item}>{item.id} - {item.nome} - {item.cor}</Text>}
      />

      <TextInput
        style={styles.campo}
        value={id}
        onChangeText={setId}
        placeholder="Digite o id para excluir"
      />


      <Button title="Excluir" onPress={remover} />
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

  campo: {
    borderWidth: 1,
    borderColor: "#D9DDE3",
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    color: "#111827",
    marginBottom: 12,
  },

  lista: {
    flex: 1,
    marginTop: 16,
  },

  item: {
    backgroundColor: "#F1F3F6",
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    fontSize: 15,
    color: "#111827",
  },

  label: {
    fontSize: 16,
    marginBottom: 5,
  },
});