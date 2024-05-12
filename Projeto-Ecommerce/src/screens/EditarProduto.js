// Importando os componentes necessários do React e React Native
import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, TextInput, Button, Alert } from "react-native";
import { pegarPorId, editarProduto } from "../services/produtosService"; // Importando os métodos necessários do serviço de produtos

export default EditarProduto = ({ route, navigation }) => {
  const [produto, setProduto] = useState(null); // Estado para armazenar os detalhes do produto

  // Hook useEffect para buscar os detalhes do produto quando o componente for montado
  useEffect(() => {
    const fetch = async () => {
      const data = await pegarPorId(route.params.id); // Buscando os detalhes do produto
      setProduto(data); // Atualizando o estado com os detalhes do produto
    };
    fetch();
  }, []);

  // Função para lidar com a edição do produto
  const handleEdit = async () => {
    try {
      // Editando o produto
      await editarProduto(route.params.id, produto.nome, produto.descricao, produto.categoria, produto.precoReais, produto.disponibilidade);
      Alert.alert('Produto editado com sucesso!');
      navigation.goBack(); // Voltando para a tela anterior
    } catch (err) {
      console.error(err);
      Alert.alert('Erro ao editar o produto.');
    }
  };

  // Renderização do componente
  return (
    <View style={styles.container}>
      {/* Renderizando o formulário de edição do produto */}
      <Text style={styles.label}>Nome:</Text>
      <TextInput style={styles.input} value={produto?.nome} onChangeText={text => setProduto({ ...produto, nome: text })} />
      <Text style={styles.label}>Descrição:</Text>
      <TextInput style={styles.input} value={produto?.descricao} onChangeText={text => setProduto({ ...produto, descricao: text })} />
      <Text style={styles.label}>Categoria:</Text>
      <TextInput style={styles.input} value={produto?.categoria} onChangeText={text => setProduto({ ...produto, categoria: text })} />
      <Text style={styles.label}>Preço:</Text>
      <TextInput style={styles.input} value={produto?.precoReais} onChangeText={text => setProduto({ ...produto, precoReais: text })} />
      <Text style={styles.label}>Disponibilidade:</Text>
      <TextInput style={styles.input} value={produto?.disponibilidade} onChangeText={text => setProduto({ ...produto, disponibilidade: text })} />
      {/* Renderizando o botão de edição */}
      <Button title="Confirmar alteração" onPress={handleEdit} />
    </View>
  );
};

// Estilos do componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#274C77",
  },
  label: {
    color: "#A3CEF1",
    fontSize: 18,
    fontWeight: 'bold',
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
});