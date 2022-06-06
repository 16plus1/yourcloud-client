import React from 'react';
import {useDispatch} from "react-redux";
import {deleteAvatar, uploadAvatar} from "../../actions/user";
import './profile.css';
import {NavLink} from "react-router-dom";

const Profile = () => {
    const dispatch = useDispatch()

    function changeHandler(e) {
        const file = e.target.files[0]
        dispatch(uploadAvatar(file))
    }

    return (
        <div className='cont'>
        <div >
        <a href="#"><button onClick={() => dispatch(deleteAvatar())}>Удалить аватар</button></a>
        <a href="#"> <input accept="image/*" onChange={e => changeHandler(e)} type="file" placeholder="Загрузить аватар"/></a>
        <a href="#"><div className="navbar__registration"><NavLink to="/disk" style={{color: 'black', textDecoration: 'none'}}>Назад</NavLink></div> </a>
        </div>
        </div>
    );
};

export default Profile;