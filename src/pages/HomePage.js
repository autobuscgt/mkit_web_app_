import homework from '../static/homepage/homework.svg'
import events from '../static/homepage/events.svg'
import main_web_site from '../static/homepage/main_web_site.svg'
import schedule from '../static/homepage/schedule.svg'
import { NavLink } from 'react-router-dom';
import { EVENTS_ROUTE, HOMEWORK_ROUTE, SCHEDULE_ROUTE } from '../utils/consts';
import { mkit } from '../utils/links';
import { observer } from "mobx-react-lite";
import { useContext } from 'react';
import {Context} from '..'

const HomePage = observer(()=> {
  const {user} = useContext(Context)
    return (
      <div className='main_container'>
        <div className='main_logos'>
          <div className='centered'>
          <table className='main_table'>
            <tbody className='main_table'>
              {user.isAuth &&(
            <tr>
            <td><NavLink to={HOMEWORK_ROUTE}>
            <img src={homework} alt='pzls_logo'/>
              </NavLink></td>
            <td>
              <NavLink to={SCHEDULE_ROUTE}>
              <img src={schedule} alt='pzls_logo'/>
              </NavLink>
              </td>

          </tr>
              )}

            <tr>
            <td>
                <NavLink to={EVENTS_ROUTE}>
                <img src={events} alt='pzls_logo'/>
                </NavLink>
                </td>
              <td>
                <NavLink to={mkit}><img src={main_web_site} alt='pzls_logo'/></NavLink>
                </td>
            </tr>
            </tbody>
          </table>
          
          </div>

          <p className='description'>
          Твой надежный помощник в мире учебы. Мы создали этот сервис, чтобы помочь студентам:<br/>
          ✅ Быстро получать доступ к расписанию<br/>
          ✅ Удобно отслеживать домашние задания<br/>
          ✅ Находить материалы для подготовки<br/>
          ✅ Общаться с одногруппниками<br/>
          Здесь всё, что нужно для комфортной учебы — без лишней сложности.<br/>
          Начни использовать MKIT_WEB_APP прямо сейчас и почувствуй разницу! 🚀<br/>
          Учись умнее, а не сложнее.
        </p>
        </div>



      </div>
      
    );
  })
  
  export default HomePage;
  