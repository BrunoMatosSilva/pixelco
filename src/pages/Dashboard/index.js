import React from 'react';
import CardSales from '../../components/CardSales';
import Graphics from '../../components/Graphics';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import Statics from '../../components/Statics';
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
            <div>
              <section>
                <h2>Sales</h2> <span className="buttonDash"> . . </span>
              </section>
              <p className="subtitle">This Mont</p>
              <CardSales />
            </div>
          </section>
          <section className="visitors">
            <div>
              <section>
                <h2>Visitors</h2> <span className="buttonDash"> . . </span>
              </section>
              <p className="subtitle">This Mont</p>
            </div>
            <Graphics />
          </section>
          <section className="statics">
            <div>
              <section>
                <h2>Statics</h2> <span className="buttonDash"> . . </span>
              </section>
              <p className="subtitle">This Mont</p>
            </div>
            <Statics />
          </section>
        </div>
      </section>
    </Container>
  );
}

export default Dashbaord;