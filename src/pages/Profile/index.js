import React from 'react';
import Header from '../../components/Header';
import { useAuth } from '../../contexts/AuthContext';
import { Container } from './styles';

function Profile() {
    const { currentUser } = useAuth();

    console.log(currentUser);

    return (
        <Container>
            <div>
                <Header />
            </div>
            <h1>Perfil</h1>
            <p>Login: {currentUser.email}</p>

        </Container>


    );
}

export default Profile;