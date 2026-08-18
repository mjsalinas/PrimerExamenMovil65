
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import OptionButton from '../components/OptionButton';
import { questions } from '../data/questions';

 export default function GameScreen({ navigation }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [attempts, setAttempts] = useState(3); 
  const [score, setScore] = useState(0);
  const [isCoolingDown, setIsCoolingDown] = useState(false);
  const [countdown, setCountdown] = useState(3); 

  const question = questions[currentQuestion];

  
  useEffect(() => {
    if (!isCoolingDown) return;

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsCoolingDown(false);
          return 3; 
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isCoolingDown]);

  const handleAnswer = (index) => {
    if (index === question.correct) {
      const nextScore = score + 1;
      setScore(nextScore); 
      
      
      setIsCoolingDown(true);
      setCountdown(3);

      const nextQuestion = currentQuestion + 1;
      if (nextQuestion >= questions.length) {

        navigation.navigate('Results', { puntos: nextScore }); 
      } else {
        setCurrentQuestion(nextQuestion);
        setAttempts(3);
      }
    } else {
      setAttempts((prev) => {
        const nextAttempts = prev - 1;
        if (nextAttempts <= 0) {
          navigation.navigate('Results', { puntos: score });
        }
        return nextAttempts;
      }); 
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.progress}>
          Pregunta {currentQuestion + 1} de {questions.length}
        </Text>
        <Text style={styles.score}>Puntaje: {score}</Text>
      </View>

      <Text
        style={[
          styles.attempts,
          { color: attempts <= 1 ? '#C00000' : '#333' }, 
        ]}
      >
        Intentos restantes: {attempts}
      </Text>

      <Text style={styles.question}>{question?.question}</Text>

      <View style={styles.options}>
        {question?.options.map((option, index) => (
          <OptionButton
            key={`${question.id}-${index}`}
            label={option}
            onPress={() => handleAnswer(index)}
            disabled={isCoolingDown}
          />
        ))}
      </View>

      {isCoolingDown && (
        <Text style={styles.cooldown}>
          ⏳ Espera {countdown} segundo(s)...
        </Text>
      )}
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  progress: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4A90D9',
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
  cooldown: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: '600',
    color: '#E65100',
    textAlign: 'center',
  },
});
