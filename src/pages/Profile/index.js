import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

function Profile() {
    const { currentUser } = useAuth()
    return (
        <>
            <h1>Perfil</h1>
            <p>Login: <b>{JSON.stringify(currentUser, null, 2)}</b> </p>
        </>
    );
}

export default Profile;