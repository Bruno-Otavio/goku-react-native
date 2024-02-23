import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

const images = [
  require("./assets/ssj1.webp"),
  require("./assets/ssj2.webp"),
  require("./assets/ssj3.png"),
  require("./assets/ssj4.png"),
  require("./assets/ssjg.png"),
  require("./assets/ssjgssj.png"),
  require("./assets/ui.webp")
];

let goku = 0;

export default function App() {
  const transform = () => {
    if (goku < images.length-1) {
      goku += 1;
      console.log(goku);
    }
  }

  const detransform = () => {
    if (goku > 0) {
      goku -= 1;
      console.log(goku);
    }
  }
  
  return (
    <View style={styles.container}>
      <Text>Goku, transform!</Text>
      <Pressable onPress={transform} style={styles.button}>
        <Text>Transformar!</Text>
      </Pressable>
      <Pressable onPress={detransform} style={styles.button}>
        <Text>Destransformar!</Text>
      </Pressable>
      <Goku image={images[goku]}/>
      <StatusBar style="auto" />
    </View>
  );
}

const Goku = props => {
  return (
    <View>
      <Image 
        source={props.image}
        style={styles.goku}  
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  goku: {
    width: 480,
    height: 720,
  },
  button: {
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 10,
    margin: 5,
  }
});
