import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SectionList, Button } from 'react-native';

const image = {
  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrBjz23vepKBCUoK6POM-oLCi70rZwGVVwF40zOIhWwg&s=10'
};

const dados = [
  {
    title: 'Frutas', //TITLE = section
    data: ['Maça', 'Banana', 'Laranja'] //DATA = item
  },
  {
    title: 'Bebidas',
    data: ['Agua', 'Suco', 'Refri']
  }
];

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.text}>
          Eu quando... eu quando riu
        </Text>

        <Button 
        title="Clique aqui" 
        onPress={() => alert('Se vc clicou aqui, vc é gay')}
        />

        <SectionList
  sections={dados}
  renderItem={({ item }) => <Text>{item}</Text>}
  renderSectionHeader={({ section }) => (
    <Text>{section.title}</Text>
  )}
/>
      </ImageBackground>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
    justifyContent: 'center',
  },

  text: {
    fontSize: 55,
    fontWeight: '500',
    fontStyle: 'normal',
    textDecorationLine: 'underline',
    textAlign: 'center',
    color: 'blue',
    backgroundColor: '#000000c0',
  },
});
