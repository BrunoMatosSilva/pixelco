import React from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { GoSettings } from 'react-icons/go';
import { Container } from './styles';

function Header() {
    return (
        <Container>
            <div>
                <section className="title">
                    <p>Bem-Vindo, <strong>Bruno</strong></p>
                </section>
                <section className="config">
                    <button>Get Business</button>
                    <div><button><IoMdNotificationsOutline /></button></div>
                    <div><button><GoSettings /></button></div>
                    <div><img src="https://github.com/BrunoMatosSilva.png" alt="avatar" /></div>
                </section>
            </div>
        </Container>
    );
}

export default Header;