import React from 'react';
import './App.css';

function Experience(){
    return(
        <section id="parent-experience">
             <h1 className="titre-experience" id="linkexperience" >EXPÉRIENCE</h1>
            <article className="content-experience">
                <article className="content-cesi">
                    <div className="cesi">
                        <p className="c">C</p>
                    </div>
                    <hr className="reliant"></hr>
                    <div className="info-be">
                        <h2 className="nom-ecole" >Stage chez BE CONCEPT</h2>
                        <h3 className="ville-ecole">La Trinité (06340)</h3>
                        <h4 className="date">18 Mai - 31 Juillet 2020</h4>
                        <h4 className="information">Conception de site web</h4>
                    </div>
                    <hr className="reliant2"></hr>
                </article>
                <article className="content-cesi">
                    <div className="cesi">
                        <p className="c">C</p>
                    </div>
                    <hr className="reliant3"></hr>
                    <div className="info-compta">
                        <h2 className="nom-ecole">Stage de Comptabilité</h2>
                        <h3 className="ville-ecole">Saint-Maximin (83470)</h3>
                        <h4 className="date">Mars 2016</h4>
                        <h4 className="information">Gestion de 2 années de Comptabilité</h4>
                    </div>
                    <hr className="reliant4"></hr>
                    <hr className="reliant7"></hr>
                    
                </article>
            </article>
        </section>

    );
}
export default Experience;