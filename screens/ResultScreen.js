import { View, Text, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ResultScreen({ navigation, route }) {
  // Se obtiene 'score' de los parámetros enviado desde GameScreen
  const { score = 0 } = route.params || {};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>¡Juego terminado!</Text>
        <Text style={styles.subtitle}>
          Respondiste {score} de 5 correctamente
        </Text>
        <Pressable
          onPress={() => navigation.replace('GameScreen')} // Reemplaza la pantalla en el stack
          style={styles.button}
        >
          <Text style={styles.buttonLabel}>Jugar de nuevo</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 28,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E3F2FD',
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#1A237E',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#546E7A',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4A90D9',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 28,
  },
  buttonLabel: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
