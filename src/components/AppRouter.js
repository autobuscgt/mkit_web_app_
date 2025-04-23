import {Routes,Route, Navigate} from 'react-router'
import { authRoutes, publicRoutes,  } from '../routes';
import { HOMEPAGE_ROUTE } from '../utils/consts';
import { useContext } from 'react';
import { Context } from '..';
function AppRouter() {

  const {user} = useContext(Context)
  console.log(user)
    return (
      <Routes>
        {user.isAuth === true && authRoutes.map(({path,Component})=>
        <Route key={path} path={path} Component={Component} exact/>
        )}
        {user.isAuth === true && publicRoutes.map(({path,Component})=>
        <Route key={path} path={path} Component={Component} exact/>
        )}
        <Route path='*' element={<Navigate to={HOMEPAGE_ROUTE} replace/>}/>
      </Routes>
    );
  }
  
  export default AppRouter;
  