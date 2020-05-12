import React from 'react';
import './App.css';

function Card(){
return(
    <div id= "profil" className="profil">
        <div className="profile-profil">
            <img className="profile" src="./swan.png"/>
        </div>

        <div className="card-content">
            <div className="info-headings">
                <h4 className="text-uppercase-left">Herigault Swan</h4>
                <h6 className="text-capitalize-left">(Développeur Front-End)</h6>
            </div>
            <div className="infos">
                <ul className="profile-list">
                    <li className="clearfix">
                        <span className="title"><i className="material-icons"></i></span>
                        <span className="content">swan.herigault@gmail.com</span>
                    </li>
                    <li className="clearfix1">
                        <span className="title"><i className="material-icons"></i></span>
                        <span className="content">07 62 53 97 69</span>
                    </li>
                    <li className="clearfix2">
                        <span className="title"><i className="material-icons"></i></span>
                        <span className="content">Valbonne (06560)</span>
                    </li>

                </ul>
            </div>
        </div>
    </div>
);
}
export default Card;