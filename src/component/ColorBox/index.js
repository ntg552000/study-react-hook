import React, { useState } from 'react';
import './ColorBox.scss';

ColorBox.propTypes = {
    
};

function getRandomColor(){
    const colors = ['green','red','blue','pink','gray','white'];
    const randomNumber = Math.trunc(Math.random()*5);
    return colors[randomNumber];
}

function ColorBox(props) {
    const [colorBox, setColorBox] = useState(()=>{ 
        return localStorage.getItem('currentColor') || 'pink'
    });
    
    function changeColor(){
        const currentColor = getRandomColor()
        localStorage.setItem('currentColor',currentColor);
        setColorBox(localStorage.getItem('currentColor'));
    }

    return (
        <div 
            className='colorBox' 
            style={{backgroundColor: colorBox}}
            onClick={changeColor}
        >
            <h1 className='clickToChange'>Click to change</h1>
        </div>
    );
}

export default ColorBox;