import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import OptionButton from '../components/OptionButton';
import { questions } from '../data/questions';

export default function GameScreen({ navigation }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [attempts, setAttempts] = useState(3); // ✅ inicia con 3 intentos
  const [score, setScore] = useState(0);

  const question = questions[currentQuestion];

  const handleAnswer = (index) => {
    if (index === question.correct) {
      setScore(score + 1); // ✅ suma puntaje
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion >= questions.length) {
        navigation.navigate('ResultScreen', { puntos: score + 1 }); // ✅ pasa puntaje correcto
      } else {
        setCurrentQuestion(nextQuestion);
        setAttempts(3); // ✅ reinicia intentos
      }
    } else {
      setAttempts(attempts - 1); // ✅ resta intentos
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.score}>Puntaje: {score} / 5</Text> {/* ✅ puntaje arriba */}
      </View>

      <Text
        style={[
          styles.attempts,
          { color: attempts <= 1 ? '#C00000' : '#333' }, // ✅ rojo si queda 1 o menos
        ]}
      >
        Intentos restantes: {attempts}
      </Text>

      <Text style={styles.question}>{question.question}</Text>

      <View style={styles.options}>
        {question.options.map((option, index) => (
          <OptionButton
            key={`${question.id}-${index}`}
            label={option}
            onPress={() => handleAnswer(index)}
            disabled={attempts <= 0} // ✅ deshabilita si ya no hay intentos
          />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 12,
  },
  score: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
  },
  attempts: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 24,
  },
  question: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1A237E',
    marginBottom: 24,
    lineHeight: 30,
  },
  options: {
    marginBottom: 16,
  },
});
