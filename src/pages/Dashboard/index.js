import React from 'react';
import Header from '../../components/Header';
import { Container } from './styles';

function Dashbaord() {
  return (
    <Container>
      <section className="header">
        <Header />
      </section>
      <section className="sidenav">
        <h2>Lateral Menu</h2>
      </section>
      <section className="main">
        <h3>Corpo</h3>
      </section>
    </Container>
  );
}

export default Dashbaord;