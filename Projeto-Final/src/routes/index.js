import Stack from "./RotasPublicas";
import RotasPrivadas from "./RotasPrivadas";
import RotasPublicas from "./RotasPublicas";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

//arquivo feito para ter o container de navegação chamando a tela do Stack
export default Routes = () => {

  const authCtx = useContext(AuthContext)


  return (
  <>
  {authCtx.isAuthenticated ? <RotasPrivadas /> : <RotasPublicas />}
  </>
  )
};
