import { api } from "./api";

//Criando os metodos do crud

//Metodo para criar/cadastrar o produto com um parametro para categoria do produto para
//
export const criarProduto = async (dadosProduto) => {
  try {
    const resp = await api.post(`/Produtos.json`, dadosProduto);
  } catch (err) {
    console.log("ERRO: " + err);
  }
};

//Metodo para excluir o produto
export const deletarProduto = async (id) => {
  try {
    const resp = await api.delete("/Produtos/" + id + ".json");
  } catch (err) {
    console.log("ERRO: " + err);
  }
};

//Metodo para editar o produto
export const editarProduto = async (
  id,
  nome,
  descricao,
  categoria,
  precoReal,
  disponibilidade
) => {
  try {
    const resp = await api.put(`/Produtos/${id}.json`, {
      nome: nome,
      descricao: descricao,
      categoria: categoria,
      precoReais: precoReal,
      disponibilidade: disponibilidade,
    });
  } catch (err) {
    console.log("ERRO: " + err);
  }
};

//Metodo para listar os produto
export const listarProduto = async (token) => {
  try {
    const produtos = [];
    const resp = await api.get(`/Produtos?key=${token}.json`);

    for (key in resp.data) {
      const produto = {
        ...resp.data[key],
        id: key,
      };
      produtos.push(produto);
    }
    return produtos;
  } catch (err) {
    console.log(err);
  }
};

export const pegarPorId = async (id) => {
  try {
    const resp = await api.get(`/Produtos/${id}.json`);
    return resp.data;
  } catch (err) {
    console.log("ERRO: ", err);
  }
};
