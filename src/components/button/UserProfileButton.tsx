import { Link } from 'react-router-dom';
import { useAuthStore } from '../../store/store';
import s from './UserProfileButton.module.scss'

const UserProfileButton: React.FC = () => {
  const user = useAuthStore((state) => state.user);
  const defaultAvatarURL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png'

  if (!user) {
    return null;
  }

  return (
    <Link to="/profile" className={s.profileButton}>
      <img src={user.photo ?? defaultAvatarURL} alt={`${user}'s avatar`} className={s.avatar} />
      <span>{user.name ?? 'Your Name'}</span>
    </Link>
  );
};

export default UserProfileButton;