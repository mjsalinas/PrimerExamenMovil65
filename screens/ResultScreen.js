import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ResultScreen({ route, navigation }) {
  const { score, total } = route.params || { score: 0, total: 5 };

  const handleRestart = () => {
    navigation.replace('GameScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Juego terminado!</Text>
      <Text style={styles.scoreText}>
        Respondiste {score} de {total} correctamente
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Jugar de nuevo" onPress={handleRestart} color="#4A90D9" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  scoreText: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '60%',
  },
});