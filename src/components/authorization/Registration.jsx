
import React, {useState} from 'react';
import './authorization.css'
import Input from "../../utils/input/Input";
import {registration} from "../../actions/user";
import Logo from '../../assets/img/cloudy.png';
import {NavLink} from "react-router-dom";

const Registration = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password1, setPassword1] = useState("")

    return (
        <div className='q'>
        <div className='logg'>
                    <img src={Logo} alt="" className="navbarr__logo"/>
                    <div className='You'>Твое облачное хранилище!</div>
                </div>
        <div className='authorization'>
        <div className="authorization__header1">Регистрация</div>
        </div>
            <div className="email1">Введите e-mail</div>
            <div className='Inp3'> <Input value={email} setValue={setEmail} type="text" placeholder="Введите email..."/> </div>
            <div className="pass1">Введите пароль</div>
            <div className='Inp4'><Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..."/> </div>
            <div className="pass2">Повторите пароль</div>
            <div className='Inp5'><Input value={password1} setValue={setPassword1} type="password" placeholder="Повторите пароль..."/> </div>
            <button className="authorization__btn1" onClick={() => registration(email, password, password1)}>Зарегистрироваться</button>
            <div className="regg1"><NavLink to="/login" style={{color: '#F7B538', textDecoration: 'none'}} >Уже есть аккаунт?</NavLink></div>
        </div>
    );
};

export default Registration;