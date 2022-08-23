import { FormEvent, useContext, useState } from 'react';
import { UserContext } from './UserContext';

type Credentials = {
  email: string | undefined;
  password: string | undefined;
};

async function handleLogin(credentials: Credentials) {
  return fetch(`${process.env.REACT_APP_SERVER_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
    credentials: 'include',
  }).then((data) => data.json());
}

const Login = () => {
  let ctx = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await handleLogin({ email, password });
    ctx.setIsLoggedIn(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Username</p>
        <input type='text' onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        <p>Password</p>
        <input type='password' onChange={(e) => setPassword(e.target.value)} />
      </label>
      <div>
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
};

export default Login;
