import React, { useState } from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { ImExit } from 'react-icons/im';
import { RiMenu3Fill } from 'react-icons/ri';
import { Container } from './styles';
import MobileMenu from '../MobileMenu';

function Header() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    return (
        <Container>
            <MobileMenu menuIsVisible={menuIsOpen} setMenuIsVisible={setMenuIsOpen} />
            <div>
                <div className="logoMobile">
                    <img src="/img/logo.png" alt="Logo" />
                </div>
                <section className="title">
                    <p>Good Morning, <strong>Bruno</strong></p>
                </section>
                <section className="config">
                    <button className="business"><AiOutlineStar /><p>Get Business</p></button>
                    <div><button><IoMdNotificationsOutline /></button></div>
                    <div><button><ImExit /></button></div>
                    <div><img src="https://github.com/BrunoMatosSilva.png" alt="avatar" /></div>
                </section>
                <section className="menuMobile">
                    <RiMenu3Fill onClick={() => setMenuIsOpen(true)} className="mobile" />
                </section>
            </div>
        </Container>
    );
}

export default Header;