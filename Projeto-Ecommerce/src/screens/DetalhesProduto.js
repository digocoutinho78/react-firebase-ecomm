// Importando os componentes necessários do React e React Native
import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, Button, Alert, Image, TouchableOpacity } from "react-native";
import { pegarPorId, deletarProduto, editarProduto } from "../services/produtosService"; // Importando os métodos necessários do serviço de produtos

export default DetalhesProduto = ({ route, navigation }) => {
  const [produto, setProduto] = useState(null); // Estado para armazenar os detalhes do produto

  // Hook useEffect para buscar os detalhes do produto quando o componente for montado
  useEffect(() => {
    const fetch = async () => {
      const data = await pegarPorId(route.params.id); // Buscando os detalhes do produto
      setProduto(data); // Atualizando o estado com os detalhes do produto
    };
    fetch();
  }, []);

  // Função para lidar com a exclusão do produto
  const handleDelete = () => {

    Alert.alert(
      "Deletar Produto",
      "Tem certeza de que deseja deletar este produto?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        { 
          text: "OK", 
          onPress: async () => {
            await deletarProduto(route.params.id);
            navigation.goBack();
          } 
        }
      ]
    );
  };
  //   Alert.alert(
  //     "Deletar Produto",
  //     "Tem certeza de que deseja deletar este produto?",
  //     [
  //       {
  //         text: "Cancelar",
  //         style: "cancel"
  //       },
  //       { text: "OK", onPress: () => deletarProduto(route.params.id) }
  //     ]
  //   );
  // };

  // Função para lidar com a edição do produto
  const handleEdit = () => {
    // Aqui você pode navegar para a tela de edição de produto
    // Passando o ID do produto como parâmetro
    navigation.navigate('EditarProduto', { id: route.params.id });
  };

  // Renderização do componente
  return (
    <View style={styles.container}>
      {/* Renderizando os detalhes do produto */}
      <Text style={styles.title}>{produto?.nome}</Text>
      <Text style={styles.description}>{produto?.descricao}</Text>
      <Text style={styles.category}>categoria: {produto?.categoria}</Text>
      <Text style={styles.price}>valor: {produto?.precoReais}</Text>
      <Text style={styles.availability}>{produto?.disponibilidade ? "Disponível" : "Indisponível"}</Text>
      <Text style={styles.id}>{produto?.id}</Text>
      {/* Renderizando a imagem do produto (espaço reservado) */}
      <Image style={styles.image} source={{ uri: 'https://via.placeholder.com/150' }} />
      {/* Renderizando os botões de editar e deletar */}
      <TouchableOpacity style={styles.buttonEditar}  onPress={handleEdit} ><Text style={styles.TxtEditar}>Editar </Text></TouchableOpacity>
      <TouchableOpacity style={styles.buttonDeletar}  onPress={handleDelete}  ><Text style={styles.TxtDeletar}>Deletar </Text></TouchableOpacity>
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
  title: {
    color: "#E7ECEF",
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    color: "#A3CEF1",
    fontSize: 18,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight:20,
  },
  category: {
    fontSize: 16,
    color: '#888',
  },
  price: {
    fontSize: 20,
    color: "#A3CEF1",
    paddingTop: 20,
  },
  availability: {
    fontSize: 16,
    color: '#008000',
  },
  id: {
    fontSize: 12,
    color: '#888',
  },
  image: {
    width: 150,
    height: 150,
    margin: 10,
  },
  buttonDeletar:{
    width: 100,
    height: 40,
    backgroundColor: "red",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    marginBottom: 15,
    fontSize: 5,
    color:"white"
  },
  buttonEditar:{
    width: 100,
    height: 40,
    backgroundColor: "#A3CEF1",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    marginBottom: 15,
    fontSize: 5,
    color:"white"
  },
  TxtEditar:{
    textAlign: "center",
    fontSize: 14,
    color:"white"
  },
  TxtDeletar:{
    textAlign: "center",
    fontSize: 14,
    color:"white"
  }
});
