// Importando os componentes necessários do React e React Native
import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, Button, Alert, Image } from "react-native";
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
        { text: "OK", onPress: () => deletarProduto(route.params.id) }
      ]
    );
  };

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
      <Text style={styles.category}>{produto?.categoria}</Text>
      <Text style={styles.price}>{produto?.precoReais}</Text>
      <Text style={styles.availability}>{produto?.disponibilidade ? "Disponível" : "Indisponível"}</Text>
      <Text style={styles.id}>{produto?.id}</Text>
      {/* Renderizando a imagem do produto (espaço reservado) */}
      <Image style={styles.image} source={{ uri: 'https://via.placeholder.com/150' }} />
      {/* Renderizando os botões de editar e deletar */}
      <Button title="Editar Produto" onPress={handleEdit} />
      <Button title="Deletar Produto" onPress={handleDelete} color="red" />
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
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 18,
  },
  category: {
    fontSize: 16,
    color: '#888',
  },
  price: {
    fontSize: 20,
    color: '#000',
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
});
