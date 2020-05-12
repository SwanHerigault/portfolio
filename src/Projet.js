import React from 'react';
import './App.css';

function Projet(){
    return(
        <section id="parent-projet">
             <h1 className="titre-projet" id="linkprojet">PROJETS</h1>
            <article className="canne-bdd">
                <div className="canne">
                    <a href="https://drive.google.com/file/d/1VYhZOro65yhNzcTRWuq0-n665kmOIRxL/view?usp=sharing" target="_blank">
                        <img className="image-canne" src="./canne.png"/>
                    </a>
                    <a href="https://prezi.com/view/UzDUaAmrdVpxfNr4PHkC/" target="_blank">
                        <img className="image-bdd" src="./bdd.png"/>
                    </a>
                </div>
                <div className="web">
                    <a href="https://github.com/SwanHerigault/bdeNiceWebSite" target="_blank">
                        <img className="image-web" src="./web.jpg"/>
                    </a>
                    <a href="" target="_blank">
                        <img className="image-veille" src="./veille.png"/>
                    </a>
                </div>
                

            </article>
        </section>
    );
}
export default Projet;