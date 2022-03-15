import React from 'react';
import { FcGoogle } from 'react-icons/fc';

import { Container } from './styles';

function FormLogin() {
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
        <hr />
        <section>
          <button>
            <FcGoogle /> Entrar com Google
          </button>
        </section>
      </div>

      <div>
        <p>
          Não possui usuario criado?
          <a href="/signup">Crie aqui!</a>
        </p>
      </div>
    </Container>
  );
}

export default FormLogin;
