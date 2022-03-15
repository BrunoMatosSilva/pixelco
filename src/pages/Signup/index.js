import React from 'react';

import { Container } from './styles';

function Signup() {

  return (
    <Container>
      <div>
        <h1>Faça seu login!</h1>
        <p>Para acessar o sistema basta seguir um dos dois caminhos a seguir.</p>
        <section>
          <input type="text" className="email" placeholder="Email" />
        </section>
        <section>
          <input type="password" className="password" placeholder="Senha" />
        </section>
        <div>
          <button type="submit">Entrar</button>
        </div>
      </div>
    </Container>
  );
}

export default Signup;
