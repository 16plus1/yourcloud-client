// Импорт необходимых компонентов
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createDir, getFiles, uploadFile} from "../../actions/file";
import FileList from "./fileList/FileList";
import './disk.css'
import Popup from "./Popup";
import Profile from "./Popup";
import {setCurrentDir,  setFileView, setPopupDisplay} from "../../reducers/fileReducer";
import Uploader from "./uploader/Uploader";
import Logo from '../../assets/img/up.png';
import Logo1 from '../../assets/img/icons8.png';
import Logo2 from '../../assets/img/ic.png'

const Disk = () => {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)
    const loader = useSelector(state => state.app.loader)
    const dirStack = useSelector(state => state.files.dirStack)
    const [dragEnter, setDragEnter] = useState(false)
    const [sort, setSort] = useState('type')


    useEffect(() => {
        dispatch(getFiles(currentDir, sort))
    }, [currentDir, sort])

    
    function showPopupHandler() {
        dispatch(setPopupDisplay('flex'))
    }

    // Перемещение по диреткориям
    function backClickHandler() {
        const backDirId = dirStack.pop()
        dispatch(setCurrentDir(backDirId))
    }

    //Загрузка  файлов в хранилище
    function fileUploadHandler(event) {
        const files = [...event.target.files]
        files.forEach(file => dispatch(uploadFile(file, currentDir)))
    }

    function dragEnterHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        setDragEnter(true)
    }

    function dragLeaveHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        setDragEnter(false)
    }

    //Удаление файлов и папок
    function dropHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        let files = [...event.dataTransfer.files]
        files.forEach(file => dispatch(uploadFile(file, currentDir)))
        setDragEnter(false)
    }

    //Отображение анимации загрузки
    if(loader) {
        return (
            <div className="loader">
                <div className="lds-dual-ring"></div>
            </div>
        )
    }
    //отображение файлов в корневом каталоге
    return ( !dragEnter ?
        <div className='disk2'>
            <div className="disk" onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
                <div className='disk1'>
                <div className="disk__btns">
                    <button className="disk__back" onClick={() => backClickHandler()}><img src={Logo} alt="" className="navbarr__logo1"/></button> 
                    
                    <button className="disk__create" onClick={() => showPopupHandler()}>Создать папку</button>
                    <div className="disk__upload">
                        
                        <label htmlFor="disk__upload-input" className="disk__upload-label">Загрузить файл</label>
                        <input multiple={true} onChange={(event)=> fileUploadHandler(event)} type="file" id="disk__upload-input" className="disk__upload-input"/>
                    </div>
                   
                    <select value={sort}
                            onChange={(e) => setSort(e.target.value)}
                            className='disk__select'>
                        <option value="name">По имени</option>
                        <option value="type">По типу</option>
                        <option value="date">По дате</option>
                        
                    </select>
                    
        
                    <button className="disk__plate" onClick={() => dispatch(setFileView('plate'))}><img src={Logo1} alt="" className="navbarr__lo"/></button>
                    <button className="disk__list" onClick={() => dispatch(setFileView('list'))}><img src={Logo2} alt="" className="navbarr__lo"/></button>
                    </div>
                </div>
                <FileList/>
                <Popup/>
                <Profile></Profile>
            </div>
             
             <Uploader/>
             </div>
            :
            // Функция "Тяни - бросай"
            <div className="drop-area" onDrop={dropHandler} onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
                Перенесите файлы сюда
            </div>
    );
};

export default Disk;