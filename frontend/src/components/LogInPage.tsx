import { H1, StyledLogIn, StyledSection, StyledLoginButton, StyledGrid, StyledDiv }  from '../Styles';
import { useState } from 'react';

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
    <StyledSection>
    <StyledLogIn onSubmit={handleSubmit}>
    <H1>Log In</H1>
        <input type='text' name='username' 
            placeholder='Username'
            value={inputs.username || ""}
            onChange={handleChange}
        />
        <input type='text' name='password' 
            placeholder='Password' 
            value={inputs.password || ""}
            onChange={handleChange}
        />
        <input type='submit' value="Log In" />
    </StyledLogIn>
    </StyledSection>
        </>
    );
};

export default LogInPage;