import { useState } from 'react'
import './Centavos.css'

export default function Centavos({cents, onAddValue}){

  
  const [quantity, setQuantity] = useState()

  const total = quantity * cents



  function handleSaveCount(){
    const data = {

      quantity, total

    }

    console.log(data);
    onAddValue(data)
  }

  return (


    <div>
    <p><span>{cents} centavos </span> - Quantidade: <input type="number" value={quantity} onChange={(e)=> setQuantity(e.target.value)}/> <button onClick={handleSaveCount}>Add</button></p> 
    



    <div>
     <p>Valor em moedas de {cents}: <span> R${total.toFixed(2)} reais</span> </p>
    </div>

    </div>


  )


}