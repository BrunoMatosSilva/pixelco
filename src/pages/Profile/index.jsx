import React from 'react';
import SideBar from '../../components/SideBar';
import { Container } from './styles';
import Header from '../../components/Header';
import { useAuth } from '../../contexts/AuthContext';

function Dashbaord() {
    const { currentUser } = useAuth();

    return (
        <Container>
            <section className="header">
                <Header />
            </section>
            <section className="sidenav">
                <SideBar />
            </section>

            <section className="main">
                <p>{currentUser.email}</p>
                <p>{currentUser.email}</p>
                <p>{currentUser.email}</p>
                <p>{currentUser.email}</p>
                <p>{currentUser.email}</p>
                <p>{currentUser.email}</p>
                <p>{currentUser.email}</p>
                <p>{currentUser.email}</p>
            </section>
        </Container>
    );
}

export default Dashbaord;