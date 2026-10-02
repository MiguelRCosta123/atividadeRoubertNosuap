import { useState } from 'react';
import { supabase } from './supabaseClient';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensagem, setMensagem] = useState('');

  async function handleLogin(e) {
    e.preventDefault();
    setMensagem('Verificando login...');

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      setMensagem(error.message);
    } else {
      setMensagem('Login realizado com sucesso!');
    }
  }

  return (
    <div
      style={{
        width: '350px',
        margin: '100px auto',
        padding: '25px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        backgroundColor: 'white',
      }}
    >
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            display: 'block',
            marginBottom: '10px',
            padding: '8px',
            width: '100%',
            boxSizing: 'border-box',
          }}
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            display: 'block',
            marginBottom: '10px',
            padding: '8px',
            width: '100%',
            boxSizing: 'border-box',
          }}
        />

        <button type="submit">Entrar</button>
      </form>

      <p>{mensagem}</p>
    </div>
  );
}

export default Login;
