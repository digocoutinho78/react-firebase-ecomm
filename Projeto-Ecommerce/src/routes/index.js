import Stack from "./RotasPublicas";
import RotasPrivadas from "./RotasPrivadas";
import RotasPublicas from "./RotasPublicas";

//arquivo feito para ter o container de navegação chamando a tela do Stack
export default Routes = () => {
  const estaLogado = false;

  return (
  <>
  {estaLogado ? <RotasPrivadas /> : <RotasPublicas />}
  </>
  )
};
