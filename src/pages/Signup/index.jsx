import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useMounted } from '../../hooks/useMounted';
import { theme } from '../../styles/theme';

import { Container } from './styles';

function Signup() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();

  const mounted = useMounted()

  async function handleSignup(event) {
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
    register(email, password)
      .then((response) => {
        toast(("Usuario criado com sucesso!"), {
          style: {
            background: theme.backgroundButton,
            color: theme.text
          }
        })
        history.replace('/')
      })
      .catch((error) => {
        console.log(error.message)
        toast.error((error.message), {
          style: {
            background: theme.backgroundButton,
            color: theme.text
          }
        });
      }).finally(() => mounted.current && setLoading(false),
        setEmail(''),
        setPassword(''));
  }

  return (
    <Container onSubmit={handleSignup}>
      <div>
        <h1>Crie seu usuario!</h1>
        <p>Para acessar o sistema basta criar seu usuario preenchendo os campos abaixo.</p>
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
          <button disabled={loading} type="submit">Criar</button>
        </div>
      </div>
    </Container>
  );
}

export default Signup;
