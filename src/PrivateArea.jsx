import { supabase } from './supabaseClient';

function PrivateArea({ user }) {
  async function handleLogout() {
    await supabase.auth.signOut();
  }

  return (
    <div
      style={{
        width: '400px',
        margin: '100px auto',
        padding: '25px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        backgroundColor: 'white',
        textAlign: 'center',
      }}
    >
      <h2>Área Privada</h2>
      <p>Você está logado como:</p>
      <p>
        <strong>{user?.email}</strong>
      </p>

      <button onClick={handleLogout} style={{ marginTop: '20px' }}>
        Sair
      </button>
    </div>
  );
}

export default PrivateArea;
