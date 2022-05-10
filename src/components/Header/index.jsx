import React, { useState } from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { ImExit } from 'react-icons/im';
import { RiMenu3Fill } from 'react-icons/ri';
import { Container } from './styles';
import MobileMenu from '../MobileMenu';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

function Header() {
    const history = useHistory();
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const { logout, currentUser } = useAuth();

    function handleLogout(event) {
        event.preventDefault();

        logout();
        history.replace('/');
    }

    return (
        <Container>
            <MobileMenu menuIsVisible={menuIsOpen} setMenuIsVisible={setMenuIsOpen} />
            <div>
                <div className="logoMobile">
                    <a href="/"><img src="/img/logo.png" alt="Logo" /></a>
                </div>
                <section className="title">
                    <p>Good Night, <strong>{currentUser.displayName || currentUser.email}</strong></p>
                </section>
                <section className="config">
                    <button className="business"><AiOutlineStar /><p>Get Business</p></button>
                    <div><button><IoMdNotificationsOutline /></button></div>
                    <div><button onClick={handleLogout}><ImExit /></button></div>
                    <div><img src={currentUser.photoURL || "/img/user.jpg"} alt="avatar" /></div>
                </section>
                <section className="menuMobile">
                    <RiMenu3Fill onClick={() => setMenuIsOpen(true)} className="mobile" />
                </section>
            </div>
        </Container>
    );
}

export default Header;