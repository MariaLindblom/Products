import styled from 'styled-components';

export const H1 = styled.h1`
text-align: center;`

export const StyledGrid = styled.div`
padding: 25px 10px;`

export const StyledDiv = styled.div`
border: 1px solid hsl(0, 0%, 70%);
border-radius: 10px;
padding: 20px;
margin: 10px;
text-align: center;
max-width: 250px;
display: inline-block;`

export const H5 = styled.h5`
padding: 8px;`

export const StyledNavBar = styled.nav`
background: #282c34;`

export const StyledUl = styled.ul`
display: flex;
justify-content: space-evenly;
padding: 1em 0;
list-style-type: none;
a {
    color: #fff;
    text-decoration: none;
    &:hover{
        text-decoration: underline;
        text-decoration-color: white;
    };
}`

export const StyledSection = styled.section`
background: #fff;
`

export const StyledLogIn = styled.form`
border: 1px solid hsl(0, 0%, 70%);
border-radius: 10px;
padding: 20px;
margin: 10px;
text-align: center;
max-width: 250px;
display: inline-block;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
height: 200px;
width: 300px;`

export const StyledLoginButton = styled.button`
border: none;
background: #669999;
padding: 12px 24px;
margin: 8px;
font-size: 24px;
border-radius: 8px;
cursor: pointer;`