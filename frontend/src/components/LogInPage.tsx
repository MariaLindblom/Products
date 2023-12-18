import { H1, StyledLogIn }  from '../Styles';
import { useState } from 'react';

//this is a work in progress, but is supposed to direct to the adminpage after a successful login

const LogInPage = () => {
    type Inputs = { username: string, password: string }
    const [inputs, setInputs] = useState<Inputs>({ username: "", password: "" });

    const handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
    setInputs((values: any) => ({...values, [name]: value}))
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(inputs);
  };
  
  return (
    <>
    <StyledLogIn onSubmit={handleSubmit}>
    <H1>Log In</H1>
        <input type='text' name='username' required
            placeholder='Username'
            value={inputs.username || ""}
            onChange={handleChange}
        />
        <input type='password' name='password' required
            placeholder='Password' 
            value={inputs.password || ""}
            onChange={handleChange}
        />
        <input type='submit' value="Log In" />
    </StyledLogIn>
        </>
    );
};

export default LogInPage;