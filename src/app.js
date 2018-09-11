import React from 'react';
import Profile from './profile';
import Login from './login';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }

        // root methods
        this.storeJWT = this.storeJWT.bind(this);
        this.deleteJWT = this.deleteJWT.bind(this);
    }

    storeJWT(authToken) {
        localStorage.setItem('authToken', authToken);
    }

    deleteJWT(authToken) {
        localStorage.removeItem('authToken');
    }

    render() {
        return (
            <div>
                <Profile />
                <Login saveAuthToken={this.storeJWT}/>
            </div>
        )
    }

}

export default App;