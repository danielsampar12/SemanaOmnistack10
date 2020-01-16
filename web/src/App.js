import React, {useState} from 'react';

//Componente: Bloco isolado de JSX: HTML, CSS e JS, o qual não interfere no restante da aplicação
//Propriedade: Informações que um componete PAI passa para um componente FILHO
//Estado: Informações mantidas pelo componente (Lembrar: imutabilidade)

function App() {
  const [counter, setCounter] = useState(0);

  function incrementCounter(){
    setCounter(counter + 1);
  }
  return (
    <>
<h1>Contador: {counter}</h1>
    <button onClick={incrementCounter}>Incrementar</button>
    </>
  );
}

export default App;
