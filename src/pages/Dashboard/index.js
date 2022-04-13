import React from 'react';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import { Container } from './styles';

function Dashbaord() {
  return (
    <Container>
      <section className="header">
        <Header />
      </section>
      <section className="sidenav">
        <SideBar />
      </section>
      <section className="main">
        <div>
          <section className="sales">
            <h2>Sales</h2>
          </section>
          <section className="visitors">
            <h2>Visitors</h2>
          </section>
          <section className="statics">
            <h2>Statics</h2>
          </section>
        </div>
      </section>
    </Container>
  );
}

export default Dashbaord;