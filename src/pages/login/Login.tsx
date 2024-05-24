import LayoutTemplate from '../../components/layout_template/LayoutTemplate';
import GoogleLoginButton from '../../components/button/GoogleButton';
import AuthForm from '../../components/login_form/AuthForm';
import s from './Login.module.scss';

const Login: React.FC = () => {
  return (
    <LayoutTemplate section="Login page">
      <form className={s.formContainer} onSubmit={(e) => e.preventDefault()}>
        <AuthForm />
        <GoogleLoginButton />
      </form>
    </LayoutTemplate>
  );
};

export default Login;
