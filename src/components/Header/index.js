import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { ImExit } from 'react-icons/im';
import { Container } from './styles';

function Header() {
    return (
        <Container>
            <div>
                <section className="title">
                    <p>Bem-Vindo, <strong>Bruno</strong></p>
                </section>
                <section className="config">
                    <button className="business"><AiOutlineStar /><p>Get Business</p></button>
                    <div><button><IoMdNotificationsOutline /></button></div>
                    <div><button><ImExit /></button></div>
                    <div><img src="https://github.com/BrunoMatosSilva.png" alt="avatar" /></div>
                </section>
            </div>
        </Container>
    );
}

export default Header;