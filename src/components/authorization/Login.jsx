import React, {useState} from 'react';
import './authorization.css'
import Input from "../../utils/input/Input";
import {useDispatch} from "react-redux";
import {login} from "../../actions/user";
import {NavLink} from "react-router-dom";
import Logo from '../../assets/img/cloudy.png'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    return (
        <div className='q'>
                <div className='logg'>
                    <img src={Logo} alt="" className="navbarr__logo"/>
                    <div className='You'>Твое облачное хранилище!</div>
                </div>
                
                <div className='authorization'> <div className="authorization__header">Авторизация</div></div>
                    <div className="email">Введите e-mail</div>
                    <div className='Inp'><Input value={email} setValue={setEmail} type="text"/></div>
                    <div className="pass">Введите пароль</div>
                    <div className='Inp2'><Input value={password} setValue={setPassword} type="password" autocomplete="off"/></div>
                    <button className="authorization__btn" onClick={() => dispatch(login(email, password))}>Вход</button>
                    <div className="regg"><NavLink to="/registration" style={{color: '#F7B538', textDecoration: 'none'}} >Еще нет аккаунта?</NavLink></div>
                    </div>

    );
};

export default Login;