# Products / work in progress
Website for viewing and rating products. Products can be given star reviews (1-5 stars). Log in to modify, add and delete products.

## Backend:
- NestJS
- MongoDB & Mongoose

## Frontend:
- React
- Styled Components


> [!NOTE]
> Both backend and frontend use TypeScript.

## Dependencies

### Backend:
- nestjs/common: "10.0.0",
- nestjs/core: "10.0.0",
- nestjs/mongoose: "10.0.2",
- mongodb: "6.3.0",

From the file products/backend/package.json

### Frontend:
- axios: "1.6.2",
- react: "18.2.0",
- react-dom: "18.2.0",
- react-router-dom: "6.20.1",
- styled-components: "6.1.1"

From the file products/frontend/package.json

## Running the project locally
I had two Git Bash applications running at the same time. You can choose whatever command-line tool you'd like and do the following commands:

In products/backend folder:
```
npm start run
```

In products/frontend folder:
```
npm start
```

> [!WARNING]
> The project isn't finished and there is a lot of components that do not work yet

## Testing the API
I tested the API using postman. See examples below.

### Getting all the products:
![postman testing](photos/postmantest.png?raw=true)

### Updating a product's price:
![another postman test](photos/postmantest2.png?raw=true)

## After thoughts & what I learned

I have used NestJS and TypeScript before, so this time I felt good with the backend. I used MongoDB for the first time and it went alright.

The frontend used more time as React wasn't that familiar, but I quickly got how styled components work, which I liked using. 
I could have planned better on what to do, since at the end especially I was rushing to get things done, instead of focusing on one thing at a time.

## What the project is missing
- Log In and routing to the adminpage after a successful login
- Middleware
- Review stars and a product's overall rating and a comment about it
- Storing the product's price as cents and returning the value to user as euros