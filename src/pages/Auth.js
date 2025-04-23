import { NavLink, useLocation } from 'react-router-dom';
import mkit_logo from '../static/MKIT_LOGO.svg'
import { LOGIN_ROUTE, REGISTER_ROUTE } from '../utils/consts';

function Auth() {


  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
    return (
      <div className="auth_container">
        <ul className="auth_ul">
          <li className="centered">        <img src={mkit_logo} alt='mkit_logo' className='auth_logo'/> </li>
          <li className="auth_ul">{isLogin ? 'Авторизация' : 'Регистрация'}</li>
          <li className="auth_ul">        <input placeholder="Введите логин" ></input> </li>
          <li className="auth_ul">        <input placeholder="Введите пароль" type='password'></input> </li>
          <li className="auth_ul">        {isLogin ? <button className='auth_btn'>Войти</button>
                                          :<button className='auth_btn'>Регистрация</button>}
          </li>
          <li className="auth_ul">
          {isLogin ? <NavLink className={'register_btn'} to={REGISTER_ROUTE}>Зарегистрироваться</NavLink>
          :
          <NavLink className={'register_btn'} to={LOGIN_ROUTE}>Войти?</NavLink>
          }
          </li>
        </ul>
      </div>
    );
  }
  
  export default Auth;
  