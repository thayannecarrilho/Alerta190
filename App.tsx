import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image
} from 'react-native';

import Logo from './assets/logo.png';

const App = () => {
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = () => {
    Alert.alert("Estamos encaminhando uma viatura", "Por favor, aguarde...");
  };

  return (
    <View style={styles.container}>
      {!showForm ? (
        <>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={Logo} />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setShowForm(true)}
          >
            <Text style={styles.buttonText}>Pedir socorro</Text>
          </TouchableOpacity>
        </>
      ) : (
        <View style={styles.form}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => setShowForm(false)}
          >
            <Text style={styles.backButtonText}>Voltar</Text>
          </TouchableOpacity>

          <Text style={styles.label}>Nome:</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Digite seu nome" 
            placeholderTextColor="#bbb" 
          />

          <Text style={styles.label}>Telefone:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu telefone"
            placeholderTextColor="#bbb"
            keyboardType="phone-pad"
          />

          <Text style={styles.label}>Localização atual:</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Digite sua localização" 
            placeholderTextColor="#bbb" 
          />

          <Text style={styles.label}>Observação:</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Digite alguma observação"
            placeholderTextColor="#bbb"
            multiline
          />

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111',
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 200,
  },
  button: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  form: {
    width: '80%',
  },
  backButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  backButtonText: {
    fontSize: 16,
    color: '#111',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    color: '#fff', // Texto do input
  },
  textArea: {
    height: 100,
  },
});

export default App;
