import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import OptionButton from '../components/OptionButton';
import { questions } from '../data/questions';

export default function GameScreen({ navigation }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [attempts, setAttempts] = useState(3);
  const [score, setScore] = useState(0);
  const [isCoolingDown, setIsCoolingDown] = useState(false);
  const [cooldownTimer, setCooldownTimer] = useState(3);

  const currentQuestion = questions[currentIndex];

  // Inciso D: Detecta cuando los intentos llegan a 0 para iniciar el cooldown
  useEffect(() => {
    if (attempts === 0 && !isCoolingDown) {
      setIsCoolingDown(true);
      setCooldownTimer(3);
    }
  }, [attempts]);

  // Inciso D: Manejo del temporizador (setInterval) con su respectiva limpieza
  useEffect(() => {
    let interval = null;

    if (isCoolingDown) {
      interval = setInterval(() => {
        setCooldownTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setIsCoolingDown(false);
            setAttempts(3);
            return 3;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isCoolingDown]);

  const handleSelectOption = (index) => {
    if (isCoolingDown) return;

    if (index === currentQuestion.correctIndex) {
      const newScore = score + 1;
      setScore(newScore);

      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(currentIndex + 1);
        setAttempts(3);
      } else {
        navigation.navigate('ResultScreen', { score: newScore, total: questions.length });
      }
    } else {
      setAttempts((prev) => prev - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.scoreText}>Puntaje: {score} / {questions.length}</Text>
      
      <Text style={styles.questionText}>{currentQuestion.question}</Text>

      {isCoolingDown ? (
        <Text style={styles.cooldownText}>
          Espera {cooldownTimer} segundo(s)...
        </Text>
      ) : (
        <Text style={[styles.attemptsText, attempts <= 1 && styles.warningAttempts]}>
          Intentos restantes: {attempts}
        </Text>
      )}

      <View style={styles.optionsContainer}>
        {currentQuestion.options.map((option, idx) => (
          <OptionButton
            key={idx}
            title={option}
            disabled={isCoolingDown}
            onPress={() => handleSelectOption(idx)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  scoreText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  questionText: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 20,
    textAlign: 'center',
  },
  attemptsText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  warningAttempts: {
    color: '#C00000',
    fontWeight: 'bold',
  },
  cooldownText: {
    fontSize: 16,
    color: '#D32F2F',
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  optionsContainer: {
    width: '100%',
  },
});