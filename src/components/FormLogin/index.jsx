import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useMounted } from '../../hooks/useMounted';
import { theme } from '../../styles/theme';

import { Container } from './styles';

function FormLogin() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const { login, signInWithGoogle } = useAuth();

  const mounted = useMounted();

  async function handleLogin(event) {
    event.preventDefault();

    if (loading) return;

    if (!email.trim() || !password.trim()) {
      toast.error('Preencha todos os campos para criar sua conta!', {
        style: {
          background: theme.backgroundButton,
          color: theme.text
        }
      });
    }
    setLoading(true);
    login(email, password)
      .then((response) => {
        console.log(response)
        history.replace('/Dashboard')
      })
      .catch((error) => {
        console.log(error.message)
        toast.error((error.message), {
          style: {
            background: theme.backgroundButton,
            color: theme.text
          }
        });
      }).finally(() => mounted.current && setLoading(false));
  }

  async function loginWithGoogle(email, password) {
    const result = await signInWithGoogle();

    if (result.user) {
      history.replace('/Dashboard')
    }
  }

  return (
    <Container>
      <div>
        <h1>Faça seu login!</h1>
        <span>Para acessar o sistema basta seguir um dos dois caminhos a seguir.</span>
        <section>
          <input
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)}
            type="text"
            className="email"
            placeholder="Email"
          />
        </section>
        <section>
          <input
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)}
            type="password"
            className="password"
            placeholder="Senha"
          />
        </section>
        <div>
          <button disabled={loading} type="submit" onClick={handleLogin}>Entrar</button>
        </div>
        <p><a href="/ForgotPassword">Esqueceu a senha?</a></p>
        <hr />
        <section>
          <button onClick={loginWithGoogle}>
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
