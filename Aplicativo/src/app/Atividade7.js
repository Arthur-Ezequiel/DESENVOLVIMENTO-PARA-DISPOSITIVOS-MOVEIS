import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as SQLite from "expo-sqlite";

// Fora do componente: o banco abre uma vez. O arquivo fica no aparelho —
// fechar o app não apaga. A tela /lista continua só na memória.
const db = SQLite.openDatabaseSync("flores.db");

db.runSync(`
    CREATE TABLE IF NOT EXISTS flores (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    cor TEXT NOT NULL,
    nomeCientifico TEXT NOT NULL
  );
`);


function listar() {
    return db.getAllSync("SELECT * FROM flores ORDER BY id DESC");
}

function adicionar(nome, cor, nomeCientifico) {
    db.runSync("INSERT INTO flores (nome, cor, nomeCientifico) VALUES (?, ?, ?)", [nome, cor, nomeCientifico]);
}

function excluir(id) {
    db.runSync("DELETE FROM flores WHERE id = ?", [id]);
}

function atualizarFlor(nome, cor, nomeCientifico, id) {
    db.runSync("UPDATE flores SET nome = ?, cor = ?, nomeCientifico = ? WHERE id = ?", [nome, cor, nomeCientifico, id]);
}

function buscarPorId(id) {
    return db.getFirstSync("SELECT * FROM flores WHERE id = ?", [id]);
}


export default function ListaDb() {
    const [id, setId] = useState("");
    const [nome, setNome] = useState("");
    const [cor, setCor] = useState("");
    const [nomeCientifico, setNomeCientifico] = useState("");
    const [idEditando, setIdEditando] = useState(0);
    const [lista, setLista] = useState([]);

    function carregar() {
        setLista(listar());
    }

    function guardarOuEditar() {
        if (idEditando === 0) {
            adicionar(nome, cor, nomeCientifico);
        } else {
            atualizarFlor(nome, cor, nomeCientifico, idEditando);
        }
        setNome("");
        setCor("");
        setNomeCientifico("");
        setIdEditando(0);
        carregar();
    }

    function editar(flores) {
        setIdEditando(flores.id);
        setNome(flores.nome);
        setCor(flores.cor);
        setNomeCientifico(flores.nomeCientifico);
    }

    useEffect(() => {
        carregar();
    }, []);


    function remover() {
        excluir(id);
        setId("");
        carregar();
    }

    const flor = buscarPorId(id);

    if (flor) {
        setIdEditando(flor.id);
        setNome(flor.nome);
        setCor(flor.cor);
        setNomeCientifico(flor.nomeCientifico);
    }

    function carregarParaEditar() {
        const flor = buscarPorId(id);

        if (flor) {
            setIdEditando(flor.id);
            setNome(flor.nome);
            setCor(flor.cor);
            setNomeCientifico(flor.nomeCientifico);
        }
    }



    return (
        <SafeAreaView style={styles.tela} edges={["bottom"]}>
            <Stack.Screen options={{ title: "Tarefas no banco" }} />
            <TextInput
                style={styles.campo}
                value={nome}
                onChangeText={setNome}
                placeholder="Digite nome da flor"
            />

            <TextInput
                style={styles.campo}
                value={cor}
                onChangeText={setCor}
                placeholder="Digite cor da flor"
            />

            <TextInput
                style={styles.campo}
                value={nomeCientifico}
                onChangeText={setNomeCientifico}
                placeholder="Digite nome cientifico da flor"
            />


            <Button title="Salvar" onPress={guardarOuEditar} />

            <FlatList
                style={styles.lista}
                data={lista}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <Text style={styles.item}>{item.nome} - {item.cor} - {item.nomeCientifico}</Text>}
            />

            <TextInput
                style={[styles.campo, { marginTop: 16 }]}
                value={id}
                onChangeText={setId}
                placeholder="Digite o id para Editar"
            />

            <Button
                title="Editar" onPress={carregarParaEditar} />

            <TextInput
                style={[styles.campo, { marginTop: 16 }]}
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