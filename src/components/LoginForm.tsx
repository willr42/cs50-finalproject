import { FormEvent, useContext, useState } from 'react';
import { UserContext } from './UserContext';
import styles from './LoginForm.module.css';

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
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        <p className={styles.paragraphLabel}>Username</p>
        <input
          className={styles.textInput}
          type='text'
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        <p className={styles.paragraphLabel}>Password</p>
        <input
          className={styles.textInput}
          type='password'
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <div>
        <button className={styles.submitButton} type='submit'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Login;
