import { Text, View, StyleSheet, Button, TextInput } from "react-native"
import { criarProduto } from "../services/produtosService";
import { useState } from "react";

//Componente para testar as tabs estão funcionando
export default Home = () => {

  const [nomeProduto, setNomeProduto] = useState()
  const [descricao, setDescricao] = useState()
  const [categoria, setCategoria] = useState()
  const [precoReais, setPrecoReais] = useState()
  const [disponibilidade, setDisponibilidade] = useState(0)

  return(
    <View style={styles.container}>
      <Text style={styles.textoTit} >CADASTRAR PRODUTO</Text>
      <Text  ></Text>
      <Text style={styles.texto} >NOME PRODUTO</Text>
      <TextInput style={styles.input} value={nomeProduto} onChangeText={setNomeProduto}/>
      <Text style={styles.texto} >DESCRIÇÃO</Text>
      <TextInput 
      // permite a linha infinta
      multiline 
      numberOfLines={4}
        maxLength={120}
      style={styles.inputDescricao} value={descricao} onChangeText={setDescricao}/>
      <Text style={styles.texto} >CATEGORIA</Text>
      <TextInput style={styles.input} value={categoria} onChangeText={setCategoria}/>
      <Text style={styles.texto} >PREÇO</Text>
      <TextInput style={styles.input} value={precoReais} onChangeText={setPrecoReais}/>
      <Text style={styles.texto} >QUANTIDADE DISPONÍVEL</Text>
      <TextInput  style={styles.input} value={disponibilidade} onChangeText={setDisponibilidade}/>
      <Button title="cadastrar produto" onPress={() => criarProduto({
        nome: nomeProduto,
        descricao: descricao,
        categoria: categoria,
        precoReais: precoReais,
        disponibilidade: disponibilidade
      })}/> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#274C77",
  },
  input: {
    borderWidth: 2,
    width:250,
    borderColor: "#A3CEF1",
    marginTop:10,
    marginBottom:30,
    borderRadius: 10,
    backgroundColor: "#E7ECEF",
    paddingLeft:10,
    paddingRight: 10,
  },
  inputDescricao: {
    borderWidth: 2,
    width:250,
    borderColor: "#A3CEF1",
    height: 70,
    marginTop:10,
    marginBottom:30,
    borderRadius: 10,
    backgroundColor: "#E7ECEF",
    paddingLeft:10,
    paddingRight: 10,
  },

  texto: {
    color: "#A3CEF1",
    
  },

  textoTit: {
    color: "#E7ECEF",
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 20,
    marginTop: 20,
    textAlign: "center"
  }
});