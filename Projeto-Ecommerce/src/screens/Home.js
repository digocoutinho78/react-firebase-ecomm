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
      <Text  >Home</Text>
      <TextInput style={styles.input} value={nomeProduto} onChangeText={setNomeProduto}/>
      <TextInput style={styles.input} value={descricao} onChangeText={setDescricao}/>
      <TextInput style={styles.input} value={categoria} onChangeText={setCategoria}/>
      <TextInput style={styles.input} value={precoReais} onChangeText={setPrecoReais}/>
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
    borderColor: "black"
  }
});