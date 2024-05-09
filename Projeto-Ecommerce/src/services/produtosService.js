import { api } from './api'


//Criando os metodos do crud

//Metodo para criar/cadastrar o produto
export const criarProduto = async() => {
try{

  const resp = await api.post()
}
catch(err){
  console.log("ERRO: " + err)
}


}

//Metodo para excluir o produto
export const deletarProduto = async() => {
  try{

    const resp = await api.delete()
  }
  catch(err){
    console.log("ERRO: " + err)
  }

}


//Metodo para editar o produto
export const editarProduto = async() => {

  try{

    const resp = await api.put()
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
