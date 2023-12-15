import { useEffect, useState } from 'react';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState<{name: string; price: number}[]>([]);
  
  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then(response => {
        setProducts(response.data);
        console.log(products);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <>
    <h1>Products</h1>
    <div className='products-grid'>
      <div className='products'>
        {products.map(product =>
        <>
        <div>
        <h3>{product.name}</h3>
        <h5>Price: {product.price} €</h5>
        <p>Overall rating: _ stars</p>
        </div>
        </>)}
    </div>
    </div>
    </>
  );
}

export default Products;