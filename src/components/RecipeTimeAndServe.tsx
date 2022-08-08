import styles from './RecipeTimeAndServe.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUser } from '@fortawesome/free-regular-svg-icons';

type RecipeTimeProps = {
  time: string;
  serves: string;
};

const RecipeTimeAndServe: React.FunctionComponent<RecipeTimeProps> = ({
  time,
  serves,
}) => {
  return (
    <div className={styles.timeAndServe}>
      <p>
        <FontAwesomeIcon icon={faClock} className={styles.icon} />
        {time}
      </p>
      <p>
        <FontAwesomeIcon icon={faUser} className={styles.icon} />
        {serves}
      </p>
    </div>
  );
};

export default RecipeTimeAndServe;
