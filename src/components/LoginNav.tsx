import { useState } from 'react';
import LoginForm from './LoginForm';
import styles from './LoginNav.module.css';

const LoginNav = () => {
  function handleCloseClick() {
    if (startLogin) {
      setStartLogin((prev) => !prev);
    }
    if (startRegister) {
      setStartRegister((prev) => !prev);
    }
  }

  const [startRegister, setStartRegister] = useState(false);
  const [startLogin, setStartLogin] = useState(false);
  return (
    <>
      <div className={styles.navGrid}>
        {startRegister ? (
          <LoginForm formTitle='Register' register={true} />
        ) : (
          <div className={styles.placeholder}></div>
        )}
        {startLogin ? <LoginForm formTitle='Login' register={false} /> : <></>}
        {startRegister || startLogin ? (
          <button className={styles.closeButton} onClick={handleCloseClick}>
            Close
          </button>
        ) : (
          <>
            <button
              className={styles.blockButtonRegister}
              onClick={() => setStartRegister((prev) => !prev)}
            >
              Register
            </button>
            <button
              className={styles.blockButtonLogin}
              onClick={() => setStartLogin((prev) => !prev)}
            >
              Login
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default LoginNav;
