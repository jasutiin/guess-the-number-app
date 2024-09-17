import { View, Text, StyleSheet, Image } from 'react-native';
import Title from '../components/ui/Title';

function GameOverScreen() {
  return (
    <View style={styles.container}>
      <Title>GAME OVER!</Title>
      <Image source={require('../assets/images/success.png')} />
    </View>
  );
}

const styles = StyleSheet.create({});

export default GameOverScreen;
