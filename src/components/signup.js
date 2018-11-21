import React from 'react';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';

const SIGNUP = gql`
    mutation SignUp($username: String!, $email: String!, $password: String!) {
        signup(username: $username, email: $email, password: $password)
    }
`;

const Signup = ({ saveAuthToken }) => {
    let email = React.createRef();
    let password = React.createRef();
    let username = React.createRef();

    return (
        <Mutation mutation={SIGNUP}>
            {(signup, { loading, error, data }) => (
                <div>
                    <form
                        onSubmit={ e => {
                            e.preventDefault();
                            signup({ variables: {
                                username: username.current.value,
                                email: email.current.value,
                                password: password.current.value
                            }}).then((data) => {
                                saveAuthToken(data.data.signup);
                            });
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
                        <input
                            type="text"
                            placeholder="username"
                            ref={username}
                        />
                        <button type="submit">Signup</button>
                    </form>
                    {loading && <p>Loading...</p>}
                    {error && <p>Error....try again</p>}
                </div>
            )}
        </Mutation>
    );
};

export default Signup;