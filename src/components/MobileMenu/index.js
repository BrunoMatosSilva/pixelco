import React, { useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { BsCart } from 'react-icons/bs';
import { FaRegUser } from 'react-icons/fa';
import { AiOutlinePaperClip } from 'react-icons/ai';
import { FiMessageCircle } from 'react-icons/fi';
import { RiDashboardFill } from 'react-icons/ri';
import { Container } from './styles';

function MobileMenu({ menuIsVisible, setMenuIsVisible }) {
    useEffect(() => {
        document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
    }, [menuIsVisible]);

    return (
        <Container isVisible={menuIsVisible}>
            <IoClose size={45} onClick={() => setMenuIsVisible(false)} />
            <ul>
                <a href="/dashboard"><RiDashboardFill /> Dashboard</a>
                <a href="/dashboard"><BsCart />Orders</a>
                <a href="/dashboard"><FaRegUser />My partner</a>
                <a href="/dashboard"><FiMessageCircle />Messages</a>
                <a href="/dashboard"><AiOutlinePaperClip />Docs</a>
            </ul>
        </Container>
    );
}

export default MobileMenu;