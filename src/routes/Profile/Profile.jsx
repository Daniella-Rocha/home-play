import { useContext } from 'react';

import { userDataContext } from '../../contexts/userDataContext';

import { UserFavoritesContext } from '../../contexts/useFavorites';

import styles from './Profile.module.css';

const Profile = () => {

    const data = useContext(userDataContext);

    return (
        <div className={styles.container_profile}>
            <div className={styles.banner}
                style={{ backgroundImage: 'url("https://picsum.photos/1080")' }}
            ></div>
            <div className={styles.profile_info}>
                <div>
                    <img src={'https://picsum.photos/200'} alt="foto de perfil do usuário name" />
                </div>
                <div>
                    <h3>{data.name}</h3>
                    <span>{data.email}</span>
                </div>
            </div>
        </div>
    )
}

export default Profile;
