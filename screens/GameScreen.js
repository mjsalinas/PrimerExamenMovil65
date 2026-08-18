import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import OptionButton from '../components/OptionButton';
import { questions } from '../data/questions';

export default function GameScreen({ navigation }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [attempts, setAttempts] = useState(3);
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    let timer;
    if (cooldown > 0) {
      timer = setInterval(() => {
        setCooldown((prev) => {
          if (prev === 1) {
            clearInterval(timer);
            setAttempts(3);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [cooldown]);

  const handleAnswer = (isCorrect) => {
    if (cooldown > 0) return;

    if (isCorrect) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setAttempts((prev) => {
        if (prev === 1) {
          setCooldown(3);
          return 0;
        }
        return prev - 1;
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Pregunta {currentQuestion + 1}</Text>
      <Text style={styles.subtitle}>Intentos restantes: {attempts}</Text>
      {cooldown > 0 && <Text style={styles.cooldown}>Espera {cooldown}...</Text>}

      {questions[currentQuestion].options.map((opt, idx) => (
        <OptionButton
          key={idx}
          label={opt.text}
          onPress={() => handleAnswer(opt.isCorrect)}
          disabled={cooldown > 0}
        />
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 18, marginBottom: 10 },
  cooldown: { fontSize: 18, color: 'red', marginBottom: 10 },
});
