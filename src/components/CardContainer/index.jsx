import React, {useContext} from 'react';
import "./Container.css"

function ContainerCart(props) {
  
  return (
    <div className='cart-1 container'>
      <h2 style={{marginRight: "800px", fontWeight: "700", fontSize: "30px"}}>Учащиеся смотрят</h2> 
      {props.children}
    </div>
  );
}

export default ContainerCart;
