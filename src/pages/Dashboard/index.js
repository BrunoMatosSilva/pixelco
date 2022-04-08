import React from 'react';
import { Container } from './styles';

function Dashbaord() {
  return (
    <Container>
      <section className="header">
        <h3>Menu-perfil</h3>
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