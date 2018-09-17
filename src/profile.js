import { gql } from 'apollo-boost';
import React from 'react';
import { Query } from 'react-apollo';

const GET_USER = gql `
    {
        getUser {
            email
            username
        }
    }
`;

const Profile = () => (
    <Query query={GET_USER}>
        {({ loading, error, data }) => {
            if (loading) return null
            if (error) return `Error!: ${error}`
            
            return (
                <div>
                    <h1>{data.getUser.username}</h1>
                    <h2>{data.getUser.email}</h2>
                </div>
            )
        }}
    </Query>
);

export default Profile;