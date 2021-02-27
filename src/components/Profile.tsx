import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/gabemanfroi.png" alt="Gabriel Manfroi" />
            <div>
                <strong>Gabriel Manfroi</strong>
                <p>
                    <img src="icons/level.svg" alt="" />
                    Level {level}

                </p>
            </div>
        </div>
    );
}