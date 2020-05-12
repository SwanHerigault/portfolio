import React from 'react';
import './App.css';
import fontswan from './Screenshot_24.png';

function Header(){
    return(
        <section id="parent-header">
            <div>
                <img src= {fontswan} className = 'image1'/>
            </div>
            <div className="bgbg">
            </div>
        </section>
    );
}
export default Header;
