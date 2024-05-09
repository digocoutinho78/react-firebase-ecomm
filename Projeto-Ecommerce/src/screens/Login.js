import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import 'react-native-gesture-handler';
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet, Alert } from "react-native";


export const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    //ativar quando concluir teste
    // if (email === 'nome@email.com' && password === '123456') {
      if (email === '' && password === '') {
      navigation.navigate('Tabs');
    } else {
      Alert.alert('Erro', 'Email ou senha inválidos');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header} >
        
      </View>
      <TextInput 
        style={styles.input} 
        placeholder="Email" 
        value={email}
        onChangeText={setEmail}
      />
      <TextInput 
        style={styles.input} 
        placeholder="Senha" 
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#274C77",
  },
  title: {
    fontSize: 20,
  },
  input: {
    width: 250,
    height: 40,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    marginBottom: 15,
  },
  button: {
    width: 100,
    height: 40,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  buttonText: {
    color: "#E7ECEF",
    fontSize: 15,

    textAlign: "center",
  },

  primlelogoimg: {
    margin: 10,
    height: "100px",
  },

  amazonlogoimg: {
    marginTop: -32,
    marginLeft: 45,
    height: 70,
    marginBottom: 90,
  },
  header: {
    width: "100%",
    paddingTop: 40,
    alignItems: "center",
    justifyContent: "center",
    height: "10%",
  },
});
