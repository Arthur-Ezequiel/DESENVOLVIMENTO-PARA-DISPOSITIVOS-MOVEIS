import { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function Atividade5() {

  const [resultato, setResultado] = useState(0);

  return (

    <View style={styles.containerPrincipal}>

      <View style={styles.containerCima}>

        <Pressable
          style={styles.circuloMenos}
          onPress={() => setResultado(resultato - 5)}
        >
          <Text style={styles.textoBotao}>- 5</Text>
        </Pressable>

        <Pressable
          style={styles.circuloMais}
          onPress={() => setResultado(resultato + 5)}
        >
          <Text style={styles.textoBotao}>+ 5</Text>
        </Pressable>

      </View>

      <View style={styles.containerCentral}>
        <Pressable
          style={styles.circuloMenos}
          onPress={() => setResultado(resultato - 1)}
        >
          <Text style={styles.textoBotao}>-</Text>
        </Pressable>

        <View style={styles.circuloResultado}>
          <Text style={styles.textoBotao}>{resultato}</Text>
        </View>

        <Pressable
          style={styles.circuloMais}
          onPress={() => setResultado(resultato + 1)}
        >
          <Text style={styles.textoBotao}>+</Text>
        </Pressable>
      </View>

            <View style={styles.containerBaixo}>

        <Pressable
          style={styles.circuloMenos}
          onPress={() => setResultado(resultato - 10)}
        >
          <Text style={styles.textoBotao}>- 10</Text>
        </Pressable>

        <Pressable
          style={styles.circuloMais}
          onPress={() => setResultado(resultato + 10)}
        >
          <Text style={styles.textoBotao}>+ 10</Text>
        </Pressable>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  containerPrincipal: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },


  containerCentral: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },

  containerCima: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 180,
  },

  containerBaixo: {

    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 180,
  },

  circuloResultado: {
    backgroundColor: '#020202b4',
    width: 160,
    height: 160,
    borderRadius: 90,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  circuloMenos: {
    backgroundColor: '#ff00009f',
    width: 80,
    height: 80,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  circuloMais: {
    backgroundColor: '#186615b4',
    width: 80,
    height: 80,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoBotao: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});