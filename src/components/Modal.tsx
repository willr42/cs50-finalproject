import { useEffect } from 'react';
import styles from './Modal.module.css';

type Props = {
  onClick: React.MouseEventHandler;
  children?: React.ReactNode;
};

const Modal: React.FunctionComponent<Props> = ({ onClick, children }) => {
  const closeOnDetail = (event: any) => {
    onClick(event);
  };
  useEffect(() => {
    const keyListener = (event: any) => {
      console.log(event);
      if (event.code === 'Escape') {
        closeOnDetail(event);
      }
    };

    document.addEventListener('keydown', keyListener);
    // cleanup
    return () => {
      document.removeEventListener('keydown', keyListener);
    };
  });
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        {children}
        <button className={styles.closeModalButton} onClick={onClick}>
          <span aria-hidden='true'>&times;</span>
        </button>
      </div>
    </div>
  );
};

export default Modal;
