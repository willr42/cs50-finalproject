import styles from './RecipeTimeAndServe.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUser } from '@fortawesome/free-regular-svg-icons';
import parseMinutes from '../../utils/parseMinutes';

type RecipeTimeProps = {
  time: number;
  serves: string;
};

const RecipeTimeAndServe: React.FunctionComponent<RecipeTimeProps> = ({
  time,
  serves,
}) => {
  const displayTime = parseMinutes(time);

  return (
    <div className={styles.timeAndServe}>
      <p>
        <FontAwesomeIcon icon={faClock} className={styles.icon} />
        {displayTime}
      </p>
      <p>
        <FontAwesomeIcon icon={faUser} className={styles.icon} />
        {serves}
      </p>
    </div>
  );
};

export default RecipeTimeAndServe;
