import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../services/userAPI';

function Login() {
  const [nameValue, setNameValue] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const save = await createUser({ name: nameValue });
    if (save) setLoading(false);
    navigate('/search');
  }

  if (loading) return <h1>Carregando...</h1>;

  return (
    <>
      <h1>Login Page</h1>
      <form
        onSubmit={ handleSubmit }
      >
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={ nameValue }
            onChange={ ({ target }) => setNameValue(target.value) }
            data-testid="login-name-input"
          />
        </label>
        <button
          disabled={ nameValue.length < 3 }
          data-testid="login-submit-button"
        >
          Entrar
        </button>
      </form>
    </>
  );
}

export default Login;
