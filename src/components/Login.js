import React from 'react';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';


const LOGIN = gql`
    mutation LogIn($email: String!, $password: String!) {
        login(email: $email, password: $password) 
    }
`;

const Login = ({ saveAuthToken }) => {
    let email = React.createRef();
    let password = React.createRef();

    return (
      <Mutation mutation={LOGIN}>
        {(login, { loading, error, data }) => (
            <div>
                <form 
                  onSubmit={ e => {
                    e.preventDefault();
                    login({ variables: {
                        email: email.current.value,
                        password: password.current.value
                    }}).then((data) => {
                      saveAuthToken(data.data.login);
                    })
                  }}
                >
                  <input
                    type="text"
                    placeholder="email"
                    ref={email}
                  />
                  <input
                    type="text"
                    placeholder="password"
                    ref={password}
                  />
                  <button type="submit">Login</button>
                </form>
                {loading && <p>Loading...</p>}
                {error && <p>Error :( Please try again</p>}
            </div>
        )}
      </Mutation>
  );
};

export default Login;