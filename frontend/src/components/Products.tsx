import { useEffect, useState } from 'react';
import axios from 'axios';
import { StyledGrid, H1, StyledDiv, H5 } from '../Styles';


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
    <H1>Products</H1>
    <StyledGrid>
        {products.map(product =>
        <>
        <StyledDiv>
        <h3>{product.name}</h3>
        <H5>Price: {product.price} €</H5>
        <p>Overall rating: *amount of stars here*</p>
        </StyledDiv>
        </>)}
    </StyledGrid>
    </>
  );
}

export default Products;