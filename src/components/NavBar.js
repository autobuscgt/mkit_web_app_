import './NavBar.css'
import profile_picture from '../static/profile_pic.svg'
import mkit_logo from '../static/MKIT_LOGO.svg'
import {mkit} from '../utils/links'
import { NavLink } from 'react-router-dom'
import {EVENTS_ROUTE, HOMEPAGE_ROUTE, HOMEWORK_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, SCHEDULE_ROUTE } from '../utils/consts'
import { useContext } from 'react'
import { Context } from '..'

function NavBar() {
    const {user} = useContext(Context)
    return (
      <div className="nav_bar">
        {user.isAuth === true ?       
         <ul className='nav_ul'>
            <a href={mkit}><img src={mkit_logo} alt='mkit_logo' className='mkit_logo'/></a>
            <NavLink to={HOMEPAGE_ROUTE} className={'links_nav'}><li className='nav_ul'>Главная</li></NavLink>
            <NavLink to={HOMEWORK_ROUTE} className={'links_nav'}><li className='nav_ul'>ДЗ</li></NavLink>
            <NavLink to={SCHEDULE_ROUTE} className={'links_nav'}><li className='nav_ul'>Расписание</li></NavLink>
            <NavLink to={EVENTS_ROUTE} className={'links_nav'}><li className='nav_ul'>Мероприятия</li></NavLink>            

            <NavLink to={PROFILE_ROUTE} className={'links_nav'}><img src={profile_picture} alt='profile_photo' className='profile_image'/></NavLink>
        </ul>
        : 
            <ul>
                <NavLink to={LOGIN_ROUTE} className={'links_nav'}><li className='nav_ul'>Авторизация</li></NavLink>
                <NavLink to={HOMEPAGE_ROUTE} className={'links_nav'}><li className='nav_ul'>Главная</li></NavLink>
            </ul>
        }

        
      </div>
    );
  }
  
  export default NavBar;
  