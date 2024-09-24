import { defaultAvatarURL } from "../../components/button/UserProfileButton";
import LayoutTemplate from "../../components/layout_template/LayoutTemplate"
import { useAuthStore } from "../../store/store";
import s from './Profile.module.scss'

const Profile = () => {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return null;
  }

  return (
    <LayoutTemplate section="User Profile">
      <div className={s.container}>
        <div className={s.userInfoContainer}>
          <img className={s.userPhoto} src={user.photo ?? defaultAvatarURL} alt={`${user.name}'s photo`} />
          <div className={s.userTextContainer}>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
          </div>
        </div>
      </div>
    </LayoutTemplate>
  )
}

export default Profile

//! TODO: make user info changing (photo, email, pass)