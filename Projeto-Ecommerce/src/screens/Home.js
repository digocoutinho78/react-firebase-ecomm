import { Text, View, StyleSheet, Button, TextInput, Alert } from "react-native"
import { criarProduto, deletarProduto, editarProduto } from "../services/produtosService";
import { useState } from "react";

//Componente para testar as tabs estão funcionando
export default Home = () => {

  const [nomeProduto, setNomeProduto] = useState()
  const [descricao, setDescricao] = useState()
  const [categoria, setCategoria] = useState()
  const [precoReais, setPrecoReais] = useState()
  const [disponibilidade, setDisponibilidade] = useState(0)

const handleCadastroProduto = async(nomeProduto, descricao, categoria, precoReais, disponibilidade) => {
  try{
    const cadastrarProd = await criarProduto({
      nome: nomeProduto,
      descricao: descricao,
      categoria: categoria,
      precoReais: precoReais,
      disponibilidade: disponibilidade
    });
    setNomeProduto('');
      setDescricao('');
      setCategoria('');
      setPrecoReais('');
      setDisponibilidade('0');

    return Alert.alert("Cadastro concluido: ", "O produto foi cadastrado com sucesso.")
  }catch(err){
    Alert.alert("ERRO: ", err)
  }

}

  return(
    <View style={styles.container}>
      <Text  >Home</Text>
      <TextInput style={styles.input} value={nomeProduto} placeholder="Digite o nome do produto" onChangeText={setNomeProduto}/>
      <TextInput style={styles.input} value={descricao} placeholder="Descreva o produto" onChangeText={setDescricao}/>
      <TextInput style={styles.input} value={categoria} placeholder="Qual a categoria do produto" onChangeText={setCategoria}/>
      <TextInput style={styles.input} value={precoReais} placeholder="Qual o valor do produto" onChangeText={setPrecoReais}/>
      <TextInput  style={styles.input} value={disponibilidade} placeholder="Unidades disponiveis"  keyboardType="number-pad" onChangeText={setDisponibilidade}/>
      <Button title="cadastrar produto" onPress={() => handleCadastroProduto(nomeProduto, descricao, categoria, precoReais, disponibilidade)}/> 

      <Button title="deletar" onPress={() => deletarProduto("-NxYAHsDaXrJHavFyMjL")} />

      <Button title="editar" onPress={() => editarProduto("-NxY7skC6iAeKFdW09sY","jabulani", "A bola de futebol mais sinistra", "bola", "100R$", 50)}/>
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
    borderColor: "black",
    width: '50%',
    marginTop: 20,
    padding: 5
  }
});