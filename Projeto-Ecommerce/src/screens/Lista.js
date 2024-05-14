// Lista originalmente chamado tabUm.js

import React, { useState, useCallback, useContext } from "react";
import {
  Text,
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  ImageBackground,
  Image
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { listarProduto } from "../services/produtosService"; // Importando o método listarProduto do serviço de produtos
import bgImage from '../../assets/bg-01.png';
import { AuthContext } from "../context/authContext";


// Componente TabUm
export default TabUm = ({ navigation }) => {
  // Adicionando navigation como propriedade
  const [todosProdutos, setTodosProdutos] = useState([]); // Estado para armazenar todos os produtos
  const authCtx = useContext(AuthContext)

  /*
    useEffect(() => {
        const fetch = async () => {
            console.log("USEEFFECT: ", authCtx.token.length)
            const data = await getAllTasks(authCtx.token)
            console.log("DATAA: ",data)
            setAllTasks(data)
        }
        fetch();
    }, [])
*/

  // Hook useFocusEffect para buscar os produtos quando a tela ganha foco
  useFocusEffect(
    useCallback(() => {
      const fetch = async () => {
        const data = await listarProduto(authCtx.token); // Buscando os produtos
        setTodosProdutos(data); // Atualizando o estado com os produtos buscados
      };
      fetch();
    }, [])
  );
  return (
    <View style={styles.container}>
      <ImageBackground source={bgImage} style={styles.bgImageStyle}>
      <Text style={styles.titleScreen}> PRODUTOS CADASTRADOS</Text>

      {/* Renderizando a lista de produtos */}
      <FlatList
        data={todosProdutos} // Dados dos produtos
        keyExtractor={(item) => item.id} // Chave única para cada item
        renderItem={({ item }) => (
          // Adicionando TouchableOpacity para tornar cada item clicável
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("DetalhesProduto", { id: item.id })
            }
          >
            {/* Renderizando cada item da lista */}
            <View style={styles.item}>
              {/* Renderizando os atributos do produto */}
              <Image source={{uri : item.img}} style={{width: 100, height: 100}}/>
              <Text style={styles.title}>{item.nome}</Text>
              <Text style={styles.description}>
                Descrição: {item.descricao}
              </Text>
              <Text style={styles.category}>Categoria: {item.categoria}</Text>
              <Text style={styles.price}>Valor unt: {item.precoReais}R$</Text>
              <Text style={styles.availability}>
                Status: {item.disponibilidade ? "Disponível" : "Indisponível"}
              </Text>
              <Text style={styles.id}>id: {item.id}</Text>
            </View>
          </TouchableOpacity>
        )}
        />
        </ImageBackground>
    </View>
  );
};

// Estilos do componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#274C77",
    paddingTop: 30,
  },
  item: {
    backgroundColor: "white",
    width: "90%",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    marginBottom: 10,
  },
  titleScreen: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
    color: "whitesmoke",
    marginTop: 80,
    marginBottom: 20,
    marginLeft: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    fontSize: 18,
  },
  category: {
    fontSize: 16,
    color: "#888",
  },
  price: {
    fontSize: 20,
    color: "#000",
  },
  availability: {
    fontSize: 16,
    color: "#008000",
  },
  id: {
    fontSize: 12,
    color: "#888",
  },
  bgImageStyle:{
    alignContent: 'center',
    flex: 1,
    width: "100%",
    justifyContent: 'center'
  },
});