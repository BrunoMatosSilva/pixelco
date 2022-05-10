import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuth } from '../../contexts/AuthContext';
import { theme } from '../../styles/theme';

import { Container } from './styles';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const { forgotPassword } = useAuth()


    async function handleForgotPassword(event) {
        event.preventDefault();

        try {
            await forgotPassword(email)
            toast(("Solicitação recebida, por favor verificar seu e-mail!"), {
                style: {
                    background: theme.backgroundButton,
                    color: theme.text
                }
            })
        } catch (error) {
            console.log(error.message)
            toast.error((error.message), {
                style: {
                    background: theme.backgroundButton,
                    color: theme.text
                }
            })
        }
    }

    return (
        <Container onSubmit={handleForgotPassword}>
            <div>
                <h1>Esqueceu sua senha?</h1>
                <p>Para recuperar por favor preencher com o e-mail que usou como usuario para o login.</p>
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
                <div>
                    <button type="submit">Enviar</button>
                </div>
                <a href="/">Fazer Login!</a>
            </div>
        </Container>
    );
}

export default ForgotPassword;
