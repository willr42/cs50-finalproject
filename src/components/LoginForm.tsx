import { FormEvent, useContext, useState } from 'react';
import { UserContext } from './UserContext';
import styles from './LoginForm.module.css';

type Credentials = {
  email: string | undefined;
  password: string | undefined;
  fullName?: string;
};

type Props = {
  formTitle: string;
  register: boolean;
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
async function handleRegister(credentials: Credentials) {
  return fetch(`${process.env.REACT_APP_SERVER_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
    credentials: 'include',
  }).then((data) => data.json());
}

const Login = (props: Props) => {
  let ctx = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (props.register) {
      await handleRegister({ fullName, email, password });
      const response = await handleLogin({ email, password });
      if (response.isLoggedIn) {
        ctx.setIsLoggedIn(true);
      }
    }
    const response = await handleLogin({ email, password });
    if (response.isLoggedIn) {
      ctx.setIsLoggedIn(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h1>{props.formTitle}</h1>
      {props.register ? (
        <label>
          <p className={styles.paragraphLabel}>Full Name</p>
          <input
            className='textInput'
            type='text'
            onChange={(e) => setFullName(e.target.value)}
          />
        </label>
      ) : (
        <></>
      )}
      <label>
        <p className={styles.paragraphLabel}>Email</p>
        <input
          className='textInput'
          type='email'
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        <p className={styles.paragraphLabel}>Password</p>
        <input
          className='textInput'
          type='password'
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <div>
        <button className='defaultButton' type='submit'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Login;
