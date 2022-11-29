import { useState, useEffect } from 'react'
import InputMask from 'react-input-mask';

import './App.css'
import './assets/components/Centavos/Centavos'


function App() {

//variáveis centavos
  const [quantity5, setQuantity5] = useState()
  const [quantity10, setQuantity10] = useState()
  const [quantity25, setQuantity25] = useState()
  const [quantity50, setQuantity50] = useState()
  const [quantity1, setQuantity1] = useState()
  const [quantityP, setQuantityP] = useState()
  
  const total5 = quantity5 * 0.05
  const total10 = quantity10 * 0.10
  const total25 = quantity25 * 0.25
  const total50 = quantity50 * 0.50
  const total1 = quantity1 * 1
  const totalP = quantityP * 1

  //cedulass

  const [quantity2R, setQuantity2R] = useState()
  const [quantity5R, setQuantity5R] = useState()
  const [quantity10R, setQuantity10R] = useState()
  const [quantity20R, setQuantity20R] = useState()
  const [quantity50R, setQuantity50R] = useState()
  const [quantity100R, setQuantity100R] = useState()
  
  const total2R = quantity2R * 2
  const total5R = quantity5R * 5
  const total10R = quantity10R * 10
  const total20R = quantity20R * 20
  const total50R = quantity50R * 50
  const total100R = quantity100R * 100

  
  const [totaisFundo, setTotaisFundo] = useState(0)
 

  let retirada = totaisFundo.toFixed(2) - 250.00

  //funções soma de valores centavos

 

  function handleSaveValues5(){
    let addValue = totaisFundo + total5;

    setTotaisFundo(addValue)
  }

  function handleSaveValues10(){
    let addValue = totaisFundo + total10;

    setTotaisFundo(addValue)
  }

    function handleSaveValues25(){
      let addValue = totaisFundo + total25;

      setTotaisFundo(addValue)
    }

    function handleSaveValues50(){
      let addValue = totaisFundo + total50;

      setTotaisFundo(addValue)
    }

    function handleSaveValues1(){
      let addValue = totaisFundo + total1;

      setTotaisFundo(addValue)
    }

    function handleSaveValuesP(){
      let addValue = totaisFundo + totalP;

      setTotaisFundo(addValue)
    }

    //cedulass

    function handleSaveValues2R(){
      let addValue = totaisFundo + total2R;
  
      setTotaisFundo(addValue)
    }
  
    function handleSaveValues5R(){
      let addValue = totaisFundo + total5R;
  
      setTotaisFundo(addValue)
    }
  
      function handleSaveValues10R(){
        let addValue = totaisFundo + total10R;
  
        setTotaisFundo(addValue)
      }
  
      function handleSaveValues20R(){
        let addValue = totaisFundo + total20R;
  
        setTotaisFundo(addValue)
      }
  
      function handleSaveValues50R(){
        let addValue = totaisFundo + total50R;
  
        setTotaisFundo(addValue)
      }

      function handleSaveValues100R(){
        let addValue = totaisFundo + total100R;
  
        setTotaisFundo(addValue)
      }


  
  return (
    <div className="App">

      <div className='centsDiv'>


      <div className='cents'>
      <p><span> 5 centavos </span> - Quantidade: <input type="number" value={quantity5} onChange={(e)=> setQuantity5(e.target.value)}/> <button onClick={handleSaveValues5}>Add</button></p> 
    
      <div>
      <p>Valor em moedas de 5: <span> R${total5.toFixed(2)} reais</span> </p>
      </div>

      </div>

      <div className='cents'>
      <p><span> 10 centavos </span> - Quantidade: <input type="number" value={quantity10} onChange={(e)=> setQuantity10(e.target.value)}/> <button onClick={handleSaveValues10}>Add</button></p> 
    
      <div>
      <p>Valor em moedas de 10: <span> R${total10.toFixed(2)} reais</span> </p>
      </div>

      </div>
   
      <div className='cents'>
      <p><span> 25 centavos </span> - Quantidade: <input type="number" value={quantity25} onChange={(e)=> setQuantity25(e.target.value)}/> <button onClick={handleSaveValues25}>Add</button></p> 
    
      <div>
      <p>Valor em moedas de 25: <span> R${total25.toFixed(2)} reais</span> </p>
      </div>

      </div>
   
      <div className='cents'>
      <p><span> 50 centavos </span> - Quantidade: <input type="number" value={quantity50} onChange={(e)=> setQuantity50(e.target.value)}/> <button onClick={handleSaveValues50}>Add</button></p> 
    
      <div>
      <p>Valor em moedas de 50: <span> R${total50.toFixed(2)} reais</span> </p>
      </div>

      </div>
   
      <div className='cents'>
      <p><span> 1 real em moeda</span> - Quantidade: <input type="number" value={quantity1} onChange={(e)=> setQuantity1(e.target.value)}/> <button onClick={handleSaveValues1}>Add</button></p> 
    
      <div>
      <p>Valor em moedas de 1 real: <span> R${total1.toFixed(2)} reais</span> </p>
      </div>

      </div>

      <div className='pacotes'>
      <p><span> Dinheiro em Pacotes </span> - Quantidade: <input type="number" value={quantityP} onChange={(e)=> setQuantityP(e.target.value)}/> <button onClick={handleSaveValuesP}>Add</button></p> 
    
      <div>
      <p>Valor em pacotes: <span> R${totalP.toFixed(2)} reais</span> </p>
      </div>

      </div>
      
      </div>

      <div className='cedulasDiv'>

      <div className='cedula'>
      <p><span> 2 reais </span> - Quantidade: <input type="number" value={quantity2R} onChange={(e)=> setQuantity2R(e.target.value)}/> <button onClick={handleSaveValues2R}>Add</button></p> 
    
      <div>
      <p>Valor em cédulas de 2 reais: <span> R${total2R.toFixed(2)} reais</span> </p>
      </div>

      </div>

      <div className='cedula'>
      <p><span> 5 reais </span> - Quantidade: <input type="number" value={quantity5R} onChange={(e)=> setQuantity5R(e.target.value)}/> <button onClick={handleSaveValues5R}>Add</button></p> 
    
      <div>
      <p>Valor em cédulas de 5 reais: <span> R${total5R.toFixed(2)} reais</span> </p>
      </div>

      </div>

      <div className='cedula'>
      <p><span> 10 reais </span> - Quantidade: <input type="number" value={quantity10R} onChange={(e)=> setQuantity10R(e.target.value)}/> <button onClick={handleSaveValues10R}>Add</button></p> 
    
      <div>
      <p>Valor em cédulas de 10 reais: <span> R${total10R.toFixed(2)} reais</span> </p>
      </div>

      </div>

      <div className='cedula'>
      <p><span> 20 reais </span> - Quantidade: <input type="number" value={quantity20R} onChange={(e)=> setQuantity20R(e.target.value)}/> <button onClick={handleSaveValues20R}>Add</button></p> 
    
      <div>
      <p>Valor em cédulas de 20 reais: <span> R${total20R.toFixed(2)} reais</span> </p>
      </div>

      </div>

      <div className='cedula'>
      <p><span> 50 reais </span> - Quantidade: <input type="number" value={quantity50R} onChange={(e)=> setQuantity50R(e.target.value)}/> <button onClick={handleSaveValues50R}>Add</button></p> 
    
      <div>
      <p>Valor em cédulas de 50 reais: <span> R${total50R.toFixed(2)} reais</span> </p>
      </div>

      </div>

      <div className='cedula'>
      <p><span> 100 reais </span> - Quantidade: <input type="number" value={quantity100R} onChange={(e)=> setQuantity100R(e.target.value)}/> <button onClick={handleSaveValues100R}>Add</button></p> 
    
      <div>
      <p>Valor em cédulas de 100 reais: <span> R${total100R.toFixed(2)} reais</span> </p>
      </div>

      </div>

      </div>

      <div className='totais'>

        <p>Total em caixa: <span>R${totaisFundo.toFixed(2)}</span> reais</p>

        <p>Retire <span>R${retirada > 0 &&(
          retirada.toFixed(2)
        )}</span> do caixa!</p>

      </div>
    </div>
  )
}

export default App
