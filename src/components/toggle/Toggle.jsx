import React from 'react';
import "./toggle.css";
import LightModeIcon from '@mui/icons-material/LightMode';
import { DarkMode } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Toggle = () => {
    const mode = useSelector((item) => item.darkMode)
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch({type: "TOGGLE"})
    }
    return (
        <div onClick={handleClick} className="t">
            <DarkMode  color="secondary"/>
            <LightModeIcon color="warning" />
            <div className="t-button" style={{ left: mode && "25px" }} onClick={handleClick}></div>
        </div>
    )
}

export default Toggle
