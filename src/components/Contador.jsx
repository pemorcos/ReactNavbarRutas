import { useState } from "react";

function Contador() {
    const [countador, setContador] = useState(0)

    // function handleClick() {
    //   setContador(countador + 1);
    // }
  
    function handleOtherClick() {
      setContador(countador - 1);
    }
  
    return (
      <div>
        <h1>{countador}</h1>
        <button onClick={() => setContador(countador + 1)}>+</button>
        <button onClick={handleOtherClick}>-</button>
      </div>

    )

  }
export default Contador;