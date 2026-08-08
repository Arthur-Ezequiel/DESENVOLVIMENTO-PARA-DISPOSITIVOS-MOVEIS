import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

const image = {
  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrBjz23vepKBCUoK6POM-oLCi70rZwGVVwF40zOIhWwg&s=10'
};

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.text}>
          Usei ChatGPT para formatar o código
        </Text>
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
    fontSize: 15,
    fontWeight: '500',
    fontStyle: 'normal',
    textDecorationLine: 'underline',
    textAlign: 'center',
    color: 'pink',
    backgroundColor: '#000000c0',
  },
});
