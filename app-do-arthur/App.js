import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SectionList, Button } from 'react-native';

const image = {
  uri: 'https://www.google.com/imgres?q=windowswallpaper&imgurl=https%3A%2F%2Fd7hftxdivxxvm.cloudfront.net%2F%3Fquality%3D85%26resize_to%3Dwidth%26src%3Dhttps%253A%252F%252Fartsy-media-uploads.s3.amazonaws.com%252F2RNK1P0BYVrSCZEy_Sd1Ew%25252F3417757448_4a6bdf36ce_o.jpg%26width%3D910&imgrefurl=https%3A%2F%2Fwww.artsy.net%2Farticle%2Fartsy-editorial-story-worlds-famous-desktop-background&docid=4WJt_Hj60TwkWM&tbnid=__RkddyVG69duM&vet=12ahUKEwj9o_aemqGWAxXppJUCHYkxN7UQnPAOegQIPRAA..i&w=910&h=732&hcb=2&ved=2ahUKEwj9o_aemqGWAxXppJUCHYkxN7UQnPAOegQIPRAAs'
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
          MEU TEXTO
        </Text>

        <Text style={styles.textoAzul}>
          ASD
        </Text>

        <Button 
        title="Clique aqui" 
        onPress={() => alert('Se vc clicou aqui, vc é gay')} 
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
    textAlign: 'center',
    color: 'blue',
  },

  textoAzul: {
    color: 'orange',
    textAlign: 'center',
  }
});
