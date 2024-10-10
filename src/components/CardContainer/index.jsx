import React, {useContext} from 'react';
import "./Container.css"
import Card from '../Card';

function ContainerCart() {
  
  return (
    <div className='cart-1 container'>
      <h1 style={{marginRight: "800px", fontWeight: "700", fontSize: "30px"}}>Учащиеся смотрят</h1> 
      <Card/>
    </div>
  );
}

export default ContainerCart;
