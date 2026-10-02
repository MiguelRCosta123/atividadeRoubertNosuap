import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import Login from './Login';
import SignUp from './SignUp';
import PrivateArea from './PrivateArea';

function App() {
  const [session, setSession] = useState(null);
  const [mostrarCadastro, setMostrarCadastro] = useState(false);

  useEffect(() => {
    // Pega a sessão atual ao carregar a página
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Observa mudanças de login/logout
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Se estiver logado → mostra a Área Privada
  if (session) {
    return <PrivateArea user={session.user} />;
  }

  // Se não estiver logado → mostra Login ou Cadastro
  return (
    <div>
      {mostrarCadastro ? (
        <>
          <SignUp />
          <p style={{ textAlign: 'center' }}>
            Já tem conta?{' '}
            <button onClick={() => setMostrarCadastro(false)}>
              Fazer Login
            </button>
          </p>
        </>
      ) : (
        <>
          <Login />
          <p style={{ textAlign: 'center' }}>
            Não tem conta?{' '}
            <button onClick={() => setMostrarCadastro(true)}>
              Criar Conta
            </button>
          </p>
        </>
      )}
    </div>
  );
}

export default App;
