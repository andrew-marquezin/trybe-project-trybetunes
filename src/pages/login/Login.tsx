import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../services/userAPI';

function Login() {
  const [nameValue, setNameValue] = useState('');
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNameValue(e.target.value);
    if (nameValue.length >= 2) {
      setDisabledBtn(false);
    } else setDisabledBtn(true);
  }

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
            onChange={ handleChange }
            data-testid="login-name-input"
          />
        </label>
        <button
          disabled={ disabledBtn }
          data-testid="login-submit-button"
        >
          Entrar
        </button>
      </form>
    </>
  );
}

export default Login;
