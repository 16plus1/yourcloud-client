// Импорт необходимых компонентов
import React, {useEffect} from 'react';
import Navbar from "./navbar/Navbar";
import './app.css'
import {BrowserRouter, Route} from "react-router-dom";
import Registration from "./authorization/Registration";
import Login from "./authorization/Login";
import {useDispatch, useSelector } from 'react-redux';
import {auth} from "../actions/user";
import Disk from "./disk/Disk";
import Logo4 from '../assets/img/cloudy.png';
import Profile from "./profile/Profile";


function App() {
    const isAuth = useSelector(state => state.user.isAuth) // функция для проверки прохождения пользователем авторизации
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(auth())
    }, [dispatch])

  return (
    <BrowserRouter>
    <div className='app'>
        <Navbar/>  
        
        <div className="wrap">
            {!isAuth ?
                 <div>
                 <Route path="/registration" component={Registration}/>
                 <Route path="/login" component={Login}/>
                 </div>
                :
            /* Если пользователь авторизован на экран выводится страница хранилища  */
                
                <div><Route  path="/" component={Disk}/>
                <Route exact path="/profile" component={Profile}/>
                <div className='foni'> 
                    </div></div>
                
            }
            
        </div>
        {/* <img src={Logo4} alt="" className="navbarr__logo5"/> */}
    </div>
</BrowserRouter>
  );
}

export default App;