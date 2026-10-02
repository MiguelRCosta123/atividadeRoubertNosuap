import { useState } from 'react';
import { supabase } from './supabaseClient';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensagem, setMensagem] = useState('');

  async function handleSignUp(e) {
    e.preventDefault();
    setMensagem('Criando conta...');

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      setMensagem(error.message);
    } else {
      setMensagem('Conta criada com sucesso! Verifique seu e-mail.');
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
      <h2>Criar Conta</h2>

      <form onSubmit={handleSignUp}>
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

        <button type="submit">Cadastrar</button>
      </form>

      <p>{mensagem}</p>
    </div>
  );
}

export default SignUp;