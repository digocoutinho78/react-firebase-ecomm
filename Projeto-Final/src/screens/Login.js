import { useContext, useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import 'react-native-gesture-handler';
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet, Alert, ImageBackground } from "react-native";
import bgImage from '../../assets/bg-02.png'
import { AuthContext } from '../context/authContext';



export const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authCtx = useContext(AuthContext);


//para o metodo handle login

  const handleLogin = async() => {
  try{
  await authCtx.signin(email, password)
  }catch(err){
    Alert.alert('Erro', 'Email ou senha inválidos')
  }
  };

  return (
    <ImageBackground source={bgImage} style={styles.bgImageStyle}>
    <View  style={styles.container}>
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
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: '#274C77',
    
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

  bgImageStyle:{
    alignContent: 'center',
    flex: 1,
    width: "100%",
    justifyContent: 'center'
  }
});
