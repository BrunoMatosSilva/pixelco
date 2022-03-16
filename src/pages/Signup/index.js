import React, { useRef } from 'react';
import { signup } from '../../services/firebase';

import { Container } from './styles';

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignup() {
    await signup(emailRef.current.value, passwordRef.current.value);
  }

  return (
    <Container>
      <div>
        <h1>Faça seu login!</h1>
        <p>Para acessar o sistema basta seguir um dos dois caminhos a seguir.</p>
        <section>
          <input type="text" ref={emailRef} className="email" placeholder="Email" />
        </section>
        <section>
          <input type="password" ref={passwordRef} className="password" placeholder="Senha" />
        </section>
        <div>
          <button type="submit" onClick={handleSignup}>Entrar</button>
        </div>
      </div>
    </Container>
  );
}

export default Signup;
