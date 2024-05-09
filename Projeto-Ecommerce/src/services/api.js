import axios from 'axios'


//Criando a const api que recebe o axios e a exportando para poder fazer o crud
export const api = axios.create({
  baseURL: 'https://projeto-final-react-nati-e44fd-default-rtdb.firebaseio.com/'
});