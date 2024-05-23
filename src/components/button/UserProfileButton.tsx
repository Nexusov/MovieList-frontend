import { Link } from 'react-router-dom';
import { useAuthStore } from '../../store/store';
import s from './UserProfileButton.module.scss'

const UserProfileButton: React.FC = () => {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return null;
  }

  return (
    <Link to="/profile" className={s.profileButton}>
      <img src={user.photo} alt={`${user}'s avatar`} className={s.avatar} />
      <span>{user.name}</span>
    </Link>
  );
};

export default UserProfileButton;