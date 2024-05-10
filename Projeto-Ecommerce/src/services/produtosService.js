import { api } from './api'


//Criando os metodos do crud

//Metodo para criar/cadastrar o produto com um parametro para categoria do produto para 
//
export const criarProduto = async (teste) => {
try{

  const resp = await api.post(`/Produtos.json`, teste)
}
catch(err){
  console.log("ERRO: " + err)
}


}

//Metodo para excluir o produto 
export const deletarProduto = async(id) => {
  try{
    const resp = await api.delete(`/Produtos`+ id + 'json')
  }
  catch(err){
    console.log("ERRO: " + err)
  }

}


//Metodo para editar o produto
export const editarProduto = async(id,nome, descricao, categoria, precoReal, disponibilidade) => {

  try{

    const resp = await api.put(`/Produtos/${id}.json`,{
      nome: nome,
      descricao: descricao,
      categoria: categoria,
      precoReais: precoReal,
      disponibilidade: disponibilidade 
    })
  }
  catch(err){
    console.log("ERRO: " + err)
  }

}


//Metodo para listar os produto
export const listarProduto = async() => {

  try{
    const resp = await api.get()
  }
  catch(err){
    console.log("ERRO: " + err)
  }
}
