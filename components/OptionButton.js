import { Pressable, Text, StyleSheet } from 'react-native';

export default function OptionButton({ label, onPress, disabled }) {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: disabled ? '#B0BEC5' : '#FFFFFF', // ✅ corregido
      borderWidth: 2,
      borderColor: disabled ? '#B0BEC5' : '#4A90D9',     // ✅ borde gris si está deshabilitado
      borderRadius: 10,
      paddingVertical: 14,
      paddingHorizontal: 16,
      marginVertical: 6,
      opacity: disabled ? 0.6 : 1,                       // ✅ opacidad corregida
    },
    label: {
      fontSize: 16,
      color: disabled ? '#546E7A' : '#212121',
      textAlign: 'center',
      fontWeight: '600',
    },
  });

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}              // ✅ ahora sí bloquea el onPress
      style={({ pressed }) => [
        styles.button,
        pressed && !disabled ? { backgroundColor: '#E3F2FD' } : null, // ✅ feedback visual
      ]}
    >
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}
