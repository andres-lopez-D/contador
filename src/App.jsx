import {useState} from "react";

function App(){

  const [cuenta, setCuenta] = useState(0);
  const [paso, setPaso] = useState(1);

const handleMinusClick = () => {
  console.log(paso);
setCuenta(cuenta - paso);
};
const handleResetClick = () => {
  setCuenta(0);
  setPaso(1);
};
const handlePlusClick = () => {
  setCuenta(cuenta + paso);
};


const handleInputChange = (e) => {
   if(isNaN(e.target.value)){
     return;
   }
   setPaso(Number(e.target.value));
};
SetCuenta
};

    return(
        <div className="App">
        <h3>Contador</h3>
        <hr />
        <h2 className="text-center">0</h2>
        <hr />
        <div style={{
          display: "flex", 
          justifyContent: "flex-end",
          marginRight: "5px",
        }}
        >
          <label>
            Paso
            <input id="" name="" type="text" onChange={handleInputChange} style={{marginLeft: "5px", width: "60px" }
            }}/>
          </label>
          <button type="button" className="btn 
          btn-primary" onClick={() => {
            onclick={handleMinusClick}
            style={{marginleft: "5px"}}
          >
          <button type="button" className="btn 
          btn-primary" onClick={() => {
            onclick={handleResetClick}
            style={{marginleft: "5px"}}
        -1
        </button>
        </div>
        </div>
   );
}

export default App