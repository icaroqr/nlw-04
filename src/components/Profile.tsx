import { useChallenges } from '../hooks/useChallenges';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useChallenges();

  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/12833389?s=460&u=2b81174a22a98a394f6cf27fac87b2746bc4b812&v=4" alt="Icaro Rezende"/>
            <div>
                <strong>Icaro Rezende</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}