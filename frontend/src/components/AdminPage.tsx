import { H1, StyledDiv }  from '../Styles';
import { useState } from 'react';
import axios from 'axios';

//this is a work in progress, doesn't create new posts

const AdminPage = () => {
    type Inputs = { product: string, price: number }
    const [inputs, setInputs] = useState<Inputs>({ product: "", price: 0 });

    const handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
    setInputs((values: any) => ({...values, [name]: value}))
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const productData = {
        product: inputs.product,
        price: inputs.price
    };
    axios.post('http://localhost:5000/products/create', productData).then((response) => {
        console.log(response.status, response.data);
    });
  };

  return (
    <>
    <H1>Welcome to the admin page!</H1>
    <StyledDiv onSubmit={handleSubmit}>
    <H1>Make a new product</H1>
        <input type='text' name='product' required
            placeholder='Products name'
            value={inputs.product || ""}
            onChange={handleChange}
        />
        <input type='number' name='price' required
            placeholder='Price' 
            value={inputs.price || ""}
            onChange={handleChange}
        />
        <input type='submit' />
    </StyledDiv>
        </>
    );
};

export default AdminPage;