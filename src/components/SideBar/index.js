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
                    <li><a href="/dashboard"><FiMessageCircle />Messages <span>3</span></a></li>
                    <li><a href="/dashboard"><AiOutlinePaperClip />Docs</a></li>
                </ul>
            </section>
            <div className="cardBusiness">
                <img src="/img/business.png" alt="business" />
                <section>
                    <h3>Updgrade to Meetings</h3>
                    <p>Get unlimet fuctions upgrading to Business now</p>
                    <button>Upgrade</button>
                </section>
            </div>
        </Container>
    );
}

export default SideBar;