import React from 'react';
import { BsCart } from 'react-icons/bs';
import { FaRegUser } from 'react-icons/fa';
import { AiOutlinePaperClip } from 'react-icons/ai';
import { FiMessageCircle } from 'react-icons/fi';
import { RiDashboardFill } from 'react-icons/ri';
import { Container } from './styles';

function SideBar() {
    return (
        <Container>
            <div>
                <img src="/img/logo.png" alt="Logo" /><h2>Pixel Co.</h2>
            </div>
            <section>
                <ul>
                    <li><a href="/dashboard"><RiDashboardFill />Dashbaord</a></li>
                    <li><a href="/dashboard"><BsCart />Orders</a></li>
                    <li><a href="/dashboard"><FaRegUser />My partner</a></li>
                    <li><a href="/dashboard"><FiMessageCircle />Messages</a></li>
                    <li><a href="/dashboard"><AiOutlinePaperClip />Docs</a></li>
                </ul>
            </section>
        </Container>
    );
}

export default SideBar;