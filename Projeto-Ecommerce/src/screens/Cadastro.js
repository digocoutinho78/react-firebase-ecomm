//cadastro originalmente chamado de Home.js

import { Text, View, StyleSheet, Button, TextInput, Alert, ImageBackground, KeyboardAvoidingView, Platform} from "react-native";
import {
  criarProduto,
  deletarProduto,
  editarProduto,
} from "../services/produtosService";
import { useState } from "react";
import bgImage from '../../assets/bg-01.png';
import * as ImagePicker from 'expo-image-picker';


//Componente para testar as tabs estão funcionando
export default Home = () => {
  const [nomeProduto, setNomeProduto] = useState();
  const [descricao, setDescricao] = useState();
  const [categoria, setCategoria] = useState();
  const [precoReais, setPrecoReais] = useState();
  const [disponibilidade, setDisponibilidade] = useState(0);
  const [img, setImg] = useState();

  
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.2,
      base64: true
    });

    console.log(result);

    if (!result.canceled) {
      setImg(result.assets[0].uri);
    }
  };

  const handleCadastroProduto = async (
    img,
    nomeProduto,
    descricao,
    categoria,
    precoReais,
    disponibilidade
  ) => {
    try {
      const cadastrarProd = await criarProduto({
        img: img,
        nome: nomeProduto,
        descricao: descricao,
        categoria: categoria,
        precoReais: precoReais,
        disponibilidade: disponibilidade,
      });
      setNomeProduto("");
      setDescricao("");
      setCategoria("");
      setPrecoReais("");
      setDisponibilidade("0");
      setImg("");

      return Alert.alert(
        "Cadastro concluido: ",
        "O produto foi cadastrado com sucesso."
      );
    } catch (err) {
      Alert.alert("ERRO: ", err);
    }
  };

  return (
    <ImageBackground source={bgImage} style={styles.bgImageStyle}>
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
   
      <Text style={styles.textoTit}>CADASTRAR PRODUTO</Text>
      <Text></Text>
      <Text style={styles.texto}>NOME PRODUTO</Text>
      <TextInput
        style={styles.input}
        value={nomeProduto}
        onChangeText={setNomeProduto}
      />
      <Text style={styles.texto}>DESCRIÇÃO</Text>
      <TextInput
        // permite a linha infinta
        multiline
        numberOfLines={4}
        maxLength={120}
        style={styles.inputDescricao}
        value={descricao}
        onChangeText={setDescricao}
      />
      <Text style={styles.texto}>CATEGORIA</Text>
      <TextInput
        style={styles.input}
        value={categoria}
        onChangeText={setCategoria}
      />
      <Text style={styles.texto}>PREÇO</Text>
      <TextInput
        style={styles.input}
        value={precoReais}
        keyboardType="number-pad"
        onChangeText={setPrecoReais}
      />
      <Text style={styles.texto}>QUANTIDADE DISPONÍVEL</Text>
      <TextInput
        style={styles.input}
        value={disponibilidade}
        keyboardType="number-pad"
        onChangeText={setDisponibilidade}
      />
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {img && <Image source={{ uri: img }} style={{width: 100, height: 100 }} />}
      <Button
        title="cadastrar produto"
        onPress={() =>
          handleCadastroProduto(
            img,
            nomeProduto,
            descricao,
            categoria,
            precoReais,
            disponibilidade
          )
        }
      />
    
      </KeyboardAvoidingView>
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#274C77",
    paddingTop: 30,
  },
  input: {
    borderWidth: 2,
    width: 250,
    borderColor: "#A3CEF1",
    marginTop: 10,
    marginBottom: 30,
    borderRadius: 10,
    backgroundColor: "#E7ECEF",
    paddingLeft: 10,
    paddingRight: 10,
    height:30,
  },
  inputDescricao: {
    borderWidth: 2,
    width: 250,
    borderColor: "#A3CEF1",
    height: 70,
    marginTop: 10,
    marginBottom: 30,
    borderRadius: 10,
    backgroundColor: "#E7ECEF",
    paddingLeft: 10,
    paddingRight: 10,
  },

  texto: {
    color: "#A3CEF1",
  },

  textoTit: {
    color: "#E7ECEF",
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 20,
    marginTop: 20,
    textAlign: "center",
  },
  button: {
    marginBottom: 20,
    marginTop: 20,
    textAlign: "center",
  },
  bgImageStyle:{
    alignContent: 'center',
    flex: 1,
    width: "100%",
    justifyContent: 'center'
  }
});