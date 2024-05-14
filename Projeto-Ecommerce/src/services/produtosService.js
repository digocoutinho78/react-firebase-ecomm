import { Alert } from 'react-native';
import { api } from './api'


// Método para criar/cadastrar um produto com um parâmetro para a categoria do produto
export const criarProduto = async (dadosProduto, token) => {
  try {
    // Faz uma requisição POST para a API, enviando os dados do produto
    const resp = await api.post(`/Produtos.json?auth=${token}`, dadosProduto);
  } catch (err) {
    // Em caso de erro, loga a mensagem de erro
    console.log("ERRO: " + err);
  }
};

// Método para excluir um produto
export const deletarProduto = async (id) => {
  try {
    // Faz uma requisição DELETE para a API, passando o ID do produto a ser excluído
    const resp = await api.delete("/Produtos/" + id + ".json");
    Alert.alert("Produto deletado com sucesso.")
  } catch (err) {
    // Em caso de erro, loga a mensagem de erro
    console.log("ERRO: " + err);
  }
};

// Método para editar um produto
export const editarProduto = async (
  id,
  nome,
  descricao,
  categoria,
  precoReal,
  disponibilidade
) => {
  try {
    // Faz uma requisição PUT para a API, atualizando os dados do produto com base no ID
    const resp = await api.put(`/Produtos/${id}.json`, {
      nome: nome,
      descricao: descricao,
      categoria: categoria,
      precoReais: precoReal,
      disponibilidade: disponibilidade,
    });
  } catch (err) {
    // Em caso de erro, loga a mensagem de erro
    console.log("ERRO: " + err);
  }
};

// Método para listar todos os produtos
export const listarProduto = async (token) => {
  try {
    const produtos = [];
    // Faz uma requisição GET para a API, obtendo todos os produtos
    const resp = await api.get(`/Produtos.json?auth=${token}`);

    // Itera sobre os produtos retornados e os adiciona a um array
    for (const key in resp.data) {
      const produto = {
        ...resp.data[key],
        id: key,
        
      };
      produtos.push(produto);
    }
    return produtos; // Retorna a lista de produtos
  } catch (err) {
    // Em caso de erro, loga a mensagem de erro
    console.log(err);
  }
};

// Método para obter um produto específico por ID
export const pegarPorId = async (id) => {
  try {
    // Faz uma requisição GET para a API, obtendo os dados do produto com base no ID
    const resp = await api.get(`/Produtos/${id}.json`);
    return resp.data; // Retorna os dados do produto
  } catch (err) {
    // Em caso de erro, loga a mensagem de erro
    console.log("ERRO: ", err);
  }
};
