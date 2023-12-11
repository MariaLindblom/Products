import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState<{name: string; price: string}[]>([]);
  
  useEffect(() => {
    axios.get('http://localhost:5000/products/products')
      .then(response => {
        setProducts(response.data);
        console.log(products);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <h1>Products</h1>
      {products.map(product => <div>{product.name}{ product.price} €</div>)}
    </div>
  );
}

export default App;
