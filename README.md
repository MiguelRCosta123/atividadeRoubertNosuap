# Login com React + Vite + Supabase

Aplicação de autenticação com cadastro, login, logout e persistência de sessão usando Supabase.

## Como instalar

```bash
npm install

Como configurar o .env.local
Crie um arquivo .env.local na raiz do projeto com as seguintes variáveis:
VITE_SUPABASE_URL=sua_url_do_supabase
VITE_SUPABASE_PUBLISHABLE_KEY=sua_chave_publicavel

Como executar
npm run dev
A aplicação estará disponível em http://localhost:5173.
Maior dificuldad
A maior dificuldade foi entender como manter a sessão do usuário após atualizar a página, usando getSession e onAuthStateChange do Supabase.
```
