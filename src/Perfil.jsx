import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from './supabaseClient';

function Perfil() {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        alert('Acesso negado! Faça login primeiro.');
        navigate('/');
      }
    });
  }, [navigate]);

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate('/');
  }

  async function mostrarSessao() {
    const { data } = await supabase.auth.getSession();
    console.log(data.session);
  }

  return (
    <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'Arial' }}>
      <h1 style={{ color: '#28a745' }}>Área Restrita - Perfil 🔒</h1>
      <p style={{ fontSize: '18px', color: '#555' }}>
        Parabéns! Você está na área protegida.
      </p>
      <button onClick={mostrarSessao}>Ver sessão no console</button>
      <br />
      <br />
      <button
        onClick={handleLogout}
        style={{
          background: '#dc3545',
          color: 'white',
          padding: '12px 24px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Sair do Sistema (Logout)
      </button>
    </div>
  );
}

export default Perfil;
